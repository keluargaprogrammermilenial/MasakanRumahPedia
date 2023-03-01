let allMember, allProduk, produkLive, produkNotLive;
getAllMember();
getProduk();
getProduk('live');
getProduk('selesai');
updateDataRealTime();
window.interval1 = setInterval(() => {
    if (allMember && allProduk) {
        dashboard();
        clearInterval(window.interval1);
    }
}, 1000);



// Static Event
$('.dashboard-utama .filterTahun').on('change', function () {
    renderSkalaPendaftaran();
    renderSkalaPertambahanProduk();
});


$('.dashboardMenu').next().children().children().on('click', function () {
    if (!$(this).hasClass('active')) {
        if (!$('.admin-list').hasClass('d-none'))
            admin('tutup', 'listAdmin');
        if(!$('.admin-tambah').hasClass('d-none'))
            admin('tutup', 'tambah');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        if (!$('.member-tambah').hasClass('d-none'))
            member('tutup', 'tambah');
        if (!$('.member-list').hasClass('d-none'))
            member('tutup', 'listMember');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if (!$('.produk-list').hasClass('d-none'))
            produk('tutup', 'listProduk');
        if (!$('.produk-edit').hasClass('d-none'))
            produk('tutup', 'edit');
        if (!$('.produk-detail').hasClass('d-none'))
            produk('tutup', 'detail');
        dashboard();
    }
});

$('.adminMenu').next().children().children('.listAdminLink').on('click', function () {
    if (!$(this).hasClass('active')) {
        if(!$('.dashboard-utama').hasClass('d-none'))
            dashboard('tutup');
        if(!$('.admin-tambah').hasClass('d-none'))
            admin('tutup', 'tambah');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        if (!$('.member-tambah').hasClass('d-none'))
            member('tutup', 'tambah');
        if (!$('.member-list').hasClass('d-none'))
            member('tutup', 'listMember');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if (!$('.produk-list').hasClass('d-none'))
            produk('tutup', 'listProduk');
        if (!$('.produk-edit').hasClass('d-none'))
            produk('tutup', 'edit');
        if (!$('.produk-detail').hasClass('d-none'))
            produk('tutup', 'detail');
        admin('buka', 'listAdmin');
    }
});

$('.adminMenu').next().children().children('.tambahAdminLink').on('click', function () {
    if (!$(this).hasClass('active')) {
        if(!$('.dashboard-utama').hasClass('d-none'))
            dashboard('tutup');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        if (!$('.admin-list').hasClass('d-none'))
            admin('tutup', 'listAdmin');
        if (!$('.member-tambah').hasClass('d-none'))
            member('tutup', 'tambah');
        if (!$('.member-list').hasClass('d-none'))
            member('tutup', 'listMember');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if (!$('.produk-list').hasClass('d-none'))
            produk('tutup', 'listProduk');
        if (!$('.produk-edit').hasClass('d-none'))
            produk('tutup', 'edit');
        if (!$('.produk-detail').hasClass('d-none'))
            produk('tutup', 'detail');
        admin('buka', 'tambah');
    }
});

$('.memberMenu').next().children().children('.listMemberLink').on('click', function () {
    if (!$(this).hasClass('active')) {
        if(!$('.dashboard-utama').hasClass('d-none'))
            dashboard('tutup');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        if (!$('.admin-list').hasClass('d-none'))
            admin('tutup', 'listAdmin');
        if(!$('.admin-tambah').hasClass('d-none'))
            admin('tutup', 'tambah');
        if (!$('.member-tambah').hasClass('d-none'))
            member('tutup', 'tambah');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if (!$('.produk-list').hasClass('d-none'))
            produk('tutup', 'listProduk');
        if (!$('.produk-edit').hasClass('d-none'))
            produk('tutup', 'edit');
        if (!$('.produk-detail').hasClass('d-none'))
            produk('tutup', 'detail');
        member('buka', 'listMember');
    }
});

$('.smallBoxMember a').on('click', function () {
    if (!$(this).hasClass('active')) {
        if(!$('.dashboard-utama').hasClass('d-none'))
            dashboard('tutup');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        if (!$('.admin-list').hasClass('d-none'))
            admin('tutup', 'listAdmin');
        if(!$('.admin-tambah').hasClass('d-none'))
            admin('tutup', 'tambah');
        if (!$('.member-tambah').hasClass('d-none'))
            member('tutup', 'tambah');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if (!$('.produk-list').hasClass('d-none'))
            produk('tutup', 'listProduk');
        if (!$('.produk-edit').hasClass('d-none'))
            produk('tutup', 'edit');
        if (!$('.produk-detail').hasClass('d-none'))
            produk('tutup', 'detail');
        member('buka', 'listMember');
    }
});

$('.memberMenu').next().children().children('.tambahMemberLink').on('click', function () {
    if (!$(this).hasClass('active')) {
        if(!$('.dashboard-utama').hasClass('d-none'))
            dashboard('tutup');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        if (!$('.admin-list').hasClass('d-none'))
            admin('tutup', 'listAdmin');
        if(!$('.admin-tambah').hasClass('d-none'))
            admin('tutup', 'tambah');
        if(!$('.member-list').hasClass('d-none'))
            member('tutup', 'listMember');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if (!$('.produk-list').hasClass('d-none'))
            produk('tutup', 'listProduk');
        if (!$('.produk-edit').hasClass('d-none'))
            produk('tutup', 'edit');
        if (!$('.produk-detail').hasClass('d-none'))
            produk('tutup', 'detail');
        member('buka', 'tambah');
    }
});

$('.aktifAdmin').on('change', function () {
    let isChecked = $('.aktifAdmin').prop('checked');
    if (isChecked) {
        $('.aktifAdmin').next().removeClass('text-secondary');
        $('.aktifAdmin').val(1);
    } else {
        $('.aktifAdmin').next().addClass('text-secondary');
        $('.aktifAdmin').val(0);
    }
});

$('.aktifEditAdmin').on('change', function () {
    let isChecked = $('.aktifEditAdmin').prop('checked');
    if (isChecked) {
        $('.aktifEditAdmin').next().removeClass('text-secondary');
        $('.aktifEditAdmin').val(1);
    } else {
        $('.aktifEditAdmin').next().addClass('text-secondary');
        $('.aktifEditAdmin').val(0);
    }
});

$('.lihatPassword').on('click', function () {
    let passEl = $('.passwordAdmin');
    if (passEl.prop('type') == 'password') {
        passEl.prop('type', 'text');
        $(this).children('span').addClass('fa-eye-slash');
    } else {
        passEl.prop('type', 'password');
        $(this).children('span').removeClass('fa-eye-slash');
    }
});

$('.lihatPasswordEdit').on('click', function () {
    let passEl = $('.passwordEditAdmin');
    if (passEl.prop('type') == 'password') {
        passEl.prop('type', 'text');
        $(this).children('span').addClass('fa-eye-slash');
    } else {
        passEl.prop('type', 'password');
        $(this).children('span').removeClass('fa-eye-slash');
    }
});

$('.lihatPasswordLamaEdit').on('click', function () {
    let passEl = $('.passwordLamaEditAdmin');
    if (passEl.prop('type') == 'password') {
        passEl.prop('type', 'text');
        $(this).children('span').addClass('fa-eye-slash');
    } else {
        passEl.prop('type', 'password');
        $(this).children('span').removeClass('fa-eye-slash');
    }
});


$('.usernameAdmin').on('keyup', function () {
    validasiInputText('.usernameAdmin');
});

$('.emailAdmin').on('keyup', function () {
    validasiFormEmail('.emailAdmin');
});

$('.passwordAdmin').on('keyup', function () {
    validasiFormPassword('.passwordAdmin');
});

$('.telpAdmin').on('keyup', function () {
    validasiInputText('.telpAdmin', 'telp');
});

$('.btnTambahAdmin').on('click', function () {
    validasiInputText('.usernameAdmin');
    validasiFormPassword('.passwordAdmin');
    validasiFormEmail('.emailAdmin');
    validasiInputText('.telpAdmin', 'telp');

    validasiInputText('.provinces', 'selectWithSelectedDefaultValue');
    validasiInputText('.regencies', 'selectWithSelectedDefaultValue');
    validasiInputText('.districts', 'selectWithSelectedDefaultValue');
    validasiInputText('.villages', 'selectWithSelectedDefaultValue');

    let all = $('.usernameAdmin, .passwordAdmin, .telpAdmin, .emailAdmin, .provinces, .regencies, .districts, .villages');
    if (!all.hasClass('is-invalid') && all.hasClass('is-valid')) {
        disabled('.btnTambahAdmin', '.aktifAdmin', '.provinces', '.regencies', '.districts', '.villages', 'add');
        readonly('.usernameAdmin', '.emailAdmin', '.telpAdmin', '.passwordAdmin', 'add');
        showIconProsesMemuat('.admin-tambah .prosesMemuat');

        let data = {
            email: $('.emailAdmin').val(),
            username: $('.usernameAdmin').val(),
            pass: $(".passwordAdmin").val(),
            noHp: $('.telpAdmin').val(),
            provinsi: $('.provinces').val(),
            kotKab: $('.regencies').val(),
            kecamatan: $('.districts').val(),
            kelurahan: $('.villages').val(),
            isAktif: $('.aktifAdmin').val()
        };
        myAjax('/admin/add', data, function (result) {
            all.removeClass('is-valid');
            if (result == "berhasil") {
                let config = { icon: 'success', title: 'Admin Berhasil Ditambahkan!' };
                notificationToast(config, 3000, function () {
                    all.val('');
                    disabled('.btnTambahAdmin', '.aktifAdmin', '.provinces', '.regencies', '.districts', '.villages', 'remove');
                    readonly('.usernameAdmin', '.emailAdmin', '.telpAdmin', '.passwordAdmin', 'remove');
                    hideIconProsesMemuat('.admin-tambah .prosesMemuat');
                    admin('tutup', 'tambah');
                    admin('buka', 'listAdmin');
                });
            } else if (result == 'emailAda') {
                $('.emailAdmin').removeClass('is-valid');
                $('.emailAdmin').addClass('is-invalid');
                notificationToast({ icon: 'error', title: 'Maaf, email sudah terdaftar. Coba tambahkan dengan email yang belum terdaftar..' }, 10000, function () {
                    disabled('.btnTambahAdmin', '.aktifAdmin', '.provinces', '.regencies', '.districts', '.villages', 'remove');
                    readonly('.usernameAdmin', '.emailAdmin', '.telpAdmin', '.passwordAdmin', 'remove');
                    hideIconProsesMemuat('.admin-tambah .prosesMemuat');
                    $('.emailAdmin').focus();
                });
            } else if (result == 'nomorAda') {
                $('.telpAdmin').removeClass('is-valid');
                $('.telpAdmin').addClass('is-invalid');
                notificationToast({ icon: 'error', title: 'Maaf, nomor telepon sudah terdaftar. Coba tambahkan dengan nomor telepon yang belum terdaftar..' }, 10000, function () {
                    disabled('.btnTambahAdmin', '.aktifAdmin', '.provinces', '.regencies', '.districts', '.villages', 'remove');
                    readonly('.usernameAdmin', '.emailAdmin', '.telpAdmin', '.passwordAdmin', 'remove');
                    hideIconProsesMemuat('.admin-tambah .prosesMemuat');
                    $('.telpAdmin').focus();
                });
            } else if (result == 'nomorDanEmail') {
                $('.emailAdmin').removeClass('is-valid');
                $('.emailAdmin').addClass('is-invalid');
                $('.telpAdmin').removeClass('is-valid');
                $('.telpAdmin').addClass('is-invalid');
                let text = "Maaf, nomor dan email yang kamu daftarkan sudah terdaftar. 1 nomor hanya untuk 1 akun! Begitu juga dengan email, 1 email hanya untuk 1 nomor! Tidak boleh menggunakan nomor atau email yang sudah terdaftar.";
                notificationToast({ icon: 'error', title: text }, 10000, function () {
                    disabled('.btnTambahAdmin', '.aktifAdmin', '.provinces', '.regencies', '.districts', '.villages', 'remove');
                    readonly('.usernameAdmin', '.emailAdmin', '.telpAdmin', '.passwordAdmin', 'remove');
                    hideIconProsesMemuat('.admin-tambah .prosesMemuat');
                    $('.emailAdmin').focus();
                });
            } else {
                notificationToast({ icon: 'error', title: 'Ups.. Error terjadi..' }, 1000, function () {
                    disabled('.btnTambahAdmin', '.aktifAdmin', '.provinces', '.regencies', '.districts', '.villages', 'remove');
                    readonly('.usernameAdmin', '.emailAdmin', '.telpAdmin', '.passwordAdmin', 'remove');
                    hideIconProsesMemuat('.admin-tambah .prosesMemuat');
                    document.location.href = document.location.href;
                });
            }
        });
    }

});


// EditAdmin
$('.usernameEditAdmin').on('keyup', function () {
    validasiInputText('.usernameEditAdmin');
});

$('.emailEditAdmin').on('keyup', function () {
    validasiFormEmail('.emailEditAdmin');
});

$('.passwordEditAdmin').on('keyup', function () {
    validasiFormPassword('.passwordEditAdmin');
});

$('.telpEditAdmin').on('keyup', function () {
    validasiInputText('.telpEditAdmin', 'telp');
});

$('.cbEditLokasi').on('change', function () {
    if ($('.cbEditLokasi').prop('checked') == true) {
        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').prop('disabled', false);
    }
    else {
        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').prop('disabled', true);
    }
});

$('.imgPreviewEditAdmin').on('click', function () {
    $('.imgFileEditAdmin').click();
});

$('.imgFileEditAdmin').on('change', function () {
    $('.imgFileEditAdmin').removeClass('is-invalid').removeClass('is-valid');
    $('.conImgPreviewEditAdmin').removeClass('myIsinvalid').removeClass('myIsvalid');

    let file = $(".imgFileEditAdmin").get(0).files[0];
    let extensi = file.name.split('.')[1];
    let allowedExtensi = ['jpg', 'png', 'jpeg', 'svg'];
    let validasi = false;
    allowedExtensi.forEach(function (ext) {
        if (extensi == ext) {
            validasi = true;
        }
    });
    if (file && validasi) {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function(){
            $(".imgPreviewEditAdmin").attr("src", reader.result);
        }

        $('.imgFileEditAdmin').addClass('is-valid');
        $('.conImgPreviewEditAdmin').addClass('myIsvalid');

    } else {
        $('.imgFileEditAdmin').val(null);
        $('.imgFileEditAdmin').addClass('is-invalid');
        $('.conImgPreviewEditAdmin').addClass('myIsinvalid');
        $(".imgPreviewEditAdmin").attr("src", '/img/warning.png');
    }
});

$('.btnEditAdminBig').on('click', function () {
    $('html, body').animate({ scrollTop: "0" }, 400);
    $('.btnEditAdminBig').prop('disabled', true);
    showIconProsesMemuat('.admin-edit .prosesMemuat');

    let nama = $('.usernameEditAdmin'),
        noHp = $('.telpEditAdmin'),
        imgFile = $('.imgFileEditAdmin'),
        passBaru = $('.passwordEditAdmin'),
        passLama = $('.passwordLamaEditAdmin'),
        email = $('.emailEditAdmin'),
        provinsiP = $('.provincesEditAdmin'),
        kotaKab = $('.regenciesEditAdmin'),
        kecamatan = $('.districtsEditAdmin'),
        kelurahan = $('.villagesEditAdmin'),
        formData = new FormData(),
        fileUpload;
    
    validasiInputText('.usernameEditAdmin');
    validasiInputText('.telpEditAdmin', 'telp');

    let isChecked = false;
    if ($('.cbEditLokasi').prop('checked')) {
        validasiInputText('.provincesEditAdmin', 'selectWithSelectedDefaultValue');
        validasiInputText('.regenciesEditAdmin', 'selectWithSelectedDefaultValue');
        validasiInputText('.districtsEditAdmin', 'selectWithSelectedDefaultValue');
        validasiInputText('.villagesEditAdmin', 'selectWithSelectedDefaultValue');
        isChecked = true;
    } else {
        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').addClass('is-valid');
        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
    }
    

    if (!$('.usernameEditAdmin, .telpEditAdmin, .provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').hasClass('is-invalid')) {
        if (imgFile.val().length > 0 && !$('.imgFileEditAdmin').hasClass('is-invalid')) {
            fileUpload = imgFile.prop('files')[0];
            validasiInputText('.passwordEditAdmin', 'password');
            validasiInputText('.passwordLamaEditAdmin', 'password');
            if ($('.passwordEditAdmin').val()  && $('.passwordLamaEditAdmin').val() && !$('.passwordEditAdmin, .passwordLamaEditAdmin').hasClass('is-invalid')) {
                formData.append('imgUpload', fileUpload);
                formData.append('passB', $('.passwordEditAdmin').val());
                formData.append('passL', $('.passwordLamaEditAdmin').val());
                formData.append('nama', nama.val());
                formData.append('no_hp', noHp.val());
                formData.append('email', email.val());
                formData.append('apakahAktif', ($('.aktifEditAdmin').val() == 1) ? 1:0);
                if (isChecked) {
                    formData.append('provinsi', provinsiP.val());
                    formData.append('kotaKab', kotaKab.val());
                    formData.append('kecamatan', kecamatan.val());
                    formData.append('kelurahan', kelurahan.val());
                } else {
                    formData.append('provinsi', false);
                    formData.append('kotaKab', false);
                    formData.append('kecamatan', false);
                    formData.append('kelurahan', false);
                }
                formData.append('tipe', 'ada_semua');
                
                $.ajax({
                    url: '/user/editP/admin',
                    data: formData,
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        hideIconProsesMemuat('.admin-edit .prosesMemuat');
                        result = JSON.parse(result);
                        let status = result.status;
                        if (status == 'berhasil') {
                            passBaru.addClass('is-valid');
                            passLama.addClass('is-valid').removeClass('is-invalid');
                            passBaru.removeClass('is-invalid');
                            $('.conImgPreviewEditAdmin').removeClass('myIsvalid').removeClass('myIsinvalid');
                            let text = "Selamat! Profile Admin Berhasil Diubah!";
                            admin('tutup', 'edit');
                            admin('buka', 'listAdmin');
                            notificationToast({icon: 'success', title: text}, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                passLama.removeClass('is-invalid');
                                $('.imgFileEditAdmin').val(null);

                                $('.cbEditLokasi').prop('checked', true);
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');

                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');
                            }); 
                        } else if (status == 'gagal') {
                            let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                            notificationToast({icon: 'error', title: text}, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditAdmin').val(null);

                                $('.cbEditLokasi').prop('checked', true);
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');

                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');
                                
                                
                            });
                        } else if (status == 'gagal upload') {
                            let text = "Maaf gambar yang kamu kirim gagal diupload! Cek internet kamu dan coba lagi! Atau jika masih tidak bisa coba kamu pilih gambar yang lain!";
                            notificationToast({icon: 'error', title: text}, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditAdmin').val(null);

                                $('.cbEditLokasi').prop('checked', true);
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');

                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');
                                
                                
                            });
                        } else if (status == "password salah") {
                            let text = "Maaf password lama yang kamu masukkan salah! Masukkan password yang benar!";
                            
                            notificationToast({icon: 'error', title: text}, 5000, function () {
                                passLama.removeClass('is-valid').addClass('is-invalid');
                                passLama.focus();
                            
                                $('.imgFileEditAdmin').val(null);

                                $('.cbEditLokasi').prop('checked', true);
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');

                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');
                                
                                
                            });
                        }
                    }
                });
            } else {
                formData.append('imgUpload', fileUpload);
                formData.append('nama', nama.val());
                formData.append('no_hp', noHp.val());
                formData.append('email', email.val());
                formData.append('apakahAktif', ($('.aktifEditAdmin').val() == 1) ? 1:0);
                if (isChecked) {
                    formData.append('provinsi', provinsiP.val());
                    formData.append('kotaKab', kotaKab.val());
                    formData.append('kecamatan', kecamatan.val());
                    formData.append('kelurahan', kelurahan.val());
                } else {
                    formData.append('provinsi', false);
                    formData.append('kotaKab', false);
                    formData.append('kecamatan', false);
                    formData.append('kelurahan', false);
                }
                formData.append('tipe', 'adaImgNggakAdaPass');
                $.ajax({
                    url: '/user/editP/admin',
                    data: formData,
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        hideIconProsesMemuat('.admin-edit .prosesMemuat');
                        result = JSON.parse(result);
                        let status = result.status;
                        if (status == 'berhasil') {
                            passBaru.addClass('is-valid');
                            passLama.addClass('is-valid').removeClass('is-invalid');
                            passBaru.removeClass('is-invalid');
                            $('.conImgPreviewEditAdmin').removeClass('myIsvalid').removeClass('myIsinvalid');
                            
                            let text = "Selamat! Profile Admin Berhasil Diubah!";
                            admin('tutup', 'edit');
                            admin('buka', 'listAdmin');
                            notificationToast({ icon: 'success', title: text }, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                passLama.removeClass('is-invalid');
                                
                                $('.imgFileEditAdmin').val(null);

                                $('.cbEditLokasi').prop('checked', true);
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');

                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');
                            });
                        } else if (status == 'gagal') {
                            let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                            notificationToast({ icon: 'error', title: text }, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditAdmin').val(null);
    
                                $('.cbEditLokasi').prop('checked', true);
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');
    
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');  
                            });
                        } else if (status == 'gagal upload') {
                            let text = "Maaf gambar yang kamu kirim gagal diupload! Cek internet kamu dan coba lagi! Atau jika masih tidak bisa coba kamu pilih gambar yang lain!";
                            notificationToast({ icon: 'error', title: text }, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditAdmin').val(null);
    
                                $('.cbEditLokasi').prop('checked', true);
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');
    
                                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');
                            });
                        }
                    }
                });
            }
        } else if (imgFile.val().length <= 0 && $('.passwordEditAdmin').val() == '' && $('.passwordLamaEditAdmin').val() == '') {
            let data = {
                nama: nama.val(),
                no_hp: noHp.val(),
                email: email.val(),
                tipe: 'cumanNamaDanNomor',
                provinsi: null,
                kotaKab: null,
                kecamatan: null,
                kelurahan: null,
                apakahAktif: ($('.aktifEditAdmin').val() == 1) ? 1:0
            };

            if (isChecked) {
                data.provinsi = provinsiP.val();
                data.kotaKab = kotaKab.val();
                data.kecamatan = kecamatan.val();
                data.kelurahan = kelurahan.val();
            } 
            myAjax('/user/editP/admin', data, function (result) {
                hideIconProsesMemuat('.admin-edit .prosesMemuat');
                result = JSON.parse(result);
                let status = result.status;
                if (status == 'berhasil') {
                    $('.conImgPreviewEditAdmin').removeClass('myIsvalid').removeClass('myIsinvalid');
                    let text = "Selamat! Profile Admin Berhasil Diubah!";
                    admin('tutup', 'edit');
                    admin('buka', 'listAdmin');
                    notificationToast({ icon: 'success', title: text }, 5000, function () {
                        passBaru.val('');
                        passLama.val('');
                        passLama.removeClass('is-invalid');
                        
                        $('.imgFileEditAdmin').val(null);
    
                        $('.cbEditLokasi').prop('checked', true);
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');
    
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');              
                    });
                } else if (status == 'gagal') {
                    let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                    notificationToast({ icon: 'error', title: text }, 5000, function () {
                        passBaru.val('');
                        passLama.val('');
                        $('.imgFileEditAdmin').val(null);
    
                        $('.cbEditLokasi').prop('checked', true);
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');
    
                        $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');                         
                    });
                }
            });

        } else {
            validasiInputText('.passwordEditAdmin', 'password');
            validasiInputText('.passwordLamaEditAdmin', 'password');
            if ($('.passwordEditAdmin').val() && $('.passwordLamaEditAdmin').val() && !$('.passwordEditAdmin, .passwordLamaEditAdmin').hasClass('is-invalid')) {

                let data = {
                    nama: nama.val(),
                    no_hp: noHp.val(),
                    email: email.val(),
                    passB: passBaru.val(),
                    passL: passLama.val(),
                    tipe: 'adaPassNggakAdaImg',
                    provinsi: null,
                    kotaKab: null,
                    kecamatan: null,
                    kelurahan: null,
                    apakahAktif: ($('.aktifEditAdmin').val() == 1) ? 1:0
                };

                if (isChecked) {
                    data.provinsi = provinsiP.val();
                    data.kotaKab = kotaKab.val();
                    data.kecamatan = kecamatan.val();
                    data.kelurahan = kelurahan.val();
                }

                myAjax('/user/editP/admin', data, function (result) {
                    hideIconProsesMemuat('.admin-edit .prosesMemuat');
                    result = JSON.parse(result);
                    let status = result.status;
                    if (status == 'berhasil') {
                        passBaru.addClass('is-valid');
                        passLama.addClass('is-valid').removeClass('is-invalid');
                        passBaru.removeClass('is-invalid');
                        $('.conImgPreviewEditAdmin').removeClass('myIsvalid').removeClass('myIsinvalid');
                        let text = "Selamat! Profile Admin Berhasil Diubah!";
                        admin('tutup', 'edit');
                        admin('buka', 'listAdmin');
                        notificationToast({ icon: 'success', title: text }, 5000, function () {
                            $('.imgFileEditAdmin').val(null);
                            $('.cbEditLokasi').prop('checked', true);
                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');

                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');  
                        });
                    } else if (status == 'gagal') {
                        let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                        notificationToast({ icon: 'error', title: text }, 5000, function () {
                            passBaru.val('');
                            passLama.val('');
                            $('.imgFileEditAdmin').val(null);
                            $('.cbEditLokasi').prop('checked', true);
                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-valid');
                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid');
                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('activeSelectLokasi');

                            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').val('');
                        });
                    } else if (status == "password salah") {
                        let text = "Maaf password lama yang kamu masukkan salah! Masukkan password yang benar!";
                        notificationToast({ icon: 'error', title: text }, 5000, function () {
                            passLama.addClass('is-invalid');
                            passLama.removeClass('is-valid');
                            passLama.focus();
                        });
                        
                    }
                });
            }
        }
    } else {
        hideIconProsesMemuat('.admin-edit .prosesMemuat');
    }

    
    $('.btnEditAdminBig').prop('disabled', false);
});

// TambahMember
$('.aktifTambahMember').on('change', function () {
    let isChecked = $('.aktifTambahMember').prop('checked');
    if (isChecked) {
        $('.aktifTambahMember').next().removeClass('text-secondary');
        $('.aktifTambahMember').val(1);
    } else {
        $('.aktifTambahMember').next().addClass('text-secondary');
        $('.aktifTambahMember').val(0);
    }
});
$('.lihatPasswordTambahMember').on('click', function () {
    let passEl = $('.passwordTambahMember');
    if (passEl.prop('type') == 'password') {
        passEl.prop('type', 'text');
        $(this).children('span').addClass('fa-eye-slash');
    } else {
        passEl.prop('type', 'password');
        $(this).children('span').removeClass('fa-eye-slash');
    }
});
$('.usernameTambahMember').on('keyup', function () {
    validasiInputText('.usernameTambahMember');
});

$('.emailTambahMember').on('keyup', function () {
    validasiFormEmail('.emailTambahMember');
});

$('.passwordTambahMember').on('keyup', function () {
    validasiFormPassword('.passwordTambahMember');
});

$('.telpTambahMember').on('keyup', function () {
    validasiInputText('.telpTambahMember', 'telp');
});

$('.btnTambahMember').on('click', function () {
    validasiInputText('.usernameTambahMember');
    validasiFormPassword('.passwordTambahMember');
    validasiFormEmail('.emailTambahMember');
    validasiInputText('.telpTambahMember', 'telp');

    validasiInputText('.provincesTambahMember', 'selectWithSelectedDefaultValue');
    validasiInputText('.regenciesTambahMember', 'selectWithSelectedDefaultValue');
    validasiInputText('.districtsTambahMember', 'selectWithSelectedDefaultValue');
    validasiInputText('.villagesTambahMember', 'selectWithSelectedDefaultValue');

    let all = $('.usernameTambahMember, .passwordTambahMember, .telpTambahMember, .emailTambahMember, .provincesTambahMember, .regenciesTambahMember, .districtsTambahMember, .villagesTambahMember');
    if (!all.hasClass('is-invalid') && all.hasClass('is-valid')) {
        disabled('.btnTambahTambahMember', '.aktifTambahMember', '.provincesTambahMember', '.regenciesTambahMember', '.districtsTambahMember', '.villagesTambahMember', 'add');
        readonly('.usernameTambahMember', '.emailTambahMember', '.telpTambahMember', '.passwordTambahMember', 'add');
        showIconProsesMemuat('.member-tambah .prosesMemuat');

        let data = {
            email: $('.emailTambahMember').val(),
            username: $('.usernameTambahMember').val(),
            pass: $(".passwordTambahMember").val(),
            noHp: $('.telpTambahMember').val(),
            provinsi: $('.provincesTambahMember').val(),
            kotKab: $('.regenciesTambahMember').val(),
            kecamatan: $('.districtsTambahMember').val(),
            kelurahan: $('.villagesTambahMember').val(),
            isAktif: $('.aktifTambahMember').val()
        };
        myAjax('/auth/register/admin', data, function (result) {
            all.removeClass('is-valid');
            if (result == "berhasil") {
                let config = { icon: 'success', title: 'Member Berhasil Ditambahkan!' };
                notificationToast(config, 3000, function () {
                    all.val('');
                    disabled('.btnTambahMember', '.aktifMember', '.provincesTambahMember', '.regenciesTambahMember', '.districtsTambahMember', '.villagesTambahMember', 'remove');
                    readonly('.usernameTambahMember', '.emailTambahMember', '.telpTambahMember', '.passwordTambahMember', 'remove');
                    hideIconProsesMemuat('.member-tambah .prosesMemuat');
                    member('tutup', 'tambah');
                    member('buka', 'listMember');
                });
            } else if (result == 'emailAda') {
                $('.emailTambahMember').removeClass('is-valid');
                $('.emailTambahMember').addClass('is-invalid');
                notificationToast({ icon: 'error', title: 'Maaf, email sudah terdaftar. Coba tambahkan dengan email yang belum terdaftar..' }, 10000, function () {
                    disabled('.btnTambahMember', '.aktifMember', '.provincesTambahMember', '.regenciesTambahMember', '.districtsTambahMember', '.villagesTambahMember', 'remove');
                    readonly('.usernameTambahMember', '.emailTambahMember', '.telpTambahMember', '.passwordTambahMember', 'remove');
                    hideIconProsesMemuat('.member-tambah .prosesMemuat');
                    $('.emailTambahMember').focus();
                });
            } else if (result == 'nomorAda') {
                $('.telpTambahMember').removeClass('is-valid');
                $('.telpTambahMember').addClass('is-invalid');
                notificationToast({ icon: 'error', title: 'Maaf, nomor telepon sudah terdaftar. Coba tambahkan dengan nomor telepon yang belum terdaftar..' }, 10000, function () {
                    disabled('.btnTambahMember', '.aktifMember', '.provincesTambahMember', '.regenciesTambahMember', '.districtsTambahMember', '.villagesTambahMember', 'remove');
                    readonly('.usernameTambahMember', '.emailTambahMember', '.telpTambahMember', '.passwordTambahMember', 'remove');
                    hideIconProsesMemuat('.member-tambah .prosesMemuat');
                    $('.telpTambahMember').focus();
                });
            } else if (result == 'nomorDanEmail') {
                $('.emailTambahMember').removeClass('is-valid');
                $('.emailTambahMember').addClass('is-invalid');
                $('.telpTambahMember').removeClass('is-valid');
                $('.telpTambahMember').addClass('is-invalid');
                let text = "Maaf, nomor dan email yang kamu daftarkan sudah terdaftar. 1 nomor hanya untuk 1 akun! Begitu juga dengan email, 1 email hanya untuk 1 nomor! Tidak boleh menggunakan nomor atau email yang sudah terdaftar.";
                notificationToast({ icon: 'error', title: text }, 10000, function () {
                    disabled('.btnTambahMember', '.aktifMember', '.provincesTambahMember', '.regenciesTambahMember', '.districtsTambahMember', '.villagesTambahMember', 'remove');
                    readonly('.usernameTambahMember', '.emailTambahMember', '.telpTambahMember', '.passwordTambahMember', 'remove');
                    hideIconProsesMemuat('.member-tambah .prosesMemuat');
                    $('.emailTambahMember').focus();
                });
            } else {
                notificationToast({ icon: 'error', title: 'Ups.. Error terjadi..' }, 1000, function () {
                    disabled('.btnTambahMember', '.aktifMember', '.provincesTambahMember', '.regenciesTambahMember', '.districtsTambahMember', '.villagesTambahMember', 'remove');
                    readonly('.usernameTambahMember', '.emailTambahMember', '.telpTambahMember', '.passwordTambahMember', 'remove');
                    hideIconProsesMemuat('.member-tambah .prosesMemuat');
                    document.location.href = document.location.href;
                });
            }
        });
    }

});

// EditMember
$('.aktifEditMember').on('change', function () {
    let isChecked = $('.aktifEditMember').prop('checked');
    if (isChecked) {
        $('.aktifEditMember').next().removeClass('text-secondary');
        $('.aktifEditMember').val(1);
    } else {
        $('.aktifEditMember').next().addClass('text-secondary');
        $('.aktifEditMember').val(0);
    }
});

$('.lihatPasswordEditMember').on('click', function () {
    let passEl = $('.passwordEditMember');
    if (passEl.prop('type') == 'password') {
        passEl.prop('type', 'text');
        $(this).children('span').addClass('fa-eye-slash');
    } else {
        passEl.prop('type', 'password');
        $(this).children('span').removeClass('fa-eye-slash');
    }
});

$('.lihatPasswordLamaEditMember').on('click', function () {
    let passEl = $('.passwordLamaEditMember');
    if (passEl.prop('type') == 'password') {
        passEl.prop('type', 'text');
        $(this).children('span').addClass('fa-eye-slash');
    } else {
        passEl.prop('type', 'password');
        $(this).children('span').removeClass('fa-eye-slash');
    }
});

$('.usernameEditMember').on('keyup', function () {
    validasiInputText('.usernameEditMember');
});

$('.emailEditMember').on('keyup', function () {
    validasiFormEmail('.emailEditMember');
});

$('.passwordEditMember').on('keyup', function () {
    validasiFormPassword('.passwordEditMember');
});

$('.telpEditMember').on('keyup', function () {
    validasiInputText('.telpEditMember', 'telp');
});

$('.cbEditLokasiMember').on('change', function () {
    if ($('.cbEditLokasiMember').prop('checked') == true) {
        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').prop('disabled', false);
    }
    else {
        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').prop('disabled', true);
    }
});

$('.imgPreviewEditMember').on('click', function () {
    $('.imgFileEditMember').click();
});

$('.imgFileEditMember').on('change', function () {
    $('.imgFileEditMember').removeClass('is-invalid').removeClass('is-valid');
    $('.conImgPreviewEditMember').removeClass('myIsinvalid').removeClass('myIsvalid');

    let file = $(".imgFileEditMember").get(0).files[0];
    let extensi = file.name.split('.')[1];
    let allowedExtensi = ['jpg', 'png', 'jpeg', 'svg'];
    let validasi = false;
    allowedExtensi.forEach(function (ext) {
        if (extensi == ext) {
            validasi = true;
        }
    });
    if (file && validasi) {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function(){
            $(".imgPreviewEditMember").attr("src", reader.result);
        }

        $('.imgFileEditMember').addClass('is-valid');
        $('.conImgPreviewEditMember').addClass('myIsvalid');

    } else {
        $('.imgFileEditMember').val(null);
        $('.imgFileEditMember').addClass('is-invalid');
        $('.conImgPreviewEditMember').addClass('myIsinvalid');
        $(".imgPreviewEditMember").attr("src", '/img/warning.png');
    }
});

$('.btnEditMemberBig').on('click', function () {
    $('.btnEditMemberBig').prop('disabled', true);
    showIconProsesMemuat('.member-edit .prosesMemuat');

    let nama = $('.usernameEditMember'),
        noHp = $('.telpEditMember'),
        imgFile = $('.imgFileEditMember'),
        passBaru = $('.passwordEditMember'),
        passLama = $('.passwordLamaEditMember'),
        email = $('.emailEditMember'),
        provinsiP = $('.provincesEditMember'),
        kotaKab = $('.regenciesEditMember'),
        kecamatan = $('.districtsEditMember'),
        kelurahan = $('.villagesEditMember'),
        formData = new FormData(),
        fileUpload;
    
    validasiInputText('.usernameEditMember');
    validasiInputText('.telpEditMember', 'telp');
    validasiGambarKosongAtauTidak('.imgFileEditMember');

    let isChecked = false;
    if ($('.cbEditLokasiMember').prop('checked')) {   
        validasiInputText('.provincesEditMember', 'selectWithSelectedDefaultValue');
        validasiInputText('.regenciesEditMember', 'selectWithSelectedDefaultValue');
        validasiInputText('.districtsEditMember', 'selectWithSelectedDefaultValue');
        validasiInputText('.villagesEditMember', 'selectWithSelectedDefaultValue');
        isChecked = true;
    } else {
        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').addClass('is-valid');
        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
    }

    if (!$('.usernameEditMember, .telpEditMember, .provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').hasClass('is-invalid')) {
        if (imgFile.val().length > 0 && !$('.imgFileEditMember').hasClass('is-invalid')) {
            fileUpload = imgFile.prop('files')[0];
            validasiInputText('.passwordEditMember', 'password');
            validasiInputText('.passwordLamaEditMember', 'password');
            if ($('.passwordEditMember').val()  && $('.passwordLamaEditMember').val() && !$('.passwordEditMember, .passwordLamaEditMember').hasClass('is-invalid')) {
                formData.append('imgUpload', fileUpload);
                formData.append('passB', $('.passwordEditMember').val());
                formData.append('passL', $('.passwordLamaEditMember').val());
                formData.append('nama', nama.val());
                formData.append('no_hp', noHp.val());
                formData.append('email', email.val());
                formData.append('apakahAktif', ($('.aktifEditMember').val() == 1) ? 1:0);
                if (isChecked) {
                    formData.append('provinsi', provinsiP.val());
                    formData.append('kotaKab', kotaKab.val());
                    formData.append('kecamatan', kecamatan.val());
                    formData.append('kelurahan', kelurahan.val());
                } else {
                    formData.append('provinsi', false);
                    formData.append('kotaKab', false);
                    formData.append('kecamatan', false);
                    formData.append('kelurahan', false);
                }
                formData.append('tipe', 'ada_semua');
                
                $.ajax({
                    url: '/user/editP/admin',
                    data: formData,
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        $('html, body').animate({ scrollTop: "0" }, 400);
                        hideIconProsesMemuat('.member-edit .prosesMemuat');
                        result = JSON.parse(result);
                        let status = result.status;
                        if (status == 'berhasil') {
                            passBaru.addClass('is-valid');
                            passLama.addClass('is-valid').removeClass('is-invalid');
                            passBaru.removeClass('is-invalid');
                            $('.conImgPreviewEditMember').removeClass('myIsvalid').removeClass('myIsinvalid');
                            let text = "Selamat! Profile Member Berhasil Diubah!";
                            member('tutup', 'edit');
                            member('buka', 'listMember');
                            notificationToast({icon: 'success', title: text}, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                passLama.removeClass('is-invalid');
                                $('.imgFileEditMember').val(null);

                                $('.cbEditLokasiMember').prop('checked', true);
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');

                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');
                            }); 
                        } else if (status == 'gagal') {
                            let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                            notificationToast({icon: 'error', title: text}, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditMember').val(null);

                                $('.cbEditLokasiMember').prop('checked', true);
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');

                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');
                                
                                
                            });
                        } else if (status == 'gagal upload') {
                            let text = "Maaf gambar yang kamu kirim gagal diupload! Cek internet kamu dan coba lagi! Atau jika masih tidak bisa coba kamu pilih gambar yang lain!";
                            notificationToast({icon: 'error', title: text}, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditMember').val(null);

                                $('.cbEditLokasiMember').prop('checked', true);
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');

                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');
                                
                                
                            });
                        } else if (status == "password salah") {
                            let text = "Maaf password lama yang kamu masukkan salah! Masukkan password yang benar!";
                            
                            notificationToast({icon: 'error', title: text}, 5000, function () {
                                passLama.removeClass('is-valid').addClass('is-invalid');
                                passLama.focus();
                            
                                $('.imgFileEditMember').val(null);

                                $('.cbEditLokasiMember').prop('checked', true);
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');

                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');
                                
                                
                            });
                        }
                    }
                });
            } else {
                formData.append('imgUpload', fileUpload);
                formData.append('nama', nama.val());
                formData.append('no_hp', noHp.val());
                formData.append('email', email.val());
                formData.append('apakahAktif', ($('.aktifEditMember').val() == 1) ? 1:0);
                if (isChecked) {
                    formData.append('provinsi', provinsiP.val());
                    formData.append('kotaKab', kotaKab.val());
                    formData.append('kecamatan', kecamatan.val());
                    formData.append('kelurahan', kelurahan.val());
                } else {
                    formData.append('provinsi', false);
                    formData.append('kotaKab', false);
                    formData.append('kecamatan', false);
                    formData.append('kelurahan', false);
                }
                formData.append('tipe', 'adaImgNggakAdaPass');
                $.ajax({
                    url: '/user/editP/admin',
                    data: formData,
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        $('html, body').animate({ scrollTop: "0" }, 400);
                        hideIconProsesMemuat('.member-edit .prosesMemuat');
                        result = JSON.parse(result);
                        let status = result.status;
                        if (status == 'berhasil') {
                            passBaru.addClass('is-valid');
                            passLama.addClass('is-valid').removeClass('is-invalid');
                            passBaru.removeClass('is-invalid');
                            $('.conImgPreviewEditMember').removeClass('myIsvalid').removeClass('myIsinvalid');
                            
                            let text = "Selamat! Profile Member Berhasil Diubah!";
                            member('tutup', 'edit');
                            member('buka', 'listMember');
                            notificationToast({ icon: 'success', title: text }, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                passLama.removeClass('is-invalid');
                                
                                $('.imgFileEditMember').val(null);

                                $('.cbEditLokasiMember').prop('checked', true);
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');

                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');
                            });
                        } else if (status == 'gagal') {
                            let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                            notificationToast({ icon: 'error', title: text }, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditMember').val(null);
    
                                $('.cbEditLokasiMember').prop('checked', true);
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');
    
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');  
                            });
                        } else if (status == 'gagal upload') {
                            let text = "Maaf gambar yang kamu kirim gagal diupload! Cek internet kamu dan coba lagi! Atau jika masih tidak bisa coba kamu pilih gambar yang lain!";
                            notificationToast({ icon: 'error', title: text }, 5000, function () {
                                passBaru.val('');
                                passLama.val('');
                                $('.imgFileEditMember').val(null);
    
                                $('.cbEditLokasiMember').prop('checked', true);
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');
    
                                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');
                            });
                        }
                    }
                });
            }
        } else if (imgFile.val().length <= 0 && $('.passwordEditMember').val() == '' && $('.passwordLamaEditMember').val() == '') {
            let data = {
                nama: nama.val(),
                no_hp: noHp.val(),
                email: email.val(),
                tipe: 'cumanNamaDanNomor',
                provinsi: null,
                kotaKab: null,
                kecamatan: null,
                kelurahan: null,
                apakahAktif: ($('.aktifEditMember').val() == 1) ? 1:0
            };

            if (isChecked) {
                data.provinsi = provinsiP.val();
                data.kotaKab = kotaKab.val();
                data.kecamatan = kecamatan.val();
                data.kelurahan = kelurahan.val();
            } 
            myAjax('/user/editP/admin', data, function (result) {
                $('html, body').animate({ scrollTop: "0" }, 400);
                hideIconProsesMemuat('.member-edit .prosesMemuat');
                result = JSON.parse(result);
                let status = result.status;
                if (status == 'berhasil') {
                    $('.conImgPreviewEditMember').removeClass('myIsvalid').removeClass('myIsinvalid');
                    let text = "Selamat! Profile Member Berhasil Diubah!";
                    member('tutup', 'edit');
                    member('buka', 'listMember');
                    notificationToast({ icon: 'success', title: text }, 5000, function () {
                        passBaru.val('');
                        passLama.val('');
                        passLama.removeClass('is-invalid');
                        
                        $('.imgFileEditMember').val(null);
    
                        $('.cbEditLokasiMember').prop('checked', true);
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');
    
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');              
                    });
                } else if (status == 'gagal') {
                    let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                    notificationToast({ icon: 'error', title: text }, 5000, function () {
                        passBaru.val('');
                        passLama.val('');
                        $('.imgFileEditMember').val(null);
    
                        $('.cbEditLokasiMember').prop('checked', true);
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');
    
                        $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');                         
                    });
                }
            });

        } else {
            validasiInputText('.passwordEditMember', 'password');
            validasiInputText('.passwordLamaEditMember', 'password');
            if ($('.passwordEditMember').val() && $('.passwordLamaEditMember').val() && !$('.passwordEditMember, .passwordLamaEditMember').hasClass('is-invalid')) {

                let data = {
                    nama: nama.val(),
                    no_hp: noHp.val(),
                    email: email.val(),
                    passB: passBaru.val(),
                    passL: passLama.val(),
                    tipe: 'adaPassNggakAdaImg',
                    provinsi: null,
                    kotaKab: null,
                    kecamatan: null,
                    kelurahan: null,
                    apakahAktif: ($('.aktifEditMember').val() == 1) ? 1:0
                };

                if (isChecked) {
                    data.provinsi = provinsiP.val();
                    data.kotaKab = kotaKab.val();
                    data.kecamatan = kecamatan.val();
                    data.kelurahan = kelurahan.val();
                }

                myAjax('/user/editP/admin', data, function (result) {
                    $('html, body').animate({ scrollTop: "0" }, 400);
                    hideIconProsesMemuat('.member-edit .prosesMemuat');
                    result = JSON.parse(result);
                    let status = result.status;
                    if (status == 'berhasil') {
                        passBaru.addClass('is-valid');
                        passLama.addClass('is-valid').removeClass('is-invalid');
                        passBaru.removeClass('is-invalid');
                        $('.conImgPreviewEditMember').removeClass('myIsvalid').removeClass('myIsinvalid');
                        let text = "Selamat! Profile Member Berhasil Diubah!";
                        member('tutup', 'edit');
                        member('buka', 'listMember');
                        notificationToast({ icon: 'success', title: text }, 5000, function () {
                            $('.imgFileEditMember').val(null);
                            $('.cbEditLokasiMember').prop('checked', true);
                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');

                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');  
                        });
                    } else if (status == 'gagal') {
                        let text = "Maaf kamu gagal edit!! Cek internet kamu dan coba lagi!";
                        notificationToast({ icon: 'error', title: text }, 5000, function () {
                            passBaru.val('');
                            passLama.val('');
                            $('.imgFileEditMember').val(null);
                            $('.cbEditLokasiMember').prop('checked', true);
                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-valid');
                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid');
                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('activeSelectLokasi');

                            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').val('');
                        });
                    } else if (status == "password salah") {
                        let text = "Maaf password lama yang kamu masukkan salah! Masukkan password yang benar!";
                        notificationToast({ icon: 'error', title: text }, 5000, function () {
                            passLama.addClass('is-invalid');
                            passLama.removeClass('is-valid');
                            passLama.focus();
                        });
                        
                    }
                });
            }
        }
    } else {
        hideIconProsesMemuat('.member-edit .prosesMemuat');
    }

    
    $('.btnEditMemberBig').prop('disabled', false);
});

$('.backToListProduk').on('click', function () {
    let email = $(this).data('email');

    if(!$('produk-detail').hasClass('d-none'))
        produk('tutup', 'detail');
    if(!$('produk-edit').hasClass('d-none'))
        produk('tutup', 'edit');
    produk('buka', 'listProduk', { email: email });
});

$('.backToListMemberOrAdmin').on('click', function () {
    if ($(this).data('tipe') == 'member') {
        if (!$('.produk-list').hasClass('d-none'))
            produk('tutup', 'listProduk');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-tambah').hasClass('d-none'))
            member('tutup', 'tambah');
        produk('tutup', 'listProduk');
        member('buka', 'listMember');
    } else {
        if(!$('.admin-tambah').hasClass('d-none'))
        admin('tutup', 'tambah');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        produk('tutup', 'listProduk');
        admin('buka', 'listAdmin');
    }
});

$('.backToListAdmin').on('click', function () {
    if(!$('.admin-tambah').hasClass('d-none'))
        admin('tutup', 'tambah');
    if(!$('.admin-edit').hasClass('d-none'))
        admin('tutup', 'edit');
    if(!$('.admin-detail').hasClass('d-none'))
        admin('tutup', 'detail');
    admin('buka', 'listAdmin');
});

$('.cariMember').on('keyup', function () {
    let isi = $(this).val();
    showIconProsesMemuat('.member-list .prosesMemuatCari');

    $('.member-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
    $('.member-list').removeClass('d-none');
    $('.memberMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
    $('.memberMenu').next().children().children('.listMemberLink').addClass('active');
    
    setTimeout(() => {
        $('.member-list').css({opacity: 1, transform: 'scale(1)'});
        myAjax('/user/cari', { keyword: isi, tipe: 'member' }, function (result) {
            hideIconProsesMemuat('.member-list .prosesMemuatCari');
            if (result) {
                result = JSON.parse(result);
                let member2 = result;
                let el = ``;
                let i = 1;
                $('.bodyListMember').html('');
                let jaringan = ``;
                member2.forEach(function (member) {
                    jaringan = (member.status_jaringan == 1) ? `<span class="badge badge-success ml-1">Online</span>` : `<span class="badge badge-danger ml-1">Offline</span>`;
                    el = `
                    <tr data-lala='${member.id}' class="position-relative">
                            <th scope="row">${i++}</th>
                            <td><img src="/img/upload/${member.img}" alt="profile " width="90px" class="rounded"></td>
                            <td>${member.username}</td>
                            <td>${member.email}</td>
                            <td>${(member.is_active == 1) ? '<span class="badge badge-primary">Aktif</span>' : '<span class="badge badge-secondary">Tidak Aktif</span>'} ${jaringan} <span class="badge badge-info lihatProduk" data-email="${member.email}" data-tipe="member">Produk <i class="fas fa-external-link-alt"></i></span></td>>
                            <td>${member.created_at}</td>
                            <td>
                                <div class="row justify-content-center">
                                    <div class="col-sm-6 mb-2">
                                        <button type="button" data-email="${member.email}" width="10%" class="btn btn-success btn-sm btnEditMember">Edit</button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button type="button" data-email="${member.email}" width="10%" class="btn btn-danger btn-sm ml-1 btnHapusMember">Hapus</button>
                                    </div>
                                </div>
                            </td>
                            <td class="position-absolute detailMember rounded" data-email=${member.email}>
                                <span class="fas fa-external-link-alt"></span>
                            </td>
                    </tr>
                    
                    `;
                    $('.bodyListMember').append(el);
                });


                eventForListMember();
                eventProduk();
                $('.member-list .loadingSmallBox').css('opacity', 0);
                setTimeout(() => {
                    $('.member-list .loadingSmallBox').addClass('d-none');
                }, 200);
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Member tidak ditemukan'
                });
            }
        });
    }, 200);
});


$('.cariAdmin').on('keyup', function () {
    let isi = $(this).val();
    showIconProsesMemuat('.admin-list .prosesMemuatCari');

    $('.admin-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
    $('.admin-list').removeClass('d-none');
    $('.adminMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
    $('.adminMenu').next().children().children('.listAdminLink').addClass('active');
    setTimeout(() => {
        $('.admin-list').css({opacity: 1, transform: 'scale(1)'});
        myAjax('/user/cari', { keyword: isi, tipe: 'admin' }, function (result) {
            hideIconProsesMemuat('.admin-list .prosesMemuatCari');
            if (result) {
                result = JSON.parse(result);
                let admin2 = result;
                let el = ``;
                let i = 1;
                $('.bodyListAdmin').html('');
                let jaringan = ``;
                admin2.forEach(function (admin) {
                    jaringan = (admin.status_jaringan == 1) ? `<span class="badge badge-success ml-1">Online</span>` : `<span class="badge badge-danger ml-1">Offline</span>`;
                    el = `
                    <tr data-lala='${admin.id}' class="position-relative">
                            <th scope="row">${i++}</th>
                            <td><img src="/img/upload/${admin.img}" alt="profile " width="90px" class="rounded"></td>
                            <td>${admin.username}</td>
                            <td>${admin.email}</td>
                            <td>${(admin.is_active == 1) ? '<span class="badge badge-primary">Aktif</span>' : '<span class="badge badge-secondary">Tidak Aktif</span>'} ${jaringan} <span class="badge badge-info lihatProduk" data-email="${admin.email}" data-tipe="admin">Produk <i class="fas fa-external-link-alt"></i></span></td>
                            <td>${admin.created_at}</td>
                            <td>
                                <div class="row justify-content-center">
                                    <div class="col-sm-6 mb-2">
                                        <button type="button" data-email="${admin.email}" width="10%" class="btn btn-success btn-sm btnEditAdmin">Edit</button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button type="button" data-email="${admin.email}" width="10%" class="btn btn-danger btn-sm ml-1 btnHapusAdmin">Hapus</button>
                                    </div>
                                </div>
                            </td>
                            <td class="position-absolute detailAdmin rounded">
                                <span class="fas fa-external-link-alt"></span>
                            </td>
                    </tr>
                    
                    `;
                    $('.bodyListAdmin').append(el);
                });


                eventForListAdmin();
                eventProduk();

                $('.admin-list .loadingSmallBox').css('opacity', 0);
                setTimeout(() => {
                    $('.admin-list .loadingSmallBox').addClass('d-none');
                }, 200);
            }
        });
    }, 200);
});

$('.cariProduk').on('keyup', function () {
    let isi = $(this).val(), email = $(this).data('email');
    showIconProsesMemuat('.produk-list .prosesMemuatCari');

    produk('buka', 'listProduk', {keyword: isi, email: email});
});


$('.no-cursor').on('click', function () {
    if($(this).parent().parent().prev().hasClass('adminMenu'))
        Swal.fire({
            icon: 'info',
            title: 'Ups!',
            text: 'Untuk mengakses halaman ini, anda harus pergi ke list admin terlebih dahulu.. Setelah itu, disana akan terdapat tombol yang akan mengarahkan anda ke halaman ini. Anda akan terarahkan ke halaman list admin',
            didClose: function () {
                $('.produkMenu, .memberMenu, .dashboard-menu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');

                if(!$('.dashboard-utama').hasClass('d-none'))
                    dashboard('tutup');
                if(!$('.admin-tambah').hasClass('d-none'))
                    admin('tutup', 'tambah');
                if(!$('.admin-edit').hasClass('d-none'))
                    admin('tutup', 'edit');
                if(!$('.admin-detail').hasClass('d-none'))
                    admin('tutup', 'detail');
                if (!$('.member-tambah').hasClass('d-none'))
                    member('tutup', 'tambah');
                if (!$('.member-list').hasClass('d-none'))
                    member('tutup', 'listMember');
                if (!$('.member-detail').hasClass('d-none'))
                    member('tutup', 'detail');
                if (!$('.member-edit').hasClass('d-none'))
                    member('tutup', 'edit');
                if (!$('.produk-list').hasClass('d-none'))
                    produk('tutup', 'listProduk');
                if (!$('.produk-edit').hasClass('d-none'))
                    produk('tutup', 'edit');
                if (!$('.produk-detail').hasClass('d-none'))
                    produk('tutup', 'detail');
                admin('buka', 'listAdmin');
            
            }
        });
    else if ($(this).parent().parent().prev().hasClass('memberMenu'))
        Swal.fire({
            icon: 'info',
            title: 'Ups!',
            text: 'Untuk mengakses halaman ini, anda harus pergi ke list member terlebih dahulu.. Setelah itu, disana akan terdapat tombol yang akan mengarahkan anda ke halaman ini. Anda akan terarahkan ke halaman list member',
            didClose: function () {
                $('.produkMenu, .adminMenu, .dashboard-menu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');

                if(!$('.dashboard-utama').hasClass('d-none'))
                    dashboard('tutup');
                if(!$('.admin-edit').hasClass('d-none'))
                    admin('tutup', 'edit');
                if(!$('.admin-detail').hasClass('d-none'))
                    admin('tutup', 'detail');
                if (!$('.admin-list').hasClass('d-none'))
                    admin('tutup', 'listAdmin');
                if(!$('.admin-tambah').hasClass('d-none'))
                    admin('tutup', 'tambah');
                if (!$('.member-tambah').hasClass('d-none'))
                    member('tutup', 'tambah');
                if (!$('.member-detail').hasClass('d-none'))
                    member('tutup', 'detail');
                if (!$('.member-edit').hasClass('d-none'))
                    member('tutup', 'edit');
                if (!$('.produk-list').hasClass('d-none'))
                    produk('tutup', 'listProduk');
                if (!$('.produk-edit').hasClass('d-none'))
                    produk('tutup', 'edit');
                if (!$('.produk-detail').hasClass('d-none'))
                    produk('tutup', 'detail');
                member('buka', 'listMember');
            }
        });
    else 
        Swal.fire({
            icon: 'info',
            title: 'Ups!',
            text: 'Untuk mengakses halaman ini, anda harus pergi ke list member terlebih dahulu.. Setelah itu, disana akan terdapat tombol yang akan mengarahkan anda ke halaman ini. Anda akan terarahkan ke halaman list member',
            didClose: function () {
                Swal.fire({
                    icon: 'info',
                    title: 'Ingin Pergi Kemana?',
                    text: 'List admin atau list member',
                    showDenyButton: true,
                    confirmButtonText: 'Admin',
                    denyButtonText: 'Member',
                    allowOutsideClick: false
                }).then(function (result) {
                    if (result.isConfirmed) {
                        $('.produkMenu, .memberMenu, .dashboard-menu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
                        if(!$('.dashboard-utama').hasClass('d-none'))
                            dashboard('tutup');
                        if(!$('.admin-tambah').hasClass('d-none'))
                            admin('tutup', 'tambah');
                        if(!$('.admin-edit').hasClass('d-none'))
                            admin('tutup', 'edit');
                        if(!$('.admin-detail').hasClass('d-none'))
                            admin('tutup', 'detail');
                        if (!$('.member-tambah').hasClass('d-none'))
                            member('tutup', 'tambah');
                        if (!$('.member-list').hasClass('d-none'))
                            member('tutup', 'listMember');
                        if (!$('.member-detail').hasClass('d-none'))
                            member('tutup', 'detail');
                        if (!$('.member-edit').hasClass('d-none'))
                            member('tutup', 'edit');
                        if (!$('.produk-list').hasClass('d-none'))
                            produk('tutup', 'listProduk');
                        if (!$('.produk-edit').hasClass('d-none'))
                            produk('tutup', 'edit');
                        if (!$('.produk-detail').hasClass('d-none'))
                            produk('tutup', 'detail');
                        admin('buka', 'listAdmin');
                    } else {
                        $('.produkMenu, .adminMenu, .dashboard-menu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
                        if(!$('.dashboard-utama').hasClass('d-none'))
                            dashboard('tutup');
                        if(!$('.admin-edit').hasClass('d-none'))
                            admin('tutup', 'edit');
                        if(!$('.admin-detail').hasClass('d-none'))
                            admin('tutup', 'detail');
                        if (!$('.admin-list').hasClass('d-none'))
                            admin('tutup', 'listAdmin');
                        if(!$('.admin-tambah').hasClass('d-none'))
                            admin('tutup', 'tambah');
                        if (!$('.member-tambah').hasClass('d-none'))
                            member('tutup', 'tambah');
                        if (!$('.member-detail').hasClass('d-none'))
                            member('tutup', 'detail');
                        if (!$('.member-edit').hasClass('d-none'))
                            member('tutup', 'edit');
                        if (!$('.produk-list').hasClass('d-none'))
                            produk('tutup', 'listProduk');
                        if (!$('.produk-edit').hasClass('d-none'))
                            produk('tutup', 'edit');
                        if (!$('.produk-detail').hasClass('d-none'))
                            produk('tutup', 'detail');
                        member('buka', 'listMember');
                    }
                });
            }
        });
});

// Tutup Static Event




// My Functions

function hanyaAngka(e) {
    let charCode = (e.which) ? e.which : e.keyCode;
    if (charCode >= 48 && charCode <= 58)
        return true;
    return false;
}
function produk(aksi = 'buka', to = 'listProduk', data = null) {
    if (aksi == 'buka') {
        if (to == 'listProduk') {
            if (!data.keyword)
                $('.produk-list .cariProduk').val('');
                // $('.backToListMemberOrAdmin').data('tipe', data.tipe);
            $('.produk-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            $('.produk-list').removeClass('d-none');
            $('.produkMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.produkMenu').next().children().children('.listProdukLink').addClass('active');
            setTimeout(() => {
                $('.produk-list').css({ opacity: 1, transform: 'scale(1)' });
                
                
                myAjax('/produk/getAllMyProduk', { pass: 'A411MYPRODUK', email: data.email }, function (result) {
                    result = JSON.parse(result);
                    if (result.status == 'ada') {
                        let produk2 = result.allMyProduk;
                        let el_semua = ``, el_draf = ``, el_terjual = ``, el_kaladursa = ``, el_live = ``;
                        let i = 1, numLive = 1, numDraf = 1, numTerjual = 1, numKadaluarsa = 1;
                        $('.bodyListProduk').html('');

                        if (produk2) {
                            Object.values(produk2).forEach(function (myProduk) {
                                if (myProduk) {
                                    myProduk.forEach(function (pl) {
                                        el_semua = `
                                        <tr data-id="${pl.id}" class="position-relative">
                                            <td>${i++}</td>
                                            <td><img src="/img/upload/${pl.img}" width="90px" class="rounded" alt="gambar"></td>
                                            <td>${pl.nama_produk}</td>
                                            <td>${pl.harga_awal}</td>
                                            <td>
                                                <span class="badge badge-danger">${pl.stok_produk}</span>
                                            </td>
                                            <td>${pl.created_at}</td>
                                            <td>
                                                <div class="row justify-content-center">
                                                    <div class="col-sm-6 mb-2">
                                                        <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-success btn-sm btnEditProdukInList">Edit</button>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-danger btn-sm ml-2 btnHapusProduk">Hapus</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="position-absolute detailProduk rounded" data-email="${pl.email_user}">
                                                <span class="fas fa-external-link-alt"></span>
                                            </td>
                                        </tr>
                                    `;
                                        $('.tabContentSemuaProduk .bodyListProduk').append(el_semua);
                                    });
                                }
                            });
                            if (produk2.myProdukLive) {
                                Object.values(produk2.myProdukLive).forEach(function (pl) {
                                    el_live = `
                                    <tr data-id="${pl.id}" class="position-relative">
                                        <td>${numLive++}</td>
                                        <td><img src="/img/upload/${pl.img}" width="90px" class="rounded" alt="gambar"></td>
                                        <td>${pl.nama_produk}</td>
                                        <td>${pl.harga_awal}</td>
                                        <td>
                                            <span class="badge badge-danger">${pl.stok_produk}</span>
                                        </td>
                                        <td>${pl.created_at}</td>
                                        <td>
                                            <div class="row justify-content-center">
                                                <div class="col-sm-6 mb-2">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-success btn-sm btnEditProdukInList">Edit</button>
                                                </div>
                                                <div class="col-sm-6">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-danger btn-sm ml-2 btnHapusProduk">Hapus</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="position-absolute detailProduk rounded" data-email="${pl.email_user}">
                                            <span class="fas fa-external-link-alt"></span>
                                        </td>
                                    </tr>
                                `;
                                    $('.tabContentLiveProduk .bodyListProduk').append(el_live);
                                });
                            } else {
                                let text = `
                                    <tr>
                                        <th>!</th>
                                        <td>
                                            <div class="col-12 text-center"><h6>Maaf, tidak ada produk live :(</h6></div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                `;
                                $('.tabContentLiveProduk .bodyListProduk').html(text);
                            }

                            if (produk2.myProdukDraft) {
                                Object.values(produk2.myProdukDraft).forEach(function (pl) {
                                    el_draf = `
                                    <tr data-id="${pl.id}" class="position-relative">
                                        <td>${numDraf++}</td>
                                        <td><img src="/img/upload/${pl.img}" width="90px" class="rounded" alt="gambar"></td>
                                        <td>${pl.nama_produk}</td>
                                        <td>${pl.harga_awal}</td>
                                        <td>
                                            <span class="badge badge-danger">${pl.stok_produk}</span>
                                        </td>
                                        <td>${pl.created_at}</td>
                                        <td>
                                            <div class="row justify-content-center">
                                                <div class="col-sm-6 mb-2">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-success btn-sm btnEditProdukInList">Edit</button>
                                                </div>
                                                <div class="col-sm-6">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-danger btn-sm ml-2 btnHapusProduk">Hapus</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="position-absolute detailProduk rounded" data-email="${pl.email_user}">
                                            <span class="fas fa-external-link-alt"></span>
                                        </td>
                                    </tr>
                                `;
                                    $('.tabContentDrafProduk .bodyListProduk').append(el_draf);
                                });
                            } else {
                                let text = `
                                    <tr>
                                        <th>!</th>
                                        <td>
                                            <div class="col-12 text-center"><h6>Maaf, tidak ada produk draf :(</h6></div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                `;
                                $('.tabContentDrafProduk .bodyListProduk').html(text);
                            }
                        
                            if (produk2.myProdukSelesai) {
                                Object.values(produk2.myProdukSelesai).forEach(function (pl) {
                                    el_terjual = `
                                    <tr data-id="${pl.id}" class="position-relative">
                                        <td>${numTerjual++}</td>
                                        <td><img src="/img/upload/${pl.img}" width="90px" class="rounded" alt="gambar"></td>
                                        <td>${pl.nama_produk}</td>
                                        <td>${pl.harga_awal}</td>
                                        <td>
                                            <span class="badge badge-danger">${pl.stok_produk}</span>
                                        </td>
                                        <td>${pl.created_at}</td>
                                        <td>
                                            <div class="row justify-content-center">
                                                <div class="col-sm-6 mb-2">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-success btn-sm btnEditProdukInList">Edit</button>
                                                </div>
                                                <div class="col-sm-6">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-danger btn-sm ml-2 btnHapusProduk">Hapus</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="position-absolute detailProduk rounded" data-email="${pl.email_user}">
                                            <span class="fas fa-external-link-alt"></span>
                                        </td>
                                    </tr>
                                `;
                                    $('.tabContentTerjualProduk .bodyListProduk').append(el_terjual);
                                });
                            } else {
                                let text = `
                                    <tr>
                                        <th>!</th>
                                        <td>
                                            <div class="col-12 text-center"><h6>Maaf, tidak ada produk terjual :(</h6></div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                `;
                                $('.tabContentTerjualProduk .bodyListProduk').html(text);
                            }

                            if (produk2.myProdukKadaluarsa) {
                                i = 1;
                                Object.values(produk2.myProdukKadaluarsa).forEach(function (pl) {
                                    el_kaladursa = `
                                    <tr data-id="${pl.id}" class="position-relative">
                                        <td>${numKadaluarsa++}</td>
                                        <td><img src="/img/upload/${pl.img}" width="90px" class="rounded" alt="gambar"></td>
                                        <td>${pl.nama_produk}</td>
                                        <td>${pl.harga_awal}</td>
                                        <td>
                                            <span class="badge badge-danger">${pl.stok_produk}</span>
                                        </td>
                                        <td>${pl.created_at}</td>
                                        <td>
                                            <div class="row justify-content-center">
                                                <div class="col-sm-6 mb-2">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-success btn-sm btnEditProdukInList">Edit</button>
                                                </div>
                                                <div class="col-sm-6">
                                                    <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-danger btn-sm ml-2 btnHapusProduk">Hapus</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="position-absolute detailProduk rounded" data-email="${pl.email_user}">
                                            <span class="fas fa-external-link-alt"></span>
                                        </td>
                                    </tr>
                                `;
                                    $('.tabContentKadaluarsaProduk .bodyListProduk').append(el_kaladursa);
                                });
                            } else {
                                let text = `
                                    <tr>
                                        <th>!</th>
                                        <td>
                                            <div class="col-12 text-center"><h6>Maaf, tidak ada produk Kadaluarsa :(</h6></div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                `;
                                $('.tabContentKadaluarsaProduk .bodyListProduk').html(text);
                            }
                        } else {
                            let text = `
                                <tr>
                                    <th>!</th>
                                    <td>
                                        <div class="col-12 text-center"><h6>Maaf, tidak ada produk apapun :(</h6></div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            `;
                            $('.tabContentSemuaProduk .bodyListProduk').html(text);
                            $('.tabContentLiveProduk .bodyListProduk').html(text);
                            $('.tabContentDrafProduk .bodyListProduk').html(text);
                            $('.tabContentTerjualProduk .bodyListProduk').html(text);
                            $('.tabContentKadaluarsaProduk .bodyListProduk').html(text);
                        }
                    } else {
                        let text = `
                                <tr>
                                    <th>!</th>
                                    <td>
                                        <div class="col-12 text-center"><h6>Maaf, tidak ada produk apapun :(</h6></div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            `;
                        $('.tabContentSemuaProduk .bodyListProduk').html(text);
                        $('.tabContentLiveProduk .bodyListProduk').html(text);
                        $('.tabContentDrafProduk .bodyListProduk').html(text);
                        $('.tabContentTerjualProduk .bodyListProduk').html(text);
                        $('.tabContentKadaluarsaProduk .bodyListProduk').html(text);
                    }
                    
                    if (data.keyword) {
                        myAjax('/produk/cari', { keyword: data.keyword, email: data.email }, function (response) {
                            hideIconProsesMemuat('.produk-list .prosesMemuatCari');
                            response = JSON.parse(response);
                            if (response) {
                                let i = 1, el_semua = '';
                                $('.tabContentSemuaProduk .bodyListProduk').html('');
                                response.forEach(function (pl) {
                                    if (pl) {
                                        el_semua = `
                                            <tr data-id="${pl.id}" class="position-relative">
                                                <td>${i++}</td>
                                                <td><img src="/img/upload/${pl.img}" width="90px" class="rounded" alt="gambar"></td>
                                                <td>${pl.nama_produk}</td>
                                                <td>${pl.harga_awal}</td>
                                                <td>
                                                    <span class="badge badge-danger">${pl.stok_produk}</span>
                                                </td>
                                                <td>${pl.created_at}</td>
                                                <td>
                                                    <div class="row justify-content-center">
                                                        <div class="col-sm-6 mb-2">
                                                            <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-success btn-sm btnEditProdukInList">Edit</button>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <button type="button" data-email="${pl.email_user}" data-id="${pl.id}" width="10%" class="btn btn-danger btn-sm ml-2 btnHapusProduk">Hapus</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="position-absolute detailProduk rounded" data-email="${pl.email_user}">
                                                    <span class="fas fa-external-link-alt"></span>
                                                </td>
                                            </tr>
                                        `;
                                        $('.tabContentSemuaProduk .bodyListProduk').append(el_semua);
                                    }
                                });
                            } else {
                                document.location.href = document.location.href;
                            }

                            eventProdukList();
                            $('.produk-list .loadingSmallBox').css('opacity', 0);
                            setTimeout(() => {
                                $('.produk-list .loadingSmallBox').addClass('d-none');
                            }, 200);
                        });
                    } else {
                        hideIconProsesMemuat('.produk-list .prosesMemuatCari');
                        eventProdukList();
                        $('.produk-list .loadingSmallBox').css('opacity', 0);
                        setTimeout(() => {
                            $('.produk-list .loadingSmallBox').addClass('d-none');
                        }, 200);
                    }
                });
                
            }, 200);
        } else if(to == 'edit') {
            $('.produk-edit .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            $('.produk-edit').removeClass('d-none');
            $('.produkMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.produkMenu').next().children().children('.editProdukLink').addClass('active');
            $('.backToListProduk').data('email', data.email).addClass('cursor-pointer');
            setTimeout(() => {
                $('.produk-edit').css({ opacity: 1, transform: 'scale(1)' });
                eventEditProduk(data.lala, data.email);
            }, 200);
        } else if (to == 'detail') {
            $('.produk-detail .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            $('.produk-detail').removeClass('d-none');
            $('.produkMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.produkMenu').next().children().children('.detailProdukLink').addClass('active');
            setTimeout(() => {
                $('.produk-detail').css({ opacity: 1, transform: 'scale(1)' });

                myAjax('/produk/getOneProduk', { pass: 'A411MYPRODUK', lala: data.lala}, function (response) {
                    response = JSON.parse(response);
                    if (response.status == 'ada') {
                        let produk = response.produk;
                        $('.produkDetailImg').attr('src', '/img/upload/' + produk.img);
                        $('.backToListProduk').data('email', produk.email_user).addClass('cursor-pointer');
                        let status = ``;

                        if (produk.status == 0) {
                            status = `<span class="badge badge-success">Draf</span>`;
                        } else if (produk.status == 1) {
                            status = `<span class="badge badge-primary">Live</span>`;
                        } else if (produk.status == 2) {
                            status = `<span class="badge badge-secondary">Terjual</span>`;
                        } else if (produk.status == 3) {
                            status = `<span class="badge badge-danger">Kadaluarsa</span>`;
                        }

                        let el = `
                            <h6 class="card-title font-weight-bold nameDetailProduk">${produk.nama_produk}</h6><br>
                            <p class="card-text">Dibuat oleh ${produk.nama_user} | <span class="d-inline text-primary">${produk.email_user}</span></p>
                            <p class="card-text statusDetailProduk">Berstatus ${status}</p>
                            <p class="card-text">Jumlah Stok <span class="badge badge-warning">${produk.stok_produk}</span></p>
                            <p class="card-text"><small class="text-muted">Dibuat Sejak ${produk.created_at}</small></p>
                        `;

                        $('.bodyDetailProdukCard').html(el);


                        $('.produk-detail .loadingSmallBox').css('opacity', 0);
                        setTimeout(() => {
                            $('.produk-detail .loadingSmallBox').addClass('d-none');
                        }, 200);
                    } else {
                    }
                });
            }, 300);
        }
    } else if (aksi == 'tutup') {
        if (to == 'listProduk') {
            $('.tab-content .active.show').removeClass('active').removeClass('show');
            $('.tabContentSemuaProduk').addClass('active').addClass('show');
            $('.nav-tabs .nav-item .nav-link.active').removeClass('active').attr('aria-selected', false);
            $('.nav-tabs .nav-item .nav-link.navLinkSemua').addClass('active');
            $('.produk-list').css({opacity: 0, transform: 'scale(.5)'});
            $('.produkMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.produkMenu').next().children().children('.listProdukLink').removeClass('active');
            setTimeout(() => {
                $('.produk-list').addClass('d-none');
                $('.produk-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            }, 200);
        } else if (to == 'edit') {
            $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-valid');
            $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-invalid');
            $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .kadaluarsaProduk, .kadaluarsaProdukJamEdit').val('');
            $('.imgFileProdukEdit').val(null);
            $('.stokProdukEdit').val('1');
            $('.imgPreviewProdukEdit').attr('src', '/img/imageNotFound.png');

            $('.produk-edit').css({opacity: 0, transform: 'scale(.5)'});
            $('.produkMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.produkMenu').next().children().children('.editProdukLink').removeClass('active');
            $('.backToListProduk').data('email', '').removeClass('cursor-pointer');
            setTimeout(() => {
                $('.produk-edit').addClass('d-none');
                $('.produk-edit .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            }, 200);
        } else if (to == 'detail') {
            $('.produk-detail').css({opacity: 0, transform: 'scale(.5)'});
            $('.produkMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.produkMenu').next().children().children('.detailProdukLink').removeClass('active');
            $('.backToListProduk').data('email', '').removeClass('cursor-pointer');
            setTimeout(() => {
                $('.produk-detail').addClass('d-none');
                $('.produk-detail .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            }, 300);
        }
    }
}


function admin(aksi = 'buka', to = 'listAdmin', data = null) {
    if (aksi == 'buka') {
        if (to == 'listAdmin') {
            $('.admin-list .cariAdmin').val('');
            $('.admin-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            $('.admin-list').removeClass('d-none');
            $('.adminMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.adminMenu').next().children().children('.listAdminLink').addClass('active');
            setTimeout(() => {
                $('.admin-list').css({opacity: 1, transform: 'scale(1)'});
                myAjax('/admin/getAdmin', { pass: 'a411G3tADm1in', tipe: 'semua' }, function (result) {
                    result = JSON.parse(result);
                    if (result.stat == 'ada') {
                        let admin2 = result.semua;
                        let el = ``;
                        let i = 1;
                        $('.bodyListAdmin').html('');
                        let jaringan = ``;
                        admin2.forEach(function (admin) {
                            jaringan = (admin.status_jaringan == 1) ? `<span class="badge badge-success ml-1">Online</span>` : `<span class="badge badge-danger ml-1">Offline</span>`;
                            el = `
                            <tr data-lala='${admin.id}' class="position-relative">
                                    <th scope="row">${i++}</th>
                                    <td><img src="/img/upload/${admin.img}" alt="profile " width="90px" class="rounded"></td>
                                    <td>${admin.username}</td>
                                    <td>${admin.email}</td>
                                    <td>${(admin.is_active == 1) ? '<span class="badge badge-primary">Aktif</span>' : '<span class="badge badge-secondary">Tidak Aktif</span>'} ${jaringan} <span class="badge badge-info lihatProduk" data-tipe="admin" data-email="${admin.email}">Produk <i class="fas fa-external-link-alt"></i></span></td>
                                    <td>${admin.created_at}</td>
                                    <td>
                                        <div class="row justify-content-center">
                                            <div class="col-sm-6 mb-2">
                                                <button type="button" data-email="${admin.email}" width="10%" class="btn btn-success btn-sm btnEditAdmin">Edit</button>
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" data-email="${admin.email}" width="10%" class="btn btn-danger btn-sm ml-1 btnHapusAdmin">Hapus</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="position-absolute detailAdmin rounded">
                                        <span class="fas fa-external-link-alt"></span>
                                    </td>
                            </tr>
                            
                            `;
                            $('.bodyListAdmin').append(el);
                        });
    
    
                        eventForListAdmin();
                        eventProduk();

                        $('.admin-list .loadingSmallBox').css('opacity', 0);
                        setTimeout(() => {
                            $('.admin-list .loadingSmallBox').addClass('d-none');
                        }, 200);
                    }
                });
            }, 200);
        } else if (to == 'tambah') {
            ambilDataDaerahIndonesia('tambahAdmin');
            $('.admin-tambah').removeClass('d-none');
            $('.adminMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.adminMenu').next().children().children('.tambahAdminLink').addClass('active');
            setTimeout(() => {
                $('.admin-tambah').css({ opacity: 1, transform: 'scale(1)' });
            }, 200);
        } else if (to == 'detail') {
            $('.admin-detail .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            $('.admin-detail').removeClass('d-none');
            $('.adminMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.adminMenu').next().children().children('.detailAdminLink').addClass('active');
            setTimeout(() => {
                $('.admin-detail').css({ opacity: 1, transform: 'scale(1)' });

                myAjax('/admin/getAdmin', { pass: 'a411G3tADm1in', lala: data.lala, tipe: 'satu'}, function (response) {
                    response = JSON.parse(response);
                    if (response.status == 'berhasil') {
                        let $admin = response.admin;
                        let jaringan = ($admin.status_jaringan == 1) ? `<span class="badge badge-success ml-1">Online</span>` : `<span class="badge badge-danger ml-1">Offline</span>`;
                        $('.profileDetail').attr('src', '/img/upload/' + $admin.img);
                        let el = `
                            <h6 class="card-title font-weight-bold nameDetail">${$admin.username}</h6><br>
                            <span class="card-text text-primary emailProfile">${$admin.email}</span>
                            <p class="card-text statusDetail">${($admin.is_active == 1) ? '<span class="badge badge-primary">Aktif</span>' : '<span class="badge badge-secondary">Tidak Aktif</span>'} ${jaringan}</p>
                            <p class="card-text telpDetail">No Hp: ${$admin.no_hp}</p>
                            <p class="card-text saldoDetail">Saldo : Rp. ${$admin.user_saldo}</p>
                            <p class="card-text asalDetail">${$admin.asal.split('***')[0]} / ${$admin.asal.split('***')[1]} / ${$admin.asal.split('***')[2]} / ${$admin.asal.split('***')[3]}</p>
                            <p class="card-text"><small class="text-muted">Sejak ${$admin.created_at}</small></p>
                        `;

                        $('.bodyDetailAdminCard').html(el);


                        $('.admin-detail .loadingSmallBox').css('opacity', 0);
                        setTimeout(() => {
                            $('.admin-detail .loadingSmallBox').addClass('d-none');
                        }, 200);
                    } else {
                    }
                });
            }, 300);
        } else if (to == 'edit') {
            ambilDataDaerahIndonesia('editAdmin');
            $('.admin-edit').removeClass('d-none');
            $('.adminMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.adminMenu').next().children().children('.editAdminLink').addClass('active');

            // Siapkan isi dan value default input
            $('.admin-edit .imgPreviewEditAdmin').attr('src', '/img/upload/' + data.img).parent().removeClass('myIsvalid').removeClass('myIsinvalid');
            $('.admin-edit .aktifEditAdmin').prop('checked', (data.is_active == 1) ? true : false).val(data.is_active);
            $('.admin-edit .usernameEditAdmin').removeClass('is-valid').removeClass('is-invalid').val(data.username);
            $('.admin-edit .emailEditAdmin').removeClass('is-valid').removeClass('is-invalid').val(data.email);
            $('.admin-edit .telpEditAdmin').removeClass('is-valid').removeClass('is-invalid').val(data.no_hp);
            $('.admin-edit .cbEditLokasi').prop('checked', true);

            $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid').removeClass('is-valid').val('');
            if (!$('.admin-edit .cbEditLokasi').prop('checked')) {
                disabled('.provincesEditAdmin', '.regenciesEditAdmin', '.districtsEditAdmin', '.villagesEditAdmin', 'add');
            } else {
                disabled('.provincesEditAdmin', '.regenciesEditAdmin', '.districtsEditAdmin', '.villagesEditAdmin', 'remove');
            }
            setTimeout(() => {
                $('.admin-edit').css({ opacity: 1, transform: 'scale(1)' });
            }, 200);
        }
    } else if (aksi == 'tutup') {
        if (to == 'listAdmin') {
            $('.admin-list').css({opacity: 0, transform: 'scale(.5)'});
            $('.adminMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.adminMenu').next().children().children('.listAdminLink').removeClass('active');
            setTimeout(() => {
                $('.admin-list').addClass('d-none');
                $('.admin-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            }, 200);
        } else if (to == 'tambah') {
            $('.admin-tambah').css({ opacity: 0, transform: 'scale(.5)' });
            $('.adminMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.adminMenu').next().children().children('.tambahAdminLink').removeClass('active');
            $('.iconLocation').css('opacity', 0);
            setTimeout(() => {
                $('.admin-tambah').addClass('d-none');
                $('.provinces, .regencies, .districts, .villages').removeClass('is-invalid').removeClass('is-valid').removeClass('activeSelectLokasi').val('');
                setTimeout(() => {
                    $('.provinces, .regencies, .districts, .villages').parent().addClass('d-none');
                }, 300);
            }, 300);
        } else if (to == 'detail') {
            $('.admin-detail').css({opacity: 0, transform: 'scale(.5)'});
            $('.adminMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.adminMenu').next().children().children('.detailAdminLink').removeClass('active');
            setTimeout(() => {
                $('.admin-detail').addClass('d-none');
                $('.admin-detail .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            }, 300);
        } else if (to == 'edit') {
            $('.admin-edit').css({ opacity: 0, transform: 'scale(.5)' });
            $('.adminMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.adminMenu').next().children().children('.editAdminLink').removeClass('active');
            $('.iconLocation').css('opacity', 0);
            setTimeout(() => {
                $('.admin-edit').addClass('d-none');
                $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').removeClass('is-invalid').removeClass('is-valid').removeClass('activeSelectLokasi').val('');
                setTimeout(() => {
                    $('.provincesEditAdmin, .regenciesEditAdmin, .districtsEditAdmin, .villagesEditAdmin').parent().addClass('d-none');
                }, 300);
            }, 300);
        }
    }
}


function member(aksi = 'buka', to = 'listMember', data = null) {
    if (aksi == 'buka') {
        if (to == 'listMember') {
            $('.member-list .cariMember').val('');
            $('.member-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            $('.member-list').removeClass('d-none');
            $('.memberMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.memberMenu').next().children().children('.listMemberLink').addClass('active');
            
            setTimeout(() => {
                $('.member-list').css({opacity: 1, transform: 'scale(1)'});
                myAjax('/user/getAllMember', { pass: 'A411g3T44llM3mi3eR'}, function (result) {
                    result = JSON.parse(result);
                    if (result.stat == 'ada') {
                        let member2 = result.allUsers;
                        let el = ``;
                        let i = 1;
                        $('.bodyListMember').html('');
                        let jaringan = ``;
                        member2.forEach(function (member) {
                            jaringan = (member.status_jaringan == 1) ? `<span class="badge badge-success ml-1">Online</span>` : `<span class="badge badge-danger ml-1">Offline</span>`;
                            el = `
                            <tr data-lala='${member.id}' class="position-relative">
                                    <th scope="row">${i++}</th>
                                    <td><img src="/img/upload/${member.img}" alt="profile " width="90px" class="rounded"></td>
                                    <td>${member.username}</td>
                                    <td>${member.email}</td>
                                    <td>${(member.is_active == 1) ? '<span class="badge badge-primary">Aktif</span>' : '<span class="badge badge-secondary">Tidak Aktif</span>'} ${jaringan} <span class="badge badge-info lihatProduk" data-tipe="member" data-email="${member.email}">Produk <i class="fas fa-external-link-alt"></i></span></td>>
                                    <td>${member.created_at}</td>
                                    <td>
                                        <div class="row justify-content-center">
                                            <div class="col-sm-6 mb-2">
                                                <button type="button" data-email="${member.email}" width="10%" class="btn btn-success btn-sm btnEditMember">Edit</button>
                                            </div>
                                            <div class="col-sm-6">
                                                <button type="button" data-email="${member.email}" width="10%" class="btn btn-danger btn-sm ml-1 btnHapusMember">Hapus</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="position-absolute detailMember rounded" data-email=${member.email}>
                                        <span class="fas fa-external-link-alt"></span>
                                    </td>
                            </tr>
                            
                            `;
                            $('.bodyListMember').append(el);
                        });
    
    
                        eventForListMember();
                        eventProduk();
                        $('.member-list .loadingSmallBox').css('opacity', 0);
                        setTimeout(() => {
                            $('.member-list .loadingSmallBox').addClass('d-none');
                        }, 200);
                    }
                });
            }, 200);
        } else if (to == 'tambah') {
            ambilDataDaerahIndonesia('tambahMember');
            $('.member-tambah').removeClass('d-none');
            $('.memberMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.memberMenu').next().children().children('.tambahMemberLink').addClass('active');
            setTimeout(() => {
                $('.member-tambah').css({ opacity: 1, transform: 'scale(1)' });
            }, 200);
        } else if (to == 'detail') {
            $('.member-detail .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            $('.member-detail').removeClass('d-none');
            $('.memberMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.memberMenu').next().children().children('.detailMemberLink').addClass('active');
            setTimeout(() => {
                $('.member-detail').css({ opacity: 1, transform: 'scale(1)' });

                myAjax('/user/getOneUser', { pass: 'a411g52t2ueso0neMen2rrberOrAd412fmdin', email: data.email}, function (response) {
                    response = JSON.parse(response);
                    if (response.status == 'berhasil') {
                        let $member = response.user;
                        let jaringan = ($member.status_jaringan == 1) ? `<span class="badge badge-success ml-1">Online</span>` : `<span class="badge badge-danger ml-1">Offline</span>`;
                        $('.profileDetailMember').attr('src', '/img/upload/' + $member.img);
                        let el = `
                            <h6 class="card-title font-weight-bold nameDetail">${$member.username}</h6><br>
                            <span class="card-text text-primary emailProfile">${$member.email}</span>
                            <p class="card-text statusDetail">${($member.is_active == 1) ? '<span class="badge badge-primary">Aktif</span>' : '<span class="badge badge-secondary">Tidak Aktif</span>'} ${jaringan}</p>
                            <p class="card-text telpDetail">No Hp: ${$member.no_hp}</p>
                            <p class="card-text saldoDetail">Saldo : Rp. ${$member.user_saldo}</p>
                            <p class="card-text asalDetail">${$member.asal.split('***')[0]} / ${$member.asal.split('***')[1]} / ${$member.asal.split('***')[2]} / ${$member.asal.split('***')[3]}</p>
                            <p class="card-text"><small class="text-muted">Sejak ${$member.created_at}</small></p>
                        `;

                        $('.bodyDetailMemberCard').html(el);


                        $('.member-detail .loadingSmallBox').css('opacity', 0);
                        setTimeout(() => {
                            $('.member-detail .loadingSmallBox').addClass('d-none');
                        }, 200);
                    } else {
                    }
                });
            }, 300);
        } else if (to == 'edit') {
            ambilDataDaerahIndonesia('editMember');
            $('.member-edit').removeClass('d-none');
            $('.memberMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
            $('.memberMenu').next().children().children('.editMemberLink').addClass('active');

            // Siapkan isi dan value default input
            $('.member-edit .imgPreviewEditMember').attr('src', '/img/upload/' + data.img).parent().removeClass('myIsvalid').removeClass('myIsinvalid');
            $('.member-edit .aktifEditMember').prop('checked', (data.is_active == 1) ? true : false).val(data.is_active);
            $('.member-edit .usernameEditMember').removeClass('is-valid').removeClass('is-invalid').val(data.username);
            $('.member-edit .emailEditMember').removeClass('is-valid').removeClass('is-invalid').val(data.email);
            $('.member-edit .telpEditMember').removeClass('is-valid').removeClass('is-invalid').val(data.no_hp);
            $('.member-edit .cbEditLokasiMember').prop('checked', true);
            $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid').removeClass('is-valid').val('');

            if (!$('.member-edit .cbEditLokasiMember').prop('checked')) {
                disabled('.provincesEditMember', '.regenciesEditMember', '.districtsEditMember', '.villagesEditMember', 'add');
            } else {
                disabled('.provincesEditMember', '.regenciesEditMember', '.districtsEditMember', '.villagesEditMember', 'remove');
            }
            setTimeout(() => {
                $('.member-edit').css({ opacity: 1, transform: 'scale(1)' });
            }, 200);
        }
    } else if (aksi == 'tutup') {
        if (to == 'listMember') {
            $('.member-list').css({opacity: 0, transform: 'scale(.5)'});
            $('.memberMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.memberMenu').next().children().children('.listMemberLink').removeClass('active');
            setTimeout(() => {
                $('.member-list').addClass('d-none');
                $('.member-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            }, 200);
        } else if (to == 'tambah') {
            $('.member-tambah').css({ opacity: 0, transform: 'scale(.5)' });
            $('.memberMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.memberMenu').next().children().children('.tambahMemberLink').removeClass('active');
            $('.iconLocation').css('opacity', 0);
            setTimeout(() => {
                $('.member-tambah').addClass('d-none');
                $('.provincesTambahMember, .regenciesTambahMember, .districtsTambahMember, .villagesTambahMember').removeClass('is-invalid').removeClass('is-valid').removeClass('activeSelectLokasi').val('');
                setTimeout(() => {
                    $('.provincesTambahMember, .regenciesTambahMember, .districtsTambahMember, .villagesTambahMember').parent().addClass('d-none');
                }, 300);
            }, 300);
        } else if (to == 'detail') {
            $('.member-detail').css({opacity: 0, transform: 'scale(.5)'});
            $('.memberMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.memberMenu').next().children().children('.detailMemberLink').removeClass('active');
            setTimeout(() => {
                $('.member-detail').addClass('d-none');
                $('.member-detail .loadingSmallBox').removeClass('d-none').css('opacity', 1);
            }, 300);
        } else if (to == 'edit') {
            $('.member-edit').css({ opacity: 0, transform: 'scale(.5)' });
            $('.memberMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.memberMenu').next().children().children('.editMemberLink').removeClass('active');
            $('.iconLocation').css('opacity', 0);
            setTimeout(() => {
                $('.member-edit').addClass('d-none');
                $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').removeClass('is-invalid').removeClass('is-valid').removeClass('activeSelectLokasi').val('');
                setTimeout(() => {
                    $('.provincesEditMember, .regenciesEditMember, .districtsEditMember, .villagesEditMember').parent().addClass('d-none');
                }, 300);
            }, 300);
        }
    }
}


function renderSkalaPertambahanProduk() {
    let filterTahun = $('.dashboard-utama .filterTahun').val();
    let tahunTerpilih = (filterTahun) ? filterTahun : new Date().getFullYear();

    // Analisis skala pedaftaran
    let produkSetiapBulan = {
        jan: [],
        feb: [],
        mar: [],
        apr: [],
        mei: [],
        jun: [],
        jul: [],
        agu: [],
        sep: [],
        okt: [],
        nov: [],
        des: []
    };
    allProduk.forEach(produk => {
        let tahunproduk = parseInt(produk.created_at.split(' ')[0].split('-')[0]);
        let bulanproduk = parseInt(produk.created_at.split(' ')[0].split('-')[1]);
        if (tahunproduk == tahunTerpilih) {
            if (bulanproduk == 1) {
                produkSetiapBulan.jan.push(produk);
            } else if (bulanproduk == 2) {
                produkSetiapBulan.feb.push(produk);
            } else if (bulanproduk == 3) {
                produkSetiapBulan.mar.push(produk);
            } else if (bulanproduk == 4) {
                produkSetiapBulan.apr.push(produk);
            } else if (bulanproduk == 5) {
                produkSetiapBulan.mei.push(produk);
            } else if (bulanproduk == 6) {
                produkSetiapBulan.jun.push(produk);
            } else if (bulanproduk == 7) {
                produkSetiapBulan.jul.push(produk);
            } else if (bulanproduk == 8) {
                produkSetiapBulan.agu.push(produk);
            } else if (bulanproduk == 9) {
                produkSetiapBulan.sep.push(produk);
            } else if (bulanproduk == 10) {
                produkSetiapBulan.okt.push(produk);
            } else if (bulanproduk == 11) {
                produkSetiapBulan.nov.push(produk);
            } else if (bulanproduk == 12) {
                produkSetiapBulan.des.push(produk);
            }
        }
    });

    let jmlprodukSetiapBulan = [
        produkSetiapBulan.jan.length,
        produkSetiapBulan.feb.length,
        produkSetiapBulan.mar.length,
        produkSetiapBulan.apr.length,
        produkSetiapBulan.mei.length,
        produkSetiapBulan.jun.length,
        produkSetiapBulan.jul.length,
        produkSetiapBulan.agu.length,
        produkSetiapBulan.sep.length,
        produkSetiapBulan.okt.length,
        produkSetiapBulan.nov.length,
        produkSetiapBulan.des.length,
    ];


    //--------------
    //- Bar CHART -
    //--------------

    // Get context with jQuery - using jQuery's .get() method.
    let skalaTambahChartCanvas = $('#skalaTambahProduk').get(0).getContext('2d');

    let skalaTambahChartData = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [
            {
                label: 'Pertambahan Produk',
                backgroundColor: '#DC3545',
                borderColor: '#ac1020',
                // pointHighlightStroke: 'rgba(60,141,188,1)',
                data: jmlprodukSetiapBulan
            },
        ]
    };

    let skalaTambahChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                }
            }]
        }
    };

    // This will get the first returned node in the jQuery collection.
    new Chart(skalaTambahChartCanvas, {
        type: 'bar',
        data: skalaTambahChartData,
        options: skalaTambahChartOptions
    });

    $('.cardSkalaPenambahanProduk .loadingSmallBox').css('opacity', 0);
    setTimeout(() => {
        $('.cardSkalaPenambahanProduk .loadingSmallBox').addClass('d-none');
    }, 200);
}

function updateDataRealTime() {
    window.intervalRealTime = setInterval(() => {
        getAllMember();
        getProduk();
        getProduk('live');
        getProduk('selesai');
    }, 60000);
}

function dashboard(aksi = 'buka') {
    if (aksi == 'buka') {
        $('.dashboard-utama .filterTahun').html('');
        $('.dashboard-utama').removeClass('d-none');
        $('.dashboardMenu').parent().addClass('menu-open').addClass('menu-is-opening').children('ul').css('display', 'block');
        $('.dashboardMenu').next().children().children().addClass('active');
        setTimeout(() => {
            $('.dashboard-utama').css({opacity: 1, transform: 'scale(1)'});
        }, 200);
        setTimeout(() => {
            myAjax('/user/getAllMember', { pass: 'A411g3T44llM3mi3eR' }, function (result) {
                result = JSON.parse(result);
                if (result.stat == 'ada') {
                    allMember = result.allUsers;
                    $('.jmlMember').html(allMember.length);
                    let tahun = [];
                    allMember.map((member) => {
                        tahun.push(parseInt(member.created_at.split(' ')[0].split('-')[0]));
                    });
                    
                    tahun.sort(function(a, b) {
                        return a - b;
                    });
                    
                    tahun = [...new Set(tahun)];
                    tahun.reverse();
                    tahun.forEach((thn) => {
                        if (thn == new Date().getFullYear() || thn == tahun[0]) {
                            $('.dashboard-utama .filterTahun').append(`<option selected='selected' value="${thn}">${thn}</option>`);
                        } else { 
                            $('.dashboard-utama .filterTahun').append(`<option value="${thn}">${thn}</option>`);
                        }
                    });
                    
                    $('.smallBoxMember .loadingSmallBox, .smallBoxFilterTahun .loadingSmallBox').css('opacity', 0);
                    renderSkalaPendaftaran();
                    setTimeout(() => {
                        $('.smallBoxMember .loadingSmallBox, .smallBoxFilterTahun .loadingSmallBox').addClass('d-none');
                    }, 200);
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Ups, kamu gagal memuat data member. Coba cek internet kamu..',
                        confirmButtonText: 'OK'
                    }).then(function () {
                        document.location.href = document.location.href;
                    });
                }
            });
            myAjax('/produk/getProducts', { pass: '4a11G3tAl1P120DuK', tipe: 'semua' }, function (response) {
                response = JSON.parse(response);
                if (response.stat == 'ada') {
                    allProduk = response.allProducts;
                    $('.smallBoxProduk h3').html(allProduk.length);
                    $('.smallBoxProduk .loadingSmallBox').css('opacity', 0);
                    renderSkalaPertambahanProduk();
                    setTimeout(() => {
                        $('.smallBoxProduk .loadingSmallBox').addClass('d-none');
                    }, 200);
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Ups, kamu gagal memuat data member dan produk. Coba cek internet kamu..',
                        confirmButtonText: 'OK'
                    }).then(function () {
                        document.location.href = document.location.href;
                    });
                }
            });
        }, 700);
    } else if (aksi == 'tutup') {
        $('.dashboard-utama').css({opacity: 0, transform: 'scale(.5)'});
        setTimeout(() => {
            $('.dashboardMenu').parent().removeClass('menu-open').removeClass('menu-is-opening').children('ul').css('display', 'none');
            $('.dashboardMenu').next().children().children().removeClass('active');
            $('.smallBoxProduk .loadingSmallBox, .smallBoxMember .loadingSmallBox, .cardSkalaPendaftaran .loadingSmallBox').removeClass('d-none');
            setTimeout(() => {
                $('.smallBoxMember .loadingSmallBox').css('opacity', 1);
                $('.smallBoxProduk .loadingSmallBox').css('opacity', 1);
                $('.cardSkalaPendaftaran .loadingSmallBox').css('opacity', 1);
            }, 200);
            $('.dashboard-utama').addClass('d-none');
        }, 200);
    }
}

function getProduk(tipe = 'semua') {
    myAjax('/produk/getProducts', { pass: '4a11G3tAl1P120DuK', tipe: tipe }, function (result) {
        result = JSON.parse(result);
        if (tipe == 'semua') {
            if (result.stat == 'ada') {
                allProduk = result.allProducts;
            } else {
                allProduk = null;
            }
        } else if (tipe == 'live') {
            if (result.stat == 'ada') {
                produkLive = result.produkLive;
            } else {
                produkLive = null;
            }
        } else if (tipe == 'selesai') {
            if (result.stat == 'ada') {
                produkNotLive = result.produkNotLive;
            } else {
                produkNotLive = null;
            }
        }
    });
}

function getAllMember() {
    myAjax('/user/getAllMember', { pass: 'A411g3T44llM3mi3eR' }, function (result) {
        result = JSON.parse(result);
        if (result.stat == 'ada') {
            allMember = result.allUsers;
        } else {
            allMember = null;
        }
    });
}

function renderSkalaPendaftaran() {
    let filterTahun = $('.dashboard-utama .filterTahun').val();
    let tahunTerpilih = (filterTahun) ? filterTahun : new Date().getFullYear();
    // Analisis skala pedaftaran
    let memberSetiapBulan = {
        jan: [],
        feb: [],
        mar: [],
        apr: [],
        mei: [],
        jun: [],
        jul: [],
        agu: [],
        sep: [],
        okt: [],
        nov: [],
        des: []
    };
    allMember.forEach(member => {
        let tahunMember = parseInt(member.created_at.split(' ')[0].split('-')[0]);
        let bulanMember = parseInt(member.created_at.split(' ')[0].split('-')[1]);
        if (tahunMember == tahunTerpilih) {
            if (bulanMember == 1) {
                memberSetiapBulan.jan.push(member);
            } else if (bulanMember == 2) {
                memberSetiapBulan.feb.push(member);
            } else if (bulanMember == 3) {
                memberSetiapBulan.mar.push(member);
            } else if (bulanMember == 4) {
                memberSetiapBulan.apr.push(member);
            } else if (bulanMember == 5) {
                memberSetiapBulan.mei.push(member);
            } else if (bulanMember == 6) {
                memberSetiapBulan.jun.push(member);
            } else if (bulanMember == 7) {
                memberSetiapBulan.jul.push(member);
            } else if (bulanMember == 8) {
                memberSetiapBulan.agu.push(member);
            } else if (bulanMember == 9) {
                memberSetiapBulan.sep.push(member);
            } else if (bulanMember == 10) {
                memberSetiapBulan.okt.push(member);
            } else if (bulanMember == 11) {
                memberSetiapBulan.nov.push(member);
            } else if (bulanMember == 12) {
                memberSetiapBulan.des.push(member);
            }
        }
    });

    let jmlMemberSetiapBulan = [
        memberSetiapBulan.jan.length,
        memberSetiapBulan.feb.length,
        memberSetiapBulan.mar.length,
        memberSetiapBulan.apr.length,
        memberSetiapBulan.mei.length,
        memberSetiapBulan.jun.length,
        memberSetiapBulan.jul.length,
        memberSetiapBulan.agu.length,
        memberSetiapBulan.sep.length,
        memberSetiapBulan.okt.length,
        memberSetiapBulan.nov.length,
        memberSetiapBulan.des.length,
    ];


    //--------------
    //- AREA CHART -
    //--------------

    // Get context with jQuery - using jQuery's .get() method.
    let areaChartCanvas = $('#areaChart').get(0).getContext('2d');

    let areaChartData = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [
            {
                label: 'Pendaftaran Akun',
                fill: false,
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: 5,
                // pointHighlightStroke: 'rgba(60,141,188,1)',
                data: jmlMemberSetiapBulan
            },
        ]
    };

    let areaChartOptions = {
        elements: {
            point: {
                hoverBorderWidth: 10,
                hoverRadius: 5
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                }
            }]
        }
    };

    // This will get the first returned node in the jQuery collection.
    new Chart(areaChartCanvas, {
    type: 'line',
    data: areaChartData,
    options: areaChartOptions
    });

    $('.cardSkalaPendaftaran .loadingSmallBox').css('opacity', 0);
    setTimeout(() => {
        $('.cardSkalaPendaftaran .loadingSmallBox').addClass('d-none');
    }, 200);
}

function myAjax(url, data, funcSuccess) {
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: funcSuccess
    });
}

function ambilDataDaerahIndonesia(tipe = null) {
    let kelasProvinsi,
    kelasRegencies,
    kelasDistricts,
    kelasVillages,
    kelasLoader;
    if (tipe == 'editAdmin') {
        kelasProvinsi = '.provincesEditAdmin';
        kelasRegencies = '.regenciesEditAdmin';
        kelasDistricts = '.districtsEditAdmin';
        kelasVillages = '.villagesEditAdmin';
        kelasLoader = '.loaderApiDaerahEditAdmin';
    } else if(tipe == 'tambahAdmin') {
        kelasProvinsi = '.provinces';
        kelasRegencies = '.regencies';
        kelasDistricts = '.districts';
        kelasVillages = '.villages';
        kelasLoader = '.loaderApiDaerah';
    } else if (tipe == 'tambahMember') {
        kelasProvinsi = '.provincesTambahMember';
        kelasRegencies = '.regenciesTambahMember';
        kelasDistricts = '.districtsTambahMember';
        kelasVillages = '.villagesTambahMember';
        kelasLoader = '.loaderApiDaerahTambahMember';
    } else if (tipe == 'editMember') {
        kelasProvinsi = '.provincesEditMember';
        kelasRegencies = '.regenciesEditMember';
        kelasDistricts = '.districtsEditMember';
        kelasVillages = '.villagesEditMember';
        kelasLoader = '.loaderApiDaerahEditMember';
    }
    $(`${kelasLoader}`).addClass('animationForLoaderApi');
    $(`${kelasProvinsi}`).off('change');
    myAjax('/home/apiDaerahIndonesia', {pass: 'AG3TD43RAHinD0N3S1A', tipe: 'provinsi'}, function (result) {
        result = JSON.parse(result);

        let myHash = result.hash, api = result.api;
        
        
        let optionEl = `<option selected class="mySelectOption" value="default-value">Provinsi</option>`;

        let i = 0;
        api.forEach(function (data) {
            optionEl = optionEl + `<option value='${myHash[i]}'>${data.name}</option>`;
            i++;
        });
        $(`${kelasProvinsi}`).html(optionEl);
        $(`${kelasProvinsi}`).parent().removeClass('d-none');
        setTimeout(() => {
            $(`${kelasProvinsi}`).addClass('activeSelectLokasi');
        }, 200);
        $('.iconLocation').css('opacity', 1);
        $(`${kelasLoader}`).removeClass('animationForLoaderApi');

        $(`${kelasProvinsi}`).on('change', function () {
            $(`${kelasRegencies}`).off('change');
            $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', true);
            $(`${kelasLoader}`).addClass('animationForLoaderApi');
            if (tipe == 'editAdmin') {
                $('.cbEditLokasi').prop('disabled', true);
            }
            let val = $(this).val(),
                nextSelectEl = $(this).parent().next();
            
            $(`${kelasRegencies}`).val('');
            $(`${kelasRegencies}`).html('<option selected class="mySelectOption" value="default-value">Kab/Kota</option>');


            $(kelasDistricts).val('');
            $(kelasDistricts).html('<option selected class="mySelectOption" value="default-value">Kecamatan</option>');
            $(kelasVillages).val('');
            $(kelasVillages).html('<option selected class="mySelectOption" value="default-value">Kelurahan</option>');
            $(`${kelasDistricts}, ${kelasVillages}`).removeClass('activeSelectLokasi');
            setTimeout(() => {
                $(kelasDistricts).parent().addClass('d-none');
                $(kelasVillages).parent().addClass('d-none');
            }, 200);
            
            if (val != 'default-value') {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $(`${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).removeClass('is-invalid');
                $(`${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).removeClass('is-valid');
                myAjax('/home/apiDaerahIndonesia', { pass: 'AG3TD43RAHinD0N3S1A', tipe: 'kota/kabupaten', HELLo: val }, function (response) {
                    $('.iconLocation').css('opacity', 0);
                    setTimeout(() => {
                        nextSelectEl.removeClass('d-none');
                        response = JSON.parse(response);
                        $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                        if (tipe == 'editAdmin') {
                            $('.cbEditLokasi').prop('disabled', false);
                        }
                        setTimeout(() => {
                            $(`${kelasRegencies}`).addClass('activeSelectLokasi');
                            setTimeout(() => {
                                $('.iconLocation').css('opacity', 1);
                            }, 500);
                        }, 200);
                        setTimeout(() => {
                            $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', false);
                        }, 550);
                        
                        let myHash = response.hash, api = response.api;
            
                        
                        let optionEl = `<option selected class="mySelectOption" value="default-value">Kota/Kab</option>`;

                        let i = 0;
                        api.forEach(function (data) {
                            optionEl = optionEl + `<option value='${myHash[i]}'>${data.name}</option>`;
                            i++;
                        });
                        $(`${kelasRegencies}`).html(optionEl);

                        $(`${kelasRegencies}`).on('change', function () {
                            $(kelasDistricts).off('change');
                            $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', true);
                            $(`${kelasLoader}`).addClass('animationForLoaderApi');
                            if (tipe == 'editAdmin') {
                                $('.cbEditLokasi').prop('disabled', true);
                            }
                            let val = $(this).val(),
                                nextSelectEl = $(this).parent().next();
                            
                            
                            $(kelasDistricts).val('');
                            $(kelasDistricts).html('<option selected class="mySelectOption" value="default-value">Kecamatan</option>');

                            $(kelasVillages).val('');
                            $(kelasVillages).html('<option selected class="mySelectOption" value="default-value">Kelurahan</option>');
                            $(kelasVillages).removeClass('activeSelectLokasi');
                            setTimeout(() => {
                                $(kelasVillages).parent().addClass('d-none');
                            }, 200);
                            
                            if (val != 'default-value') {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');


                                $(`${kelasDistricts}, ${kelasVillages}`).removeClass('is-invalid');
                                $(`${kelasDistricts}, ${kelasVillages}`).removeClass('is-valid');

                                myAjax('/home/apiDaerahIndonesia', { pass: 'AG3TD43RAHinD0N3S1A', tipe: 'kecamatan', HELLo: val }, function (result) {
                                    $('.iconLocation').css('opacity', 0);

                                    setTimeout(() => {
                                        nextSelectEl.removeClass('d-none');
                                        result = JSON.parse(result);
                                        $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                                        if (tipe == 'editAdmin') {
                                            $('.cbEditLokasi').prop('disabled', false);
                                        }
                                        setTimeout(() => {
                                            $(kelasDistricts).addClass('activeSelectLokasi');
                                            setTimeout(() => {
                                                $('.iconLocation').css('opacity', 1);
                                            }, 500);
                                        }, 200);
                                        setTimeout(() => {
                                            $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', false);
                                        }, 550);
                                        
                                        let myHash = result.hash, api = result.api;
                            
                                        
                                        let optionEl = `<option selected class="mySelectOption" value="default-value">Kecamatan</option>`;
        
                                        let i = 0;
                                        api.forEach(function (data) {
                                            optionEl = optionEl + `<option value='${myHash[i]}'>${data.name}</option>`;
                                            i++;
                                        });
                                        $(kelasDistricts).html(optionEl);
        
                                        
                                        $(kelasDistricts).on('change', function () {
                                            $(kelasVillages).off('change');
                                            $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', true);
                                            $(`${kelasLoader}`).addClass('animationForLoaderApi');
                                            if (tipe == 'editAdmin') {
                                                $('.cbEditLokasi').prop('disabled', true);
                                            }
                                            let val = $(this).val(),
                                                nextSelectEl = $(this).parent().next();
        
                                            $(kelasVillages).val('');
                                            $(kelasVillages).html('<option selected class="mySelectOption" value="default-value">Kelurahan</option>');
        
                                            if (val != 'default-value') {
                                                $(this).removeClass('is-invalid');
                                                $(this).addClass('is-valid');
        
        
                                                $(kelasVillages).removeClass('is-invalid');
                                                $(kelasVillages).removeClass('is-valid');
        
                                                myAjax('/home/apiDaerahIndonesia', { pass: 'AG3TD43RAHinD0N3S1A', tipe: 'kelurahan', HELLo: val }, function (result) {
                                                    $('.iconLocation').css('opacity', 0);
                                                    setTimeout(() => {
                                                        nextSelectEl.removeClass('d-none');
                                                        result = JSON.parse(result);
                                                        $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                                                        if (tipe == 'editAdmin') {
                                                            $('.cbEditLokasi').prop('disabled', true);
                                                        }
                                                        setTimeout(() => {
                                                            $(kelasVillages).addClass('activeSelectLokasi');
                                                            setTimeout(() => {
                                                                $('.iconLocation').css('opacity', 1);
                                                            }, 500);
                                                        }, 200);
                                                        setTimeout(() => {
                                                            $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', false);
                                                        }, 550);
                                                        
                                                        let myHash = result.hash, api = result.api;
                                            
                                                        
                                                        let optionEl = `<option selected class="mySelectOption" value="default-value">Kelurahan</option>`;
            
                                                        let i = 0;
                                                        api.forEach(function (data) {
                                                            optionEl = optionEl + `<option value='${myHash[i]}'>${data.name}</option>`;
                                                            i++;
                                                        });
                                                        $(kelasVillages).html(optionEl);
            
                                                        $(kelasVillages).on('change', function () {
                                                            if ($(this).val() != 'default-value') {
                                                                $(this).removeClass('is-invalid');
                                                                $(this).addClass('is-valid');
                                                            }
                                                            else {
                                                                $(this).removeClass('is-valid');
                                                                $(this).addClass('is-invalid');
                                                            }
                                                        });
                                                        
                                                    }, 300);
                                                });
                                            } else {
                                                $(this).removeClass('is-valid');
                                                $(this).addClass('is-invalid');
        
                                                $(kelasVillages).removeClass('is-invalid');
                                                $(kelasVillages).removeClass('is-valid');
        
                                                $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                                                $(kelasVillages).removeClass('activeSelectLokasi');
                                                $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', false);
                                                setTimeout(() => {
                                                    nextSelectEl.addClass('d-none');
                                                }, 200);
                                            }
                                        });
                                        
                                    }, 300);

                                });
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');

                                $(`${kelasDistricts}, ${kelasVillages}`).removeClass('is-invalid');
                                $(`${kelasDistricts}, ${kelasVillages}`).removeClass('is-valid');

                                $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                                $(`${kelasDistricts}, ${kelasVillages}`).removeClass('activeSelectLokasi');
                                $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', false);
                                setTimeout(() => {
                                    nextSelectEl.addClass('d-none');
                                    $(kelasVillages).addClass('d-none');
                                }, 200);
                            }
                        });
                    }, 300);
                });
            } else {
                $(this).removeClass('is-valid');
                $(this).addClass('is-invalid');

                $(`${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).removeClass('is-invalid');
                $(`${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).removeClass('is-valid');

                $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                $(`${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).removeClass('activeSelectLokasi');
                $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', false);
                setTimeout(() => {
                    nextSelectEl.addClass('d-none');
                    $(kelasDistricts).parent().addClass('d-none');
                    $(kelasVillages).parent().addClass('d-none');
                }, 200);
            }
        }); 
    });
}

function validasiFormEmail(kelas) {
    let isiEmailInput = $(kelas).val();
    let cek = isiEmailInput.split('@')[1];
    let cek2 = (cek) ? cek.split('.')[0] : null;
    let cek3 = (cek) ? cek.split('.')[1] : null;
    if (cek && cek2 && cek3) {
        $(kelas).removeClass('is-invalid');
        $(kelas).addClass('is-valid');
    } else {
        $(kelas).removeClass('is-valid');
        $(kelas).addClass('is-invalid');
    }
}

function validasiGambarKosongAtauTidak(kelas) {
    if ($(kelas).val().length > 0) {
        $(kelas).removeClass('is-invalid');
        $(kelas).addClass('is-valid');
    } else {
        $(kelas).removeClass('is-valid');
        $(kelas).addClass('is-invalid');
    }
}

function validasiInputText(kelas, tipe = null) {
    
    if (tipe == 'telp') {
        let isi = $(kelas).val();
        if (isi.length <= 12 && isi.length > 2 ) {
            $(kelas).removeClass('is-invalid');
            $(kelas).addClass('is-valid');
        } else {
            $(kelas).removeClass('is-valid');
            $(kelas).addClass('is-invalid');
        }    
    } else if (tipe == 'password') {
        let isi = $(kelas).val();
        if (isi.length > 3) {
            $(kelas).removeClass('is-invalid');
            $(kelas).addClass('is-valid');
        } else {
            $(kelas).removeClass('is-valid');
            $(kelas).addClass('is-invalid');
        } 
    } else if (tipe == 'harga&stok') {
        let isi = parseInt($(kelas).val());
        if (isi) {
            if (isi < 0) {
                $(kelas).removeClass('is-valid');
                $(kelas).addClass('is-invalid');
            } else {
                $(kelas).removeClass('is-invalid');
                $(kelas).addClass('is-valid');
            }
        } else {
            $(kelas).removeClass('is-valid');
            $(kelas).addClass('is-invalid');
        }
    } else if (tipe == 'selectWithSelectedDefaultValue') {
        let isi = $(kelas).val();
        if (isi != 'default-value' && isi) {
            $(kelas).removeClass('is-invalid');
            $(kelas).addClass('is-valid');
        } else {
            $(kelas).removeClass('is-valid');
            $(kelas).addClass('is-invalid');
        }
    } else {
        let isi = $(kelas).val();
        if (isi) {
            $(kelas).removeClass('is-invalid');
            $(kelas).addClass('is-valid');
        } else {
            $(kelas).removeClass('is-valid');
            $(kelas).addClass('is-invalid');
        }
    }
}

function readonly(...input) {
    let tipe = input.pop();
    if (tipe == 'remove') {
        input.forEach(function (inp) {
            $(inp).prop('readonly', false);
        });
    } else if(tipe == 'add') {
        input.forEach(function (inp) {
            $(inp).prop('readonly', true);
        });
    }
}

function disabled(...input) {
    let tipe = input.pop();
    if (tipe == 'remove') {
        input.forEach(function (inp) {
            $(inp).prop('disabled', false);
        });
    } else if(tipe == 'add') {
        input.forEach(function (inp) {
            $(inp).prop('disabled', true);
        });
    }
}

function validasiFormPassword(kelas) {
    let isi = $(kelas).val();

    if (isi.length > 3)
        $(kelas).addClass('is-valid').removeClass('is-invalid');
    else 
        $(kelas).addClass('is-invalid').removeClass('is-valid');
    
}

function changeColorInterval(kelas) {
    let i = 0, color = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    window.vblChangeColorInt = setInterval(() => {
        $(kelas).css('color', color[i]);
        if (i == color.length)
            i = 0;
        else
            i++;
    }, 2000);
}

function showIconProsesMemuat(kelas) {
    hideIconProsesMemuat(kelas);
    $(kelas).css({ opacity: 1}).removeClass('fa-1x').addClass('fa-2x');
    changeColorInterval(kelas);
}

function hideIconProsesMemuat(kelas) {
    $(kelas).css({ opacity: 0}).removeClass('fa-2x').addClass('fa-1x');
    clearInterval(window.vblChangeColorInt);
}

function notificationToast(config, timer, funcOnClose = null) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        didClose: () => {
            if (funcOnClose != null) {
                funcOnClose();
            }
        }
    });

    Toast.fire(config);
}


// Function for event
function eventForListAdmin() {

    $('.btnHapusAdmin, .detailAdmin, .btnEditAdmin').off('click');
    
    $('.btnHapusAdmin').on('click', function () {
        let email = $(this).data('email');
        showIconProsesMemuat('.admin-list .prosesMemuat');
        myAjax('/auth/is_logged_in', { pass: 'A411' }, function (response) {
            hideIconProsesMemuat('.admin-list .prosesMemuat');
            let adminLogged = JSON.parse(response);
            if (adminLogged.email != email) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Apakah anda yakin?',
                    text: 'Menghapus ' + email,
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Ya',
                    cancelButtonText: 'Tidak'
                }).then(function (result) {
                    if (result.isConfirmed) {
                        $('.admin-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
                        myAjax('/admin/delete', { pass: 'a411H4pU5adM1n', email: email }, function (response) {
                            if (response == 'berhasil') {
                                notificationToast({ icon: 'success', title: 'Berhasil dihapus!' }, 2000, function () {
                                    admin('buka', 'listAdmin');
                                });
                            } else {
                                notificationToast({ icon: 'error', title: 'Ups, kamu gagal menghapus.. Cek internet kamu dan coba lagi.' }, 5000, function () {
                                    admin('buka', 'listAdmin');
                                });
                            }
                        });
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Tidak bisa!',
                    text: 'Kamu tidak bisa menghapus akun kamu sendiri..'
                });
            }
        });
        
    });

    $('.btnEditAdmin').on('click', function () {
        let email = $(this).data('email');
        
        showIconProsesMemuat('.admin-list .prosesMemuat');

        myAjax('/user/getOneUser', { pass: 'a411g52t2ueso0neMen2rrberOrAd412fmdin', email: email }, function (response) {
            response = JSON.parse(response);
            hideIconProsesMemuat('.admin-list .prosesMemuat');

            if (response.status == 'berhasil') {
                admin('tutup', 'listAdmin');
                admin('buka', 'edit', response.user);
            } else {
                notificationToast({ icon: 'error', title: 'Gagal memuat! Coba cek internet kamu, lalu coba lagi..' }, 4000);
            }
        });
        
    });

    $('.detailAdmin').on('click', function () {
        let lala = $(this).parent().data('lala');
        admin('tutup', 'listAdmin');
        admin('buka', 'detail', {lala: lala});
    });

}

function eventForListMember() {

    $('.btnHapusMember, .detailMember, .btnEditMember').off('click');
    
    $('.btnHapusMember').on('click', function () {
        let email = $(this).data('email');
        Swal.fire({
            icon: 'warning',
            title: 'Apakah anda yakin?',
            text: 'Menghapus ' + email,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
        }).then(function (result) {
            if (result.isConfirmed) {
                $('.member-list .loadingSmallBox').removeClass('d-none').css('opacity', 1);
                myAjax('/user/delete', { pass: 'a411H4pU5users', email: email }, function (response) {
                    if (response == 'berhasil') {
                        notificationToast({ icon: 'success', title: 'Berhasil dihapus!' }, 2000, function () {
                            member('buka', 'listMember');
                        });
                    } else {
                        notificationToast({ icon: 'error', title: 'Ups, kamu gagal menghapus.. Cek internet kamu dan coba lagi.' }, 5000, function () {
                            member('buka', 'listMember');
                        });
                    }
                });
            }
        });
        
    });

    $('.btnEditMember').on('click', function () {
        let email = $(this).data('email');
        
        showIconProsesMemuat('.member-list .prosesMemuat');

        myAjax('/user/getOneUser', { pass: 'a411g52t2ueso0neMen2rrberOrAd412fmdin', email: email }, function (response) {
            response = JSON.parse(response);
            hideIconProsesMemuat('.member-list .prosesMemuat');

            if (response.status == 'berhasil') {
                member('tutup', 'listMember');
                member('buka', 'edit', response.user);
            } else {
                notificationToast({ icon: 'error', title: 'Gagal memuat! Coba cek internet kamu, lalu coba lagi..' }, 4000);
            }
        });
        
    });

    $('.detailMember').on('click', function () {
        let email = $(this).data('email');
        member('tutup', 'listMember');
        member('buka', 'detail', {email: email});
    });

}

function eventProduk() {
    $('.lihatProduk').off('click');

    $('.lihatProduk').on('click', function () {
        let email = $(this).data('email');
        $('.cariProduk').data('email', email);
        if (!$('.member-list').hasClass('d-none')) {
            $('.backToListMemberOrAdmin').data('tipe', 'member');
        } else if(!$('.admin-list').hasClass('d-none')){
            $('.backToListMemberOrAdmin').data('tipe', 'admin');
        }
        if(!$('.dashboard-utama').hasClass('d-none'))
            dashboard('tutup');
        if(!$('.admin-tambah').hasClass('d-none'))
            admin('tutup', 'tambah');
        if(!$('.admin-edit').hasClass('d-none'))
            admin('tutup', 'edit');
        if(!$('.admin-detail').hasClass('d-none'))
            admin('tutup', 'detail');
        if (!$('.member-tambah').hasClass('d-none'))
            member('tutup', 'tambah');
        if (!$('.member-list').hasClass('d-none'))
            member('tutup', 'listMember');
        if (!$('.member-detail').hasClass('d-none'))
            member('tutup', 'detail');
        if (!$('.member-edit').hasClass('d-none'))
            member('tutup', 'edit');
        if(!$('.admin-list').hasClass('d-none'))
            admin('tutup', 'listAdmin');
        $('.produkBreadCumbJudul').html(`Produk <span class="d-inline text-primary">${email}</span>`);
        produk('buka', 'listProduk', {email: email});
    });
}

function eventProdukList() {
    $('.btnEditProdukInList, .btnHapusProduk, .detailProduk').off('click');

    

    $('.btnEditProdukInList').on('click', function () {
        let dataLala = $(this).data('id'), dataEmail = $(this).data('email');
        showIconProsesMemuat('.produk-list .prosesMemuat');
        let now = new Date();
        let tahun = now.getFullYear(),
        bulan = (now.getMonth().toString().length == 1) ?   `0${now.getMonth()}` : now.getMonth(),
        hari = (now.getDate().toString().length == 1) ?  `0${now.getDate()}` : now.getDate();
        now = tahun + '-' + bulan + '-' + hari;
        $('.kadaluarsaProdukEdit').attr('min', now);
        $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-valid');
        $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-invalid');
        myAjax('/produk/getOneProduk', { lala: dataLala, pass: 'A411MYPRODUK' }, function (result) {
            result = JSON.parse(result);
            hideIconProsesMemuat('.produk-list .prosesMemuat');
            let status = result.status;

            if (status == 'ada') {
                if (result.produk.status == 0 || result.produk.status == 1 || result.produk.status == 3) {
                    produk('tutup', 'listProduk');
                    let data = { email: dataEmail, lala: dataLala };
                    produk('buka', 'edit', data);
                } else
                    Swal.fire({
                        icon: 'warning',
                        title: 'Tidak bisa!',
                        text: 'Maaf, untuk produk yang sudah terjual tidak bisa dilakukan pengeditan!'
                    });
            }
        });
    });

    $('.btnHapusProduk').on('click', function () {
        let dataLala = $(this).data('id'), dataEmail = $(this).data('email');
        Swal.fire({
            icon: 'warning',
            title: 'Yakin Kamu Hapus Produk Ini?',
            confirmButtonText: 'Ya',
            showCancelButton: true,
            cancelButtonText: 'Tidak',
        }).then(function (result) {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Menghapus produk...',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didOpen: function () {
                        Swal.showLoading();
                        let data = {
                            lala: dataLala,
                            pass: 'A411HAPUSPRODUK',
                            admin: 'mantep',
                            email: dataEmail
                        };
                        myAjax('/produk/hapusProduk', data, function (result) {
                            if (result == 'berhasil') {
                                notificationToast({ icon: 'success', title: 'Berhasil dihapus!' }, 2000, function () {
                                    Swal.close();
                                    produk('buka', 'listProduk', {email: dataEmail});
                                });
                            } else if (result == 'produkLive') { 
                                Swal.close();
                                notificationToast({ icon: 'error', title: 'Gagal Hapus Produk! Maaf, untuk produk dengan status live tidak bisa dihapus. Jika kamu ingin menghapus produk live, kamu bisa ubah status produk kamu menjadi tidak live. Setelah itu baru kamu bisa menghapus produk kamu.' }, 2000, function () {
                                    Swal.close();
                                    produk('buka', 'listProduk', {email: dataEmail});
                                })
                            } else {
                                notificationToast({ icon: 'error', title: 'Gagal Hapus Produk! Kamu gagal menghapus produkmu, silahkan coba lagi' }, function () {
                                    Swal.close();
                                    produk('buka', 'listProduk', {email: dataEmail});
                                });
                            }
                        });
                    }
                });
            }
        });
    });


    $('.detailProduk').on('click', function () {
        let lala = $(this).parent().data('id');
        produk('tutup', 'listProduk');
        produk('buka', 'detail', {lala: lala});
    });
}

function eventEditProduk(lala, email) {
    $('.btnEditProduk, .imgPreviewProdukEdit').off('click');
    $('.imgFileProdukEdit, .statusProdukEdit').off('change');
    $('.conImgPreviewProdukEdit').removeClass('myIsvalid').removeClass('myIsinvalid');
    $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-valid');
    $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-invalid');
    let kadaluarsaTanggal, kadaluarsaJam;
    myAjax('/produk/getOneProduk', { lala: lala, pass: 'A411MYPRODUK' }, function (result) {
        result = JSON.parse(result);
        let status = result.status;
        if (status == 'ada') {
            let produk = result.produk;
            $('.namaProdukEdit').val(produk.nama_produk);
            $('.hargaAwalEdit').val(produk.harga_awal);
            $('.deskripsiProdukEdit').val(produk.deskripsi_produk);
            $('.imgPreviewProdukEdit').attr('src', '/img/upload/' + produk.img);
            $('.imgFileProdukEdit').val(null);
            
            $('.stokProdukEdit').val(produk.stok_produk);
            if (produk.status == 0) {
                $('.smallKadaluarsa').addClass('d-none');
                $('.smallStatus').addClass('d-none');
                kadaluarsaTanggal = '';
                kadaluarsaJam = '';
                $('.statusProdukEdit .mySelectOptionDash').attr('selected', 'selected');
                $('.statusProdukEdit').val('dash');
                $('.kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit').val('');
                $('.kadaluarsaProdukEdit').attr('readonly', true);
                $('.kadaluarsaProdukJamEdit').attr('readonly', true);
                $('.hargaAwalEdit').attr('readonly', false);
                $('.statusProdukEdit').attr('disabled', false);
            } else if (produk.status == 1) {
                $('.smallKadaluarsa').addClass('d-none');
                $('.smallStatus').removeClass('d-none');
                kadaluarsaTanggal = produk.kadaluarsa.split(' ')[0];
                kadaluarsaJam = produk.kadaluarsa.split(' ')[1];
                $('.statusProdukEdit .mySelectOptionLangsung').attr('selected', 'selected');
                $('.statusProdukEdit').val('langsung');
                $('.kadaluarsaProdukEdit').val(kadaluarsaTanggal);
                $('.kadaluarsaProdukJamEdit').val(kadaluarsaJam);
                $('.kadaluarsaProdukEdit').attr('readonly', false);
                $('.kadaluarsaProdukJamEdit').attr('readonly', false);
                $('.hargaAwalEdit').attr('readonly', true);
                // $('.statusProdukEdit').attr('disabled', true);

            } else if (produk.status == 3) {
                $('.smallKadaluarsa').removeClass('d-none');
                $('.smallStatus').addClass('d-none');
                kadaluarsaTanggal = produk.kadaluarsa.split(' ')[0];
                kadaluarsaJam = produk.kadaluarsa.split(' ')[1];
                $('.statusProdukEdit .mySelectOptionLangsung').attr('selected', 'selected');
                $('.statusProdukEdit').val('langsung');
                $('.kadaluarsaProdukEdit').val(produk.kadaluarsa.split(' ')[0]);
                $('.kadaluarsaProdukJamEdit').val(produk.kadaluarsa.split(' ')[1]);
                $('.kadaluarsaProdukEdit').attr('readonly', false);
                $('.kadaluarsaProdukJamEdit').attr('readonly', false);
                $('.hargaAwalEdit').attr('readonly', false);
                $('.statusProdukEdit').attr('disabled', false);
            }
        } else if (status == 'tidakAda') {
            Swal.fire({
                icon: 'error',
                title: 'Maaf, Terjadi error!',
                confirmButtonText: 'OK',
                didClose: function () {
                    document.location.href = '/';                    
                }
            });
        }
        $('.produk-edit .loadingSmallBox').css('opacity', 1);
        setTimeout(() => {
            $('.produk-edit .loadingSmallBox').addClass('d-none');
        }, 200);
    });

    $('.imgPreviewProdukEdit').on('click', function () {
        $('.imgFileProdukEdit').click();
    });

    $('.imgFileProdukEdit').on('change', function () {
        $('.imgFileProdukEdit').removeClass('is-invalid').removeClass('is-valid');
        $('.conImgPreviewProdukEdit').removeClass('myIsvalid').removeClass('myIsinvalid');
        let file = $(".imgFileProdukEdit").get(0).files[0];
        let extensi = file.name.split('.')[1];
        let allowedExtensi = ['jpg', 'png', 'jpeg', 'svg'];
        let validasi = false;
        allowedExtensi.forEach(function (ext) {
            if (extensi == ext) {
                validasi = true;
            }
        });
        if (file && validasi) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
 
            reader.onload = function(){
                $(".imgPreviewProdukEdit").attr("src", reader.result);
            }

            $('.imgFileProdukEdit').addClass('is-valid');
            $('.conImgPreviewProdukEdit').removeClass('myIsinvalid').addClass('myIsvalid');
 
        } else {
            $('.conImgPreviewProdukEdit').removeClass('myIsvalid').addClass('myIsinvalid');
            $('.imgFileProdukEdit').val(null);
            $('.imgFileProdukEdit').addClass('is-invalid');
            $(".imgPreviewProdukEdit").attr("src", '/img/warning.png');
        }
    });

    

    $('.btnEditProduk').on('click', function () {
        $('html, body').animate({ scrollTop: "0" }, 400);
        showIconProsesMemuat('.produk-edit .prosesMemuat');
        $('.btnEditProduk').prop('disabled', true);
        let nama = $('.namaProdukEdit'),
            imgFileProdukEdit = $('.imgFileProdukEdit'),
            formData = new FormData(),
            fileUpload;
        
        validasiInputText('.namaProdukEdit');
        validasiGambarKosongAtauTidak('.imgFileProdukEdit');
        validasiInputText('.hargaAwalEdit', 'harga&stok');
        validasiInputText('.deskripsiProdukEdit');
        validasiInputText('.stokProdukEdit', 'harga&stok');

        $('.statusProdukEdit').addClass('is-valid');
        let statusProdukEdit = null;
        let kadaluarsaProdukEdit = $('.kadaluarsaProdukEdit').val();
        let kadaluarsaProdukJamEdit = $('.kadaluarsaProdukJamEdit').val();
        if ($('.statusProdukEdit').val() == 'langsung') {
            statusProdukEdit = 1;
        } else if ($('.statusProdukEdit').val() == 'dash') {
            statusProdukEdit = 0;
        }

        if (statusProdukEdit == 0) {
            $('.kadaluarsaProdukEdit').removeClass('is-invalid');
            $('.kadaluarsaProdukJamEdit').removeClass('is-invalid');
            $('.kadaluarsaProdukEdit').removeClass('is-valid');
            $('.kadaluarsaProdukJamEdit').removeClass('is-valid');
            kadaluarsaProdukEdit = '';
            kadaluarsaProdukJamEdit = '';
        } else {
            validasiInputText('.kadaluarsaProdukEdit');
            validasiInputText('.kadaluarsaProdukJamEdit');
        }

        if (!$('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit').hasClass('is-invalid')) {
            if (imgFileProdukEdit.val().length > 0 && !$('.imgFileProdukEdit').hasClass('is-invalid')) {
                fileUpload = imgFileProdukEdit.prop('files')[0];
                formData.append('imgUpload', fileUpload);
                formData.append('lala', lala);
                formData.append('namaProdukEdit', nama.val());
                formData.append('hargaAwalEdit', $('.hargaAwalEdit').val());
                formData.append('deskripsiProdukEdit', $('.deskripsiProdukEdit').val());
                formData.append('stokProdukEdit', $('.stokProdukEdit').val());
                formData.append('kadaluarsaProdukEdit', kadaluarsaProdukEdit);
                formData.append('kadaluarsaProdukJamEdit', kadaluarsaProdukJamEdit);
                formData.append('statusProdukEdit', statusProdukEdit);
                formData.append('tipe', 'ada_semua');
                
                $.ajax({
                    url: '/produk/editProduk',
                    data: formData,
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        hideIconProsesMemuat('.produk-edit .prosesMemuat');
                        if (result == 'berhasil') {
                            $('.namaProdukEdit, .imgFileProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .deskripsiProdukEdit, .stokProdukEdit, .hargaAwalEdit').addClass('is-valid');
                            
                            
                            $('.imgFileProdukEdit').val(null);
                            notificationToast({ icon: 'success', title: 'Berhasil diedit!' }, 3000, function () {
                                produk('tutup', 'edit');
                                produk('buka', 'listProduk', { email: email });
                                $('.btnEditProduk').prop('disabled', false);
                            });
                        } else if (result == 'gagal') {
                            
                            
                            $('.imgFileProdukEdit').val(null);

                            notificationToast({ icon: 'error', title: 'Gagal diedit! Cek internet kamu lalu coba lagi..' }, 3000, function () {
                                $('.btnEditProduk').prop('disabled', false);
                            });
                        } else if (result == 'gagal upload') {
                            
                            
                            $('.imgFileProdukEdit').val(null);
                            
                            notificationToast({icon: 'error', title: 'Gagal Upload! Gambar dari produk kamu gagal diupload.. Coba periksa internet kamu, lalu coba lagi'}, 3000, function () {
                                $('.btnEditProduk').prop('disabled', false);
                            });
                        } else if (result == 'tidakAda') {
                            $('.imgFileProdukEdit').val(null);
                            notificationToast({icon: 'error', title: 'Terjadi Error!'}, 3000, function () {
                                document.location.href = '/';
                            });
                        }
                        
                    }
                });
            } else if (imgFileProdukEdit.val().length <= 0) {
                let data = {
                    namaProdukEdit: nama.val(),
                    lala: lala,
                    hargaAwalEdit: $('.hargaAwalEdit').val(),
                    deskripsiProdukEdit: $('.deskripsiProdukEdit').val(),
                    stokProdukEdit: $('.stokProdukEdit').val(),
                    kadaluarsaProdukEdit: kadaluarsaProdukEdit,
                    kadaluarsaProdukJamEdit: kadaluarsaProdukJamEdit,
                    tipe: 'tidakPakaiGambar',
                    statusProdukEdit: statusProdukEdit
                };
                myAjax('/produk/editProduk', data, function (result) {
                    hideIconProsesMemuat('.produk-edit .prosesMemuat');
                    if (result == 'berhasil') {
                        $('.namaProdukEdit, .imgFileProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .deskripsiProdukEdit, .stokProdukEdit, .hargaAwalEdit').addClass('is-valid');
                        
                        
                        $('.imgFileProdukEdit').val(null);
                        notificationToast({icon: 'success', title: 'Berhasil diedit!'}, 3000, function () {
                            produk('tutup', 'edit');
                            produk('buka', 'listProduk', { email: email });
                            $('.btnEditProduk').prop('disabled', false);
                        });
                    } else if (result == 'gagal') {
                        
                        
                        $('.imgFileProdukEdit').val(null);
                        notificationToast({ icon: 'error', title: 'Gagal diedit! Coba periksa internet kamu, lalu coba lagi' }, 3000, function () {
                            $('.btnEditProduk').prop('disabled', false);
                        });
                    } else if (result == 'tidakAda') {
                        
                        
                        $('.imgFileProdukEdit').val(null);
                        notificationToast({icon: 'error', title: 'Terjadi Error!'}, 3000, function () {
                            document.location.href = '/';
                        });
                    }
                });

            }
        }
        // myAjax('/auth/editP', );
    });

    $('.statusProdukEdit').on('change', function () {
        if ($('.statusProdukEdit').val() == 'dash') {
            $('.kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit').val('');
            $('.kadaluarsaProdukEdit').attr('readonly', true);
            $('.kadaluarsaProdukJamEdit').attr('readonly', true);
        } else {
            $('.kadaluarsaProdukEdit').val(kadaluarsaTanggal);
            $('.kadaluarsaProdukJamEdit').val(kadaluarsaJam);
            $('.kadaluarsaProdukEdit').attr('readonly', false);
            $('.kadaluarsaProdukJamEdit').attr('readonly', false);
        }
    });
}

// Tutup My FUnctions