<div class="profilePage d-none">
    <div class="container-fluid font-weight-bold text-white ">
        <div class="row headerProfile">
            <div class="col-sm-12 pt-4">
                <p class="position-absolute mt-3 backProfile text-left">
                    <i class="fas fa-angle-left"></i>
                </p>
                <h3 class="text-center">Profile</h3>
            </div>
        </div>
    </div>

    <div class="container conDetailProfile mb-5 text-left p-5 mt-5">
        <div class="row mb-4">
            <div class="col-11">
                <h4 class="text-left font-weight-bold">Detail Profile</h4>
            </div>
            <div class="conEditProfile col-1 text-left float-right">
                <p class="editProfile text-left text-secondary" data-toggle="modal" data-target="#editProfileModal">
                    <i class="fas fa-marker"></i>
                </p>
            </div>
        </div>
    </div>

    <!-- Modal Box "Edit Profile" -->
    <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content modalEditDetailProfile">
                <div class="modal-header font-weight-bold text-white">
                    <h2 class="modal-title" id="editProfileModalLabel">Edit Profile</h2>
                    <button type="button" class="close closeEdit text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body position-relative">
                    <div class="overlay-editP d-none text-center position-absolute">
                        <div class="boxLoading mx-auto d-none"></div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-center mb-2">
                            <div class="col">
                                <div class="mx-auto loaderApiDaerahProf"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="emailProf">EMAIL</label>
                                    <input type="text" class="form-control myInput emailProf" id="emailProf" readonly="true" name="emailProf">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="namaProf">NAMA</label>
                                    <input type="text" class="form-control myInput namaProf" id="namaProf" name="namaProf">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="nomorHp">NO HP</label>
                                    <input type="text" onkeypress="return hanyaAngka(event);" class="myInput form-control nomorHp" id="nomorHp" placeholder="No Hp" name="nomorHp">
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="row justify-content-center">
                                    <div class="col-sm-6 kolomImgPreviewEditPr mb-3">
                                        <img src="/img/default.svg" width="60%" class="imgPreview" alt="imgPreview">
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input imgFile" id="customFile">
                                            <label class="custom-file-label labelImgFile" for="customFile">Pilih gambar</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-1">
                                <div class="form-check">
                                    <input checked class="form-check-input checktoedit" type="checkbox">
                                </div>
                            </div>
                            <div class="col-sm-2 mb-2">
                                <select class="form-control mySelect provincesProf">
                                    <option class="mySelectOption" value="default-value">Provinsi</option>
                                </select>
                            </div>
                            <div class="col-sm-3 mb-2">
                                <select class="form-control mySelect regenciesProf">
                                    <option class="mySelectOption" value="default-value">Kab/Kota</option>
                                </select>
                            </div>
                            <div class="col-sm-3 mb-2">
                                <select class="form-control mySelect districtsProf">
                                    <option class="mySelectOption" value="default-value">Kecamatan</option>
                                </select>
                            </div>

                            <div class="col-sm-3 mb-2">
                                <select class="form-control mySelect villagesProf">
                                    <option class="mySelectOption" value="default-value">Kelurahan</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="passwordBaruProf">PASSWORD BARU</label>
                                    <input type="text" class="myInput form-control passwordBaruProf" id="passwordBaruProf" placeholder="password" name="passwordBaruProf">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="passwordLamaProf">PASSWORD LAMA</label>
                                    <input type="text" class="myInput form-control passwordLamaProf" id="passwordLamaProf" placeholder="password" name="passwordLamaProf">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-outline-gradient btn-outHp closeEdit" data-dismiss="modal">
                        <div class="overlay-btn"></div>
                        Batal
                    </button>
                    <button type="button" class="btnEditP btn-fill-gradient">
                        <div class="overlay-btn"></div>
                        Simpan!
                    </button>
                </div>
            </div>
        </div>
    </div>








</div>