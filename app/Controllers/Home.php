<?php

namespace App\Controllers;

class Home extends BaseController
{

    public function index()
    {
        return view('app/app');
    }

    public function sendMail()
    {
        // Untuk sementara saya echo dan return saja dulu bahwa email sudah terkirim
        echo 'berhasil';
        return;

        // Untuk trial/lomba ini saya tidak menggunakan sistem kirim email. Tetapi saya sudah membuat contoh pengiriman email dengan ajax di javascript menggunakan Codeigniter4. Berikut contoh kode saya
        // $name = $this->request->getVar('name');
        // $emailUser = $this->request->getVar('email');
        // $message = $this->request->getVar('pesan');
        // // Cek, apakah ada isinya
        // if (!$name || !$emailUser || !$message) {
        //     echo 'empty';
        //     return;
        // }

        // if ($this->sendUserSuccess($emailUser) == false) {
        //     echo "not-registered";
        //     return;
        // }
        // // Load library email
        // $email = \Config\Services::email();

        // // Configure email

        // $config = [
        //     'protocol' => '',
        //     'SMTPHost' => '',
        //     'SMTPUser' => '',
        //     'SMTPPass' => '',
        //     'SMTPPort' => '',
        //     'SMTPCrypto' => '',
        //     'mailType' => ''
        // ];

        // $email->initialize($config);
        // $email->setFrom($emailUser, $name);
        // $email->setTo('emailsaya@gmail.com');
        // $email->setSubject('Pesan Dari Masakan Rumah Pedia');
        // $email->setMessage($message);


        // if ($email->send()) {
        //     echo "berhasil";
        // } else {
        //     echo "gagal";
        // }
    }

    private function sendUserSuccess($emailUser)
    {
        // Load library email
        // $email = \Config\Services::email();

        // // Configure email
        // $config = [
        //     'protocol' => '',
        //     'SMTPHost' => '',
        //     'SMTPUser' => '',
        //     'SMTPPass' => '',
        //     'SMTPPort' => '',
        //     'SMTPCrypto' => '',
        //     'mailType' => ''
        // ];

        // $email->initialize($config);
        // $email->setFrom('Masakan Rumah Pedia', 'masakanrumahpedia.com');
        // $email->setTo($emailUser);
        // $email->setSubject('Pesan Kamu Berhasil Terkirim!');
        // $email->setMessage('Pesan Kamu Berhasil Terkirim.. Terima Kasih Ya... Tunggu Respon Kami Kembali.. Jika Masih Belum Ada Respon, Lebih Baik Kamu Kontak Kami Melalui Aplikasi WA. <a href="https://wa.me/+62895403246123" class="btn btn-primary">Klik Disini!</a>');

        // if ($email->send()) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    public function apiDaerahIndonesia()
    {
        // $path = ROOTPATH . 'public/json/api_daerah_indonesia/api/provinces.json';
        // $data = file_get_contents($path);
        // $hash = [];

        // $data = json_decode($data);


        // foreach ($data as $d) {
        //     $hash[] = password_hash($d->id, PASSWORD_DEFAULT);
        // }

        // d($data);
        // dd(password_verify('12', $hash[1]));

        $pass = $this->request->getPost('pass');
        $mauGetApa = $this->request->getPost('tipe');
        if ($pass == 'AG3TD43RAHinD0N3S1A') {
            if ($mauGetApa == 'provinsi') {
                // https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json
                $path = ROOTPATH . 'public/json/api_daerah_indonesia/api/provinces.json';
                $data = file_get_contents($path);
                $hash = [];

                $data = json_decode($data);


                foreach ($data as $d) {
                    $hash[] = password_hash($d->id, PASSWORD_DEFAULT);
                }
                echo json_encode(["api" => $data, "hash" => $hash]);
                return;
            } else if ($mauGetApa == 'kota/kabupaten') {
                // https: //emsifa.github.io/api-wilayah-indonesia/api/regencies/{provinceId}.json

                $provinsiId = $this->request->getPost('HELLo');

                // Periksa apakah hash diubah atau tidak?
                $path = ROOTPATH . 'public/json/api_daerah_indonesia/api/provinces.json';
                $data = file_get_contents($path);
                $data = json_decode($data);
                $cek = false;
                for ($i = 0; $i < count($data); $i++) {
                    if (password_verify($data[$i]->id, $provinsiId)) {
                        $cek = true;
                        $provinsiId = $data[$i]->id;
                        break;
                    }
                }

                if ($cek) {
                    $path = ROOTPATH . "public/json/api_daerah_indonesia/api/regencies/{$provinsiId}.json";
                    $data = file_get_contents($path);
                    $hash = [];

                    $data = json_decode($data);


                    foreach ($data as $d) {
                        $hash[] = password_hash($d->id, PASSWORD_DEFAULT) . '\^23^^1/' .  password_hash($d->province_id, PASSWORD_DEFAULT);
                    }
                    echo json_encode(["api" => $data, "hash" => $hash]);
                    return;
                }
            } else if ($mauGetApa == 'kecamatan') {
                // https://emsifa.github.io/api-wilayah-indonesia/api/districts/{regencyId}.json
                $kotKabId = $this->request->getPost('HELLo');
                $provinsiId = explode('\^23^^1/', $kotKabId)[1];
                $kotKabId = explode('\^23^^1/', $kotKabId)[0];


                // Periksa apakah hash diubah atau tidak?
                $path = ROOTPATH . "public/json/api_daerah_indonesia/api/provinces.json";
                $data = file_get_contents($path);
                $data = json_decode($data);
                $cek = false;


                for ($i = 0; $i < count($data); $i++) {
                    if (password_verify($data[$i]->id, $provinsiId)) {
                        $cek = true;
                        $provinsiId = $data[$i]->id;
                        break;
                    }
                }


                if ($cek) {
                    $path = ROOTPATH . "public/json/api_daerah_indonesia/api/regencies/{$provinsiId}.json";
                    $data = file_get_contents($path);
                    $data = json_decode($data);

                    $cek = false;

                    foreach ($data as $d) {
                        if (password_verify($d->id, $kotKabId)) {
                            $cek = true;
                            $kotKabId = $d->id;
                            break;
                        }
                    }

                    $path = ROOTPATH . "public/json/api_daerah_indonesia/api/districts/{$kotKabId}.json";
                    $data = file_get_contents($path);
                    $data = json_decode($data);
                    $hash = [];

                    foreach ($data as $d) {
                        $hash[] = password_hash($d->id, PASSWORD_DEFAULT) . '\^411^^1/' . password_hash($d->regency_id, PASSWORD_DEFAULT) . '\lla828**!!police--' . password_hash($provinsiId, PASSWORD_DEFAULT);
                    }

                    echo json_encode(['api' => $data, 'hash' => $hash]);
                    return;
                }
            } else if ($mauGetApa == 'kelurahan') {

                // https://emsifa.github.io/api-wilayah-indonesia/api/districts/{regencyId}.json
                $kecId = $this->request->getPost('HELLo');
                $provinsiId = explode('\lla828**!!police--', $kecId)[1];
                $kotKabId = explode('\^411^^1/', $kecId)[1];
                $kotKabId = explode('\lla828**!!police--', $kotKabId)[0];
                $kecId = explode('\^411^^1/', $kecId)[0];


                // Periksa apakah hash diubah atau tidak?

                // Periksa apakah hash diubah atau tidak?
                $path = ROOTPATH . "public/json/api_daerah_indonesia/api/provinces.json";
                $data = file_get_contents($path);
                $data = json_decode($data);
                $cek = false;


                for ($i = 0; $i < count($data); $i++) {
                    if (password_verify($data[$i]->id, $provinsiId)) {
                        $cek = true;
                        $provinsiId = $data[$i]->id;
                        break;
                    }
                }


                if ($cek) {
                    $path = ROOTPATH . "public/json/api_daerah_indonesia/api/regencies/{$provinsiId}.json";
                    $data = file_get_contents($path);
                    $data = json_decode($data);
                    $cek = false;


                    for ($i = 0; $i < count($data); $i++) {
                        if (password_verify($data[$i]->id, $kotKabId)) {
                            $cek = true;
                            $kotKabId = $data[$i]->id;
                            break;
                        }
                    }

                    if ($cek) {
                        $path = ROOTPATH . "public/json/api_daerah_indonesia/api/districts/{$kotKabId}.json";
                        $data = file_get_contents($path);
                        $data = json_decode($data);

                        $cek = false;

                        foreach ($data as $d) {
                            if (password_verify($d->id, $kecId)) {
                                $cek = true;
                                $kecId = $d->id;
                                break;
                            }
                        }

                        $path = ROOTPATH . "public/json/api_daerah_indonesia/api/villages/{$kecId}.json";

                        $data = file_get_contents($path);
                        $data = json_decode($data);
                        $hash = [];

                        foreach ($data as $d) {
                            $hash[] = password_hash($d->id, PASSWORD_DEFAULT) . '\^411^^1/' . password_hash($d->district_id, PASSWORD_DEFAULT);
                        }

                        echo json_encode(['api' => $data, 'hash' => $hash]);
                        return;
                    }
                }
            }
        } else {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            return;
        }
    }
}
