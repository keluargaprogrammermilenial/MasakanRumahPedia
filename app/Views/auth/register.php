<div class="container loginPage d-none ">
    <div class="row myconAuth mx-auto mb-4 mt-4 p-3 bg-white">
        <div class="col-sm-6 columnImg">
            <div class="row">
                <div class="col">
                    <img src="/img/roketDaftar2.png" data-slide="1" width="100%" alt="roket">
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-sm-1">
                    <div class="rounded-circle myIndicators indicatorActive" data-slide="1"></div>
                </div>
                <div class="col-sm-1">
                    <div class="rounded-circle myIndicators" data-slide="2"></div>
                </div>
                <div class="col-sm-1">
                    <div class="rounded-circle myIndicators" data-slide="3"></div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 columnInput">
            <div class="row">
                <div class="col">
                    <div class="row justify-content-start judulAuth">
                        <div class="col">
                            <h2 class="font-weight-bold text-black">Selamat Datang <br>
                                Di MasakanRumahPedia</h2>
                            <h5 class="font-weight-bold text-secondary">Silahkan Daftarkan Akun Kamu</h5>
                        </div>
                    </div>

                    <div class="row justify-content-start mt-3">
                        <div class="col">
                            <div class="row justify-content-start">
                                <div class="col-md-12">
                                    <input type="text" class="form-control emailRegister myInput" placeholder="contoh@gmail.com | Harus benar ya...">
                                </div>
                            </div>

                            <div class="row justify-content-start mt-3">
                                <div class="col-md-12">
                                    <input type="text" class="form-control usernameRegister myInput" placeholder="Username">
                                </div>
                            </div>

                            <div class="row justify-content-start mt-3">
                                <div class="col-md-12">
                                    <input type="password" class="form-control passwordRegister myInput" placeholder="Password | minimal 4 karakter">
                                </div>
                            </div>

                            <div class="row justify-content-start mt-3">
                                <div class="col-md-12">
                                    <input type="password" class="form-control confirmRegister myInput" placeholder="Konfirmasi Password">
                                </div>
                            </div>

                            <div class="row justify-content-start mt-3">
                                <div class="col-md-12">
                                    <input type="text" onkeypress="return hanyaAngka(event);" class="form-control nomorTelp myInput" placeholder="No hp | Maks 12 digit ya..">
                                </div>
                            </div>

                            <div class="row justify-content-start mt-3">
                                <div class="col-sm-3 mb-1">
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
                            <div class="row justify-content-center mt-2">
                                <div class="col">
                                    <div class="mx-auto loaderApiDaerah"></div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm-12 text-center text-danger mt-3">
                                    <p class="sudahPunyaAkun">Sudah punya akun? Login!</p>
                                </div>
                            </div>

                            <div class="row justify-content-start hButton mt-3">
                                <div class="col-md-12">
                                    <button type="button" class="font-weight-bold daftarRegister btn-auth btn-danger">Daftar!</button>
                                </div>
                            </div>

                            <div class="row justify-content-start mt-3">
                                <div class="col-md-12 text-center">
                                    <p class="font-weight-bold text-danger kembaliRegister">
                                        <img src="/img/icon-back-page.svg" class="d-sm-inline-block" alt="kembali.gambar">
                                        Kembali
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>