<?php

namespace App\Controllers;

use ErrorException;
use Exception;

use function PHPSTORM_META\type;

class Produk extends BaseController
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
        // $off = $this->request->getVar('off');
        // $cou = $this->request->getVar('cou');

        // $db      = \Config\Database::connect();
        // $builder = $db->table('produk');
        // return $builder->get($off, $cou);
    }

    public function tambah()
    {
        $pass = $this->request->getPost('pass');


        if ($pass == 'A411TAMBAH') {
            $namaProduk = $this->request->getPost('nama');
            $harga = $this->request->getPost('harga');
            $stok = $this->request->getPost('stok');
            $deskripsi = $this->request->getPost('deskripsi');
            $statusProduk = $this->request->getPost('statusProduk');
            $tanggalKadaluarsa = $this->request->getPost('tanggalKadaluarsa');
            $jamKadaluarsa = $this->request->getPost('jamKadaluarsa');
            $kadaluarsa = date('Y-m-d H:i', strtotime($tanggalKadaluarsa . ' ' . $jamKadaluarsa));
            // $email = $this->request->getPost('email');
            $email = session()->get('user')['email'];
            $imgUpload = $this->request->getFile('imgUpload');

            if ($email) {
                $user = $this->usersModel->where('email', $email)->first();
                if ($user) {
                    $namaGambarBaru = uniqid() . $imgUpload->getRandomName();
                    if ($imgUpload->move(ROOTPATH . 'public/img/upload/', $namaGambarBaru)) {
                        $data = [
                            'email_user' => $email,
                            'nama_user' => $user['username'],
                            'nama_produk' => $namaProduk,
                            'harga_awal' => $harga,
                            'stok_produk' => $stok,
                            'deskripsi_produk' => $deskripsi,
                            'kadaluarsa' => $kadaluarsa,
                            'img' => $namaGambarBaru,
                            'status' => intval($statusProduk),
                            'pemenang' => '',
                            'is_active' => 1
                        ];
                        if ($this->produk2Model->save($data)) {
                            $produkLiveAwal = $this->getAllProduk('live', 4, 0);
                            $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                            echo json_encode(['status' => 'berhasil', 'produkLiveAwal' => $produkLiveAwal, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                            return;
                        } else {
                            // Hapus langsung gambar yang sudah diupload tapi tidak tersimpan ke database
                            $path = ROOTPATH . 'public/img/upload/' . $namaGambarBaru;
                            unlink($path);
                            echo json_encode(['status' => 'gagal']);
                            return;
                        };
                    } else {
                        echo json_encode(['status' => 'gagal upload']);
                        return;
                    }
                } else {
                    echo json_encode(['status' => 'email salah', 'user' => null]);
                    return;
                }
            } else {
                echo json_encode(['status' => 'email salah', 'user' => null]);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }


    public function getAllMyProduk()
    {
        // $email = $this->request->getPost('email');
        $pass = $this->request->getPost('pass');




        if ($pass == 'A411MYPRODUK') {
            if ($this->request->getPost('email'))
                $email = $this->request->getPost('email');
            else
                $email = session()->get('user')['email'];
            $this->produk2Model->orderBy('id', 'DESC');
            $produk2 = $this->produk2Model->where('email_user', $email)->findAll();
            if ($produk2) {
                // Ini adalah cara saya memisahkan masing2 produk berdasarkan status mereka
                $produk_0 = [];
                $produk_1 = [];
                $produk_2 = [];
                $produk_3 = [];

                foreach ($produk2 as $produk) {
                    if ($produk['status'] == 0) {
                        $produk_0[] = $produk;
                    } else if ($produk['status'] == 1) {
                        $produk_1[] = $produk;
                    } else if ($produk['status'] == 2) {
                        $produk_2[] = $produk;
                    } else if ($produk['status'] == 3) {
                        $produk_3[] = $produk;
                    }
                }
                $allMyProduk = ['myProdukDraft' => ($produk_0) ? $produk_0 : null, 'myProdukLive' => ($produk_1) ? $produk_1 : null, 'myProdukSelesai' => ($produk_2) ? $produk_2 : null, 'myProdukKadaluarsa' => ($produk_3) ? $produk_3 : null];

                echo json_encode(['status' => 'ada', 'allMyProduk' => $allMyProduk]);
                return;
            } else {
                echo json_encode(['status' => 'tidakAda', 'allMyProduk' => null]);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function editProduk()
    {
        $id = $this->request->getPost('lala');
        $namaProdukEdit = $this->request->getPost('namaProdukEdit');
        $stokProdukEdit = $this->request->getPost('stokProdukEdit');
        $deskripsiProdukEdit = $this->request->getPost('deskripsiProdukEdit');
        $statusProdukEdit = $this->request->getPost('statusProdukEdit');
        $hargaAwalEdit = $this->request->getPost('hargaAwalEdit');
        $kadaluarsaProdukEdit = $this->request->getPost('kadaluarsaProdukEdit');
        $kadaluarsaProdukJamEdit = $this->request->getPost('kadaluarsaProdukJamEdit');
        $imgUpload = $this->request->getFile('imgUpload');
        $kadaluarsaProduk = date('Y-m-d H:i', strtotime($kadaluarsaProdukEdit . ' ' . $kadaluarsaProdukJamEdit));
        $tipe = $this->request->getPost('tipe');

        $produk = $this->produk2Model->where('id', $id)->first();

        if ($tipe) {
            if ($produk) {
                if ($tipe == 'ada_semua') {
                    $namaGambarLama = $produk['img'];
                    $namaGambarBaru = uniqid() . $imgUpload->getRandomName();
                    if ($imgUpload->move(ROOTPATH . 'public/img/upload/', $namaGambarBaru)) {
                        $data = [
                            'id' => $id,
                            'nama_produk' => $namaProdukEdit,
                            'harga_awal' => $hargaAwalEdit,
                            'stok_produk' => $stokProdukEdit,
                            'deskripsi_produk' => $deskripsiProdukEdit,
                            'kadaluarsa' => $kadaluarsaProduk,
                            'img' => $namaGambarBaru,
                            'status' => $statusProdukEdit
                        ];
                        if ($this->produk2Model->save($data)) {
                            // Tolak semua tawaran penawar jika status diubah menjadi 0
                            if ($statusProdukEdit == 0) {
                                $semuaPenawar = $this->penawarModel->where('id_produk', $id)->findAll();
                                if (count($semuaPenawar) > 0) {
                                    // Sebelum dihapus semua, kembalikan saldo penawar yang tidak menang
                                    $penawar2 = $this->penawarModel->where('id_produk', $id)->findAll();
                                    foreach ($penawar2 as $pen) {
                                        $penawarSaldoKembali = $this->usersModel->where('email', $pen['email_penawar'])->first();
                                        $saldoKembali = [
                                            'id' => $penawarSaldoKembali['id'],
                                            'user_saldo' => $penawarSaldoKembali['user_saldo'] + $pen['tawaran']
                                        ];
                                        $this->usersModel->save($saldoKembali);
                                    }

                                    // Hapus semua penawar
                                    $this->penawarModel->where('id_produk', $id)->delete();
                                }
                            }
                            $path = ROOTPATH . 'public/img/upload/' . $namaGambarLama;
                            unlink($path);
                            echo 'berhasil';
                            return;
                        } else {
                            // Hapus langsung gambar yang sudah diupload tapi tidak tersimpan ke database
                            $path = ROOTPATH . 'public/img/upload/' . $namaGambarBaru;
                            unlink($path);
                            echo 'gagal';
                            return;
                        };
                    } else {
                        echo 'gagal upload';
                        return;
                    }
                } else if ($tipe == 'tidakPakaiGambar') {
                    $data = [
                        'id' => $id,
                        'nama_produk' => $namaProdukEdit,
                        'harga_awal' => $hargaAwalEdit,
                        'stok_produk' => $stokProdukEdit,
                        'deskripsi_produk' => $deskripsiProdukEdit,
                        'kadaluarsa' => $kadaluarsaProduk,
                        'status' => $statusProdukEdit
                    ];
                    if ($this->produk2Model->save($data)) {
                        // Tolak semua tawaran penawar jika status diubah menjadi 0
                        if ($statusProdukEdit == 0) {
                            $semuaPenawar = $this->penawarModel->where('id_produk', $id)->findAll();
                            if ($semuaPenawar) {
                                // Sebelum dihapus semua, kembalikan saldo penawar yang tidak menang
                                $penawar2 = $this->penawarModel->where('id_produk', $id)->findAll();
                                foreach ($penawar2 as $pen) {
                                    $penawarSaldoKembali = $this->usersModel->where('email', $pen['email_penawar'])->first();
                                    $saldoKembali = [
                                        'id' => $penawarSaldoKembali['id'],
                                        'user_saldo' => $penawarSaldoKembali['user_saldo'] + $pen['tawaran']
                                    ];
                                    $this->usersModel->save($saldoKembali);
                                }

                                // Hapus semua penawar
                                $this->penawarModel->where('id_produk', $id)->delete();
                            }
                        }
                        echo 'berhasil';
                        return;
                    } else {
                        echo 'gagal';
                        return;
                    };
                }
            } else {
                echo 'tidakAda';
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function hapusProduk()
    {
        // $email = $this->request->getPost('email');
        $pass = $this->request->getPost('pass');

        if ($pass == 'A411HAPUSPRODUK') {
            if ($this->request->getPost('admin'))
                $email = $this->request->getPost('email');
            else
                $email = session()->get('user')['email'];
            $id = $this->request->getPost('lala');
            $produk = $this->produk2Model->where(['email_user' => $email, 'id' => $id])->first();
            if ($produk) {
                if ($produk['status'] != 1) {
                    $path = ROOTPATH . 'public/img/upload/' . $produk['img'];
                    if (unlink($path)) {
                        if ($this->produk2Model->delete($id)) {
                            echo 'berhasil';
                            return;
                        } else {
                            echo 'tidak berhasil';
                            return;
                        }
                    } else {
                        echo 'tidak berhasil';
                        return;
                    }
                } else {
                    echo 'produkLive';
                    return;
                }
            } else {
                echo $email;
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function getProduk2()
    {
        $pass = $this->request->getPost('pass');
        // $email = $this->request->getPost('email');

        if ($pass == 'A411LOADPRODUK') {
            $email = session()->get('user')['email'];
            $produk2 = [
                'status' => 'berhasil',
                'produkLive' => $this->getAllProduk('live'),
                'produkNotLiveAwal' => $this->getAllProduk('selesai'),
            ];
            if ($email)
                $produk2['user'] = $this->usersModel->where('email', $email)->first();
            echo json_encode($produk2);
            return;
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function getOneProduk()
    {
        $pass = $this->request->getPost('pass');
        if ($pass == 'A411MYPRODUK') {
            $id = $this->request->getPost('lala');
            $live = $this->request->getPost('live');
            $produk2Model = new \App\Models\Produk2Model();

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
            if ($live == 'live')
                $produk = $this->produk2Model->where(['id' => $id, 'status' => 1])->first();
            else
                $produk = $this->produk2Model->where(['id' => $id])->first();

            if ($produk && $id) {
                echo json_encode(['status' => 'ada', 'produk' => $produk]);
                return;
            } else {
                echo json_encode(['status' => 'tidakAda', 'produk' => $produk, 'id' => $id]);
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
        // $keyword = 'oat';

        $db      = \Config\Database::connect();
        $builder = $db->table('produk');
        $email = $this->request->getPost('email');
        $produkBaru = false;
        if ($email) {
            $produk = $builder->like('nama_produk', $keyword)->orLike('deskripsi_produk', $keyword)->orLike('nama_user', $keyword)->orLike('pemenang', $keyword)->get()->getResultArray();

            foreach ($produk as $p) {
                if ($p['email_user'] == $email)
                    $produkBaru[] = $p;
            }
        } else
            $produkBaru = $builder->like('nama_produk', $keyword)->orLike('deskripsi_produk', $keyword)->orLike('nama_user', $keyword)->orLike('pemenang', $keyword)->get()->getResultArray();

        if ($produkBaru)
            echo json_encode($produkBaru);
        else
            echo json_encode(false);
    }

    public function getPenawar()
    {
        $pass = $this->request->getPost('pass');
        $idProduk = $this->request->getPost('lala');
        $penawarModel = new \App\Models\PenawarModel();
        $produk2Model = new \App\Models\Produk2Model();
        $usersModel = new \App\Models\UsersModel();
        $dataTawar = $penawarModel->where('id_produk', $idProduk)->orderBy('tawaran', 'DESC')->findAll();

        $produk = $produk2Model->where('id', $idProduk)->first();

        $dataTawarWithDataUser = [];
        foreach ($dataTawar as $data) {
            $dataTawarWithDataUser[] = [
                "user" => $usersModel->where('email', $data['email_penawar'])->first(),
                "dataTawar" => $data
            ];
        }

        if ($pass == 'A@4I1GETP3NAW4Rs') {
            if ($produk) {
                if ($produk['status'] == 1) {
                    if (count($dataTawar) > 0) {
                        echo json_encode(['status' => 'berhasil', 'dataTawarWithDataUser' => $dataTawarWithDataUser]);
                        return;
                    } else {
                        echo json_encode(['status' => 'tidakAdaPenawar', 'dataTawarWithDataUser' => false]);
                        return;
                    }
                } else {
                    echo json_encode(['status' => 'produkTidakLive', 'dataTawarWithDataUser' => false, 'emailPemenang' => $produk['email_pemenang'], 'produk' => $produk]);
                    return;
                }
            } else {
                echo json_encode(['status' => 'tidakAdaProduk', 'dataTawarWithDataUser' => false]);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function tawar()
    {
        $usersModel = new \App\Models\UsersModel();
        $penawarModel = new \App\Models\PenawarModel();
        $produk2Model = new \App\Models\Produk2Model();
        $pass = $this->request->getPost('HELLO');


        if ($pass === 'WORLD') {
            $tawaran = $this->request->getPost('tawaranPenawar');
            $idProduk = $this->request->getPost('mylala');
            // $email = $this->request->getPost('email');
            $email = session()->get('user')['email'];
            // Cek Apakah Penawar dengan Email tersebut sudah ada pada database dengan id_produk tertentu. Jadi email tidak boleh ada yang sama pada 1 id produk. Namun Email itu boleh ada lebih dari satu didalam database/tabel jika id_produk nya masing2 berbeda
            $cek = $penawarModel->where(['id_produk' => $idProduk, 'email_penawar' => $email])->findAll();

            // cek apakah yang menawar itu yang punya apa bukan..
            $cek2 = $produk2Model->where(['id' => $idProduk])->first();

            // cek apakah user dengan email itu ada di database atau tidak.. dan juga sekalian cek apakah user dengan email itu memiliki saldo yang mencukupi?
            $cek3 = $usersModel->where('email', $email)->first();
            if ($cek3) {
                if ($cek2['email_user'] != $email) {
                    if ($cek2['harga_awal'] <= $tawaran) {
                        if ($cek3['user_saldo'] >= $tawaran) {
                            if (count($cek) < 1) {
                                if ($tawaran && $idProduk && $pass) {
                                    $data = [
                                        'id_produk' => $idProduk,
                                        'tawaran' => $tawaran,
                                        'email_penawar' => $email
                                    ];
                                    if ($penawarModel->save($data) && $usersModel->save(['id' => $cek3['id'], 'user_saldo' => ($cek3['user_saldo'] - $tawaran)])) {
                                        // Ganti user tidak dengan $cek3 agar update saldonya
                                        $user = $usersModel->where('id', $cek3['id'])->first();
                                        echo json_encode(['status' => 'berhasil', 'user' => $user]);
                                        return;
                                    } else {
                                        echo json_encode(['status' => 'gagal', 'user' => false]);
                                        return;
                                    }
                                }
                            } else {
                                echo json_encode(['status' => 0, 'user' => false]);
                                return;
                            }
                        } else {
                            echo json_encode(['status' => 'uangnya tidak cukup', 'user' => false]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'kurangduit', 'user' => false]);
                        return;
                    }
                } else {
                    echo json_encode(['status' => 'dia authornya', 'user' => false]);
                    return;
                }
            } else {
                echo json_encode(['status' => 'email fake dia', 'user' => false]);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }


    public function stopPenawaran()
    {
        $pass = $this->request->getPost('pass');
        // $emailUserLogged = $this->request->getPost('userLogged');
        // Catatan
        // status 0 adalah disimpan di draft atayu dashboard
        // status 1 aadalah produk yang live
        // status 2 adalah produk yang selesai (sudah ada pembeli) / terjual
        // status 3 adalah produk yang selesai (tidak ada pembeli) kadaluarsa

        if ($pass === 'AM1RSt0PP3naW4RAN') {
            $idProduk = $this->request->getPost('lala');
            $emailUserLogged = session()->get('user')['email'];
            $produk = ($this->produk2Model->where('id', $idProduk)->first()) ? $this->produk2Model->where('id', $idProduk)->first() : null;
            if ($produk) {
                $pelelang = ($this->usersModel->where('email', $produk['email_user'])->first()) ? $this->usersModel->where('email', $produk['email_user'])->first() : null;
                // cek, ini produk masih live atau tidak..
                if ($produk['status'] == 1) {
                    // Ambil record/data pemenang
                    $pemenang = $this->penawarModel->where('id_produk', $idProduk)->orderBy('tawaran', 'DESC')->first();

                    if ($pemenang) {
                        // Ubah status produk menjadi selesai => 2 dan ubah semua yang diperlukan
                        $ubah = [
                            'id' => $idProduk,
                            'status' => 2,
                            'pemenang' => $this->usersModel->where('email', $pemenang['email_penawar'])->first()['username'],
                            'tawaran_pemenang' => $pemenang['tawaran'],
                            'email_pemenang' => $pemenang['email_penawar']
                        ];
                        $tambahSaldoPelelang = [
                            'id' => $pelelang['id'],
                            'user_saldo' => $pelelang['user_saldo'] + $pemenang['tawaran']
                        ];
                        if ($this->produk2Model->save($ubah) && $this->usersModel->save($tambahSaldoPelelang)) {
                            // Sebelum dihapus semua, kembalikan saldo penawar yang tidak menang
                            $penawar2 = $this->penawarModel->where('id_produk', $idProduk)->findAll();
                            foreach ($penawar2 as $pen) {
                                if ($pen['id'] != $pemenang['id']) {
                                    $penawarSaldoKembali = $this->usersModel->where('email', $pen['email_penawar'])->first();
                                    $saldoKembali = [
                                        'id' => $penawarSaldoKembali['id'],
                                        'user_saldo' => $penawarSaldoKembali['user_saldo'] + $pen['tawaran']
                                    ];
                                    $this->usersModel->save($saldoKembali);
                                }
                            }
                            // Hapus semua penawar dari database berdasarkan id_produk
                            if ($this->penawarModel->where('id_produk', $idProduk)->delete()) {
                                $data = [
                                    'status' => 'success',
                                    'produkLive' => $this->getAllProduk('live'),
                                    'produkNotLive' => $this->getAllProduk('selesai'),
                                    'userPemenang' => $this->usersModel->where('email', $pemenang['email_penawar'])->first(),
                                    'produk' => $this->produk2Model->where('id', $idProduk)->first()
                                ];
                                $data['user'] = $this->usersModel->where('email', $emailUserLogged)->first();
                                echo json_encode($data);
                                return;
                            } else {
                                $data = [
                                    'status' => 'gagal',
                                    'produkLive' => false,
                                    'produkNotLive' => false,
                                    'userPemenang' => false,
                                    'produk' => false
                                ];
                                echo json_encode($data);
                                return;
                            }
                        } else {
                            $data = [
                                'status' => 'gagal',
                                'produkLive' => false,
                                'produkNotLive' => false,
                                'userPemenang' => false,
                                'produk' => false
                            ];
                            echo json_encode($data);
                            return;
                        }
                    } else {
                        // Ubah status produk menjadi kadaluarsa => 3
                        $ubah = [
                            'id' => $idProduk,
                            'status' => 3
                        ];
                        if ($this->produk2Model->save($ubah)) {
                            $data = [
                                'status' => 'kadaluarsa',
                                'produkLive' => $this->getAllProduk('live'),
                                'produkNotLive' => $this->getAllProduk('selesai'),
                                'userPemenang' => false,
                                'produk' => false
                            ];
                            $data['user'] = $this->usersModel->where('email', $emailUserLogged)->first();
                            echo json_encode($data);
                            return;
                        }
                    }
                } else if ($produk['status'] == 2) {
                    $data = [
                        'status' => 'success',
                        'produkLive' => $this->getAllProduk('live'),
                        'produkNotLive' => $this->getAllProduk('selesai'),
                        'userPemenang' => $this->usersModel->where('email', $produk['email_pemenang'])->first(),
                        'produk' => $produk
                    ];
                    $data['user'] = $this->usersModel->where('email', $emailUserLogged)->first();
                    echo json_encode($data);
                    return;
                } else if ($produk['status'] == 3) {
                    $data = [
                        'status' => 'kadaluarsa',
                        'produkLive' => $this->getAllProduk('live'),
                        'produkNotLive' => $this->getAllProduk('selesai'),
                        'userPemenang' => false,
                        'produk' => false
                    ];
                    $data['user'] = $this->usersModel->where('email', $emailUserLogged)->first();
                    echo json_encode($data);
                    return;
                } else if ($produk['status'] == 0) {
                    $data = [
                        'status' => 'dihentikan',
                        'produkLive' => $this->getAllProduk('live'),
                        'produkNotLive' => $this->getAllProduk('selesai'),
                        'userPemenang' => false,
                        'produk' => false
                    ];
                    $data['user'] = $this->usersModel->where('email', $emailUserLogged)->first();
                    echo json_encode($data);
                    return;
                }
            } else {
                $data = [
                    'status' => 'produkDihapus',
                    'produkLive' => $this->getAllProduk('live'),
                    'produkNotLive' => $this->getAllProduk('selesai'),
                    'userPemenang' => false,
                    'produk' => false
                ];
                $data['user'] = $this->usersModel->where('email', $emailUserLogged)->first();
                echo json_encode($data);
                return;
            }



            // if ($pemenang) {
            //     $data = [
            //         'status' => 'success',
            //         'produkLive' => $this->getAllProduk('live'),
            //         'produkNotLive' => $this->getAllProduk('selesai'),
            //         'userPemenang' => $this->usersModel->where('email', $this->produk2Model->where('id', $idProduk)->first()['email_pemenang'])->first(),
            //         'produk' => $this->produk2Model->where('id', $idProduk)->first()
            //     ];
            //     echo json_encode($data);
            //     return;
            // } else {
            //     $data = [
            //         'status' => 'kadaluarsa',
            //         'produkLive' => $this->getAllProduk('live'),
            //         'produkNotLive' => $this->getAllProduk('selesai'),
            //         'userPemenang' => false,
            //         'produk' => false
            //     ];
            //     echo json_encode($data);
            //     return;
            // }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }


    public function cekKadaluarsa()
    {
        $pass = $this->request->getPost('pass');
        $id = $this->request->getPost('lala');
        $timePLama = $this->request->getPost('timeP');
        $produk = $this->produk2Model->where('id', $id)->first();

        if ($pass === 'A411CeKk4l4dU4R5a') {
            if ($produk) {
                $timePbaru = strtotime($produk['kadaluarsa']);

                if ($timePbaru != $timePLama) {
                    echo json_encode(['status' => 'berubah', 'timePbaru' => $timePbaru]);
                } else {
                    echo json_encode(['status' => 'tidak_berubah', 'timePbaru' => false]);
                }
                return;
            } else {
                echo json_encode(['status' => 'produkTidakAda', 'timePbaru' => false]);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function getProducts()
    {
        $pass = $this->request->getPost('pass');

        if ($pass == '4a11G3tAl1P120DuK') {
            $tipe = $this->request->getPost('tipe');
            if ($tipe == 'semua') {
                $allProducts = $this->produk2Model->findAll();
                if ($allProducts) {
                    echo json_encode(['stat' => 'ada', 'allProducts' => $allProducts]);
                    return;
                } else {
                    echo json_encode(['stat' => 'tidakAda']);
                    return;
                }
            } else if ($tipe == 'live') {
                $produkLive = $this->getAllProduk('live');
                if ($produkLive) {
                    echo json_encode(['stat' => 'ada', 'produkLive' => $produkLive]);
                    return;
                } else {
                    echo json_encode(['stat' => 'tidakAda']);
                    return;
                }
            } else if ($tipe == 'selesai') {
                $produkNotLive = $this->getAllProduk('selesai');
                if ($produkNotLive) {
                    echo json_encode(['stat' => 'ada', 'produkNotLive' => $produkNotLive]);
                    return;
                } else {
                    echo json_encode(['stat' => 'tidakAda']);
                    return;
                }
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }


    // Private Func
    private function getAllProduk($type = 'live', $count = 4, $offset = 0)
    {
        $produk2Model = new \App\Models\Produk2Model();
        // Cek produk kadaluarsa atau tidak
        // status 0 adalah disimpan di draft atayu dashboard
        // status 1 aadalah produk yang live
        // status 2 adalah produk yang selesai (sudah ada pembeli) / terjual
        // status 3 adalah produk yang selesai (tidak ada pembeli) kadaluarsa
        $semuaProduk = $produk2Model->findAll();
        foreach ($semuaProduk as $produk) {
            if (strtotime($produk['kadaluarsa']) <= time() && $produk['status'] != 0) {
                if ($produk['pemenang'] == '') {
                    if ($type == 'mantap' && $produk['id'] != '10') {
                        return $produk;
                    }
                    $produk2Model->save([
                        'id' => $produk['id'],
                        'status' => 3
                    ]);
                } else {
                    if ($type == 'mantap' && $produk['id'] != '10') {
                        return $produk;
                    }
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
