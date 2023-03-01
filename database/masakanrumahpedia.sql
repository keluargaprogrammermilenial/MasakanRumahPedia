-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Feb 2023 pada 21.53
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `masakanrumahpedia`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `token` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `id_user`, `token`) VALUES
(1, 15, 'ImFkbWluMTIzQG1hc2FrYW5ydW1haHBlZGlhLmNvbSI2M2ZiNmU1YzhjY2Fj'),
(10, 19, 'Im5ibGFkbWluQG1hc2FrYW5ydW1haHBlZGlhLmNvbSI2MzQ5NzcyMzU5OGNh');

-- --------------------------------------------------------

--
-- Struktur dari tabel `penawar`
--

CREATE TABLE `penawar` (
  `id` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `email_penawar` varchar(255) NOT NULL,
  `tawaran` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `penawar`
--

INSERT INTO `penawar` (`id`, `id_produk`, `email_penawar`, `tawaran`) VALUES
(9, 100, 'amirsmpn150@gmail.com', 150000),
(27, 92, 'amirsmpn150@gmail.com', 150000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `nama_user` varchar(255) NOT NULL,
  `nama_produk` varchar(255) NOT NULL,
  `harga_awal` varchar(255) NOT NULL,
  `deskripsi_produk` varchar(1000) NOT NULL,
  `stok_produk` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `status` int(1) NOT NULL,
  `kadaluarsa` datetime NOT NULL,
  `pemenang` varchar(255) NOT NULL,
  `email_pemenang` varchar(255) NOT NULL,
  `tawaran_pemenang` int(11) NOT NULL,
  `is_active` int(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id`, `email_user`, `nama_user`, `nama_produk`, `harga_awal`, `deskripsi_produk`, `stok_produk`, `img`, `status`, `kadaluarsa`, `pemenang`, `email_pemenang`, `tawaran_pemenang`, `is_active`, `created_at`, `updated_at`) VALUES
(10, 'salamRockyBhai@gmail.com', 'Rocky', 'Ikan Goreng', '15000', 'Enak', 2, 'ikan_goreng.png', 2, '2022-07-05 11:44:58', 'Amir150', '', 150000, 1, '2022-07-05 11:44:58', '2023-02-26 21:49:19'),
(55, 'coba@gmail.com', 'Rudy', 'Kebuli khas Arabia', '15000', 'Kebuli ayam khas arabia. Daging sweet enak kelas atas harga rendah pas buat kamu. Stok banyak guys...', 11, '62dacb54608be1658506068_6c40ac116651c0a41459.png', 1, '2024-08-28 06:10:00', '', '', 0, 1, '2022-07-22 11:07:48', '2023-02-26 16:30:59'),
(56, 'coba@gmail.com', 'Rudy', 'Cireng bandung di jakarta timur', '14000', 'Enak betul ini cireng... Crispy guys. Silahkan dibeli', 7, '62dacba252cf51658506146_0a002002ba5fde2ef5eb.png', 1, '2023-09-29 23:59:00', '', '', 0, 1, '2022-07-22 11:09:06', '2023-02-26 16:31:44'),
(84, 'faris123@gmail.com', 'Faris', 'Sate kambing enak', '15000', 'Enak', 1, '63138f721742c1662226290_c52ae323bd7b09b23bc3.jpg', 2, '2022-09-22 06:37:00', 'Nabil', 'nbl@gmail.com', 1000000, 1, '2022-09-04 00:31:30', '2023-02-26 21:49:19'),
(86, 'faris123@gmail.com', 'Faris', 'Ayam Shawarma', '150000', '1 ekor paling murah 150000. Paling akhir tanggal 30 bulan september 2022 ya guys!!! Ingat jangan mau kalah, tawar langsung 2jt guys. Ini ayam spesial banget buatan dirumah. Bismillah, langsoongg Tawar!!!', 1, '63139fd1574a21662230481_de186be266b0824321bc.jpg', 1, '2023-03-17 12:44:00', '', '', 0, 1, '2022-09-04 01:41:21', '2023-02-26 16:37:07'),
(87, 'faris123@gmail.com', 'Faris', 'Ayam Goreng Delicious', '150000', 'Sedaaappp Sekali... Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis.', 1, '6313a02f4c1131662230575_b068bb730a9aa70448c4.png', 0, '2023-02-26 16:37:00', '', '', 0, 1, '2022-09-04 01:42:55', '2023-02-26 16:37:43'),
(88, 'faris123@gmail.com', 'Faris', 'Cireng Pedes Mantepppp', '12000', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis.', 1, '6313a068e2e921662230632_53c651870ece3a0e7bcc.png', 0, '2023-02-26 16:37:00', '', '', 0, 1, '2022-09-04 01:43:52', '2023-02-26 16:37:59'),
(89, 'faris123@gmail.com', 'Faris', 'Kebuliii Kambenggg', '150000', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis.', 1, '6313a0a1cbaf41662230689_46edec74eef7ec001b86.png', 3, '2022-10-11 02:45:00', '', '', 0, 1, '2022-09-04 01:44:49', '2023-02-26 21:49:19'),
(90, 'faris123@gmail.com', 'Faris', 'Ikan bakar', '645000', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis.Langsung ae', 1, '6313a0e819f971662230760_332b32f1eac3bd9e8a33.jpg', 0, '2022-09-04 01:46:00', '', '', 0, 1, '2022-09-04 01:46:00', '2022-09-04 01:46:00'),
(91, 'coba@gmail.com', 'Rudy', 'Ikan Goreng Cak Ikin', '12000', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis. Enaaakkkkk', 1, '6313a195df3421662230933_db2fe045f3c99b3d182e.jpg', 1, '2024-05-31 07:55:00', '', '', 0, 1, '2022-09-04 01:48:53', '2023-02-26 16:32:34'),
(92, 'coba@gmail.com', 'Rudy', 'Hokben Rumahan bro, sedep bener', '123000', 'Ayo, hokben sepanci. Langsung dibeli aja. Pusing2 semua ilang. Perut pasti kenyang. Alias yang pasti bikin hati senang nan tenang. Langsung kasih tawaran, berjuanglah untuk mendapatkan hokben ini. Ini lebih empuk dan enak daripada hokben asli lohhh', 1, '6313a1e2f39141662231011_e8ff641c247c71f3cdca.jpg', 1, '2024-02-17 04:11:00', '', '', 0, 1, '2022-09-04 01:50:11', '2023-02-26 16:32:58'),
(93, 'coba@gmail.com', 'Rudy', 'Krengsengan Kambing', '150000', 'Bumbu Coklat!!!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis.', 1, '6313a21c5d4591662231068_5cd04a2b702c1007e053.jpg', 1, '2024-06-28 04:59:00', '', '', 0, 1, '2022-09-04 01:51:08', '2023-02-26 16:32:03'),
(94, 'coba@gmail.com', 'Rudy', 'Hainan Cak ikin, langsung dibeli', '150000', 'Enak Banget!!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis.', 1, '6313a262b08881662231138_4ee5fed7d2901e6753eb.png', 1, '2024-10-26 07:59:00', '', '', 0, 1, '2022-09-04 01:52:18', '2023-02-26 16:31:22'),
(95, 'coba@gmail.com', 'Rudy', 'Ayam Goreng Kecap', '25000', 'Enak sekali pemirsa, silahkan diambil cepeettt. Langsung berikan tawaran terkuat. Ini baru mateng dan masih panas. Wennnak pasti...', 1, '6313a2928d02b1662231186_9a999000f2e20ab4daeb.png', 1, '2023-07-20 00:04:00', '', '', 0, 1, '2022-09-04 01:53:06', '2022-10-15 22:04:12'),
(96, 'salamRockyBhai@gmail.com', 'Rocky', 'Nasgor Mantep, ACHA2 chef Rocky KGF Punya', '150000', 'Mantep nggak?\n Mantep nggak??\n  Mantep lahhh... Masa ennggaak....', 1, '6313a39adb5231662231450_834968a2793050192f26.png', 1, '2023-09-15 07:00:00', '', '', 0, 1, '2022-09-04 01:57:30', '2023-02-26 16:34:13'),
(97, 'salamRockyBhai@gmail.com', 'Rocky', 'Enak bener bro!!! Ini Ayam empuk + kentang!!', '150000', 'Enak', 1, '6313a45c610d01662231644_cf1fd5553d77b0259ef7.png', 1, '2023-11-10 07:00:00', '', '', 0, 1, '2022-09-04 02:00:44', '2023-02-26 16:33:51'),
(99, 'salamRockyBhai@gmail.com', 'Rocky', 'Mie Kuah home made, langsung aja', '95000', 'Enak', 2, '6313a645e94641662232133_35ff3944a3f85f9a549f.jpg', 2, '2022-12-02 08:28:00', 'Amir A.B', 'amirsmpn150@gmail.com', 100000, 1, '2022-09-04 02:08:53', '2023-02-26 21:49:19'),
(100, 'salamRockyBhai@gmail.com', 'Rocky', 'Mi Cak lan tapi Berkuah', '35000', 'Langsung dibeli, ini mienya', 1, '6313a6897e07c1662232201_d52a99fa7d8d7bbf90e8.jpg', 1, '2023-12-09 08:12:00', '', '', 0, 1, '2022-09-04 02:10:01', '2022-09-04 02:10:01'),
(101, 'nbl@gmail.com', 'Nabil Admin', 'Gado2 Sayur, langsung aja bro', '500000', 'Enak banget loh.... Langsung dibeli, ini Gado2nya', 1, '6313a6e64006e1662232294_771459e189d3a01c7ca7.jpg', 2, '2023-01-18 06:12:00', 'Zulkarn', 'zul303@gmail.com', 705000, 1, '2022-09-04 02:11:34', '2023-02-26 21:49:19'),
(102, 'nbl@gmail.com', 'Nabil Admin', 'Steak Mantep Bro', '2500000', 'Langsung dibeli, ini Steaknya. Bener weennnak', 1, '6313a73e555841662232382_25e486be9dcb90b5c2ee.jpg', 2, '2022-12-14 22:22:00', 'Zulkarn', 'zul303@gmail.com', 2500000, 1, '2022-09-04 02:13:02', '2023-02-26 21:49:19'),
(103, 'amirsmpn150@gmail.com', 'Amir A', 'Mie Udang sepanci juga', '160000', 'Langsung aja. Langsung TAWAR terus langsung makannnnn', 1, '6313a7c99e1d61662232521_842ffe24b5b4c9cdbeca.jpg', 0, '2022-10-06 00:23:00', '', '', 0, 1, '2022-09-04 02:15:21', '2022-10-18 10:16:03'),
(104, 'amirsmpn150@gmail.com', 'Amir A', 'Telur mata sapi plus roti serasa burger Amerika', '170000', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nemo facere aperiam unde, libero, minus earum sint ea possimus voluptatibus suscipit rerum adipisci distinctio totam, alias doloremque fuga blanditiis.', 1, '6313a81a966e81662232602_8b3021054f45908a532d.jpg', 2, '2022-11-25 07:18:00', 'Zulkarn', 'zul303@gmail.com', 200000, 1, '2022-09-04 02:16:42', '2023-02-26 21:49:19'),
(109, 'nbl@gmail.com', 'Nabil Admin', 'Bakpao Enak', '5000', 'Enak broooo', 1, '6330894b557d71664125259_fc7d7ce20cd06e1663ca.jpg', 1, '2023-06-30 20:35:00', '', '', 0, 1, '2022-09-26 00:00:59', '2023-02-26 16:35:17'),
(110, 'amirsmpn140@gmail.com', 'Amir', 'Waffle Coklat Lumerr Madu', '22000', 'Enak banger, waffle dengan coklat dan madu yang lumer membuat hati dan pikiran menjadi tenang. Dan tidak luput pula untuk menentramkan perut yang lapar.', 1, '63399a192e2e91664719385_fe9abc585a7478884cfe.jpg', 3, '2023-01-25 04:45:00', '', '', 0, 1, '2022-10-02 21:03:05', '2023-02-26 21:49:19'),
(111, 'admin123@masakanrumahpedia.com', 'Admin1 Pedia', 'PRoduk Admin', '15000', 'Enak', 1, '63442c4ea8b931665412174_26d10a794d6d4f6dd488.jpg', 0, '2022-10-18 00:31:00', '', '', 0, 1, '2022-10-10 21:29:34', '2022-10-18 00:31:06'),
(122, 'admin123@masakanrumahpedia.com', 'Admin1 Pedia', 'Ayam', '15000', 'Enak ayamnya', 1, '634df2ecef0e61666052845_adc7cf3b97bca23a3bff.png', 2, '2022-10-18 07:31:00', 'Amir A.B', 'amirsmpn150@gmail.com', 25000, 1, '2022-10-18 07:27:25', '2023-02-26 21:49:19'),
(125, 'keluarga.programmer.milenial@gmail.com', 'Keluarga Programmer Milenial', 'Roti Baguette Roti Lexus', '12000', 'Enak', 1, '63fb5b289205c1677417256_c2f0b7033bb66dd2ee41.png', 0, '2023-02-26 20:14:00', '', '', 0, 1, '2023-02-26 20:14:16', '2023-02-26 21:38:08'),
(126, 'keluarga.programmer.milenial@gmail.com', 'Keluarga Programmer Milenial', 'Roti isi Ayam', '1500', 'Pake gambar roti gpp lah ya...', 3, '63fb5b47048b21677417287_d947ed8f5e6cfc815727.png', 1, '2023-04-15 00:15:00', '', '', 0, 1, '2023-02-26 20:14:47', '2023-02-26 21:38:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role_id` int(1) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `no_hp` varchar(255) NOT NULL,
  `asal` varchar(255) NOT NULL,
  `user_saldo` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `is_active` int(1) NOT NULL,
  `status_jaringan` int(1) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `role_id`, `username`, `email`, `password`, `no_hp`, `asal`, `user_saldo`, `img`, `is_active`, `status_jaringan`, `created_at`) VALUES
(1, 0, 'Amir A', 'amirsmpn150@gmail.com', '12345', '081222112122', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 7847000, '630e29cd0e5fb1661872589_aa0fd49c20b704341251.png', 1, 0, '2022-06-28 10:27:30'),
(2, 0, 'Amir', 'amirsmpn140@gmail.com', '12345', '123455555555', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 1953000, '631247575af8a1662142295_bbc56a9e05b117f1c14e.png', 1, 0, '2022-06-29 08:20:48'),
(3, 0, 'Nabil Admin', 'nbl@gmail.com', '12345', '812812718211', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 23090000, '630fb8ddc27891661974749_9f22d2ece6faef908348.png', 1, 0, '2022-06-30 13:01:52'),
(4, 0, 'Rocky', 'salamRockyBhai@gmail.com', '12345', '081921345652', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 6256000, '6313968b093491662228107_29ee472c756a97c0b825.jpg', 1, 1, '2022-07-02 01:00:31'),
(5, 0, 'Aldo Faris', 'faris@gmail.com', '12345', '071', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 0, '634a77788e3911665824632_b8200d570b4a79c80b32.png', 1, 0, '2022-07-05 02:00:57'),
(6, 0, 'Faris', 'faris123@gmail.com', 'waladi', '081256754', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 10895000, '62d4a4714c0b21658102897_4576d8932df4932e2a6c.png', 1, 0, '2022-07-06 08:41:29'),
(7, 0, 'Rudy', 'coba@gmail.com', '12345', '08125512625', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 30000, '62e40b474e3401659112263_2e7f42acbcd23322a089.jpg', 1, 1, '2022-07-20 12:39:25'),
(10, 0, 'Cak Ikin', 'ikin@gmail.com', '12345', '123456901234', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CAWANG', 0, 'default.svg', 1, 0, '2022-09-06 00:32:40'),
(13, 0, 'Zulkarn', 'zul303@gmail.com', '1234', '081726178272', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***CILILITAN', 0, '6327365c9ccc61663514204_40fd707950761ceebd39.png', 1, 0, '2022-09-16 00:51:32'),
(15, 1, 'Admin1 Pedia', 'admin123@masakanrumahpedia.com', 'admin123', '081772899323', 'DI YOGYAKARTA***KABUPATEN KULON PROGO***KALIBAWANG***BANJARARUM', 325000, '63497d2fcfaa81665760559_58fa2f0392d560b241a6.png', 1, 1, '2022-09-27 15:10:37'),
(19, 1, 'Nabil Admin', 'nbladmin@masakanrumahpedia.com', 'Waladi123', '08172712811', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***KRAMAT JATI', 0, '634a657cacb531665820028_88abb93c0db8458a7216.png', 1, 0, '2022-10-09 20:02:03'),
(30, 0, 'Doddy Supriadi', 'doddy@gmail.com', '12345', '081721212121', 'DKI JAKARTA***KOTA JAKARTA BARAT***KEBON JERUK***DURI KEPA', 0, 'default.svg', 0, 0, '2022-10-16 17:00:47'),
(31, 0, 'Baba Ali', 'baba.ali@gmail.com', 'qwerty12345', '081762828323', 'DKI JAKARTA***KOTA JAKARTA BARAT***TAMAN SARI***MAPHAR', 0, 'default.svg', 1, 0, '2023-02-26 16:40:01'),
(32, 0, 'Amir', 'amir@amir.com', 'amir', '081623882838', 'JAWA TIMUR***KABUPATEN MADIUN***MADIUN***GUNUNGSARI', 0, 'default.svg', 1, 0, '2023-02-26 16:41:55'),
(33, 0, 'Keluarga Programmer Milenial', 'keluarga.programmer.milenial@gmail.com', '12345', '081626262727', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***KRAMAT JATI', 20000, '63fb67e72013f1677420519_639245c326af561177b0.png', 1, 0, '2023-02-26 19:26:05'),
(34, 0, 'Amir Keren di KPM', 'amir.kpm@gmail.com', '12345', '081234447812', 'DKI JAKARTA***KOTA JAKARTA TIMUR***KRAMAT JATI***BALE KAMBANG', 0, '63fb6f99addd31677422489_e0f965e6311e4563cda3.png', 1, 0, '2023-02-26 21:40:55');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `penawar`
--
ALTER TABLE `penawar`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_produk` (`email_user`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uc_users` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `penawar`
--
ALTER TABLE `penawar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `FK_produk` FOREIGN KEY (`email_user`) REFERENCES `users` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
