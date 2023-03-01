<?php

namespace App\Controllers;

use ErrorException;
use Exception;

use function PHPSTORM_META\type;

class User extends BaseController
{
    protected $usersModel, $produk2Model, $penawarModel;

    public function __construct()
    {
        $this->usersModel = new \App\Models\UsersModel();
        $this->produk2Model = new \App\Models\Produk2Model();
        $this->penawarModel = new \App\Models\PenawarModel();
    }

    public function index()
    {
    }

    public function editP($isAdmin = null)
    {
        $email = $this->request->getPost('email');
        $nama = $this->request->getPost('nama');
        $no_hp = $this->request->getPost('no_hp');
        $imgUpload = $this->request->getFile('imgUpload');
        $passL = $this->request->getPost('passL');
        $passB = $this->request->getPost('passB');
        $tipe = $this->request->getPost('tipe');
        $provinsi = $this->request->getPost('provinsi');
        $kotKab = $this->request->getPost('kotaKab');
        $kecamatan = $this->request->getPost('kecamatan');
        $kelurahan = $this->request->getPost('kelurahan');


        $user = $this->usersModel->where('email', $email)->first();
        if ($user) {
            if ($tipe == 'ada_semua') {
                // Cek password lama
                // Untuk Trial/lomba ini saya tidak menggunakan hash dan verify tapi dengan perbandingan sederhana
                // if (password_verify($passL, $user['password'])) {
                // Dapatkan Data Provinsi
                if ($provinsi == 'false' && $kotKab == 'false' && $kecamatan == 'false' && $kelurahan == 'false') {
                    $provinsi = false;
                    $kotKab = false;
                    $kecamatan = false;
                    $kelurahan = false;
                }
                if ($provinsi && $kotKab && $kecamatan && $kelurahan) {
                    $path = ROOTPATH . 'public/json/api_daerah_indonesia/api/provinces.json';
                    $dataProv = file_get_contents($path);

                    $dataProv = json_decode($dataProv);

                    $cek1 = false;
                    foreach ($dataProv as $d) {
                        if (password_verify($d->id, $provinsi)) {
                            $cek1 = true;
                            $provinsi = ['id' => $d->id, 'name' => $d->name];
                            break;
                        }
                    }


                    if ($cek1) {
                        $path = ROOTPATH . "public/json/api_daerah_indonesia/api/regencies/" . $provinsi['id'] . ".json";
                        $dataKotKab = file_get_contents($path);

                        $dataKotKab = json_decode($dataKotKab);

                        $cek2 = false;
                        $kotKabId = explode('\^23^^1/', $kotKab)[0];
                        foreach ($dataKotKab as $d) {
                            if (password_verify($d->id, $kotKabId)) {
                                $cek2 = true;
                                $kotKabId = $d->id;
                                $kotKab = $d->name;
                                break;
                            }
                        }


                        if ($cek2) {
                            $path = ROOTPATH . "public/json/api_daerah_indonesia/api/districts/" . $kotKabId . ".json";
                            $dataKec = file_get_contents($path);

                            $dataKec = json_decode($dataKec);

                            $cek3 = false;
                            $kecId = explode('\^411^^1/', $kecamatan)[0];
                            foreach ($dataKec as $d) {
                                if (password_verify($d->id, $kecId)) {
                                    $cek3 = true;
                                    $kecId = $d->id;
                                    $kecamatan = $d->name;
                                    break;
                                }
                            }

                            if ($cek3) {

                                $path = ROOTPATH . "public/json/api_daerah_indonesia/api/villages/" . $kecId . ".json";
                                $dataKel = file_get_contents($path);

                                $dataKel = json_decode($dataKel);

                                $cek4 = false;
                                $kecId = explode('\^411^^1/', $kelurahan)[0];
                                foreach ($dataKel as $d) {
                                    if (password_verify($d->id, $kecId)) {
                                        $cek4 = true;
                                        $kelurahan = $d->name;
                                        break;
                                    }
                                }

                                if ($cek4) {
                                    if ($passL  == $user['password']) {
                                        $namaGambarBaru = uniqid() . $imgUpload->getRandomName();
                                        if ($imgUpload->move(ROOTPATH . 'public/img/upload/', $namaGambarBaru)) {
                                            $data = [
                                                'id' => $user['id'],
                                                'username' => $nama,
                                                'password' => $passB,
                                                'no_hp' => $no_hp,
                                                'img' => $namaGambarBaru,
                                                'asal' => $provinsi['name'] . '***' . $kotKab . '***' . $kecamatan . '***' . $kelurahan,
                                                'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                                            ];
                                            if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                                                $path = ROOTPATH . 'public/img/upload/' . $user['img'];
                                                if (file_exists($path)) {
                                                    if ($user['img'] != 'default.svg')
                                                        unlink($path);
                                                }

                                                $produkLive = $this->getAllProduk('live');
                                                $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                                                if ($isAdmin == null) {
                                                    $user = $this->usersModel->where('email', $email)->first();
                                                    session()->set('user', $user);
                                                    echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                                } else {
                                                    echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                                }
                                                return;
                                            } else {
                                                // Hapus langsung gambar yang sudah diupload tapi tidak tersimpan ke database
                                                $path = ROOTPATH . 'public/img/upload/' . $namaGambarBaru;
                                                unlink($path);
                                                echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                                return;
                                            }
                                        } else {
                                            echo json_encode(['status' => 'gagal upload', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                            return;
                                        }
                                    } else {
                                        echo json_encode(['status' => 'password salah', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                        return;
                                    }
                                } else {
                                    echo json_encode(['status' => 'salahKel', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                    return;
                                }
                            } else {
                                echo json_encode(['status' => 'salahKec', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                return;
                            }
                        } else {
                            echo json_encode(['status' => 'salahKotKab', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => $provinsi, 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                } else {
                    if ($passL  == $user['password']) {
                        $namaGambarBaru = uniqid() . $imgUpload->getRandomName();
                        if ($imgUpload->move(ROOTPATH . 'public/img/upload/', $namaGambarBaru)) {
                            $data = [
                                'id' => $user['id'],
                                'username' => $nama,
                                'password' => $passB,
                                'no_hp' => $no_hp,
                                'img' => $namaGambarBaru,
                                'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                            ];
                            if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                                $path = ROOTPATH . 'public/img/upload/' . $user['img'];
                                if (file_exists($path)) {
                                    if ($user['img'] != 'default.svg')
                                        unlink($path);
                                }
                                $produkLive = $this->getAllProduk('live');
                                $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                                if ($isAdmin == null) {
                                    $user = $this->usersModel->where('email', $email)->first();
                                    session()->set('user', $user);
                                    echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                } else {
                                    echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                }
                                return;
                            } else {
                                // Hapus langsung gambar yang sudah diupload tapi tidak tersimpan ke database
                                $path = ROOTPATH . 'public/img/upload/' . $namaGambarBaru;
                                unlink($path);
                                echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                return;
                            }
                        } else {
                            echo json_encode(['status' => 'gagal upload', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'password salah', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                }
            } else if ($tipe == 'adaImgNggakAdaPass') {

                if ($provinsi == 'false' && $kotKab == 'false' && $kecamatan == 'false' && $kelurahan == 'false') {
                    $provinsi = false;
                    $kotKab = false;
                    $kecamatan = false;
                    $kelurahan = false;
                }

                if ($provinsi && $kotKab && $kecamatan && $kelurahan) {
                    $path = ROOTPATH . 'public/json/api_daerah_indonesia/api/provinces.json';
                    $dataProv = file_get_contents($path);

                    $dataProv = json_decode($dataProv);

                    $cek1 = false;
                    foreach ($dataProv as $d) {
                        if (password_verify($d->id, $provinsi)) {
                            $cek1 = true;
                            $provinsi = ['id' => $d->id, 'name' => $d->name];
                            break;
                        }
                    }


                    if ($cek1) {
                        $path = ROOTPATH . "public/json/api_daerah_indonesia/api/regencies/" . $provinsi['id'] . ".json";
                        $dataKotKab = file_get_contents($path);

                        $dataKotKab = json_decode($dataKotKab);

                        $cek2 = false;
                        $kotKabId = explode('\^23^^1/', $kotKab)[0];
                        foreach ($dataKotKab as $d) {
                            if (password_verify($d->id, $kotKabId)) {
                                $cek2 = true;
                                $kotKabId = $d->id;
                                $kotKab = $d->name;
                                break;
                            }
                        }


                        if ($cek2) {
                            $path = ROOTPATH . "public/json/api_daerah_indonesia/api/districts/" . $kotKabId . ".json";
                            $dataKec = file_get_contents($path);

                            $dataKec = json_decode($dataKec);

                            $cek3 = false;
                            $kecId = explode('\^411^^1/', $kecamatan)[0];
                            foreach ($dataKec as $d) {
                                if (password_verify($d->id, $kecId)) {
                                    $cek3 = true;
                                    $kecId = $d->id;
                                    $kecamatan = $d->name;
                                    break;
                                }
                            }

                            if ($cek3) {

                                $path = ROOTPATH . "public/json/api_daerah_indonesia/api/villages/" . $kecId . ".json";
                                $dataKel = file_get_contents($path);

                                $dataKel = json_decode($dataKel);

                                $cek4 = false;
                                $kecId = explode('\^411^^1/', $kelurahan)[0];
                                foreach ($dataKel as $d) {
                                    if (password_verify($d->id, $kecId)) {
                                        $cek4 = true;
                                        $kelurahan = $d->name;
                                        break;
                                    }
                                }

                                if ($cek4) {
                                    $namaGambarBaru = uniqid() . $imgUpload->getRandomName();
                                    if ($imgUpload->move(ROOTPATH . 'public/img/upload/', $namaGambarBaru)) {
                                        $data = [
                                            'id' => $user['id'],
                                            'username' => $nama,
                                            'no_hp' => $no_hp,
                                            'img' => $namaGambarBaru,
                                            'asal' => $provinsi['name'] . '***' . $kotKab . '***' . $kecamatan . '***' . $kelurahan,
                                            'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                                        ];
                                        if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                                            $path = ROOTPATH . 'public/img/upload/' . $user['img'];
                                            if (file_exists($path)) {
                                                if ($user['img'] != 'default.svg')
                                                    unlink($path);
                                            }
                                            $produkLive = $this->getAllProduk('live');
                                            $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                                            if ($isAdmin == null) {
                                                $user = $this->usersModel->where('email', $email)->first();
                                                session()->set('user', $user);
                                                echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                            } else {
                                                echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                            }
                                            return;
                                        } else {
                                            // Hapus langsung gambar yang sudah diupload tapi tidak tersimpan ke database
                                            $path = ROOTPATH . 'public/img/upload/' . $namaGambarBaru;
                                            unlink($path);
                                            echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                            return;
                                        }
                                    } else {
                                        echo json_encode(['status' => 'gagal upload', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                        return;
                                    }
                                } else {
                                    echo json_encode(['status' => 'salahKel', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                    return;
                                }
                            } else {
                                echo json_encode(['status' => 'salahKec', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                return;
                            }
                        } else {
                            echo json_encode(['status' => 'salahKotKab', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'salahProvinsi', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                } else {
                    $namaGambarBaru = uniqid() . $imgUpload->getRandomName();
                    if ($imgUpload->move(ROOTPATH . 'public/img/upload/', $namaGambarBaru)) {
                        $data = [
                            'id' => $user['id'],
                            'username' => $nama,
                            'no_hp' => $no_hp,
                            'img' => $namaGambarBaru,
                            'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                        ];
                        if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                            $path = ROOTPATH . 'public/img/upload/' . $user['img'];
                            if (file_exists($path)) {
                                if ($user['img'] != 'default.svg')
                                    unlink($path);
                            }
                            $produkLive = $this->getAllProduk('live');
                            $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                            if ($isAdmin == null) {
                                $user = $this->usersModel->where('email', $email)->first();
                                session()->set('user', $user);
                                echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                            } else {
                                echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                            }
                            return;
                        } else {
                            // Hapus langsung gambar yang sudah diupload tapi tidak tersimpan ke database
                            $path = ROOTPATH . 'public/img/upload/' . $namaGambarBaru;
                            unlink($path);
                            echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'gagal upload', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                }
            } else if ($tipe == 'adaPassNggakAdaImg') {

                if ($provinsi && $kotKab && $kecamatan && $kelurahan) {
                    $path = ROOTPATH . 'public/json/api_daerah_indonesia/api/provinces.json';
                    $dataProv = file_get_contents($path);

                    $dataProv = json_decode($dataProv);

                    $cek1 = false;
                    foreach ($dataProv as $d) {
                        if (password_verify($d->id, $provinsi)) {
                            $cek1 = true;
                            $provinsi = ['id' => $d->id, 'name' => $d->name];
                            break;
                        }
                    }


                    if ($cek1) {
                        $path = ROOTPATH . "public/json/api_daerah_indonesia/api/regencies/" . $provinsi['id'] . ".json";
                        $dataKotKab = file_get_contents($path);

                        $dataKotKab = json_decode($dataKotKab);

                        $cek2 = false;
                        $kotKabId = explode('\^23^^1/', $kotKab)[0];
                        foreach ($dataKotKab as $d) {
                            if (password_verify($d->id, $kotKabId)) {
                                $cek2 = true;
                                $kotKabId = $d->id;
                                $kotKab = $d->name;
                                break;
                            }
                        }


                        if ($cek2) {
                            $path = ROOTPATH . "public/json/api_daerah_indonesia/api/districts/" . $kotKabId . ".json";
                            $dataKec = file_get_contents($path);

                            $dataKec = json_decode($dataKec);

                            $cek3 = false;
                            $kecId = explode('\^411^^1/', $kecamatan)[0];
                            foreach ($dataKec as $d) {
                                if (password_verify($d->id, $kecId)) {
                                    $cek3 = true;
                                    $kecId = $d->id;
                                    $kecamatan = $d->name;
                                    break;
                                }
                            }

                            if ($cek3) {

                                $path = ROOTPATH . "public/json/api_daerah_indonesia/api/villages/" . $kecId . ".json";
                                $dataKel = file_get_contents($path);

                                $dataKel = json_decode($dataKel);

                                $cek4 = false;
                                $kecId = explode('\^411^^1/', $kelurahan)[0];
                                foreach ($dataKel as $d) {
                                    if (password_verify($d->id, $kecId)) {
                                        $cek4 = true;
                                        $kelurahan = $d->name;
                                        break;
                                    }
                                }

                                if ($cek4) {
                                    // Cek password lama
                                    // Untuk sistem yang sesungguhnya adalah dengan hash password
                                    // 'password' => password_hash($pass, PASSWORD_DEFAULT),
                                    // if (password_verify($passL, $user['password'])) {
                                    if ($passL == $user['password']) {
                                        $data = [
                                            'id' => $user['id'],
                                            'username' => $nama,
                                            'password' => $passB,
                                            'no_hp' => $no_hp,
                                            'asal' => $provinsi['name'] . '***' . $kotKab . '***' . $kecamatan . '***' . $kelurahan,
                                            'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                                        ];
                                        if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                                            $produkLive = $this->getAllProduk('live');
                                            $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                                            if ($isAdmin == null) {
                                                $user = $this->usersModel->where('email', $email)->first();
                                                session()->set('user', $user);
                                                echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                            } else {
                                                echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                            }
                                            return;
                                        } else {
                                            echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                            return;
                                        }
                                    } else {
                                        echo json_encode(['status' => 'password salah', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                        return;
                                    }
                                } else {
                                    echo json_encode(['status' => 'salahKel', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                    return;
                                }
                            } else {
                                echo json_encode(['status' => 'salahKec', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                return;
                            }
                        } else {
                            echo json_encode(['status' => 'salahKotKab', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'salahProvinsi', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                } else {
                    // Cek password lama
                    // Untuk sistem yang sesungguhnya adalah dengan hash password
                    // 'password' => password_hash($pass, PASSWORD_DEFAULT),
                    // if (password_verify($passL, $user['password'])) {
                    if ($passL == $user['password']) {
                        $data = [
                            'id' => $user['id'],
                            'username' => $nama,
                            'password' => $passB,
                            'no_hp' => $no_hp,
                            'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                        ];
                        if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                            $produkLive = $this->getAllProduk('live');
                            $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                            if ($isAdmin == null) {
                                $user = $this->usersModel->where('email', $email)->first();
                                session()->set('user', $user);
                                echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                            } else {
                                echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                            }
                            return;
                        } else {
                            echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'password salah', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                }
            } else if ($tipe == 'cumanNamaDanNomor') {

                if ($provinsi && $kotKab && $kecamatan && $kelurahan) {
                    $path = ROOTPATH . 'public/json/api_daerah_indonesia/api/provinces.json';
                    $dataProv = file_get_contents($path);

                    $dataProv = json_decode($dataProv);

                    $cek1 = false;
                    foreach ($dataProv as $d) {
                        if (password_verify($d->id, $provinsi)) {
                            $cek1 = true;
                            $provinsi = ['id' => $d->id, 'name' => $d->name];
                            break;
                        }
                    }


                    if ($cek1) {
                        $path = ROOTPATH . "public/json/api_daerah_indonesia/api/regencies/" . $provinsi['id'] . ".json";
                        $dataKotKab = file_get_contents($path);

                        $dataKotKab = json_decode($dataKotKab);

                        $cek2 = false;
                        $kotKabId = explode('\^23^^1/', $kotKab)[0];
                        foreach ($dataKotKab as $d) {
                            if (password_verify($d->id, $kotKabId)) {
                                $cek2 = true;
                                $kotKabId = $d->id;
                                $kotKab = $d->name;
                                break;
                            }
                        }


                        if ($cek2) {
                            $path = ROOTPATH . "public/json/api_daerah_indonesia/api/districts/" . $kotKabId . ".json";
                            $dataKec = file_get_contents($path);

                            $dataKec = json_decode($dataKec);

                            $cek3 = false;
                            $kecId = explode('\^411^^1/', $kecamatan)[0];
                            foreach ($dataKec as $d) {
                                if (password_verify($d->id, $kecId)) {
                                    $cek3 = true;
                                    $kecId = $d->id;
                                    $kecamatan = $d->name;
                                    break;
                                }
                            }

                            if ($cek3) {

                                $path = ROOTPATH . "public/json/api_daerah_indonesia/api/villages/" . $kecId . ".json";
                                $dataKel = file_get_contents($path);

                                $dataKel = json_decode($dataKel);

                                $cek4 = false;
                                $kecId = explode('\^411^^1/', $kelurahan)[0];
                                foreach ($dataKel as $d) {
                                    if (password_verify($d->id, $kecId)) {
                                        $cek4 = true;
                                        $kelurahan = $d->name;
                                        break;
                                    }
                                }

                                if ($cek4) {
                                    $data = [
                                        'id' => $user['id'],
                                        'username' => $nama,
                                        'no_hp' => $no_hp,
                                        'asal' => $provinsi['name'] . '***' . $kotKab . '***' . $kecamatan . '***' . $kelurahan,
                                        'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                                    ];
                                    if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                                        $produkLive = $this->getAllProduk('live');
                                        $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                                        if ($isAdmin == null) {
                                            $user = $this->usersModel->where('email', $email)->first();
                                            session()->set('user', $user);
                                            echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                        } else {
                                            echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                        }
                                        return;
                                    } else {
                                        echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                        return;
                                    }
                                } else {
                                    echo json_encode(['status' => 'salahKel', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                    return;
                                }
                            } else {
                                echo json_encode(['status' => 'salahKec', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                return;
                            }
                        } else {
                            echo json_encode(['status' => 'salahKotKab', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'salahProvinsi', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                } else {
                    $data = [
                        'id' => $user['id'],
                        'username' => $nama,
                        'no_hp' => $no_hp,
                        'is_active' => ($isAdmin) ? $this->request->getPost('apakahAktif') : 1
                    ];
                    if ($this->usersModel->save($data) && $this->editAllProduk($email, $nama)) {
                        $produkLive = $this->getAllProduk('live');
                        $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                        if ($isAdmin == null) {
                            $user = $this->usersModel->where('email', $email)->first();
                            session()->set('user', $user);
                            echo json_encode(['status' => 'berhasil', 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                        } else {
                            echo json_encode(['status' => 'berhasil', 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                        }
                        return;
                    } else {
                        echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                }
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }


    public function topup()
    {
        $pass = $this->request->getPost('HELLO');

        // cek akses darimana? Jika dari web resmi(file script.js) maka boleh masuk. Jika akses langsung dengan url maka kita block
        if ($pass == 'WORLD') {
            $saldo = $this->request->getPost('saldo');
            // $email = $this->request->getPost('email');
            $email = session()->get('user')['email'];
            // $idUser = $this->request->getPost('id');
            $idUser = session()->get('user')['id'];

            $user = $this->usersModel->where(['id' => $idUser, 'email' => $email])->first();
            // cek apakah user ada didalam database
            if ($user) {
                // cek apakah saldo berhasil ditambah atau tidak...
                $data = [
                    'id' => $idUser,
                    'user_saldo' => ($user['user_saldo'] + $saldo)
                ];

                if ($this->usersModel->save($data)) {
                    $user = $this->usersModel->where('id', $idUser)->first();
                    echo json_encode(['user' => $user, 'status' => 'berhasil']);
                    return;
                } else {
                    echo json_encode(['user' => false, 'status' => 'gagal tambah saldo']);
                    return;
                }
            } else {
                echo 'user tidak ada';
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function getAllMember()
    {
        $pass = $this->request->getPost('pass');
        if ($pass == 'A411g3T44llM3mi3eR') {
            $allUsers = $this->usersModel->where('role_id', 0)->findAll();
            if ($allUsers) {
                echo json_encode(['stat' => 'ada', 'allUsers' => $allUsers]);
                return;
            } else {
                echo json_encode(['stat' => 'tidakAda']);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function getOneUser()
    {
        $pass = $this->request->getPost('pass');

        if ($pass == 'a411g52t2ueso0neMen2rrberOrAd412fmdin') {
            $email = $this->request->getPost('email');

            if ($email) {
                $user = $this->usersModel->where('email', $email)->first();

                if ($user) {
                    echo json_encode(['status' => 'berhasil', 'user' => $user]);
                } else {
                    echo json_encode(['status' => 'gagal']);
                }
                return;
            } else {
                throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }


    public function nonAktifkanUserOtherKomputer()
    {
        $pass = $this->request->getPost('pass');
        if ($pass == 'no2n4ktif7kan20Use230ter') {
            $email = $this->request->getPost('email');
            $user = $this->usersModel->where('email', $email)->first();
            if ($user) {
                if ($user['status_jaringan'] == 1) {
                    $data = [
                        'id' => $user['id'],
                        'status_jaringan' => 0
                    ];
                    if ($this->usersModel->save($data)) {
                        echo 'berhasil';
                        return;
                    } else {
                        echo 'gagal';
                        return;
                    }
                } else {
                    throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
                    return;
                }
            } else {
                throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function cekStatusJaringan()
    {
        $pass = $this->request->getPost('pass');

        if ($pass == 'ce639kjar27ingan') {
            $email = session()->get('user')['email'];
            $user = $this->usersModel->where('email', $email)->first();
            if ($user) {
                echo ($user['status_jaringan'] == 0) ? 'offline' : 'online';
                return;
            } else {
                echo 'gagal';
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function delete()
    {
        $pass = $this->request->getPost('pass');

        if ($pass == 'a411H4pU5users') {
            $email = $this->request->getPost('email');
            $user = $this->usersModel->where('email', $email)->first();

            if ($user) {
                // Cek dulu apakah user ini punya produk...
                $produk2 = $this->produk2Model->where('email_user', $email)->findAll();

                if (count($produk2) > 0) {
                    foreach ($produk2 as $p) {
                        // Cek apakah setiap produk mempunyai penawar
                        if ($p['status'] == 1) {
                            $semuaPenawar = $this->penawarModel->where('id_produk', $p['id'])->findAll();
                            if ($semuaPenawar) {
                                // Sebelum dihapus semua, kembalikan saldo penawar yang tidak menang
                                foreach ($semuaPenawar as $pen) {
                                    $penawarSaldoKembali = $this->usersModel->where('email', $pen['email_penawar'])->first();
                                    $saldoKembali = [
                                        'id' => $penawarSaldoKembali['id'],
                                        'user_saldo' => $penawarSaldoKembali['user_saldo'] + $pen['tawaran']
                                    ];
                                    $this->usersModel->save($saldoKembali);
                                }

                                // Hapus semua penawar
                                $this->penawarModel->where('id_produk', $p['id'])->delete();
                            }
                        }
                        if ($this->produk2Model->where('id', $p['id'])->delete()) {
                            $path2 = ROOTPATH . 'public/img/upload/' . $p['img'];
                            unlink($path2);
                        } else {
                            echo 'gagal';
                            return;
                        }
                    }
                }


                // Hapus gambar profile terlebih dahulu
                if ($user['img'] != 'default.svg') {
                    $path = ROOTPATH . 'public/img/upload/' . $user['img'];
                    if (!unlink($path)) {
                        echo 'gagal';
                        return;
                    }
                }
                $dataUserNawar = $this->penawarModel->where('email_penawar', $user['email'])->findAll();
                if ($this->penawarModel->where('email_penawar', $user['email'])->delete()) {
                    if ($this->usersModel->where('id', $user['id'])->delete()) {
                        echo 'berhasil';
                        return;
                    } else {
                        $belumDikembalikan = true;
                        while ($belumDikembalikan) {
                            foreach ($dataUserNawar as $d) {
                                if ($this->penawarModel->save([
                                    'id_produk' => $d['id_produk'],
                                    'email_penawar' => $d['email_penawar'],
                                    'tawaran' => $d['tawaran']
                                ])) {
                                    if ($dataUserNawar[(count($dataUserNawar) - 1)] == $d) {
                                        $belumDikembalikan = false;
                                    }
                                }
                            }
                        }

                        echo 'gagal';
                        return;
                    }
                } else {
                    echo 'gagal';
                    return;
                }
            } else {
                echo 'gagal';
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function cari()
    {
        $keyword = $this->request->getPost('keyword');
        $tipe = $this->request->getPost('tipe');

        $db      = \Config\Database::connect();
        $builder = $db->table('users');
        $userBaru = [];

        if ($tipe == 'member') {
            $users = $builder->like('username', $keyword)->orLike('email', $keyword)->get()->getResultArray();
            foreach ($users as $u) {
                if ($u['role_id'] == 0) {
                    $userBaru[] = $u;
                }
            }
        } else if ($tipe == 'admin') {
            $users = $builder->like('username', $keyword)->orLike('email', $keyword)->get()->getResultArray();
            foreach ($users as $u) {
                if ($u['role_id'] == 1) {
                    $userBaru[] = $u;
                }
            }
        }
        if ($userBaru)
            echo json_encode($userBaru);
        else
            echo json_encode(false);
    }

    // Private Func
    private function editAllProduk($email, $nama)
    {
        $produk2 = $this->produk2Model->where('email_user', $email)->findAll();
        foreach ($produk2 as $produk) {
            $data = [
                'id' => $produk['id'],
                'nama_user' => $nama
            ];
            $this->produk2Model->save($data);
        }
        return true;
    }

    private function getAllProduk($type = 'live', $count = 4, $offset = 0)
    {
        $produk2Model = new \App\Models\Produk2Model();


        // Cek produk kadaluarsa atau tidak
        // status 0 adalah disimpan di draft atayu dashboard
        // status 1 aadalah produk yang live
        // status 2 adalah produk yang selesai (sudah ada pembeli)
        // status 3 adalah produk yang selesai (tidak ada pembeli) kadaluarsa
        $semuaProduk = $produk2Model->findAll();
        foreach ($semuaProduk as $produk) {
            if (strtotime($produk['kadaluarsa']) <= time() && $produk['status'] != 0) {
                if ($produk['pemenang'] == '') {
                    $produk2Model->save([
                        'id' => $produk['id'],
                        'status' => 3
                    ]);
                } else {
                    $produk2Model->save([
                        'id' => $produk['id'],
                        'status' => 2
                    ]);
                }
            }
        }


        if ($type == 'live') {
            $produk2Model->orderBy('updated_at', 'DESC');
            $produkReturn = $produk2Model->where('status', 1)->findAll();
            return ($produkReturn) ?  $produkReturn : null;
        } else if ($type == 'selesai') {
            // session()->set('co')
            $produk2Model->orderBy('updated_at', 'DESC');
            $produkReturn = $produk2Model->where('status', 2)->findAll();
            return ($produkReturn) ? $produkReturn : null;
        }
    }
}
