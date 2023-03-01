<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

    <!-- Dashboard / utama -->
    <div class="dashboard-utama">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Dashboard</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary">Dashboard</li>
                            <li class="breadcrumb-item active">Utama</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-6">
                        <!-- small box -->
                        <div class="small-box smallBoxMember bg-primary">
                            <div class="inner">
                                <h3 class="jmlMember">0</h3>

                                <p>Member Yang Terdaftar</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-user-plus"></i>
                            </div>
                            <a href="#" class="small-box-footer">Lihat <i class="fas fa-arrow-circle-right"></i></a>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-6 col-6">
                        <!-- small box -->
                        <div class="small-box smallBoxProduk bg-info">
                            <div class="inner">
                                <h3>0</h3>

                                <p>Produk Yang Terdaftar</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-shopping-bag"></i>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col">
                        <div class="small-box smallBoxFilterTahun">
                            <div class="inner">
                                <div class="row">
                                    <div class="col">
                                        <h3>Filter Tahun Skala</h3>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <select class="custom-select filterTahun mySelect" id="filterTahun" name="filterTahun" aria-describedby="smallSt">

                                            </select>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg">
                        <div class="card card-primary cardSkalaPendaftaran">
                            <div class="card-header">
                                <h3 class="card-title">Skala Pendaftaran Tahun Ini</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="chart">
                                    <canvas id="areaChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                                </div>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>

                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-md -->
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg">
                        <div class="card card-danger cardSkalaPenambahanProduk">
                            <div class="card-header">
                                <h3 class="card-title">Skala Penambahan Produk Lelang Tahun Ini</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="chart">
                                    <canvas id="skalaTambahProduk" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                                </div>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>

                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-md -->
                </div>
                <!-- /.row -->


            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content -->
    </div>
    <!-- ./Dasboard / utama -->

    <!-- Admin / List -->
    <div class="admin-list d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Admin</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary">Admin</li>
                            <li class="breadcrumb-item active">List Admin</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                    </div>
                </div>


                <div class="row mt-2">
                    <div class="col-sm-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control myInput form-control-border cariAdmin" placeholder="Cari">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuatCari fa-spin" style="opacity: 0; transition: .3s;"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row mt-2">
                    <div class="col-sm">
                        <div class="card text-center">
                            <div class="card-body">
                                <table class="table table-hover table-responsive-sm">
                                    <thead class="">
                                        <tr class="">
                                            <th scope="col">#</th>
                                            <th scope="col">Foto Profile</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Status & Produk</th>
                                            <th scope="col">Bergabung Sejak</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bodyListAdmin">
                                        <!-- <tr>
                                            <th scope="row">1</th>
                                            <td><img src="/img/upload/default.svg" alt="profile " width="100px" class="img-circle"></td>
                                            <td>Amir</td>
                                            <td>amirsmpn150@gmail.com</td>
                                            <td>Thornton</td>
                                            <td>1 Juni 2022</td>
                                        </tr> -->
                                    </tbody>
                                </table>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Admin / list -->

    <!-- Admin / Tambah -->
    <div class="admin-tambah d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Tambah Admin</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListAdmin cursor-pointer">Admin</li>
                            <li class="breadcrumb-item active">Tambah Admin</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="col text-center">
                                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                                    </div>
                                </div>
                                <!-- Switch Aktif -->
                                <div class="row mt-2">
                                    <div class="col-12 text-right">
                                        <div class="form-group">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input aktifAdmin" id="aktifAdmin" value="0">
                                                <label class="custom-control-label text-secondary" for="aktifAdmin">Aktif</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Username -->
                                <div class="row">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border usernameAdmin" placeholder="Username">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-user"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border emailAdmin" placeholder="Email">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-envelope"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="password" class="form-control myInput form-control-border passwordAdmin" placeholder="Password">
                                            <div class="input-group-append">
                                                <div class="input-group-text lihatPassword">
                                                    <span class="fas fa-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Telephone -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border telpAdmin" onkeypress="return hanyaAngka(event);" placeholder="Nomor Telepon">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-phone"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Asal -->
                                <div class="row justify-content-start mt-4">
                                    <div class="input-group">
                                        <div class="col-11">
                                            <div class="row">
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect provinces">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Provinsi</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect regencies">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kab/Kota</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect districts">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kecamatan</option> -->
                                                    </select>
                                                </div>

                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect villages">
                                                        <option selected class="mySelectOption" value="default-value">Kelurahan</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="input-group-append col-1">
                                            <div class="input-group-text iconLocation ml-auto">
                                                <span class="fas fa-map-marker-alt text-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col">
                                        <div class="mx-auto loaderApiDaerah"></div>
                                    </div>
                                </div>

                                <!-- Submit -->
                                <div class="row hButton mt-3">
                                    <div class="col-12">
                                        <button type="button" class="font-weight-bold btnTambahAdmin btn-auth btn-danger">Tambah!</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Admin / Tambah -->

    <!-- Admin / Detail -->

    <div class="admin-detail d-none">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Detail Admin</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary  backToListAdmin cursor-pointer">Admin</li>
                            <li class="breadcrumb-item active">Detail Admin</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card mb-3 p-3">
                            <div class="row no-gutters">
                                <div class="col-sm-4">
                                    <img src="/img/upload/default.svg" class="profileDetail" alt="profile" width="100%">
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-body bodyDetailAdminCard">

                                    </div>
                                </div>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Admin / Detail -->

    <!-- Admin / Edit -->
    <div class="admin-edit d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Edit Admin</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListAdmin cursor-pointer">Admin</li>
                            <li class="breadcrumb-item active">Edit Admin</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="col text-center">
                                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                                    </div>
                                </div>
                                <!-- Switch Aktif -->
                                <div class="row mt-2">
                                    <div class="col-12 text-right">
                                        <div class="form-group">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input aktifEditAdmin" id="aktifEditAdmin" value="0">
                                                <label class="custom-control-label text-secondary" for="aktifEditAdmin">Aktif</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Gambar -->
                                <input type="file" hidden class="imgFileEditAdmin">
                                <div class="row mt-2">
                                    <div class="col-12 text-center">
                                        <div class="conImgPreviewEditAdmin mx-auto rounded">
                                            <img src="" class="imgPreviewEditAdmin rounded" width="100%" alt="img profile">
                                        </div>
                                    </div>
                                </div>


                                <!-- Username -->
                                <div class="row mt-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border usernameEditAdmin" placeholder="Username">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-user"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" readonly class="form-control myInput form-control-border emailEditAdmin" placeholder="Email">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-envelope"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="password" class="form-control myInput form-control-border passwordEditAdmin" placeholder="Password Baru">
                                            <div class="input-group-append">
                                                <div class="input-group-text lihatPasswordEdit">
                                                    <span class="fas fa-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Password  Lama-->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="password" class="form-control myInput form-control-border passwordLamaEditAdmin" placeholder="Password Lama">
                                            <div class="input-group-append">
                                                <div class="input-group-text lihatPasswordLamaEdit">
                                                    <span class="fas fa-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Telephone -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border telpEditAdmin" onkeypress="return hanyaAngka(event);" placeholder="Nomor Telepon">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-phone"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Asal -->
                                <div class="row justify-content-start mt-4">
                                    <div class="input-group">
                                        <div class="col-11">
                                            <div class="row justify-content-left">
                                                <div class="col-sm-1 form-group mb-1 text-left justify-content-left">
                                                    <div class="custom-control custom-checkbox">
                                                        <input class="custom-control-input cbEditLokasi custom-control-input-danger" type="checkbox" id="cbEditLokasi" checked>
                                                        <label for="cbEditLokasi" class="custom-control-label"></label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-2 mb-1 d-none">
                                                    <select class="form-control mySelect provincesEditAdmin">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Provinsi</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect regenciesEditAdmin">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kab/Kota</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect districtsEditAdmin">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kecamatan</option> -->
                                                    </select>
                                                </div>

                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect villagesEditAdmin">
                                                        <option selected class="mySelectOption" value="default-value">Kelurahan</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="input-group-append col-1">
                                            <div class="input-group-text iconLocation ml-auto">
                                                <span class="fas fa-map-marker-alt text-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col">
                                        <div class="mx-auto loaderApiDaerahEditAdmin"></div>
                                    </div>
                                </div>

                                <!-- Submit -->
                                <div class="row hButton mt-3">
                                    <div class="col-12">
                                        <button type="button" class="font-weight-bold btnEditAdminBig btn-auth btn-danger">Edit!</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Admin / Edit -->

    <!-- Member / List -->
    <div class="member-list d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Member</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary">Member</li>
                            <li class="breadcrumb-item active">List Member</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-sm-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control myInput form-control-border cariMember" placeholder="Cari">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuatCari fa-spin" style="opacity: 0; transition: .3s;"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-sm">
                        <div class="card text-center">
                            <div class="card-body">
                                <table class="table table-hover table-responsive-sm">
                                    <thead class="">
                                        <tr class="">
                                            <th scope="col">#</th>
                                            <th scope="col">Foto Profile</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Status & Produk</th>
                                            <th scope="col">Bergabung Sejak</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bodyListMember">
                                        <!-- <tr>
                                            <th scope="row">1</th>
                                            <td><img src="/img/upload/default.svg" alt="profile " width="100px" class="img-circle"></td>
                                            <td>Amir</td>
                                            <td>amirsmpn150@gmail.com</td>
                                            <td>Thornton</td>
                                            <td>1 Juni 2022</td>
                                        </tr> -->
                                    </tbody>
                                </table>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Member / List -->

    <!-- Member / Tambah -->
    <div class="member-tambah d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Tambah Member</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListMember cursor-pointer">Member</li>
                            <li class="breadcrumb-item active">Tambah Member</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="col text-center">
                                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                                    </div>
                                </div>
                                <!-- Switch Aktif -->
                                <div class="row mt-2">
                                    <div class="col-12 text-right">
                                        <div class="form-group">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input aktifTambahMember" id="aktifTambahMember" value="0">
                                                <label class="custom-control-label text-secondary" for="aktifTambahMember">Aktif</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Username -->
                                <div class="row">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border usernameTambahMember" placeholder="Username">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-user"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border emailTambahMember" placeholder="Email">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-envelope"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="password" class="form-control myInput form-control-border passwordTambahMember" placeholder="Password">
                                            <div class="input-group-append">
                                                <div class="input-group-text lihatPasswordTambahMember">
                                                    <span class="fas fa-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Telephone -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border telpTambahMember" onkeypress="return hanyaAngka(event);" placeholder="Nomor Telepon">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-phone"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Asal -->
                                <div class="row justify-content-start mt-4">
                                    <div class="input-group">
                                        <div class="col-11">
                                            <div class="row">
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect provincesTambahMember">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Provinsi</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect regenciesTambahMember">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kab/Kota</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect districtsTambahMember">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kecamatan</option> -->
                                                    </select>
                                                </div>

                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect villagesTambahMember">
                                                        <option selected class="mySelectOption" value="default-value">Kelurahan</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="input-group-append col-1">
                                            <div class="input-group-text iconLocation ml-auto">
                                                <span class="fas fa-map-marker-alt text-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col">
                                        <div class="mx-auto loaderApiDaerahTambahMember"></div>
                                    </div>
                                </div>

                                <!-- Submit -->
                                <div class="row hButton mt-3">
                                    <div class="col-12">
                                        <button type="button" class="font-weight-bold btnTambahMember btn-auth btn-danger">Tambah!</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Member / Tambah -->

    <!-- Member / Detail -->

    <div class="member-detail d-none">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Detail Member</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListMember cursor-pointer">Member</li>
                            <li class="breadcrumb-item active">Detail Member</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card mb-3 p-3">
                            <div class="row no-gutters">
                                <div class="col-sm-4">
                                    <img src="/img/upload/default.svg" class="profileDetailMember" alt="profile" width="100%">
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-body bodyDetailMemberCard">

                                    </div>
                                </div>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Member / Detail -->

    <!-- Member / Edit -->
    <div class="member-edit d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Edit Member</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListMember cursor-pointer">Member</li>
                            <li class="breadcrumb-item active">Edit Member</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="col text-center">
                                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                                    </div>
                                </div>
                                <!-- Switch Aktif -->
                                <div class="row mt-2">
                                    <div class="col-12 text-right">
                                        <div class="form-group">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input aktifEditMember" id="aktifEditMember" value="0">
                                                <label class="custom-control-label text-secondary" for="aktifEditMember">Aktif</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Gambar -->
                                <input type="file" hidden class="imgFileEditMember">
                                <div class="row mt-2">
                                    <div class="col-12 text-center">
                                        <div class="conImgPreviewEditMember mx-auto rounded">
                                            <img src="" class="imgPreviewEditMember rounded" width="100%" alt="img profile">
                                        </div>
                                    </div>
                                </div>


                                <!-- Username -->
                                <div class="row mt-2">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border usernameEditMember" placeholder="Username">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-user"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" readonly class="form-control myInput form-control-border emailEditMember" placeholder="Email">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-envelope"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="password" class="form-control myInput form-control-border passwordEditMember" placeholder="Password Baru">
                                            <div class="input-group-append">
                                                <div class="input-group-text lihatPasswordEditMember">
                                                    <span class="fas fa-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Password  Lama-->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="password" class="form-control myInput form-control-border passwordLamaEditMember" placeholder="Password Lama">
                                            <div class="input-group-append">
                                                <div class="input-group-text lihatPasswordLamaEditMember">
                                                    <span class="fas fa-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Telephone -->
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input type="text" class="form-control myInput form-control-border telpEditMember" onkeypress="return hanyaAngka(event);" placeholder="Nomor Telepon">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="fas fa-phone"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Asal -->
                                <div class="row justify-content-start mt-4">
                                    <div class="input-group">
                                        <div class="col-11">
                                            <div class="row justify-content-left">
                                                <div class="col-sm-1 form-group mb-1 text-left justify-content-left">
                                                    <div class="custom-control custom-checkbox">
                                                        <input class="custom-control-input cbEditLokasiMember custom-control-input-danger" type="checkbox" id="cbEditLokasiMember" checked>
                                                        <label for="cbEditLokasiMember" class="custom-control-label"></label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-2 mb-1 d-none">
                                                    <select class="form-control mySelect provincesEditMember">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Provinsi</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect regenciesEditMember">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kab/Kota</option> -->
                                                    </select>
                                                </div>
                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect districtsEditMember">
                                                        <!-- <option selected class="mySelectOption" value="default-value">Kecamatan</option> -->
                                                    </select>
                                                </div>

                                                <div class="col-sm-3 mb-1 d-none">
                                                    <select class="form-control mySelect villagesEditMember">
                                                        <option selected class="mySelectOption" value="default-value">Kelurahan</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="input-group-append col-1">
                                            <div class="input-group-text iconLocation ml-auto">
                                                <span class="fas fa-map-marker-alt text-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-2">
                                    <div class="col">
                                        <div class="mx-auto loaderApiDaerahEditMember"></div>
                                    </div>
                                </div>

                                <!-- Submit -->
                                <div class="row hButton mt-3">
                                    <div class="col-12">
                                        <button type="button" class="font-weight-bold btnEditMemberBig btn-auth btn-danger">Edit!</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Member / Edit -->

    <!-- Produk / List -->
    <div class="produk-list d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 produkBreadCumbJudul">Produk</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListMemberOrAdmin cursor-pointer" data-tipe="">Produk</li>
                            <li class="breadcrumb-item active">List Produk</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row mt-2">
                    <div class="col-sm-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control myInput form-control-border cariProduk" placeholder="Cari" data-email="">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuatCari fa-spin" style="opacity: 0; transition: .3s;"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col text-center">
                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-sm">
                        <div class="card text-center card-primary card-tabs">
                            <div class="card-header p-0 pt-1">
                                <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active navLinkSemua" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Semua</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link navLinkLive" id="custom-tabs-one-live-tab" data-toggle="pill" href="#custom-tabs-one-live" role="tab" aria-controls="custom-tabs-one-live" aria-selected="false">Live</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link navLinkDraf" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Draf</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link navLinkTerjual" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Terjual</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link navLinkKadaluarsa" id="custom-tabs-one-settings-tab" data-toggle="pill" href="#custom-tabs-one-settings" role="tab" aria-controls="custom-tabs-one-settings" aria-selected="false">Kadaluarsa</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="custom-tabs-one-tabContent">
                                    <div class="tab-pane fade active show tabContentSemuaProduk" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                        <table class="table table-hover table-responsive-sm">
                                            <thead class="">
                                                <tr class="">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Gambar</th>
                                                    <th scope="col">Nama Produk</th>
                                                    <th scope="col">Harga Awal</th>
                                                    <th scope="col">Stok</th>
                                                    <th scope="col">Dibuat Sejak</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bodyListProduk">
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade tabContentLiveProduk" id="custom-tabs-one-live" role="tabpanel" aria-labelledby="custom-tabs-one-live-tab">
                                        <table class="table table-hover table-responsive-sm">
                                            <thead class="">
                                                <tr class="">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Gambar</th>
                                                    <th scope="col">Nama Produk</th>
                                                    <th scope="col">Harga Awal</th>
                                                    <th scope="col">Stok</th>
                                                    <th scope="col">Dibuat Sejak</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bodyListProduk">
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade tabContentDrafProduk" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                                        <table class="table table-hover table-responsive-sm">
                                            <thead class="">
                                                <tr class="">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Gambar</th>
                                                    <th scope="col">Nama Produk</th>
                                                    <th scope="col">Harga Awal</th>
                                                    <th scope="col">Stok</th>
                                                    <th scope="col">Dibuat Sejak</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bodyListProduk">
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade tabContentTerjualProduk" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                                        <table class="table table-hover table-responsive-sm">
                                            <thead class="">
                                                <tr class="">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Gambar</th>
                                                    <th scope="col">Nama Produk</th>
                                                    <th scope="col">Harga Awal</th>
                                                    <th scope="col">Stok</th>
                                                    <th scope="col">Dibuat Sejak</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bodyListProduk">
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade tabContentKadaluarsaProduk" id="custom-tabs-one-settings" role="tabpanel" aria-labelledby="custom-tabs-one-settings-tab">
                                        <table class="table table-hover table-responsive-sm">
                                            <thead class="">
                                                <tr class="">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Gambar</th>
                                                    <th scope="col">Nama Produk</th>
                                                    <th scope="col">Harga Awal</th>
                                                    <th scope="col">Stok</th>
                                                    <th scope="col">Dibuat Sejak</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bodyListProduk">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Produk / list -->

    <!-- Produk / Edit -->
    <div class="produk-edit d-none">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Edit Produk</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListProduk" data-email="">Produk</li>
                            <li class="breadcrumb-item active">Edit Produk</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="col text-center">
                                        <span width="10px" class="fas fa-1x changeColor fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
                                    </div>
                                </div>

                                <!-- Gambar -->
                                <input type="file" hidden class="imgFileProdukEdit">
                                <div class="row mt-2">
                                    <div class="col-12 text-center">
                                        <div class="conImgPreviewProdukEdit mx-auto rounded">
                                            <img src="/img/imageNotFound.png" class="imgPreviewProdukEdit rounded" width="100%" alt="img profile">
                                        </div>
                                    </div>
                                </div>


                                <!-- Nama -->
                                <div class="row mt-5">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="namaProduk">NAMA PRODUK</label>
                                            <input type="text" class="form-control myInput form-control-border namaProdukEdit" id="namaProduk" placeholder="Nama Produk">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-5">
                                    <!-- Harga -->
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="hargaAwal">HARGA AWAL</label>
                                            <input type="text" readonly class="form-control myInput form-control-border  hargaAwalEdit" id="hargaAwal" placeholder="Harga">
                                        </div>
                                    </div>

                                    <!-- Deskripsi -->
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="deskripsiP">DESKRIPSI PRODUK</label>
                                            <textarea type="text" class="form-control myInput form-control-border deskripsiProdukEdit" id="deskripsiP" placeholder="Deskripsi Produk"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-5">
                                    <!-- Stok -->
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="font-weight-bold" for="stokProdukEdit">STOK</label>
                                            <input type="number" class="myInput form-control stokProdukEdit" id="stokProdukEdit" placeholder="STOK" name="stokProdukEdit" value="1">
                                        </div>
                                    </div>

                                    <!-- Status -->
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="font-weight-bold" for="statusProdukEdit">STATUS</label>
                                            <select class="custom-select statusProdukEdit mySelect" id="statusProdukEdit" name="statusProdukEdit" aria-describedby="smallSt">
                                                <option selected class="mySelectOptionLangsung" value="langsung">Lelang langsung</option>
                                                <option value="dash" class="mySelectOptionDash">Simpan ke dashboard</option>
                                            </select>
                                            <small id="smallSt" class="form-text text-danger smallStatus d-none">Produk ini sedang live, jika kamu ubah status menjadi "simpan ke dashboard" maka semua penawar akan tertolak secara otomatis."</small>
                                        </div>
                                    </div>
                                </div>

                                <!-- Waktu -->
                                <div class="row mt-5">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="font-weight-bold" for="kadaluarsaProdukEdit">TANGGAL BERAKHIRNYA LELANG</label>
                                            <input type="date" class="form-control kadaluarsaProdukEdit myInput" id="kadaluarsaProdukEdit" aria-describedby="smallK">
                                            <small id="smallK" class="form-text text-danger smallKadaluarsa d-none">Tanggal akhir lelang kamu kadaluarsa. Ganti tanggal dan ubah status agar kamu dapat mengaktifkan lagi produk ini. Jika tidak perlu kamu bisa menghapus produk ini.</small>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="font-weight-bold" for="kadaluarsaProdukJamEdit">JAM BERAKHIRNYA LELANG</label>
                                            <input type="time" class="form-control kadaluarsaProdukJamEdit myInput" id="kadaluarsaProdukJamEdit">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Submit -->
                            <div class="row hButton mt-3">
                                <div class="col-12">
                                    <button type="button" class="font-weight-bold btnEditProduk btn-auth btn-danger">Edit!</button>
                                </div>
                            </div>

                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- ./Produk / Edit -->

    <!-- Produk / Detail -->
    <div class="produk-detail d-none">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Detail Produk</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item text-primary backToListProduk" data-email="">Produk</li>
                            <li class="breadcrumb-item active">Detail Produk</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card mb-3 p-3">
                            <div class="row no-gutters">
                                <div class="col-sm-4">
                                    <img src="/img/upload/default.svg" class="produkDetailImg" alt="profile" width="100%">
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-body bodyDetailProdukCard">

                                    </div>
                                </div>
                            </div>
                            <div class="overlay loadingSmallBox">
                                <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Produk / Detail -->
</div>
<!-- /.content-wrapper -->