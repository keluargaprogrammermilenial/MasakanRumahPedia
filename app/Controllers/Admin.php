<?php

namespace App\Controllers;

use Exception;

// use App\Controllers\Home;

use function PHPSTORM_META\type;

class Admin extends BaseController
{
    protected $usersModel, $produk2Model, $adminModel, $penawarModel;

    public function __construct()
    {
        $this->usersModel = new \App\Models\UsersModel();
        $this->produk2Model = new \App\Models\Produk2Model();
        $this->adminModel = new \App\Models\AdminModel();
        $this->penawarModel = new \App\Models\PenawarModel();
    }

    public function index()
    {
    }

    public function home($token = null, $email = null)
    {
        if ($token && $email) {
            $token = urldecode($token);
            $email = base64_decode(urldecode($email));
            if (session()->get('logged_in') && session()->get('user')['email'] == $email) {
                $userAdmin = $this->adminModel->where('token', $token)->first();
                if ($userAdmin) {
                    $data = [
                        'title' => 'Admin Kamu',
                        'user' => $this->usersModel->where('id', $userAdmin['id_user'])->first()
                    ];
                    return view('admin/admin', $data);
                } else {
                    throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
                    return;
                }
            } else {
                return redirect('/');
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function verificate()
    {
        $pass = $this->request->getPost('pass');
        if ($pass == '4A11V3r1v!ed4dM!n') {
            // $email = $this->request->getPost('email');
            $email = session()->get('user')['email'];

            $user = $this->usersModel->where('email', $email)->first();
            if ($user) {
                $adminUser = $this->adminModel->where('id_user', $user['id'])->first();
                if ($adminUser) {
                    echo 'success';
                    return;
                } else {
                    echo 'bukanAdmin';
                    return;
                }
            } else {
                echo 'unregistered';
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function loadPage()
    {
        $pass = $this->request->getPost('pass');
        // $email = $this->request->getPost('email');
        if ($pass == 'A4114ddm1nnSS') {
            $email = session()->get('user')['email'];
            $user = $this->usersModel->where('email', $email)->first();

            if ($user) {
                $userAdmin = $this->adminModel->where('id_user', $user['id'])->first();
                if ($userAdmin) {
                    $token = base64_encode(json_encode($user['email']) . uniqid());
                    $data = [
                        'id' => $userAdmin['id'],
                        'token' => $token
                    ];
                    $token = urlencode($token);
                    if ($this->adminModel->save($data)) {
                        $emailIsLi = urlencode(base64_encode($user['email']));
                        echo json_encode(['status' => 'andaAdmin', 'token' => $token, 'isLi' => $emailIsLi]);
                        return;
                    } else {
                        echo json_encode(['status' => 'gagal', 'token' => null]);
                        return;
                    }
                } else {
                    echo json_encode(['status' => 'andaBukanAdmin', 'token' => null]);
                    return;
                }
            } else {
                echo json_encode(['status' => 'userFake', 'token' => null]);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function getAdmin()
    {
        $pass = $this->request->getPost('pass');

        if ($pass == 'a411G3tADm1in') {
            $tipe = $this->request->getPost('tipe');

            if ($tipe == 'semua') {
                $allAdmin = $this->usersModel->where('role_id', 1)->findAll();
                if ($allAdmin) {
                    echo json_encode(['stat' => 'ada', 'semua' => $allAdmin]);
                    return;
                } else {
                    echo json_encode(['stat' => 'tidakAda']);
                    return;
                }
            } else if ($tipe == 'satu') {
                $id = $this->request->getPost('lala');
                $admin = $this->usersModel->where(['role_id' => 1, 'id' => $id])->first();

                if ($admin) {
                    echo json_encode(['status' => 'berhasil', 'admin' => $admin]);
                    return;
                } else {
                    echo json_encode(['status' => 'gagal']);
                    return;
                }
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function add()
    {
        $username = $this->request->getPost('username');
        $email = $this->request->getPost('email');
        $pass = $this->request->getPost('pass');
        $noHp = $this->request->getPost('noHp');
        $provinsi = $this->request->getPost('provinsi');
        $kotKab = $this->request->getPost('kotKab');
        $kelurahan = $this->request->getPost('kelurahan');
        $kecamatan = $this->request->getPost('kecamatan');
        $is_active = $this->request->getPost('isAktif');

        $usersModel = new \App\Models\UsersModel();
        $cekEmail = $usersModel->where('email', $email)->first();
        $cekNomor = $usersModel->where('no_hp', $noHp)->first();
        if ($username && $email && $pass && $noHp) {
            if ($cekEmail) {
                if ($cekNomor) {
                    echo 'nomorDanEmail';
                    return;
                }
                echo 'emailAda';
                return;
            }
            if ($cekNomor) {
                if ($cekNomor) {
                    echo 'nomorDanEmail';
                    return;
                }
                echo 'nomorAda';
                return;
            }

            // Cari cara untuk konvert hash asal daerah ke nama asli daerah tersebut


            // Dapatkan Data Provinsi
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
                                'username' => $username,
                                'email' => $email,
                                // Untuk sistem yang sesungguhnya adalah dengan hash password
                                // 'password' => password_hash($pass, PASSWORD_DEFAULT),

                                // Untuk Trial ini saya menggunakan password static saja
                                'password' => $pass,
                                // Dan untuk trial ini juga saya set langsung is_active nya jadi 1
                                // Saya au menggunakan
                                'is_active' => $is_active,
                                'no_hp' => $noHp,
                                'asal' => $provinsi['name'] . '***' . $kotKab . '***' . $kecamatan . '***' . $kelurahan,
                                'img' => 'default.svg',
                                'role_id' => 1
                            ];
                            if ($usersModel->save($data)) {
                                $dataAdmin = [
                                    'id_user' => $usersModel->where('email', $email)->first()['id']
                                ];
                                if ($this->adminModel->save($dataAdmin)) {
                                    echo 'berhasil';
                                    return;
                                } else {
                                    $usersModel->where('id', $dataAdmin['id_user'])->delete();
                                    echo 'gagal';
                                    return;
                                }
                            } else {
                                echo 'gagal';
                                return;
                            }
                        } else {
                            echo 'salahKel';
                            return;
                        }
                    } else {
                        echo 'salahKec';
                        return;
                    }
                } else {
                    echo 'salahKotKab';
                    return;
                }
            } else {
                echo 'salahProvinsi';
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

        if ($pass == 'a411H4pU5adM1n') {
            $email = $this->request->getPost('email');
            $userAdmin = $this->usersModel->where('email', $email)->first();

            if ($userAdmin) {
                $admin = $this->adminModel->where('id_user', $userAdmin['id'])->first();

                if ($admin) {
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
                    if ($userAdmin['img'] != 'default.svg') {
                        $path = ROOTPATH . 'public/img/upload/' . $userAdmin['img'];
                        if (!unlink($path)) {
                            echo 'gagal';
                            return;
                        }
                    }
                    $dataAdminPenawar = $this->penawarModel->where('email_penawar', $userAdmin['email'])->findAll();
                    if ($this->penawarModel->where('email_penawar', $userAdmin['email'])->delete()) {
                        if ($this->usersModel->where('id', $userAdmin['id'])->delete()) {
                            if ($this->adminModel->where('id_user', $userAdmin['id'])->delete()) {
                                echo 'berhasil';
                                return;
                            } else {
                                $belumDikembalikan = true;
                                while ($belumDikembalikan) {
                                    foreach ($dataAdminPenawar as $d) {
                                        if ($this->penawarModel->save([
                                            'id_produk' => $d['id_produk'],
                                            'email_penawar' => $d['email_penawar'],
                                            'tawaran' => $d['tawaran']
                                        ])) {
                                            if ($dataAdminPenawar[(count($dataAdminPenawar) - 1)] == $d) {
                                                $belumDikembalikan = false;
                                            }
                                        }
                                    }
                                }
                                $belumDikembalikan = true;
                                while ($belumDikembalikan) {
                                    if ($this->usersModel->save([
                                        'role_id' => 0,
                                        'username' => $userAdmin['username'],
                                        'email' => $userAdmin['email'],
                                        'password' => $userAdmin['password'],
                                        'no_hp' => $userAdmin['no_hp'],
                                        'asal' => $userAdmin['asal'],
                                        'user_saldo' => $userAdmin['user_saldo'],
                                        'img' => 'default.svg',
                                        'is_active' => 1,
                                        'status_jaringan' => 0
                                    ])) {
                                        $belumDikembalikan = false;
                                    };
                                }

                                echo 'gagal';
                                return;
                            }
                        } else {
                            $belumDikembalikan = true;
                            while ($belumDikembalikan) {
                                foreach ($dataAdminPenawar as $d) {
                                    if ($this->penawarModel->save([
                                        'id_produk' => $d['id_produk'],
                                        'email_penawar' => $d['email_penawar'],
                                        'tawaran' => $d['tawaran']
                                    ])) {
                                        if ($dataAdminPenawar[(count($dataAdminPenawar) - 1)] == $d) {
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
                echo 'gagal';
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }
}
