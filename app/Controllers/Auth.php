<?php

namespace App\Controllers;

use Exception;

// use App\Controllers\Home;

use function PHPSTORM_META\type;

class Auth extends BaseController
{
    protected $usersModel;
    protected $produk2Model;

    public function __construct()
    {
        $this->usersModel = new \App\Models\UsersModel();
        $this->produk2Model = new \App\Models\Produk2Model();
    }

    public function index()
    {
        if ($this->request->getPost('pass') == "allo123") {
            echo view('auth/index');
            return;
        } else {
            return redirect()->to('/');
        }
    }

    public function register($is_admin = null)
    {
        $username = $this->request->getPost('username');
        $email = $this->request->getPost('email');
        $pass = $this->request->getPost('pass');
        $noHp = $this->request->getPost('noHp');
        $provinsi = $this->request->getPost('provinsi');
        $kotKab = $this->request->getPost('kotKab');
        $kelurahan = $this->request->getPost('kelurahan');
        $kecamatan = $this->request->getPost('kecamatan');

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
                                'no_hp' => $noHp,
                                'asal' => $provinsi['name'] . '***' . $kotKab . '***' . $kecamatan . '***' . $kelurahan,
                                'img' => 'default.svg',
                            ];
                            if ($is_admin) {
                                $is_active = $this->request->getPost('isAktif');
                                $data['is_active'] = ($is_active == 1) ? 1 : 0;
                            } else {
                                $data['is_active'] = 1;
                            }
                            if ($usersModel->save($data)) {
                                echo 'berhasil';
                                return;
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

    public function login()
    {
        $pass2 = $this->request->getPost('myHello');

        $is_admin = $this->request->getPost('is_admin');
        // $email = 'coba@gmail.com';
        // $pass = '12345';

        $usersModel = new \App\Models\UsersModel();


        if ($pass2 == 'HELLO WORLD') {
            $email = $this->request->getPost('email');
            $pass = $this->request->getPost('pass');
            // cek apakah user sudah ada didalam terdaftar!
            if(!$is_admin)
                $user = $usersModel->where(['email' => $email, 'role_id' => 0])->first();
            else 
                $user = $usersModel->where(['email' => $email, 'role_id' => 1])->first();
            if ($user) {
                // Cek apakah password benar
                // Untuk Trial/lomba ini saya tidak menggunakan hash dan verify tapi dengan perbandingan sederhana
                // if (password_verify($pass, $user['password'])) {
                if ($pass == $user['password']) {
                    // Cek apakah user aktif
                    if ($user['is_active'] == 1) {
                        // Ambil UI Produk kedua status(live dan selesai)
                        if ($user['status_jaringan'] == 0) {
                            $data = [
                                'id' => $user['id'],
                                'status_jaringan' => 1
                            ];
                            if ($this->usersModel->save($data)) {
                                $produkLive = $this->getAllProduk('live');
                                $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                                session()->set('logged_in', true);
                                session()->set('user', $user);
                                echo json_encode(['status' => 'berhasil', 'user' => session()->get('user'), 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
                                return;
                            } else {
                                echo json_encode(['status' => 'gagalOnline', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                                return;
                            }
                        } else {
                            echo json_encode(['status' => 'sudahOnline', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                            return;
                        }
                    } else {
                        echo json_encode(['status' => 'tidakActive', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                        return;
                    }
                } else {
                    echo json_encode(['status' => 'gagal', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                    return;
                }
            } else {
                echo json_encode(['status' => 'tidakAda', 'user' => null, 'produkLive' => null, 'produkNotLiveAwal' => null]);
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function is_logged_in()
    {
        $pass = $this->request->getPost('pass');

        if (session()->get('user')) {
            $user = $this->usersModel->where('email', session()->get('user')['email'])->first();
        }

        if ($pass == '$A411') {

            if (session()->get('logged_in')) {
                // Ambil UI Produk kedua status(live dan selesai)
                $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
                $produkLive = $this->getAllProduk('live');
                echo json_encode(['logged' => true, 'user' => $user, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
            } else
                echo json_encode(['logged' => false, 'user' => null, 'produkLive' => null, 'produkNotLive' => null]);
            return;
        } else if ($pass == 'A411') {
            if (session()->get('user'))
                echo json_encode(session()->get('user'));
            else
                echo false;
            return;
        } else if ($pass == 'A411LO6W1tH0uT_*2acC0u2t') {
            $produkNotLiveAwal = $this->getAllProduk('selesai', 4, 0);
            $produkLive = $this->getAllProduk('live');
            echo json_encode(['logged' => false, 'user' => null, 'produkLive' => $produkLive, 'produkNotLiveAwal' => $produkNotLiveAwal]);
            return;
        }

        // 403
        throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
        return;
    }

    public function logout()
    {
        $pass = $this->request->getPost('pass');
        if ($pass == "A411LOGOUT") {
            $userLogged = session()->get('user');
            if ($userLogged) {
                $data = [
                    'id' => $userLogged['id'],
                    'status_jaringan' => 0
                ];
                if ($this->usersModel->save($data)) {
                    session()->destroy();
                    echo 'berhasil';
                    return;
                } else {
                    throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
                    return;
                }
            } else {
                echo 'berhasil';
                return;
            }
        } else {
            // 403
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }

    public function lupaPassword()
    {
        $email = $this->request->getPost('email');
        $pass = $this->request->getPost('pass');
        $user = $this->usersModel->where('email', $email)->first();

        if ($pass == 'a411Lup45sW0RD"s') {
            if ($user) {
                $message = 'Password kamu adalah: ' . $user['password'] . '<br><a href="/">Klik disini untuk kembali ke situs Masakan Rumah Pedia</a>';
                $result = $this->sendMail($email, $message);
                if ($result == 'berhasil') {
                    echo $result;
                    return;
                } else {
                    echo $result;
                    return;
                }
                return;
            } else {
                echo 'userTidakTerdaftar';
                return;
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }




    // Private Function
    private function sendMail($emailUser, $message)
    {
        // Untuk sementara saya echo dan return saja dulu bahwa email sudah terkirim
        return 'berhasil';

        // Untuk trial/lomba ini saya tidak menggunakan sistem kirim email. Tetapi saya sudah membuat contoh pengiriman email dengan ajax di javascript menggunakan Codeigniter4. Berikut contoh kode saya

        // Load library email
        $email = \Config\Services::email();

        // Configure email

        $config = [
            'protocol' => 'smtp',
            'SMTPHost' => 'smtp.gmail.com',
            'SMTPUser' => 'mycalc411@gmail.com',
            'SMTPPass' => 'Waladi123',
            'SMTPPort' => 465,
            'SMTPCrypto' => 'ssl',
            'mailType' => 'html'
        ];

        $email->initialize($config);
        $email->setFrom('masakanrumahpedia.com', 'Masakan Rumah Pedia');
        $email->setTo($emailUser);
        $email->setSubject('Password Akun Masakan Rumah Pedia Kamu.');
        $email->setMessage($message);


        if ($email->send()) {
            return "berhasil";
        } else {
            return "gagal";
        }
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
