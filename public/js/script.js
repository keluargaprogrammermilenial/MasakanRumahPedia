let isLoggedIn = false;
let user;
let produkLive, produkNotLiveAwal;
$.ajax({
    url: '/auth/is_logged_in',
    type: 'POST',
    data: {
        pass: '$A411'
    },
    success: function (result) {
        result = JSON.parse(result);
        isLoggedIn = result.logged;
        user = result.user;
        // console.log(user);
        produkLive = result.produkLive;
        produkNotLiveAwal = result.produkNotLiveAwal;
        // console.log(produkNotLiveAwal);
        // produk = result.produk;
        if (isLoggedIn == false) {
            setTimeout(function () {
                $('.loader').css('opacity', 0);
                setTimeout(function () {
                    $('.loader').addClass('d-none');
                }, 500);
            }, 1000);
        } else {
            closeLoader(3000, function () {
                $('.homePage').css('opacity', 0);
                $('.homePage').addClass('d-none');
                setTimeout(() => {
                    $('.webAppPage').removeClass('d-none');
                    $('.webAppPage').css('opacity', 1);
                }, 1000);
            });    
        }
    }
});

// Style Untuk User Web App
window.styleWebInterval = setInterval(() => {
    
    if (user != undefined) {
        updateDataProduk();
        $('.muatLagi, .shortcut-cari p, .tambahProduk').off('click');

        $('.muatLagi').on('click', function () {
            if (user == null) {
                alertNotSignin();
                return;
            }
            if (produkNotLiveAwal.length > $('.rowLelangAwal .col-6').length) {
                getTheNextProdukNotLive();

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Produk Sudah Terload Semua..',
                    text: 'Tunggu beberapa jam mungkin produk member lain atau produkmu sudah ada yang terjual.'
                });
            }
        });

        createShortcutLinkRandom();
        cekApakahAdmin(false);
        ubahDataUser();
        

        // console.log(produkNotLiveAwal);
        clearInterval(window.styleWebInterval);
    } else {
        $('.muatLagi, .tambahProduk').off('click');
        $('.muatLagi').on('click', function () {
            alertNotSignin();
            return;
        });
        $('.tambahProduk').on('click', function () {
            alertNotSignin();
            return;
        });
    }
}, 100);

setInterval(() => {
    if (user != undefined) {
        myAjax('/produk/getProduk2', { pass: 'A411LOADPRODUK' }, function (result) {
            result = JSON.parse(result);
            let status = result.status;
            if (status == 'berhasil') {
                produkLive = result.produkLive;
                produkNotLiveAwal = result.produkNotLiveAwal;
                user = result.user;
            }
        });

        myAjax('/user/cekStatusJaringan', { pass: 'ce639kjar27ingan' }, function (response) {
            console.log(response);
            if (response == 'offline') {
                
                let text = 'Kamu sudah logout. Ini terjadi saat kamu ingin menggunakan perangkat lain untuk akun kamu. Jika kamu ingin tetap menggunakannya disini, silahkan kamu login lagi.';
                if(!$('.kelolaProdukPage').hasClass('d-none')) {
                    logout('.kelolaProdukPage', text);
                } else if (!$('.livePage').hasClass('d-none')) {
                    logout('.livePage', text);
                } else if (!$('.profilePage').hasClass('d-none')) {
                    logout('.profilePage', text);
                } else {
                    logout('.webAppPage', text);
                }
            }
        });
    }
}, 15000);

// Responsive Sistem
let offHp = $('.layout_hp').offset().top;
let offMoney = $('.text_money').offset().top;
let offKasir = $('.text_kasir').offset().top;
let offSocial = $('.socialMedia').offset().top;
let appendS = $('.appendrowSearch').html();
let colAppendrowSearch = $('.rowSearch .colAppendrowSearch').html();
setInterval(function () {
    offHp = $('.layout_hp').offset().top;
    offMoney = $('.text_money').offset().top;
    offKasir = $('.text_kasir').offset().top;
    offSocial = $('.socialMedia').offset().top;
    let bodyWith = document.body.getBoundingClientRect().width;
    if (bodyWith <= 768) {
        offMoney = offMoney - 200;
        offHp = offHp - 280;
        offKasir = offKasir - 200;
        offSocial = offSocial - 300;
        $('.jumbotron').height('200px');
        $('.myNavbar').css('display', 'none');
        $('.menu').removeClass('d-none');
        $('.jumbotron h1').css('font-size', '20px');
        $('.jumbotron h3').css('font-size', '15px');
        $('.hero-text').removeClass('mt-5');
        $('.hero-text').removeClass('pt-5');
        $('.layout_hp, .text_hp, .text_kasir, .text_money, .kasir, .money, .text_socialMedia, .socialMedia, .col-gambar').addClass('text-center');
        $('.kasir').css('width', '400px');
        $('.socialMedia').css('width', '400px');
        $('.instagram').css({
            top: '580px',
            left: '100px'
        });
        $('.facebook').css('display', 'none');
        $('.money').css('width', '400px');
        $('.cash1').css('left', 0);
        $('.cash2').css('left', 100);
        $('.cash3').css('left', 200);
        $('.support').height('300px');
        $('.text_hp').css('padding-top', '100px');
        $('.twitter').css('bottom', '-25px');
        $('.columnInput').removeClass('col-sm-6');
        $('.columnInput').addClass('col-sm-12');
        $('.columnImg').addClass('d-none');
        $('.judulAuth').removeClass('text-left');
        $('.judulAuth').addClass('text-center');
        $('.logo').addClass('mb-4');
        $('.carousel-inner').height('200px');
        $('.carouselItemDaging').height('200px');
        $('.panah-back').width('50px');
        $('.panah-next').width('50px');
        $('.search').removeClass('col-sm-12');
        $('.search').addClass('col-6');
        // $('.colfotoP, .dDMenu, .conCart, .colLine').addClass('col-1');
        $('.rowSearch .colfotoP, .rowSearch .dDmenu, .rowSearch .conCart, .rowSearch .colLine, .rowSearch .dDmenuHp').removeClass('d-none');
        $('.myNavWeb .colfotoPDesk, .myNavWeb .dDmenuDesk, .myNavWeb .conCartDesk, .myNavWeb .colLineDesk').addClass('d-none');
        // $('.rowSearch .colAppendrowSearch').html(appendS);
        // $('.appendrowSearch').addClass('d-none');
        $('.shortcut-cari').addClass('d-none');
        $('.rowLelang1').addClass('d-none');
        $('.rowLelang1Hp').removeClass('d-none');
        $('.mycopyR').css('font-size', '13px');
        $('.kolomImgPreviewEditPr').addClass('text-center');
        $('.imgPreviewProduk').parent().addClass('text-center');
        // // $('.colrowSearch').html('');
        // $('.youtube')
        // $('.serbu').width('150px');
        // $('.serbu h1').css('font-size', '25px');
        // $('.serbu p').css('font-size', '15px');
        // $('.rowLelang1 .myh3').css({
        //     fontSize: '20px',
        //     backgroundImage: 'none',
        //     backgroundColor: 'black'
        // });
        // $('.conProdukLive .first').css({
        //     marginLeft: '50px !important',
        //     width: '100px !important'
        // });
        // $('.conProdukLive .card-title').css('font-size', ($('.conProdukLive .card-title').css('font-size') * 75) / 100);
        // $('.conProdukLive .card-text').css('font-size', ($('.conProdukLive .card-text').css('font-size') * 75) / 100);

    } else {
        offHp = offHp - 550;
        offMoney = offMoney - 300;
        offKasir = offKasir - 300;
        offSocial = offSocial - 400;
        $('.jumbotron').height('650px');
        $('.myNavbar').css('display', '');
        $('.menu').addClass('d-none');
        $('.sidebar').removeClass('sidebarMuncul');
        $('.jumbotron h1').css('font-size', '');
        $('.jumbotron h3').css('font-size', '');
        $('.hero-text').addClass('mt-5');
        $('.hero-text').addClass('pt-5');
        $('.layout_hp, .text_hp, .text_kasir, .text_money, .kasir, .money, .text_socialMedia, .socialMedia, .col-gambar').removeClass('text-center');
        $('.kasir').css('width', '');
        $('.socialMedia').css('width', '');
        $('.instagram').css({
            top: '',
            left: ''
        });
        $('.facebook').css('display', '');
        $('.money').css('width', '');
        $('.cash1').css('left', '');
        $('.cash2').css('left', '');
        $('.cash3').css('left', '');
        $('.support').height('630px');
        $('.text_hp').css('padding-top', '130px');
        $('.twitter').css('bottom', '');
        $('.columnInput').removeClass('col-sm-12');
        $('.columnInput').addClass('col-sm-6');
        $('.columnImg').removeClass('d-none');
        $('.judulAuth').removeClass('text-center');
        $('.judulAuth').addClass('text-left');
        $('.logo').removeClass('mb-4');
        $('.carousel-inner').height('400px');
        $('.carouselItemDaging').height('400px');
        $('.panah-back').width('100px');
        $('.panah-next').width('100px');
        $('.search').removeClass('col-6');
        $('.search').addClass('col-sm-12');
        $('.rowSearch .colfotoP, .rowSearch .dDmenuHp, .rowSearch .dDmenu, .rowSearch .conCart, .rowSearch .colLine').addClass('d-none');
        $('.myNavWeb .colfotoPDesk, .myNavWeb .dDmenuDesk, .myNavWeb .conCartDesk, .myNavWeb .colLineDesk').removeClass('d-none');
        // $('.colfotoP, .dDMenu, .conCart, .colLine').removeClass('col-1');
        // $('.colfotoP, .dDMenu, .conCart, .colLine').addClass('col-sm-1');
        // $('.appendrowSearch').removeClass('d-none');
        // $('.rowSearch .colAppendrowSearch').addClass('d-none');;
        $('.shortcut-cari').removeClass('d-none');
        $('.rowLelang1Hp').addClass('d-none');
        $('.rowLelang1').removeClass('d-none');
        $('.mycopyR').css('font-size', '');
        $('.kolomImgPreviewEditPr').removeClass('text-center');
        $('.imgPreviewProduk').parent().removeClass('text-center');
    }

    

}, 1);




// Sistem / Event on Scroll Window
let wind = $(window);



$(window).on('scroll', function () {
    if (wind.scrollTop() > offHp) {
        $('.layout_hp').css({
            opacity: 1, 
            transform: 'scale(1)'
        });
        $('.text_hp').css({
            opacity: 1,
            transform: 'translate(0, 0)'
        });
    } else {
        $('.layout_hp').css({
            opacity: 0, 
            transform: 'scale(0)'
        });
        $('.text_hp').css({
            opacity: 0,
            transform: 'translate(50px, 0)'
        });
    }

    if (wind.scrollTop() > offKasir) {
        $('.kasir').css({
            opacity: 1, 
            transform: 'scale(1)'
        });
        $('.text_kasir').css({
            opacity: 1,
            transform: 'translate(0, 0)'
        });
    } else {
        $('.kasir').css({
            opacity: 0, 
            transform: 'scale(0)'
        });
        $('.text_kasir').css({
            opacity: 0,
            transform: 'translate(-50px, 0)'
        });
    }

    if (wind.scrollTop() > offSocial) {
        $('.socialMedia, .instagram, .facebook').css({
            opacity: 1, 
            transform: 'scale(1)'
        });
        $('.text_socialMedia').css({
            opacity: 1,
            transform: 'translate(0, 0)'
        });
    } else {
        $('.socialMedia, .instagram, .facebook').css({
            opacity: 0, 
            transform: 'scale(0)'
        });
        $('.text_socialMedia').css({
            opacity: 0,
            transform: 'translate(50px, 0)'
        });
        
    }

    if (wind.scrollTop() > offMoney) {
        $('.money').css({
            opacity: 1, 
            transform: 'scale(1)'
        });
        $('.text_money').css({
            opacity: 1,
            transform: 'translate(0, 0)'
        });
        setTimeout(function () {
            $('.cash1, .cash2, .cash3').css({
                opacity: 1,
                top: "-150px"
            });
        }, 2000);
    } else {
        $('.money').css({
            opacity: 0, 
            transform: 'scale(0)'
        });
        $('.text_money').css({
            opacity: 0,
            transform: 'translate(-50px, 0)'
        });
        $('.cash1, .cash2, .cash3').css({
            opacity: 0,
            top: "-100px"
        });
    }
});
// Tutup Sistem / Event on Scroll Window

// Static Event
$('.btn-masuk2').on('click', function () {
    $('.btn-masuk2').prop('disabled', true);
    myAjax('/auth/is_logged_in', { pass: 'A411LO6W1tH0uT_*2acC0u2t' }, function (result) {
        result = JSON.parse(result);
        produkLive = result.produkLive;
        produkNotLiveAwal = result.produkNotLiveAwal;
        user = result.user;
        loadDataAllProdukLive();
        if (produkLive && produkNotLiveAwal) {
            loadDataProduk('semua');
        } else {
            if (produkNotLiveAwal) {
                loadDataProduk('cumaNotLive');
            } else if (produkLive) {
                loadDataProduk('cumaLive');
            } else {
                loadDataProduk('tidakAda');
            }
        }
        ubahDataUser();
        loading('home');
        closeLoader(3000, function () {
            $('.homePage').css('opacity', 0);
            $('.homePage').addClass('d-none');
            setTimeout(() => {
                $('.btn-masuk2').prop('disabled', false);
                createShortcutLinkRandom();
                $('.webAppPage').removeClass('d-none');
                $('.webAppPage').css('opacity', 1);
            }, 1000);
        });
    });
});

$('.cari').on('keypress', function (e) {
    if (e.which == 13) {
        searchProduk();
    }
});


$('.menu').on('click', function () {
    $('.sidebar').toggleClass('sidebarMuncul');
});

$('.sidebar .myclose').on('click', function () {
    $('.sidebar').removeClass('sidebarMuncul');
});

$('.conSaldo').on('click', function () {
    $('.overlay-dari-tengah').addClass('overlay-dari-tengah-klik');

    setTimeout(() => {
        $('.overlay-dari-tengah-klik').removeClass('overlay-dari-tengah-klik');
    }, 450);
});

$('.dDmenuDesk .conMenu').on('mouseenter', function () {
    $('.mydropdown-menu').addClass('mydropdown-menu-active');
});

$('.dDmenuDesk .conMenu').on('click', function () {
    $('.mydropdown-menu').addClass('mydropdown-menu-active');
});

$('.colLineDesk .conSaldo').on('mouseenter', function () {
    $('.mydropdown-menu2').addClass('mydropdown-menu-active');
});

$('.colLineDesk .conSaldo').on('click', function () {
    $('.mydropdown-menu2').addClass('mydropdown-menu-active');
});

$('.dDmenu.colLineDesk, .dDmenu.dDmenuDesk').on('mouseleave', function () {
    $('.mydropdown-menu, .mydropdown-menu2').removeClass('mydropdown-menu-active');
});



// Khusus conSaldo di HP

$('.conSaldoHp').on('click', function () {
    $('.mydropdown-menu2Hp').toggleClass('mydropdown-menu-active');
    $('.mydropdown-menuHp').removeClass('mydropdown-menu-active');
});

$('.dDmenuHp .conMenu').on('click', function () {
    $('.mydropdown-menuHp').toggleClass('mydropdown-menu-active');
    $('.mydropdown-menu2Hp').removeClass('mydropdown-menu-active');
});

$('.topUp').on('click', function () {
        if (user == null) {
            alertNotSignin();
            return;
        }
        $('.mydropdown-menuHp, .mydropdown-menu2Hp').removeClass('mydropdown-menu-active');
        (async () => {
            let { value: saldo } = await Swal.fire({
                title: 'Top Up Saldo',
                inputLabel: 'Rp',
                input: 'text',
                inputAttributes: {
                    onKeyPress: 'return hanyaAngka(event);',
                    autocapitalize: 'off',
                    class: 'swal-input'
                },
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Top Up!',
                cancelButtonText: 'Batal',
                // showLoaderOnConfirm: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Kamu tidak bisa top up dengan nilai kosong!'
                    }
                },
                // willOpen: () => {
                //     $('.swalInput').off('change');
                //     $('.swalInput').on('change', hanyaAngka);
                // },
                // allowOutsideClick: () => !Swal.isLoading()
            });

            if (saldo) {
                let data = {
                    saldo: saldo,
                    HELLO: 'WORLD'
                };
                myAjax('/user/topup', data, function (result) {
                    result = JSON.parse(result);
                    let status = result.status;
                    if (status == 'berhasil') {
                        user = result.user;
                        ubahDataUser();
                        Swal.fire({
                            icon: 'success',
                            title: 'Mantap!',
                            text: 'Saldo kamu berhasil ditambah! Selamat menawar!',
                            confirmButtonText: 'OK',
                            allowOutsideClick: false
                        });
                    } else if (status == 'user tidak ada') {
                        Swal.fire({
                            icon: 'warning', 
                            title: 'Akun kamu tidak terdaftar!', 
                            text: 'Kamu akan terlogout secara automatis.. Silahkan coba login lagi.. Jika akun kamu tidak ada, coba hubungi admin kami.. ',
                            confirmButtonText: 'OK',
                            allowOutsideClick: false
                        }).then(function (result) {
                            if (result.isConfirmed) {
                                logout('.webAppPage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                            }
                        });
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Maaf, kamu tidak berhasil top up!',
                            text: 'Kamu gagal top up, silahkan cek koneksi internet kamu lalu coba lagi..',
                            confirmButtonText: 'OK',
                        });
                    }
                });
            }
        })();
});


// Validasi Form Hubungi Kami

$('.kirim').on('click', function () {
    let email = $('.email');
    let name = $('.name');
    let pesan = $('.pesan');
    // Validasi semua elemen
    if (!name.val()) {
        name.addClass('is-invalid');
    } else {
        name.removeClass('is-invalid');
        name.addClass('is-valid');
    }
    if (!email.val()) {
        email.addClass('is-invalid');
    } else {
        let cek = email.val().split('@')[1];
        if (cek === "gmail.com") {
            email.addClass('is-valid');
            email.removeClass('is-invalid');
        }
    }
    if (!pesan.val()) {
        pesan.addClass('is-invalid');
    } else {
        pesan.removeClass('is-invalid');
        pesan.addClass('is-valid');
    }
    let all = $('.pesan, .email, .name');
    
    if (!all.hasClass('is-invalid')) {
        $('#hubungiKami').modal('hide');
        $.ajax({
            url: '/home/sendMail',
            type: 'POST', 
            data: {
                    name: name.val(), 
                    email: email.val(), 
                    pesan: pesan.val()
            }, 
            success: function (result) {
                // console.log(result);
                all.val('');
                all.removeClass('is-valid');
                if (result == "berhasil") {
                    let text = `Selamat! Pesan kamu berhasil terkirim. Coba cek email kamu di <a href="https://mail.google.com">Gmail Kamu</a>`;
                    notifikasi(true, text, 'warning');
                } else if (result == "gagal") {
                    let text = `Waduh pesan kamu gagal terkirim... Coba cek internet kamu dan coba lagi, ok...`;
                    notifikasi(true, text, 'danger');
                } else if (result == "not-registered") {
                    let text = `Waduh email yang kamu masukkan sepertinya tidak terdaftar di google... Coba masukkan email yang benar ok...`;
                    notifikasi(true, text, 'danger');
                }
                setTimeout(() => {
                        notifikasi(false);
                }, 10000);
            }
            });
    }


});



$('.email').on('keyup', function(e) {
    validasiFormEmail('.email');
});

$('.name').on('keyup', function(e) {
    validasiInputText('.name');
});

$('.pesan').on('keyup', function(e) {
    validasiInputText('.pesan');
});
// Tutup Validasi







// Sistem Daftar dan Login dan Event2 pada halaman daftar dan login
$('.daftar').on('click', function () {
    loading('login');
    closeLoader(2500, function () {
        $('.homePage').css('opacity', 0);
        $('.homePage').addClass('d-none');
        setTimeout(() => {
            $('.loginPage').removeClass('d-none');
            ambilDataDaerahIndonesia();
            setTimeout(() => {
                $('.loginPage').css({ opacity: 1, transform: 'scale(1)' });
                slidingImage('daftar');
            }, 200);
            setTimeout(() => {
                $('.emailRegister').focus();
            }, 1000);
        }, 1500);
    });
    
});

$('.masuk').on('click', function () {
    loading('login');
    closeLoader(1000, function () {
        $('.homePage').css('opacity', 0);
        $('.homePage').addClass('d-none');
        setTimeout(function() {
            $('.loginPageAsli').removeClass('d-none');
            setTimeout(() => {
                $('.loginPageAsli').css({ opacity: 1, transform: 'scale(1)' });
                slidingImage('login');
            }, 200);
            setTimeout(() => {
                $('.emailLogin').focus();
            }, 1000);
        }, 0);
    });
});

$('.masukAdmin').on('click', function () {
    loading('login');
    closeLoader(1000, function () {
        $('.homePage').css('opacity', 0);
        $('.homePage').addClass('d-none');
        setTimeout(function() {
            $('.loginPageAdmin').removeClass('d-none');
            setTimeout(() => {
                $('.loginPageAdmin').css({ opacity: 1, transform: 'scale(1)' });
                slidingImage('loginAdmin');
            }, 200);
            setTimeout(() => {
                $('.emailLoginAdmin').focus();
            }, 1000);
        }, 0);
    });
});


$('.kembaliRegister').on('click', function () {
    $('.emailRegister, .usernameRegister, .passwordRegister, .confirmRegister, .provinces, .regencies, .districts, .villages').val('');
    $('.emailRegister, .usernameRegister, .passwordRegister, .confirmRegister, .provinces, .regencies, .districts, .villages').removeClass('is-valid');
    $('.emailRegister, .usernameRegister, .passwordRegister, .confirmRegister, .provinces, .regencies, .districts, .villages').removeClass('is-invalid');

    $('.provinces, .regencies, .districts, .villages').removeClass('activeSelectLokasi');
    $('.regencies, .districts, .villages').addClass('d-none');
    loading('home');
    closeLoader(4000, function () {
        $('.loginPage').css({transform: 'scale(.5)' });
        setTimeout(() => {
            $('.loginPage').css({opacity: 0});
        }, 200);
        $('.loginPage').addClass('d-none');
        clearSlidingImage('daftar');
        setTimeout(function() {
            $('.homePage').removeClass('d-none');
            $('.homePage').css('opacity', 1);
        }, 3000);
    });
});

$('.kembaliLogin').on('click', function () {
    $('.emailLogin, .passwordLogin').val('');
    $('.emailLogin, .passwordLogin').removeClass('is-valid');
    $('.emailLogin, .passwordLogin').removeClass('is-invalid');
    loading('home');
    closeLoader(3000, function () {
        $('.loginPageAsli').css({transform: 'scale(.5)' });
        setTimeout(() => {
            $('.loginPageAsli').css({opacity: 0});
        }, 200);
        $('.loginPageAsli').addClass('d-none');
        clearSlidingImage('login');
        setTimeout(function() {
            $('.homePage').removeClass('d-none');
            $('.homePage').css('opacity', 1);
        }, 2000);
    });
});

$('.kembaliLoginAdmin').on('click', function () {
    $('.emailLoginAdmin, .passwordLoginAdmin').val('').removeClass('is-valid').removeClass('is-invalid');
    loading('home');
    closeLoader(3000, function () {
        $('.loginPageAdmin').css({transform: 'scale(.5)' });
        setTimeout(() => {
            $('.loginPageAdmin').css({opacity: 0});
        }, 200);
        $('.loginPageAdmin').addClass('d-none');
        clearSlidingImage('login');
        setTimeout(function() {
            $('.homePage').removeClass('d-none');
            $('.homePage').css('opacity', 1);
        }, 2000);
    });
});


$('.emailRegister').on('keyup', function () {
    validasiFormEmail('.emailRegister');
});

$('.emailLogin').on('keyup', function () {
    validasiFormEmail('.emailLogin');
});

$('.emailLoginAdmin').on('keyup', function () {
    validasiFormEmail('.emailLoginAdmin');
});


$('.usernameRegister').on('keyup', function () {
    validasiInputText('.usernameRegister');
});

$('.passwordRegister, .confirmRegister').on('keyup', function () {
    validasiPasswordConfirm('.passwordRegister', '.confirmRegister');
});
$('.passwordLogin').on('keyup', function () {
    validasiInputText('.passwordLogin', 'password');
});

$('.passwordLoginAdmin').on('keyup', function () {
    validasiInputText('.passwordLoginAdmin', 'password');
});

$('.nomorTelp').on('keyup', function () {
    validasiInputText('.nomorTelp', 'telp');
});

$('.daftarRegister').on('click', function () {

    let email = $('.emailRegister'),
        username = $('.usernameRegister'),
        pass = $('.passwordRegister'),
        noHp = $('.nomorTelp'),
        provinces = $('.provinces'),
        regencies = $('.regencies'),
        districts = $('.districts'),
        villages = $('.villages');
        // confirm = $('.confirmRegister');
    
    validasiFormEmail('.emailRegister');
    validasiInputText('.usernameRegister');
    validasiInputText('.nomorTelp', 'telp');
    validasiPasswordConfirm('.passwordRegister', '.confirmRegister');
    validasiInputText('.provinces', 'selectWithSelectedDefaultValue');
    validasiInputText('.regencies', 'selectWithSelectedDefaultValue');
    validasiInputText('.districts', 'selectWithSelectedDefaultValue');
    validasiInputText('.villages', 'selectWithSelectedDefaultValue');
    
    let all = $('.emailRegister, .usernameRegister, .passwordRegister, .confirmRegister, .nomorTelp, .provinces, .regencies, .districts, .villages');

    if (!all.hasClass('is-invalid')) {
        all.attr('readonly', true);
        $('.daftarRegister').prop('disabled', true);
        $.ajax({
            url: '/auth/register',
            type: 'POST', 
            data: {
                email: email.val(),
                username: username.val(),
                pass: pass.val(),
                noHp: noHp.val(),
                provinsi: provinces.val(),
                kotKab: regencies.val(),
                kecamatan: districts.val(),
                kelurahan: villages.val()
            }, 
            success: function (result) {
                all.removeClass('is-valid');

                if (result == "berhasil") {
                    all.val('');
                    all.attr('readonly', false);
                    $('.daftarRegister').prop('disabled', false);
                    loading('login');
                    closeLoader(8000, function () {
                        $('.loginPage').css({ transform: 'scale(.5)' });
                        setTimeout(() => {
                            $('.loginPage').css({opacity: 0});
                        }, 200);
                        $('.loginPage').addClass('d-none');
                        clearSlidingImage('daftar');
                        setTimeout(() => {
                            $('.loginPageAsli').removeClass('d-none');
                            setTimeout(() => {
                                $('.loginPageAsli').css({ opacity: 1, transform: 'scale(1)' });
                                slidingImage('login');
                            }, 200);
                            setTimeout(() => {
                                $('.emailLogin').focus();
                            }, 1000);
                        }, 7000);
                    });
                    setTimeout(() => {
                        let text = "Selamat akun kamu berhasil terdaftar! Silahkan coba cek email kamu di <a href=\"https://mail.google.com\" target=\"_blank\">Gmail Kamu</a> untuk aktivasi! Jika aktivasi selesai silahkan login...<br> <strong>Note: Untuk sementara fitur aktivasi kami nonaktifkan. Jika kamu sudah daftar, kamu bisa langsung login...</strong>";
                        notifikasi(true, text, 'success');
                        setTimeout(() => {
                            notifikasi(false);
                        }, 5000);
                    }, 8000);
                } else if (result == 'emailAda') {
                    email.removeClass('is-valid');
                    email.addClass('is-invalid');
                    email.focus();
                    let text = "Maaf, email yang kamu daftarkan sudah ada. Silahkan coba cek email kamu di <a href=\"https://mail.google.com\" target=\"_blank\">Gmail Kamu</a> untuk aktivasi! Jika aktivasi selesai silahkan login...<br> <strong>Note: Untuk sementara fitur aktivasi kami nonaktifkan. Jika kamu sudah daftar, kamu bisa langsung login...</strong>";
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.daftarRegister').prop('disabled', false);
                    }, 5000);
                } else if (result == 'nomorAda') {
                    noHp.removeClass('is-valid');
                    noHp.addClass('is-invalid');
                    noHp.focus();
                    let text = "Maaf, nomor yang kamu daftarkan sudah ada. 1 nomor hanya untuk 1 akun! Tidak boleh menggunakan nomor yang sudah ada. <br> <strong>Note: Untuk sementara fitur aktivasi kami nonaktifkan. Jika kamu sudah daftar, kamu bisa langsung login...</strong>";
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.daftarRegister').prop('disabled', false);
                    }, 5000);
                } else if (result == 'nomorDanEmail') {
                    email.removeClass('is-valid');
                    email.addClass('is-invalid');
                    noHp.removeClass('is-valid');
                    noHp.addClass('is-invalid');
                    email.focus();
                    let text = "Maaf, nomor dan email yang kamu daftarkan sudah ada. 1 nomor hanya untuk 1 akun! Begitu juga dengan email, 1 email hanya untuk 1 nomor! Tidak boleh menggunakan nomor atau email yang sudah ada.";
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.daftarRegister').prop('disabled', false);
                    }, 5000);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ups.. Error terjadi..',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false
                    }).then(function (result) {
                        document.location.href = '/';
                    });
                }

                $('.provinces, .regencies, .districts, .villages').removeClass('is-valid');
                $('.provinces, .regencies, .districts, .villages').removeClass('is-invalid');
                $('.provinces, .regencies, .districts, .villages').removeClass('activeSelectLokasi');
            }
        });
    }
});

$('.masukLogin').on('click', function () {
    
    let all = $('.emailLogin, .passwordLogin'),
        email = $('.emailLogin'),
        pass = $('.passwordLogin');
        // confirm = $('.confirmRegister');
    showIconProsesMemuat('.loginPageAsli .columnInput .prosesMemuat');
    validasiFormEmail('.emailLogin');
    validasiInputText('.passwordLogin', 'password');
    
    if (!all.hasClass('is-invalid')) {
        all.attr('readonly', true);
        $('.masukLogin').prop('disabled', true);
        $.ajax({
            url: '/auth/login',
            type: 'POST', 
            data: {
                email: email.val(),
                pass: pass.val(),
                myHello: 'HELLO WORLD'
            }, 
            success: function (result) {
                result = JSON.parse(result);
                let status = result.status;
                
                user = result.user;
                produkLive = result.produkLive;
                produkNotLiveAwal = result.produkNotLiveAwal;

                let isiEmail = email.val();
                all.removeClass('is-valid');
                hideIconProsesMemuat('.loginPageAsli .columnInput .prosesMemuat');


                if (status == "berhasil") {
                    ubahDataUser();
                    all.attr('readonly', false);
                    $('.masukLogin').prop('disabled', false);
                    all.val('');
                    // $(); nanti dulu edit gambar profilenya
                    loading('home');
                    closeLoader(3000, function () {
                        $('.loginPageAsli').css({ transform: 'scale(.5)' });
                        setTimeout(() => {
                            $('.loginPageAsli').css({opacity: 0});
                        }, 200);
                        $('.loginPageAsli').addClass('d-none');
                        clearSlidingImage('login');
                        setTimeout(() => {
                            $('.webAppPage').removeClass('d-none');
                            $('.webAppPage').css('opacity', 1);
                        }, 1000);

                    });
                    setTimeout(() => {
                        let text = `Halo ${user.username.split(' ')[0]} selamat Datang... Kamu sudah masuk ke MasakanRumahPedia. Disini, kamu bisa membeli produk lelang dan membuat produk lelang!`;
                        notifikasi(true, text, 'warning');
                        setTimeout(() => {
                            notifikasi(false);
                        }, 5000);
                    }, 2000);
                } else if (status == 'tidakAda') {
                    email.removeClass('is-valid');
                    email.addClass('is-invalid');
                    email.focus();
                    let text = "Maaf, email yang kamu masukkan tidak terdaftar. Harap masukkan email yang sudah terdaftar...";
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLogin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'gagal') {
                    pass.removeClass('is-valid');
                    pass.addClass('is-invalid');
                    pass.focus();
                    let text = `Maaf, password yang kamu masukkan salah! Coba kamu masukkan password yang benar untuk akun ${isiEmail}`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLogin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'tidakActive') {
                    email.removeClass('is-valid');
                    email.addClass('is-invalid');
                    pass.removeClass('is-valid');
                    pass.addClass('is-invalid');
                    email.focus();
                    let text = `Maaf, akun ${isiEmail} masih belum aktif... Harap lakukan aktivasi akun terlebih dahulu sebelum login dengan cara cek email kamu di <a href="https://mail.google.com" target="_blank">Gmail Kamu</a>. <br> <strong>Note: Untuk sementara fitur aktivasi kami nonaktifkan. Jika kamu sudah daftar, kamu bisa langsung login...</strong>`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLogin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'gagalOnline') {
                    email.removeClass('is-valid');
                    email.removeClass('is-invalid');
                    pass.removeClass('is-valid');
                    pass.removeClass('is-invalid');
                    email.focus();
                    let text = `Login gagal, coba cek internet kamu...`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLogin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'gagalOnline') {
                    email.removeClass('is-valid');
                    email.removeClass('is-invalid');
                    pass.removeClass('is-valid');
                    pass.removeClass('is-invalid');
                    email.focus();
                    let text = `Login gagal, coba cek internet kamu...`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLogin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'sudahOnline') {
                    let text = `Akun kamu sudah login di perangkat lain. Apakah kamu ingin menggunakannya disini?`;

                    Swal.fire({
                        icon: 'info',
                        title: 'Login gagal!',
                        text: text,
                        showCancelButton: true,
                        cancelButtonText: 'Tidak',
                        confirmButtonText: 'Ya'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            showIconProsesMemuat('.loginPageAsli .columnInput .prosesMemuat', '.loginPageAsli .columnInput .textChangeColor');

                            myAjax('/user/nonAktifkanUserOtherKomputer', { pass: 'no2n4ktif7kan20Use230ter', email: email.val() }, function (response) {
                                if (response == 'berhasil') {
                                    setTimeout(() => {
                                        all.attr('readonly', false);
                                        $('.masukLogin').prop('disabled', false);
                                        hideIconProsesMemuat('.loginPageAsli .columnInput .prosesMemuat', '.loginPageAsli .columnInput .textChangeColor');
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Berhasil!',
                                            text: 'Silahkan klik tombol masuk lagi!',
                                            confirmButtonText: 'OK',
                                        });    
                                    }, 20000);
                                } else {
                                    hideIconProsesMemuat('.loginPageAsli .columnInput .prosesMemuat', '.loginPageAsli .columnInput .textChangeColor');
                                    all.attr('readonly', false);
                                    $('.masukLogin').prop('disabled', false);
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Gagal!',
                                        text: 'Pastikan internet kamu stabil, lalu silahkan coba lagi ya..'
                                    });
                                }
                            });
                        } else {
                            email.removeClass('is-valid');
                            email.removeClass('is-invalid');
                            pass.removeClass('is-valid');
                            pass.removeClass('is-invalid');
                            email.focus();
                            all.attr('readonly', false);
                            $('.masukLogin').prop('disabled', false);
                        }
                    });
                }
            }
        });
    } else {
        hideIconProsesMemuat('.loginPageAsli .columnInput .prosesMemuat');
    }
});

$('.masukLoginAdmin').on('click', function () {
    
    let all = $('.emailLoginAdmin, .passwordLoginAdmin'),
        email = $('.emailLoginAdmin'),
        pass = $('.passwordLoginAdmin');
        // confirm = $('.confirmRegister');
    showIconProsesMemuat('.loginPageAdmin .columnInput .prosesMemuat');
    validasiFormEmail('.emailLoginAdmin');
    validasiInputText('.passwordLoginAdmin', 'password');
    
    if (!all.hasClass('is-invalid')) {
        all.attr('readonly', true);
        $('.masukLoginAdmin').prop('disabled', true);
        $.ajax({
            url: '/auth/login',
            type: 'POST', 
            data: {
                email: email.val(),
                pass: pass.val(),
                myHello: 'HELLO WORLD',
                is_admin: true
            }, 
            success: function (result) {
                result = JSON.parse(result);
                let status = result.status;
                
                user = result.user;
                produkLive = result.produkLive;
                produkNotLiveAwal = result.produkNotLiveAwal;

                let isiEmail = email.val();
                all.removeClass('is-valid');
                hideIconProsesMemuat('.loginPageAdmin .columnInput .prosesMemuat');


                if (status == "berhasil") {
                    ubahDataUser();
                    all.attr('readonly', false);
                    $('.masukLoginAdmin').prop('disabled', false);
                    all.val('');
                    // $(); nanti dulu edit gambar profilenya
                    loading('home');
                    closeLoader(3000, function () {
                        $('.loginPageAdmin').css({ transform: 'scale(.5)' });
                        setTimeout(() => {
                            $('.loginPageAdmin').css({opacity: 0});
                        }, 200);
                        $('.loginPageAdmin').addClass('d-none');
                        clearSlidingImage('login');
                        setTimeout(() => {
                            $('.webAppPage').removeClass('d-none');
                            $('.webAppPage').css('opacity', 1);

                            if (!$('.detailProduk').hasClass('d-none')) {
                                backFromDetailProduk();
                            } else if (!$('.hasilCari').hasClass('d-none')) 
                                backFromCari();

                            Swal.fire({
                                title: 'Memuat Halaman...',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                didOpen: function () {
                                    Swal.showLoading();
                                    let data = {
                                        pass: 'A4114ddm1nnSS'
                                    };
                                    myAjax('/admin/loadPage', data, function (result) {
                                        result = JSON.parse(result);
                                        if (result.status == 'andaAdmin') {
                                            Swal.close();
                                            document.location.href = `/admin/home/${result.token}/${result.isLi}`
                                        } else if (result.status == 'andaBukanAdmin') {
                                            Swal.close();
                                            notifikasi(true, 'Anda bukan seorang admin..', 'danger');
                                            setTimeout(() => {
                                                notifikasi(false);
                                                document.location.href = '/';
                                            }, 3000);
                                        } else if (result.status == 'userFake') {
                                            Swal.close();
                                            notifikasi(true, '<strong>Kamu menggunakan email yang belum terdaftar!</strong> Kamu akan terlogout secara automatis.. Silahkan kamu login terlebih dahulu..', 'danger');
                                            setTimeout(() => {
                                                notifikasi(false);
                                                if (!$('.livePage').hasClass('d-none')) {
                                                    logout('.livePage', 'Silahkan kamu login terlebih dahulu..');
                                                } else {
                                                    logout('.webAppPage', 'Silahkan kamu login terlebih dahulu..');
                                                }
                                            }, 6500);
                                        } else if (result.status == 'gagal') {
                                            Swal.close();
                                            notifikasi(true, 'Kamu gagal memuat halaman admin.. Cek internet kamu lalu coba lagi ya...', 'danger');
                                            setTimeout(() => {
                                                notifikasi(false);
                                            }, 6500);
                                        }
                                    });
                                }
                            });
                        }, 1000);

                    });
                    // setTimeout(() => {
                    //     let text = `Halo ${user.username.split(' ')[0]} selamat Datang... Kamu sudah masuk ke MasakanRumahPedia. Disini, kamu bisa membeli produk lelang dan membuat produk lelang!`;
                    //     notifikasi(true, text, 'warning');
                    //     setTimeout(() => {
                    //         notifikasi(false);
                    //     }, 5000);
                    // }, 2000);
                } else if (status == 'tidakAda') {
                    email.removeClass('is-valid');
                    email.addClass('is-invalid');
                    email.focus();
                    let text = "Maaf, email yang kamu masukkan tidak terdaftar. Harap masukkan email yang sudah terdaftar...";
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLoginAdmin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'gagal') {
                    pass.removeClass('is-valid');
                    pass.addClass('is-invalid');
                    pass.focus();
                    let text = `Maaf, password yang kamu masukkan salah! Coba kamu masukkan password yang benar untuk akun ${isiEmail}`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLoginAdmin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'tidakActive') {
                    email.removeClass('is-valid');
                    email.addClass('is-invalid');
                    pass.removeClass('is-valid');
                    pass.addClass('is-invalid');
                    email.focus();
                    let text = `Maaf, akun ${isiEmail} masih belum aktif... Harap lakukan aktivasi akun terlebih dahulu sebelum login dengan cara cek email kamu di <a href="https://mail.google.com" target="_blank">Gmail Kamu</a>. <br> <strong>Note: Untuk sementara fitur aktivasi kami nonaktifkan. Jika kamu sudah daftar, kamu bisa langsung login...</strong>`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLoginAdmin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'gagalOnline') {
                    email.removeClass('is-valid');
                    email.removeClass('is-invalid');
                    pass.removeClass('is-valid');
                    pass.removeClass('is-invalid');
                    email.focus();
                    let text = `Login gagal, coba cek internet kamu...`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLoginAdmin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'gagalOnline') {
                    email.removeClass('is-valid');
                    email.removeClass('is-invalid');
                    pass.removeClass('is-valid');
                    pass.removeClass('is-invalid');
                    email.focus();
                    let text = `Login gagal, coba cek internet kamu...`;
                    notifikasi(true, text, 'danger');
                    setTimeout(() => {
                        notifikasi(false);
                        all.attr('readonly', false);
                        $('.masukLoginAdmin').prop('disabled', false);
                    }, 5000);
                } else if (status == 'sudahOnline') {
                    let text = `Akun kamu sudah login di perangkat lain. Apakah kamu ingin menggunakannya disini?`;

                    Swal.fire({
                        icon: 'info',
                        title: 'Login gagal!',
                        text: text,
                        showCancelButton: true,
                        cancelButtonText: 'Tidak',
                        confirmButtonText: 'Ya'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            showIconProsesMemuat('.loginPageAdmin .columnInput .prosesMemuat', '.loginPageAdmin .columnInput .textChangeColor');

                            myAjax('/user/nonAktifkanUserOtherKomputer', { pass: 'no2n4ktif7kan20Use230ter', email: email.val() }, function (response) {
                                if (response == 'berhasil') {
                                    setTimeout(() => {
                                        all.attr('readonly', false);
                                        $('.masukLoginAdmin').prop('disabled', false);
                                        hideIconProsesMemuat('.loginPageAdmin .columnInput .prosesMemuat', '.loginPageAdmin .columnInput .textChangeColor');
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Berhasil!',
                                            text: 'Silahkan klik tombol masuk lagi!',
                                            confirmButtonText: 'OK',
                                        });    
                                    }, 20000);
                                } else {
                                    hideIconProsesMemuat('.loginPageAdmin .columnInput .prosesMemuat', '.loginPageAdmin .columnInput .textChangeColor');
                                    all.attr('readonly', false);
                                    $('.masukLoginAdmin').prop('disabled', false);
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Gagal!',
                                        text: 'Pastikan internet kamu stabil, lalu silahkan coba lagi ya..'
                                    });
                                }
                            });
                        } else {
                            email.removeClass('is-valid');
                            email.removeClass('is-invalid');
                            pass.removeClass('is-valid');
                            pass.removeClass('is-invalid');
                            email.focus();
                            all.attr('readonly', false);
                            $('.masukLoginAdmin').prop('disabled', false);
                        }
                    });
                }
            }
        });
    } else {
        hideIconProsesMemuat('.loginPageAdmin .columnInput .prosesMemuat');
    }
});

$('.lupaPassword').on('click', function () {
    (async () => {
        let { value: email } = await Swal.fire({
            title: 'Lupa Password?',
            inputLabel: 'Kami akan mengirim password kamu ke email kamu.',
            showClass: {
                popup: 'animate__animated animate__zoomInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOutUp'
            },
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off',
            },
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Kirim Email',
            cancelButtonText: 'Batal',
            // showLoaderOnConfirm: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Kolom diatas tidak boleh kosong!'
                } else {
                    validasiFormEmail('.swal2-input');
                    if ($('.swal2-input').hasClass('is-invalid'))
                        return 'Masukkan email yang valid!';
                }
            }
        });

        if (email) {
            Swal.fire({
                title: 'Mengirim Email...',
                allowOutsideClick: false,
                allowEscapeKey: false,
                didOpen: function () {
                    Swal.showLoading();
                    let data = {
                        email: email,
                        pass: 'a411Lup45sW0RD"s'
                    };
                    myAjax('/auth/lupaPassword', data, function (result) {
                        // console.log(result);
                        if (result == 'berhasil') {
                            setTimeout(() => {
                                Swal.close();
                                Swal.fire({
                                    title: 'Berhasil!',
                                    text: 'Password kamu sudah terkirim.. Silahkan cek email kamu..',
                                    icon: 'success',
                                    hideClass: {
                                        popup: 'animate__animated animate__zoomOutUp'
                                    },
                                });
                            }, 2000);
                        } else if (result == 'gagal') { 
                            Swal.close();
                            Swal.fire({
                                title: 'Gagal!',
                                text: 'Password kamu gagal terkirim.. Silahkan cek internet kamu lalu coba lagi',
                                icon: 'error',
                                hideClass: {
                                    popup: 'animate__animated animate__zoomOutUp'
                                },
                            });
                        } else if (result == 'userTidakTerdaftar') {
                            Swal.close();
                            Swal.fire({
                                title: 'Email yang kamu masukkan belum terdaftar!',
                                text: 'Harap masukkan email kamu yang sudah terdafar di Masakan Rumah Pedia',
                                icon: 'error',
                                hideClass: {
                                    popup: 'animate__animated animate__zoomOutUp'
                                },
                            });
                        }
                    });
                }
            });
        }
    })();
});


$('.belumPunyaAkun').on('click', function () {
    $('.emailLogin, .passwordLogin').val('');
    $('.emailLogin, .passwordLogin').removeClass('is-valid');
    $('.emailLogin, .passwordLogin').removeClass('is-invalid');
    loading('login');
    closeLoader(2500, function () {
        $('.loginPageAsli').css({transform: 'scale(.5)' });
        setTimeout(() => {
            $('.loginPageAsli').css({opacity: 0});
        }, 200);
        $('.loginPageAsli').addClass('d-none');
        clearSlidingImage('login');
        setTimeout(() => {
            $('.loginPage').removeClass('d-none');
            ambilDataDaerahIndonesia();
            setTimeout(() => {
                $('.loginPage').css({ opacity: 1, transform: 'scale(1)' });
                slidingImage('daftar');
            }, 200);
            setTimeout(() => {
                $('.emailRegister').focus();
            }, 1000);
        }, 1500);
    });
});

$('.sudahPunyaAkun').on('click', function () {
    $('.emailRegister, .usernameRegister, .passwordRegister, .confirmRegister, .provinces, .regencies, .districts, .villages').val('');
    $('.emailRegister, .usernameRegister, .passwordRegister, .confirmRegister, .provinces, .regencies, .districts, .villages').removeClass('is-valid');
    $('.emailRegister, .usernameRegister, .passwordRegister, .confirmRegister, .provinces, .regencies, .districts, .villages').removeClass('is-invalid');

    $('.provinces, .regencies, .districts, .villages').removeClass('activeSelectLokasi');
    $('.regencies, .districts, .villages').addClass('d-none');
    loading('login');
    closeLoader(4000, function () {
        $('.loginPage').css({transform: 'scale(.5)' });
        setTimeout(() => {
            $('.loginPage').css({opacity: 0});
        }, 200);
        $('.loginPage').addClass('d-none');
        clearSlidingImage('daftar');
        setTimeout(function() {
            $('.loginPageAsli').removeClass('d-none');
            setTimeout(() => {
                $('.loginPageAsli').css({ opacity: 1, transform: 'scale(1)' });
                slidingImage('login');
            }, 200);
            setTimeout(() => {
                $('.emailLogin').focus();
            }, 1000);
        }, 3300);
    });
});

// Tutup Sistem Daftar dan Login dan Event2 halaman daftar dan login

// Sistem Logout

$('.logout').on('click', function () {
    if (user == null) {
        alertNotSignin();
        return;
    }
    logout('.webAppPage');

});

// Tutup Sistem Logout



// Sistem Profile Page

$('.profile').on('click', function () {
    if (user == null) {
        alertNotSignin();
        return;
    }

    if (!$('.detailProduk').hasClass('d-none')) {
        backFromDetailProduk();
    } else if (!$('.hasilCari').hasClass('d-none')) 
        backFromCari();
    
    loadDataProfile('.webAppPage');
});


$('.backProfile').on('click', function () {
    ubahDataUser();
    loading('home');
    closeLoader(1000, function () {
        $('.profilePage').css('opacity', 0);
        $('.profilePage').addClass('d-none');
        setTimeout(() => {
            $('.webAppPage').removeClass('d-none');
            $('.webAppPage').css('opacity', 1);
        }, 0);

    });
});

// Tutup Sistem Profile Page



// Sistem Kelola Produk

$('.kelolaProduk').on('click', function () {
    if (user == null) {
        alertNotSignin();
        return;
    }
    if (!$('.detailProduk').hasClass('d-none')) {
        backFromDetailProduk();
    }
    loadDataKelolaProduk();
    
    ubahDataUser();
    // console.log('masuk');
    loading('home');
    closeLoader(1000, function () {
        $('.webAppPage').css('opacity', 0);
        $('.webAppPage').addClass('d-none');
        setTimeout(() => {
            $('.kelolaProdukPage').removeClass('d-none');
            $('.kelolaProdukPage').css('opacity', 1);
        }, 0);

    });

});

$('.backKelolaProduk').on('click', function () {
    createShortcutLinkRandom();
    updateDataProduk();
    loading('home');
    closeLoader(1000, function () {
        $('.kelolaProdukPage').css('opacity', 0);
        $('.kelolaProdukPage').addClass('d-none');
        setTimeout(() => {
            $('.webAppPage').removeClass('d-none');
            $('.webAppPage').css('opacity', 1);
        }, 0);

    });
});

// Tutup Sistem Kelola Produk


// Lihat Semua Produk Live

$('.lihatSemua').on('click', function () {
    if (user == null) {
        alertNotSignin();
        return;
    }
    loadDataAllProdukLive();
    eventForProduk();
    loading('login');
    closeLoader(5000, function () {
        $('.webAppPage').css('opacity', 0);
        $('.webAppPage').addClass('d-none');
        setTimeout(() => {
            $('.livePage').removeClass('d-none');
            $('.livePage').css('opacity', 1);
        }, 4000);
    });
});

$('.backLivePage').on('click', function () {
    ubahDataUser();
    if (produkLive && produkNotLiveAwal) {
        loadDataProduk('semua');
    } else {
        if (produkNotLiveAwal) {
            loadDataProduk('cumaNotLive');
        } else if (produkLive) {
            loadDataProduk('cumaLive');
        } else {
            loadDataProduk('tidakAda');
        }
    }
    loading('home');
    closeLoader(1000, function () {
        $('.livePage').css('opacity', 0);
        $('.livePage').addClass('d-none');
        setTimeout(() => {
            $('.webAppPage').removeClass('d-none');
            $('.webAppPage').css('opacity', 1);
        }, 0);

    });
});
// Tutup lSemua pLive


// My Functions
function notifikasi(aksi = false, text = null, tema = null) {
    if (aksi) {
        $('.notif').removeClass('alert-warning');
        $('.notif').removeClass('alert-danger');
        $('.notif').removeClass('alert-primary');
        $('.notif').html(text);
        $('.notif').addClass(`alert-${tema}`);
        $('.cNotif').removeClass('d-none');
        setTimeout(function () {
            $('.notif').css({
                opacity: 1,
                transform: 'translate(0, 15px)'
            });
        }, 700);
    } else {
        $('.notif').removeClass('alert-warning');
        $('.notif').removeClass('alert-danger');
        $('.notif').removeClass('alert-primary');
        $('.notif').html('Notifikasi!');
        $('.notif').addClass(`alert-warning`);
        $('.notif').css({
            opacity: 1,
            transform: 'translate(0, -125px)'
        });
        setTimeout(function () {
            $('.cNotif').addClass('d-none');
        }, 700);
    }
    // console.log($('.notif'));
}

function hanyaAngka(e) {
    let charCode = (e.which) ? e.which : e.keyCode;
    if (charCode >= 48 && charCode <= 58)
        return true;
    return false;
}

function loading(to) {
    if (to == "home") {
        setTimeout(function () {
            $('body').css('background-image', '');
            let loader = $('.loader');
            loader.removeClass('d-none');
            setTimeout(() => {
                loader.css({ opacity: 1 });
            }, 200);
        }, 400);
        
    } else if (to == 'login') {
        setTimeout(function () {
            $('body').css('background-image', 'linear-gradient(to right, #FFC946, #e12121)');
            let loader = $('.loader');
            loader.removeClass('d-none');
            setTimeout(() => {
                loader.css({ opacity: 1 });
            }, 200);
        }, 400);
    }
}

function closeLoader(time, func) {
    setTimeout(function () {
        func();
    }, 1000);
    setTimeout(function () {
        $('.loader').css('opacity', '0');
        setTimeout(function () {
            $('.loader').addClass('d-none');
        }, 500);
        // $('.loader').removeClass('loaderAuth');
    }, time);
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

// function validasiInputDatetime(kelas, tipe) {
//     let now = new Date();
//     if (tipe == 'date') {
//         if ($(kelas).val().length > 0) {
//             console.log(now.getDate() + ' | ' + now.);
//         }
//     }
// }

function validasiPasswordConfirm(kelasPass, kelasConf) {
    let password = $(kelasPass),
        confirm = $(kelasConf);
    if(!password.val()) {
        password.addClass('is-invalid');
    } else {
        password.removeClass('is-invalid');
        password.addClass('is-valid');
    }
    if(!confirm.val()) {
        confirm.addClass('is-invalid');
    } else {
        confirm.removeClass('is-invalid');
        confirm.addClass('is-valid');
    }
    if(password.val() != confirm.val()){
        password.addClass('is-invalid');
        confirm.addClass('is-invalid');
    } else {
        password.addClass('is-valid');
        confirm.addClass('is-valid');
    }
    if (password.val().length < 4) {
        password.removeClass('is-valid');
        password.addClass('is-invalid');
    } else {
        password.removeClass('is-invalid');
        password.addClass('is-valid');
    }
}

function gantiInputJadiReadOnly(...input) {
    input.forEach(function (inp) {
        $(inp).attr('readonly', 'true');
    });
}

function getUser() {
    if (user) {
        return user;
    }
    return;
}

// function appendProdukLelangSelesai(limit) {
    
// }

function myAjax(url, data, funcSuccess) {
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: funcSuccess
    });
}

function ubahDataUser() {
    $('.dropItemUser').html((user == null) ? 'Belum Login' : `@${user.username.split(' ')[0]}`);
    $('.saldo').html((user == null) ? 'Rp. 0' : `Rp. ${user.user_saldo}`);
    $('.conFotoP img').attr('src', (user == null) ? '/img/upload/default.svg' : '/img/upload/' + user.img);
    
}


function eventEditProf() {
    $('.editProfile, .closeEdit, .btnEditP').off('click');
    $('.imgFile, .checktoedit').off('change');

    $('.checktoedit').on('change', function () {
        if ($('.checktoedit').prop('checked') == true) {
            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').prop('disabled', false);
        }
        else {
            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').prop('disabled', true);
        }
    });

    $('.editProfile').on('click', function () {
        ambilDataDaerahIndonesia('profile');
        $('.emailProf').val(user.email);
        $('.namaProf').val(user.username);
        $('.nomorHp').val(user.no_hp);
        $('.nomorHp').val(user.no_hp);
        $('.imgPreview').attr('src', `/img/upload/${user.img}`);
        $('.labelImgFile').html('Pilih gambar');
        $('.imgFile').val(null);
        $('.imgFile, .namaProf, .nomorHp, .passwordBaruProf, .passwordLamaProf').removeClass('is-invalid');
        $('.imgFile, .namaProf, .nomorHp, .passwordBaruProf, .passwordLamaProf').removeClass('is-valid');
        $('.passwordBaruProf, .passwordLamaProf').val('');
    });

    $('.closeEdit').on('click', function () {
        $('.labelImgFile').html('Pilih gambar');
        $('.imgFile').val(null);
        $('.imgFile, .namaProf, .nomorHp, .passwordBaruProf, .passwordLamaProf').removeClass('is-invalid');
        $('.imgFile, .namaProf, .nomorHp, .passwordBaruProf, .passwordLamaProf').removeClass('is-valid');
        $('.passwordBaruProf, .passwordLamaProf').val('');

        $('.checktoedit').prop('checked', true);
        $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
        $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
        $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

        $('.boxLoading, .overlay-editP').css('opacity', 0);
        setTimeout(() => {
            $('.boxLoading, .overlay-editP').addClass('d-none');
        }, 300);

    });

    $('.btnEditP').on('click', function () {
        $('.btnEditP').prop('disabled', true);
        $('.closeEdit').prop('disabled', true);
        
        $('.boxLoading, .overlay-editP').removeClass('d-none');
        setTimeout(() => {
            $('.boxLoading, .overlay-editP').css('opacity', 1);
        }, 300);

        let nama = $('.namaProf'),
            noHp = $('.nomorHp'),
            imgFile = $('.imgFile'),
            passBaru = $('.passwordBaruProf'),
            passLama = $('.passwordLamaProf'),
            email = $('.emailProf'),
            provinsiP = $('.provincesProf'),
            kotaKab = $('.regenciesProf'),
            kecamatan = $('.districtsProf'),
            kelurahan = $('.villagesProf'),
            formData = new FormData(),
            fileUpload;
        
        validasiInputText('.namaProf');
        validasiInputText('.nomorHp', 'telp');

        let isChecked = false;
        if ($('.checktoedit').prop('checked')) {
            validasiInputText('.provincesProf', 'selectWithSelectedDefaultValue');
            validasiInputText('.regenciesProf', 'selectWithSelectedDefaultValue');
            validasiInputText('.districtsProf', 'selectWithSelectedDefaultValue');
            validasiInputText('.villagesProf', 'selectWithSelectedDefaultValue');            
            isChecked = true;
        } else {
            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').addClass('is-valid');
            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
        }
        

        if (!$('.namaProf, .nomorHp, .provincesProf, .regenciesProf, .districtsProf, .villagesProf').hasClass('is-invalid')) {
            if (imgFile.val().length > 0 && !$('.imgFile').hasClass('is-invalid')) {
                fileUpload = imgFile.prop('files')[0];
                validasiInputText('.passwordBaruProf', 'password');
                validasiInputText('.passwordLamaProf', 'password');
                if ($('.passwordBaruProf').val() && $('.passwordLamaProf').val() && !$('.passwordBaruProf, .passwordLamaProf').hasClass('is-invalid')) {
                    formData.append('imgUpload', fileUpload);
                    formData.append('passB', $('.passwordBaruProf').val());
                    formData.append('passL', $('.passwordLamaProf').val());
                    formData.append('nama', nama.val());
                    formData.append('no_hp', noHp.val());
                    formData.append('email', email.val());
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
                        url: '/user/editP',
                        data: formData,
                        type: 'POST',
                        processData: false,
                        contentType: false,
                        success: function (result) {
                            result = JSON.parse(result);
                            let status = result.status;
                            if (status == 'berhasil') {
                                passBaru.addClass('is-valid');
                                passLama.addClass('is-valid');
                                passBaru.removeClass('is-invalid');
                                passLama.removeClass('is-invalid');
                                user = result.user;
                                produkLive = result.produkLive;
                                produkNotLive = result.produkNotLive;
                                // console.log(user);
                                loadDataProfile('.profilePage', function () {
                                    let text = "Selamat profil kamu berhasil diubah!";
                                    notifikasi(true, text, 'success');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    passBaru.val('');
                                    passLama.val('');
                                    passLama.removeClass('is-invalid');
                                    $('.imgFile').val(null);

                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            } else if (status == 'gagal') {
                                loadDataProfile('.profilePage', function () {
                                    let text = "Maaf profil kamu gagal diubah! Cek internet kamu dan coba lagi!";
                                    notifikasi(true, text, 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    passBaru.val('');
                                    passLama.val('');
                                    $('.imgFile').val(null);

                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            } else if (status == 'gagal upload') {
                                loadDataProfile('.profilePage', function () {
                                    let text = "Maaf gambar yang kamu kirim gagal diupload! Cek internet kamu dan coba lagi! Atau jika masih tidak bisa coba kamu pilih gambar yang lain!";
                                    notifikasi(true, text, 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    passBaru.val('');
                                    passLama.val('');
                                    $('.imgFile').val(null);

                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            } else if (status == "password salah") {
                                let text = "Maaf password lama yang kamu masukkan salah! Masukkan password yang benar!";
                                notifikasi(true, text, 'danger');
                                setTimeout(() => {
                                    notifikasi(false);
                                }, 5000);
                                passLama.addClass('is-invalid');
                                passLama.focus();

                                $('.boxLoading, .overlay-editP').css('opacity', 0);
                                setTimeout(() => {
                                    $('.boxLoading, .overlay-editP').addClass('d-none');
                                }, 300);
                            }
                        }
                    });
                } else {
                    formData.append('imgUpload', fileUpload);
                    formData.append('nama', nama.val());
                    formData.append('no_hp', noHp.val());
                    formData.append('email', email.val());
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
                        url: '/user/editP',
                        data: formData,
                        type: 'POST',
                        processData: false,
                        contentType: false,
                        success: function (result) {
                            result = JSON.parse(result);
                            let status = result.status;
                            if (status == 'berhasil') {
                                passBaru.addClass('is-valid');
                                passLama.addClass('is-valid');
                                passBaru.removeClass('is-invalid');
                                passLama.removeClass('is-invalid');
                                user = result.user;
                                produkLive = result.produkLive;
                                produkNotLive = result.produkNotLive;
                                // console.log(user);
                                loadDataProfile('.profilePage', function () {
                                    let text = "Selamat profil kamu berhasil diubah!";
                                    notifikasi(true, text, 'success');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    passBaru.val('');
                                    passLama.val('');
                                    passLama.removeClass('is-invalid');
                                    $('.imgFile').val(null);

                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            } else if (status == 'gagal') {
                                loadDataProfile('.profilePage', function () {
                                    let text = "Maaf profil kamu gagal diubah! Cek internet kamu dan coba lagi!";
                                    notifikasi(true, text, 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    passBaru.val('');
                                    passLama.val('');
                                    $('.imgFile').val(null);

                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            } else if (status == 'gagal upload') {
                                loadDataProfile('.profilePage', function () {
                                    let text = "Maaf gambar yang kamu kirim gagal diupload! Cek internet kamu dan coba lagi! Atau jika masih tidak bisa coba kamu pilih gambar yang lain!";
                                    notifikasi(true, text, 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    passBaru.val('');
                                    passLama.val('');
                                    $('.imgFile').val(null);

                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            }
                        }
                    });
                }
            } else if (imgFile.val().length <= 0 && $('.passwordBaruProf').val() == '' && $('.passwordLamaProf').val() == '') {
                let data = {
                    nama: nama.val(),
                    no_hp: noHp.val(),
                    email: email.val(),
                    tipe: 'cumanNamaDanNomor',
                    provinsi: null,
                    kotaKab: null,
                    kecamatan: null,
                    kelurahan: null
                };

                if (isChecked) {
                    data.provinsi = provinsiP.val();
                    data.kotaKab = kotaKab.val();
                    data.kecamatan = kecamatan.val();
                    data.kelurahan = kelurahan.val();
                } 
                myAjax('/user/editP', data, function (result) {
                    result = JSON.parse(result);
                    let status = result.status;
                    if (status == 'berhasil') {
                        produkLive = result.produkLive;
                        produkNotLive = result.produkNotLive;
                        // passBaru.addClass('is-valid');
                        // passLama.addClass('is-valid');
                        // passBaru.removeClass('is-invalid');
                        // passLama.removeClass('is-invalid');
                        user = result.user;
                        // console.log(user);
                        // console.log('masuk');
                        loadDataProfile('.profilePage', function () {
                            let text = "Selamat profil kamu berhasil diubah!";
                            notifikasi(true, text, 'success');
                            setTimeout(() => {
                                notifikasi(false);
                            }, 5000);
                            // console.log(window.user);
                            $('#editProfileModal').modal('hide');
                            passBaru.val('');
                            passLama.val('');
                            passLama.removeClass('is-invalid');
                            $('.imgFile').val(null);

                            $('.checktoedit').prop('checked', true);
                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                            $('.boxLoading, .overlay-editP').css('opacity', 0);
                            setTimeout(() => {
                                $('.boxLoading, .overlay-editP').addClass('d-none');
                            }, 300);
                        });
                    } else if (status == 'gagal') {
                        loadDataProfile('.profilePage', function () {
                            let text = "Maaf profil kamu gagal diubah! Cek internet kamu dan coba lagi!";
                            notifikasi(true, text, 'danger');
                            setTimeout(() => {
                                notifikasi(false);
                            }, 5000);
                            // console.log(window.user);
                            $('#editProfileModal').modal('hide');
                            passBaru.val('');
                            passLama.val('');
                            $('.imgFile').val(null);

                            $('.checktoedit').prop('checked', true);
                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                            $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                            $('.boxLoading, .overlay-editP').css('opacity', 0);
                            setTimeout(() => {
                                $('.boxLoading, .overlay-editP').addClass('d-none');
                            }, 300);
                        });
                    }
                });

            } else {
                validasiInputText('.passwordBaruProf', 'password');
                validasiInputText('.passwordLamaProf', 'password');
                if ($('.passwordBaruProf').val() && $('.passwordLamaProf').val() && !$('.passwordBaruProf, .passwordLamaProf').hasClass('is-invalid')) {

                    let data = {
                        nama: nama.val(),
                        no_hp: noHp.val(),
                        email: email.val(),
                        passL: passLama.val(),
                        passB: passBaru.val(),
                        tipe: 'adaPassNggakAdaImg',
                        provinsi: null,
                        kotaKab: null,
                        kecamatan: null,
                        kelurahan: null
                    };

                    if (isChecked) {
                        data.provinsi = provinsiP.val();
                        data.kotaKab = kotaKab.val();
                        data.kecamatan = kecamatan.val();
                        data.kelurahan = kelurahan.val();
                    }

                    myAjax('/user/editP', data, function (result) {
                        result = JSON.parse(result);
                            let status = result.status;
                            if (status == 'berhasil') {
                                passBaru.addClass('is-valid');
                                passLama.addClass('is-valid');
                                passBaru.removeClass('is-invalid');
                                passLama.removeClass('is-invalid');
                                user = result.user;
                                produkLive = result.produkLive;
                                produkNotLive = result.produkNotLive;
                                // console.log(user);
                                loadDataProfile('.profilePage', function () {
                                    let text = "Selamat profil kamu berhasil diubah!";
                                    notifikasi(true, text, 'success');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    // passBaru.val('');
                                    // passLama.val('');
                                    // passLama.removeClass('is-invalid');
                                    $('.imgFile').val(null);
                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            } else if (status == 'gagal') {
                                loadDataProfile('.profilePage', function () {
                                    let text = "Maaf profil kamu gagal diubah! Cek internet kamu dan coba lagi!";
                                    notifikasi(true, text, 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 5000);
                                    // console.log(window.user);
                                    $('#editProfileModal').modal('hide');
                                    passBaru.val('');
                                    passLama.val('');
                                    $('.imgFile').val(null);
                                    $('.checktoedit').prop('checked', true);
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-valid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('is-invalid');
                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').removeClass('activeSelectLokasi');

                                    $('.provincesProf, .regenciesProf, .districtsProf, .villagesProf').val('');

                                    $('.boxLoading, .overlay-editP').css('opacity', 0);
                                    setTimeout(() => {
                                        $('.boxLoading, .overlay-editP').addClass('d-none');
                                    }, 300);
                                });
                            } else if (status == "password salah") {
                                let text = "Maaf password lama yang kamu masukkan salah! Masukkan password yang benar!";
                                notifikasi(true, text, 'danger');
                                setTimeout(() => {
                                    notifikasi(false);
                                }, 5000);
                                passLama.addClass('is-invalid');
                                passLama.removeClass('is-valid');
                                passLama.focus();

                                $('.boxLoading, .overlay-editP').css('opacity', 0);
                                setTimeout(() => {
                                    $('.boxLoading, .overlay-editP').addClass('d-none');
                                }, 300);
                            }
                    });

                    // $.ajax({
                    //     url: '/user/editP',
                    //     data: formData,
                    //     type: 'POST',
                    //     processData: false,
                    //     contentType: false,
                    //     success: function(result) {
                            
                    //     }
                    // });
                }
            }
        } else {
            $('.boxLoading, .overlay-editP').css('opacity', 0);
            setTimeout(() => {
                $('.boxLoading, .overlay-editP').addClass('d-none');
            }, 300);
        }

        
        $('.btnEditP').prop('disabled', false);
        $('.closeEdit').prop('disabled',false);
        // myAjax('/user/editP', );
    });

    $('.imgFile').on('change', function () {
        $('.imgFile').removeClass('is-invalid');
        $('.imgFile').removeClass('is-valid');
        let file = $(".imgFile").get(0).files[0];
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
                $(".imgPreview").attr("src", reader.result);
            }

            $('.labelImgFile').html(file.name);
            $('.imgFile').addClass('is-valid');
 
        } else {
            $('.imgFile').val(null);
            $('.labelImgFile').html('Gambar salah!');
            $('.imgFile').addClass('is-invalid');
            $(".imgPreview").attr("src", '/img/warning.png');
        }
    });
}

function loadDataProfile(kelasDariMana, tambahanFungsi = null) {
    if (user) {
        loading("home");
        let detail = `
                <div class="row mb-4">
            <div class="col-11">
                <h4 class="text-left font-weight-bold">Detail Profile</h4>
            </div>
            <div class="conEditProfile col-1 text-left float-right">
                <p class="editProfile text-left text-secondary"  data-toggle="modal" data-target="#editProfileModal">
                    <i class="fas fa-marker"></i>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h6 class="text-black">Nama Lengkap</h6>
                <h5 class="text-secondary">${user.username}</h5>
            </div>
        </div>
        <hr class="mydivider mb-3">
        <div class="row">
            <div class="col">
                <h6 class="text-black">Email</h6>
                <h5 class="text-secondary">${user.email}</h5>
            </div>
        </div>
        <hr class="mydivider mb-3">
        <div class="row">
            <div class="col">
                <h6 class="text-black">Foto Profile | Ikon Kamu</h6>
                <img src="/img/upload/${user.img}" width="25%" alt="ikon kamu">
            </div>
        </div>
        <hr class="mydivider mb-3">
        <div class="row">
            <div class="col">
                <h6 class="text-black">Nomor Hp</h6>
                <h5 class="text-secondary">${user.no_hp}</h5>
            </div>
        </div>
        <hr class="mydivider mb-3">
        <div class="row">
            <div class="col">
                <h6 class="text-black">Asal Kamu</h6>
                <h5 class="text-secondary">${user.asal.split('***')[0]} / ${user.asal.split('***')[1]} / ${user.asal.split('***')[2]} / ${user.asal.split('***')[3]}</h5>
            </div>
        </div>
        
        `;

        closeLoader(2000, function () {
            $(kelasDariMana).css('opacity', 0);
            $(kelasDariMana).addClass('d-none');
            $('.conDetailProfile').html(detail);
            eventEditProf();
            setTimeout(() => {
                $('.profilePage').removeClass('d-none');
                $('.profilePage').css('opacity', 1);
                if (tambahanFungsi != null) {
                    tambahanFungsi();
                }
            }, 1000);
        });
    } else {
        notifikasi(true, 'Maaf, kamu gagal mengakses laman profile. Coba <strong>cek internet</strong> kamu lalu <strong>coba lagi</strong>. Kalau <strong>masih tidak bisa</strong>, coba kamu <strong>refresh halaman</strong> ini...');
        setTimeout(function () {
                notifikasi(false);
        }, 5000);
    }
}

function loadDataProduk(kondisi = 'ada') {
    if (kondisi == 'tidakAda') {
        $('.conProdukLive').html('<h4 class="text-black mx-auto text-center">Belum ada Produk :(</h4>');
        // $('.conProdukLive').append(nextEl);
        $('.conProdukLiveHp').html('<h4 class="text-black mx-auto text-center">Belum ada Produk :(</h4>');
        $('.rowLelangAwal').html('<h4 class="text-black mx-auto text-center">Belum ada Produk :(</h4>');
    } else if(kondisi == 'semua') {
        let elHp = ``;
        let myLengthHp = (produkLive.length < 4) ? produkLive.length : 4;
        for (let i = 0; i < myLengthHp; i++) { 
            elHp = elHp + `
                <div class="col-6 mb-3 produkLive" data-lala="${produkLive[i].id}">
                    <div class="card shadow-sm position-relative">
                        <img src="/img/upload/${produkLive[i].img}" class="cLive" width="100%" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${produkLive[i].nama_produk}</h5>
                            <p class="card-text">RP. ${produkLive[i].harga_awal}</p>
                            <p class="card-text"><strong>@${produkLive[i].nama_user.split(' ')[0]}</strong></p>
                            
                            <p class="card-text tanggal">${produkLive[i].created_at} - ${produkLive[i].kadaluarsa}</p>
                            <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                        </div>
                    </div>
                </div>
            `;
        };

        let firstEl = `
            <div class="col-3 first produkLive"  data-lala="${produkLive[0].id}">
                <div class="card shadow-sm position-relative">
                    <img src="/img/upload/${produkLive[0].img}" class="cLive" width="100%" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${produkLive[0].nama_produk}</h5>
                        <p class="card-text">RP. ${produkLive[0].harga_awal}</p>
                        <p class="card-text"><strong>@${produkLive[0].nama_user.split(' ')[0]}</strong></p>
                        
                        <p class="card-text tanggal">${produkLive[0].created_at} - ${produkLive[0].kadaluarsa}</p>
                        <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                    </div>
                </div>
            </div>
        `;
        
        let nextEl = ``;
        let myLength = (produkLive.length < 3) ? produkLive.length : 3;
        for (let i = 1; i < myLength; i++) {
            nextEl = nextEl + `
                    <div class="col-3 produkLive" data-lala="${produkLive[i].id}">
                            <div class="card shadow-sm position-relative">
                                <img src="/img/upload/${produkLive[i].img}" class="cLive" width="100%" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${produkLive[i].nama_produk}</h5>
                                    <p class="card-text">RP. ${produkLive[i].harga_awal}</p>
                                    <p class="card-text"><strong>@${produkLive[i].nama_user.split(' ')[0]}</strong></p>
                                    
                                    <p class="card-text tanggal">${produkLive[i].created_at} - ${produkLive[i].kadaluarsa}</p>
                            <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                                </div>
                            </div>
                    </div>

                    `;
        };

        let elNotLiveAwal = ``;
        let myLengthNotLive = (produkNotLiveAwal.length < 4) ? produkNotLiveAwal.length : 4;
        let num = produkNotLiveAwal.length;
        for (let i = 0; i < myLengthNotLive; i++) {
            elNotLiveAwal = elNotLiveAwal + `
                    
                        <div class="col-6 mb-3 ${(i == 0) ? 'firstNotLive': ''}"  data-lala="${num--}">
                            <div class="card shadow-sm">
                                <img src="/img/upload/${produkNotLiveAwal[i].img}" class="" width="100%" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${produkNotLiveAwal[i].nama_produk}</h5>
                                    <p class="card-text">RP. ${produkNotLiveAwal[i].harga_awal}</p>
                                    <p class="card-text tawar"><strong>Pelelang: ${produkNotLiveAwal[i].nama_user.split(' ')[0]}</strong></p>
                                    <p class="card-text tawar"><strong>Pemenang Lelang: ${produkNotLiveAwal[i].pemenang.split(' ')[0]}</strong></p>
                                    <p class="card-text tanggal"><strong>Tawaran Pemenang: RP. ${produkNotLiveAwal[i].tawaran_pemenang}</strong></p>
                                </div>
                            </div>
                        </div>
                    `;
        };
        // elNotLiveAwal = `<div class="myConProdukNotLive row">${elNotLiveAwal}</div>`;
        $('.conProdukLive').html(firstEl + '\n' + nextEl);
        // $('.conProdukLive').append(nextEl);
        $('.conProdukLiveHp').html(elHp);
        $('.rowLelangAwal').html(elNotLiveAwal);

        // setTimeout(() => {
        //     $('.myConProdukNotLive .card').addClass('produkNotLiveMuncul');
        // }, 1000);

    } else if (kondisi == 'cumaLive') {
        let elHp = ``;
        let myLengthHp = (produkLive.length < 4) ? produkLive.length : 4;
        for (let i = 0; i < myLengthHp; i++) { 
            elHp = elHp + `
                <div class="col-6 mb-3 produkLive"  data-lala="${produkLive[i].id}">
                    <div class="card shadow-sm position-relative">
                        <img src="/img/upload/${produkLive[i].img}" class="cLive" width="100%" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${produkLive[i].nama_produk}</h5>
                            <p class="card-text">RP. ${produkLive[i].harga_awal}</p>
                            <p class="card-text"><strong>@${produkLive[i].nama_user.split(' ')[0]}</strong></p>
                            
                            <p class="card-text tanggal">${produkLive[i].created_at} - ${produkLive[i].kadaluarsa}</p>
                            <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                        </div>
                    </div>
                </div>
            `;
        };
        let firstEl = `
            <div class="col-3 first produkLive"  data-lala="${produkLive[0].id}">
                <div class="card shadow-sm position-relative">
                    <img src="/img/upload/${produkLive[0].img}" class="cLive" width="100%" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${produkLive[0].nama_produk}</h5>
                        <p class="card-text">RP. ${produkLive[0].harga_awal}</p>
                        <p class="card-text"><strong>@${produkLive[0].nama_user.split(' ')[0]}</strong></p>
                        
                        <p class="card-text tanggal">${produkLive[0].created_at} - ${produkLive[0].kadaluarsa}</p>
                            <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                    </div>
                </div>
            </div>
        `;
        
        let nextEl = ``;
        let myLength = (produkLive.length < 3) ? produkLive.length : 3;
        for (let i = 1; i < myLength; i++) {
            nextEl = nextEl + `
                    <div class="col-3 produkLive" data-lala="${produkLive[i].id}">
                            <div class="card shadow-sm position-relative">
                                <img src="/img/upload/${produkLive[i].img}" class="cLive" width="100%" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${produkLive[i].nama_produk}</h5>
                                    <p class="card-text">RP. ${produkLive[i].harga_awal}</p>
                                    <p class="card-text"><strong>@${produkLive[i].nama_user.split(' ')[0]}</strong></p>
                                    
                                    <p class="card-text tanggal">${produkLive[i].created_at} - ${produkLive[i].kadaluarsa}</p>
                                    <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                                </div>
                            </div>
                    </div>

                    `;
        };
        $('.conProdukLive').html(firstEl + '\n' + nextEl);
        // $('.conProdukLive').append(nextEl);
        $('.conProdukLiveHp').html(elHp);
        $('.rowLelangAwal').html('<h4 class="text-black mx-auto text-center">Belum ada Produk :(</h4>');
    } else if (kondisi == 'cumaNotLive') {
        let elNotLiveAwal = ``;
        let myLengthNotLive = (produkNotLiveAwal.length < 4) ? produkNotLiveAwal.length : 4;
        let num = produkNotLiveAwal.length;
        for (let i = 0; i < myLengthNotLive; i++) {
            elNotLiveAwal = elNotLiveAwal + `
                        <div class="col-6 mb-3  ${(i == 0) ? 'firstNotLive': ''}" data-lala="${num--}">
                            <div class="card shadow-sm">
                                <img src="/img/upload/${produkNotLiveAwal[i].img}" class="" width="100%" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${produkNotLiveAwal[i].nama_produk}</h5>
                                    <p class="card-text">RP. ${produkNotLiveAwal[i].harga_awal}</p>
                                    <p class="card-text tawar"><strong>Pelelang: ${produkNotLiveAwal[i].nama_user.split(' ')[0]}</strong></p>
                                    <p class="card-text tawar"><strong>Pemenang Lelang: ${produkNotLiveAwal[i].pemenang.split(' ')[0]}</strong></p>
                                    <p class="card-text tanggal"><strong>Tawaran Pemenang: RP. ${produkNotLiveAwal[i].tawaran_pemenang}</strong></p>
                                </div>
                            </div>
                        </div>
                    `;
        };

        // elNotLiveAwal = `<div class="myConProdukNotLive row">${elNotLiveAwal}</div>`;

        $('.rowLelangAwal').html(elNotLiveAwal);

        // setTimeout(() => {
        //     $('.myConProdukNotLive .card').addClass('produkNotLiveMuncul');
        // }, 1000);

        $('.conProdukLive').html('<h4 class="text-black mx-auto text-center">Belum ada Produk :(</h4>');
        // $('.conProdukLive').append(nextEl);
        $('.conProdukLiveHp').html('<h4 class="text-black mx-auto text-center">Belum ada Produk :(</h4>');
    }
    
    eventForProduk();
        
        // $('.conProdukLive').append(firstEl);
        // $('.conProdukLive').append(nextEl);
        // $('.conProdukLiveHp').append(elHp);
        // $('.rowLelangAwal').append(elNotLiveAwal);
}

function eventTambahProduk() {
    $('.btnTambahP, .closeTambahProduk, .tambahProduk').off('click');
    $('.imgFileProduk, .statusProduk').off('change');


    $('.closeTambahProduk').on('click', function () {
        $('.namaProduk, .hargaAwal, .deskripsiProduk, .stokProduk, .kadaluarsaProduk, .kadaluarsaProdukJam, .imgFileProduk, .statusProduk').removeClass('is-valid');
        $('.namaProduk, .hargaAwal, .deskripsiProduk, .stokProduk, .kadaluarsaProduk, .kadaluarsaProdukJam, .imgFileProduk, .statusProduk').removeClass('is-invalid');
        $('.namaProduk, .hargaAwal, .deskripsiProduk, .kadaluarsaProduk, .kadaluarsaProdukJam').val('');
        $('.imgFileProduk').val(null);
        $('.stokProduk').val('1');
        $('.imgPreviewProduk').attr('src', '/img/imageNotFound.png');
        $('.labelImgFileProduk').html('Pilih Gambar');
    });

    $('.imgFileProduk').on('change', function () {
        $('.imgFileProduk').removeClass('is-invalid');
        $('.imgFileProduk').removeClass('is-valid');
        let file = $(".imgFileProduk").get(0).files[0];
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
                $(".imgPreviewProduk").attr("src", reader.result);
            }

            $('.labelImgFileProduk').html(file.name);
            $('.imgFileProduk').addClass('is-valid');
 
        } else {
            $('.imgFileProduk').val(null);
            $('.labelImgFileProduk').html('Gambar salah!');
            $('.imgFileProduk').addClass('is-invalid');
            $(".imgPreviewProduk").attr("src", '/img/warning.png');
        }
    });

    $('.tambahProduk').on('click', function () {
        $('.mainApp').removeClass('d-none');
        if ($('.mainApp').hasClass('d-none'))
            backFromCari();
        if (!$('.detailProduk').hasClass('d-none')) 
            backFromDetailProduk();
        let now = new Date();
        let tahun = now.getFullYear(),
        bulan = (now.getMonth().toString().length == 1) ?   `0${now.getMonth()}` : now.getMonth(),
        hari = (now.getDate().toString().length == 1) ?  `0${now.getDate()}` : now.getDate();
        now = tahun + '-' + bulan + '-' + hari;
        $('.kadaluarsaProduk').attr('min', now);
        $('.namaProduk, .hargaAwal, .deskripsiProduk, .stokProduk, .kadaluarsaProduk, .kadaluarsaProdukJam, .imgFileProduk, .statusProduk').removeClass('is-valid');
        $('.namaProduk, .hargaAwal, .deskripsiProduk, .stokProduk, .kadaluarsaProduk, .kadaluarsaProdukJam, .imgFileProduk, .statusProduk').removeClass('is-invalid');
        $('.namaProduk, .hargaAwal, .deskripsiProduk, .kadaluarsaProduk, .kadaluarsaProdukJam').val('');
        $('.imgFileProduk').val(null);
        $('.stokProduk').val('1');
        $('.imgPreviewProduk').attr('src', '/img/imageNotFound.png');
        $('.labelImgFileProduk').html('Pilih Gambar');
    });

    $('.statusProduk').on('change', function () {
        if ($('.statusProduk').val() == 'dash') {
            $('.kadaluarsaProduk, .kadaluarsaProdukJam').val('');
            $('.kadaluarsaProduk').attr('readonly', true);
            $('.kadaluarsaProdukJam').attr('readonly', true);
        } else {
            $('.kadaluarsaProduk').attr('readonly', false);
            $('.kadaluarsaProdukJam').attr('readonly', false);
        }
    });

    $('.btnTambahP').on('click', function () {
        validasiInputText('.namaProduk');
        validasiInputText('.hargaAwal', 'harga&stok');
        validasiInputText('.deskripsiProduk');
        validasiInputText('.stokProduk', 'harga&stok');
        
        $('.statusProduk').addClass('is-valid');
        let statusProduk = null;
        let kadaluarsaProduk = $('.kadaluarsaProduk').val();
        let kadaluarsaProdukJam = $('.kadaluarsaProdukJam').val();
        if ($('.statusProduk').val() == 'langsung') {
            statusProduk = 1;
        } else if ($('.statusProduk').val() == 'dash') {
            statusProduk = 0;
        }

        if (statusProduk == 0) {
            kadaluarsaProduk = '';
            kadaluarsaProdukJam = '';
        } else {
            validasiInputText('.kadaluarsaProduk');
            validasiInputText('.kadaluarsaProdukJam');
        }
        validasiGambarKosongAtauTidak('.imgFileProduk');
        // console.log($('.statusProduk').val());
        // return;
        // validasiInputDatetime('.kadaluarsaProduk', 'date');
        // validasiInputDatetime('.kadaluarsaProdukJam', 'time');

        if (!$('.namaProduk, .hargaAwal, .deskripsiProduk, .stokProduk, .kadaluarsaProduk, .kadaluarsaProdukJam, .imgFileProduk, .statusProduk').hasClass('is-invalid')) {
            if ($('.imgFileProduk').val().length > 0 && !$('.imgFileProduk').hasClass('is-invalid')) {
                let formData = new FormData();
                formData.append('nama', $('.namaProduk').val());
                formData.append('harga', $('.hargaAwal').val());
                formData.append('deskripsi', $('.deskripsiProduk').val());
                formData.append('stok', $('.stokProduk').val());
                formData.append('tanggalKadaluarsa', kadaluarsaProduk);
                formData.append('jamKadaluarsa', kadaluarsaProdukJam);
                formData.append('statusProduk', statusProduk);
                formData.append('pass', 'A411TAMBAH');
                formData.append('imgUpload', $('.imgFileProduk').prop('files')[0]);

                $.ajax({
                    url: '/produk/tambah',
                    data: formData,
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        result = JSON.parse(result);
                        let status = result.status;
                        if (status == 'berhasil') {
                            produkLive = result.produkLiveAwal;
                            produkNotLive = result.produkNotLiveAwal;
                            $('.btnTambahP').prop('disabled', false);
                            if (produkLive && produkNotLiveAwal) {
                                loadDataProduk('semua');
                            } else {
                                if (produkNotLiveAwal) {
                                    loadDataProduk('cumaNotLive');
                                } else if (produkLive) {
                                    loadDataProduk('cumaLive');
                                } else {
                                    loadDataProduk('tidakAda');
                                }
                            }
                            let text = "Produk kamu berhasil ditambahkan!";
                            notifikasi(true, text, 'warning');
                            setTimeout(() => {
                                notifikasi(false);
                            }, 5000);
                            $('#tambahProdukModal').modal('hide');
                            $('.namaProduk, .hargaAwal, .deskripsiProduk, .kadaluarsaProduk, .kadaluarsaProdukJam').val('');
                            $('.stokProduk').val('1');
                            $('.imgFileProduk').val(null);
                            $('.labelImgFileProduk').html('Pilih Gambar');
                            
                        } else if (status == 'gagal') {
                            $('.btnTambahP').prop('disabled', false);
                            let text = "Produk kamu gagal ditambahkan! Silahkan coba lagi...";
                            notifikasi(true, text, 'danger');
                            setTimeout(() => {
                                notifikasi(false);
                            }, 5000);
                        } else if (status == 'gagal upload') {
                            $('.btnTambahP').prop('disabled', false);
                            let text = "Foto produk kamu gagal diupload! Cek internet kamu lalu coba lagi!";
                            notifikasi(true, text, 'danger');
                            setTimeout(() => {
                                notifikasi(false);
                            }, 5000);
                        } else if (status == 'email salah') {
                            $('.btnTambahP').prop('disabled', false);
                            $('#tambahProdukModal').modal('hide');
                            $('.namaProduk, .hargaAwal, .deskripsiProduk, .kadaluarsaProduk, .kadaluarsaProdukJam').val('');
                            $('.stokProduk').val('1');
                            $('.imgFileProduk').val(null);
                            $('.labelImgFileProduk').html('Pilih Gambar');
                            let text = "Kamu masuk dengan email yang tidak terdaftar! Kami akan <strong>keluarkan</strong> kamu dari sini dan mengharuskan kamu untuk <strong>login lagi.</strong> Jika saat login akun kamu tidak ada atau hilang, silahkan hubungi admin kami..";
                            notifikasi(true, text, 'danger');
                            setTimeout(() => {
                                notifikasi(false);
                                logout('.webAppPage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                            }, 5000);
                        } else {
                            // console.log(result);
                        }
                        $('.btnTambahP').prop('disabled', false);
                    }

                });
            }
            
        }
    });
}



function loadDataAllProdukLive() {
    
    if (produkLive && produkNotLiveAwal) {
            loadDataProduk('semua');
    } else {
            if (produkNotLiveAwal) {
                loadDataProduk('cumaNotLive');
            } else if (produkLive) {
                loadDataProduk('cumaLive');
            } else {
                loadDataProduk('tidakAda');
            }
    }
    if (produkLive.length > 0) {
        let el = ``;
        produkLive.forEach(function (pLive) {
            el = el + `
                <div class="col-sm-4 mb-3 produkLive"  data-lala="${pLive.id}">
                    <div class="card shadow-sm position-relative">
                        <img src="/img/upload/${pLive.img}" class="fromLivePage" width="100%" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pLive.nama_produk}</h5>
                            <p class="card-text">RP. ${pLive.harga_awal}</p>
                            <p class="card-text"><strong>@${pLive.nama_user.split(' ')[0]}</strong></p>
                            
                            <p class="card-text tanggal">${pLive.created_at} - ${pLive.kadaluarsa}</p>
                            <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                        </div>
                    </div>
                </div>
            `;
        });
        $('.rowAllProdukLive').html(el);
    } else {
        let el = `
                <div class="col-4 mb-3">
                    <h6 class="text-center">Belum ada produk yang live :(</h6>
                </div>
            `;
        $('.rowAllProdukLive').html(el);
    }
}





function loadDataKelolaProduk() {
    myAjax('/produk/getAllMyProduk', {pass: 'A411MYPRODUK'}, function (result) {
        result = JSON.parse(result);
        let status = result.status;
        if (status == 'ada') {
            listedAllProduk(result.allMyProduk);
        } else if (status == 'tidakAda') {
            let text = `
                <tr>
                    <th>!</th>
                    <td>
                        <div class="col-12 text-center"><h6>Maaf, Kamu tidak memiliki produk apapun :(</h6></div>
                    </td>
                    <td></td>
                </tr>
                `;
            $('.rowMyProduk').html(text);
            removeEventListedAllProduk();
            listedAllProduk(result.allMyProduk);
        } //else 
            //console.log();
    });


}



function eventForProduk() {
    $('.produkLive .card img.cLive').off('click');
    $('.produkLive .card img.cLive.fromLivePage').off('click');
    $('.berikanTawaran').off('click');
    $('.berikanTawaran').on('click', function () {
        if (user == null) {
            alertNotSignin();
            return;
        }
        let lala = $(this).parent().parent().parent().data('lala');
        // console.log(lala);
        
        (async () => {
            let { value: tawaranPenawar } = await Swal.fire({
                title: 'Masukkan Harga Tawaran Kamu',
                inputLabel: 'Rp',
                input: 'text',
                inputAttributes: {
                    onKeyPress: 'return hanyaAngka(event);',
                    autocapitalize: 'off',
                    class: 'swal-input'
                },
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Tawar!',
                cancelButtonText: 'Batal',
                // showLoaderOnConfirm: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Kamu tidak bisa memberikan tawaran kosong!'
                    }
                },
                // willOpen: () => {
                //     $('.swalInput').off('change');
                //     $('.swalInput').on('change', hanyaAngka);
                // },
                // allowOutsideClick: () => !Swal.isLoading()
            });

            if (tawaranPenawar) {
                let data = {
                    tawaranPenawar: tawaranPenawar,
                    HELLO: 'WORLD',
                    mylala: lala
                };
                myAjax('/produk/tawar', data, function (result) {
                    result = JSON.parse(result);
                    let status = result.status;

                    if (status == 'berhasil') {
                        user = result.user;
                        ubahDataUser();
                        Swal.fire({
                            icon: 'success', 
                            title: 'Mantap!', 
                            text: 'Tawaran kamu berhasil masuk! Semoga kamu menang!',
                            confirmButtonText: 'OK',
                        }).then(function (result) {
                            if (result.isConfirmed) {
                                if (!$('.livePage').hasClass('d-none')) {
                                    $('.produkLive .card img.fromLivePage').off('click');
                                    loading('home');
                                    closeLoader(5000, function () {
                                        $('.livePage').css('opacity', 0);
                                        $('.livePage').addClass('d-none');
                                        setTimeout(() => {
                                            $('.webAppPage').removeClass('d-none');
                                            $('.webAppPage').css('opacity', 1);
                                            setTimeout(() => {
                                                detailProduk(lala);
                                                $('html, body').animate({ scrollTop: "0" }, 400);
                                            }, 700);
                                        }, 4000);
                                    });
                                } else {
                                    detailProduk(lala);
                                    $('html, body').animate({ scrollTop: "0" }, 400);
                                }
                            }
                        });
                    } else if(status == 'gagal') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Gagal!',
                            text: 'Tawaran yang kamu tawarkan belum masuk... Silahkan coba lagi.'
                        });
                    } else if (status == 'dia authornya') { 
                        Swal.fire({
                            icon: 'error',
                            title: 'Maaf..',
                            text: 'Kamu adalah pelelang produk ini...'
                        });
                    } else if (status == 'email fake dia') {
                        Swal.fire({
                            icon: 'warning', 
                            title: 'Akun kamu tidak terdaftar!', 
                            text: 'Kamu akan terlogout secara automatis.. Silahkan coba login lagi.. Jika akun kamu tidak ada, coba hubungi admin kami..',
                            confirmButtonText: 'OK',
                            allowOutsideClick: false
                        }).then(function (result) {
                            if (result.isConfirmed) {
                                if (!$('.livePage').hasClass('d-none')) {
                                    logout('.livePage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                                } else {
                                    logout('.webAppPage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                                }
                            }
                        });
                    } else if (status == 'uangnya tidak cukup') {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Saldo tidak cukup!',
                            confirmButtonText: 'OK'
                        });
                    } else if (status == 'kurangduit') {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Tawaran yang kamu masukkan kurang dari harga awal produk ini',
                            confirmButtonText: 'OK'
                        });
                    } else {
                        Swal.fire({
                            icon: 'info', 
                            title: 'Kamu Sudah Menawar!', 
                            text: 'Kamu tidak bisa memberi tawaran lagi. Silahkan saksikan proses lelang mu dengan mengeklik gambar produk yang kamu beri tawaran...',
                            confirmButtonText: 'OK',
                        }).then(function (result) {
                            if (result.isConfirmed) {
                                if (!$('.livePage').hasClass('d-none')) {
                                    $('.produkLive .card img.fromLivePage').off('click');
                                    loading('home');
                                    closeLoader(5000, function () {
                                        $('.livePage').css('opacity', 0);
                                        $('.livePage').addClass('d-none');
                                        setTimeout(() => {
                                            $('.webAppPage').removeClass('d-none');
                                            $('.webAppPage').css('opacity', 1);
                                            setTimeout(() => {
                                                detailProduk(lala);
                                                $('html, body').animate({ scrollTop: "0" }, 400);
                                            }, 700);
                                        }, 4000);
                                    });
                                } else {
                                    detailProduk(lala);
                                    $('html, body').animate({ scrollTop: "0" }, 400);
                                }
                            }
                        });
                    }
                });
            }
        })();
        
    });

    $('.produkLive .card img.fromLivePage').on('click', function () {
        if (user == null) {
            alertNotSignin();
            return;
        }
        let lala = $(this).parent().parent().data('lala');
        $('.produkLive .card img.fromLivePage').off('click');
        loading('home');
        closeLoader(5000, function () {
            $('.livePage').css('opacity', 0);
            $('.livePage').addClass('d-none');
            setTimeout(() => {
                $('.webAppPage').removeClass('d-none');
                $('.webAppPage').css('opacity', 1);
                setTimeout(() => {
                    detailProduk(lala);
                    $('html, body').animate({ scrollTop: "0" }, 400);
                }, 700);
            }, 4000);
        });
    });
    $('.produkLive .card img.cLive').on('click', function () {
        if (user == null) {
            alertNotSignin();
            return;
        }
        $('.produkLive .card img.cLive').off('click');
        setTimeout(() => {
            detailProduk($(this).parent().parent().data('lala'));
            $('html, body').animate({ scrollTop: "0" }, 400);
        }, 700);
    });
}

function mySwal(text = 'Info') {
    Swal.fire({
        icon: 'info',
        title: text,
        text: 'Fitur ini masih dalam pembangunan(Under Development). Fitur yang sudah kami aktifkan adalah login, register, tambah produk, edit profile, menu "kelola produk",  cari produk, tombol "muat lagi", logout, sinkron ke database(untuk menampilkan produk dan cek detail user), tombol "lihat semua" produk live, mengubah dan menghapus produk kamu. Dan semua fitur itu terjadi secara asinkron/asyncrhonous yang membuat web ini lebih interaktif sekaligus dinamis. Adapun fitur yang masih kami kembangkan(under develop) adalah fitur "masuk tanpa akun", bertransaksi(berikan tawaran), dan link shortcut cari produk. Untuk sementara fitur aktivasi login dan hubungi kami menggunakan email kami nonaktifkan, user setelah daftar bisa langsung login tanpa aktivasi terlebih dahulu. Karena untuk aktivasi diperlukan kirim email ke user/member. Sedangkan untuk kirim email dengan SMTP diperlukan password. Oleh karena itu kami nonaktifkan fitur kirim email ini. Selamat mencoba semua fitur kami... Jangan ada yang terlewatkan ya...'
    });
}


function listedAllProduk(allMyProduk) {
    let num = 1;
    let el = ``;
    if (allMyProduk != null) {
        Object.values(allMyProduk).forEach(function (myProduk) {
            if (myProduk) {
                myProduk.forEach(function (pro) {
                    el = el + `
                        <tr class="tableRow" data-lala="${pro.id}">
                            <th scope="row">${num++}</th>
                            <td width="20%"><img src="/img/upload/${pro.img}" width="100%" class="rounded" alt="iconProduk"></td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <p class="font-weight-bold">${pro.nama_produk}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="">Rp${pro.harga_awal}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">Stok</p>
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">${pro.stok_produk}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
                });
            }
        });
        closeFilterElement();
        $('.rowMyProduk').html(el);
        let dataCeklisLama = $('.listFilter .ceklis').data('ceklis');
        if (dataCeklisLama != 'semua') {
            $(`.listFilter .ceklis[data-ceklis=${dataCeklisLama}]`).addClass('d-none');
            $(`.listFilter .ceklis[data-ceklis=${dataCeklisLama}]`).removeClass('ceklis');
        }
        $('.listFilter .semua').addClass('ceklis');
        $('.listFilter .ceklis.semua').removeClass('d-none');
        removeEventListedAllProduk();
        eventListedAllProduk(allMyProduk);
    }
}

function eventListedAllProduk(allMyProduk) {
    
    $('.tblFilter').on('click', function () {
        $('.filterProduk .col-12').removeClass('d-none');
        $('.filterProduk').css({ opacity: 1,  bottom: 0});
        // $('.filterProduk').addClass('showFilterProduk');
    });
    
    $('.closeFilter').on('click', function () {
        closeFilterElement();
    });

    $('.listFilter').on('click', function () {
        let i = $(this).children().children().children().next().children();
        if (!i.hasClass('ceklis')) {
            i.removeClass('d-none');
            $('.listFilter .ceklis').addClass('d-none');
            $('.listFilter .ceklis').removeClass('ceklis');
            i.addClass('ceklis');
        }
        closeFilterElement();
        removeEventListedAllProduk();
        editListedProduk(allMyProduk, i.data('ceklis'));
        eventListedAllProduk(allMyProduk);
    });

    $('.tableRow').on('click', function (e) {
        let myThis = $(this);
        let dataLala = $(this).data('lala');
        Swal.fire({
            icon: 'question',
            title: 'Pilih Aksi',
            confirmButtonText: 'Edit',
            confirmButtonColor: 'orange',
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: 'Hapus'
        }).then(function (result) {
            if (result.isConfirmed) {
                $('.prosesMemuat').css('opacity', 1);
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
                    $('.prosesMemuat').css('opacity', 0);
                    let status = result.status;

                    if (status == 'ada') {
                        if(result.produk.status == 0 ||result.produk.status == 1 || result.produk.status == 3)
                            $('.modalEditProduk').modal('show');
                        else
                            Swal.fire({
                                icon: 'warning',
                                title: 'Tidak bisa!',
                                text: 'Maaf, untuk produk yang sudah terjual tidak bisa dilakukan pengeditan!'
                            });
                    }
                });
                eventEditProduk(dataLala);
            } else if (result.isDenied) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Yakin kamu??',
                    showCancelButton: true
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
                                    pass: 'A411HAPUSPRODUK'
                                };
                                myAjax('/produk/hapusProduk', data, function (result) {
                                    if (result == 'berhasil') {
                                        setTimeout(() => {
                                            Swal.close();
                                        }, 2000);
                                    } else if (result == 'produkLive') { 
                                        Swal.close();
                                        Swal.fire('Gagal Hapus Produk', 'Maaf, untuk produk dengan status live tidak bisa dihapus. Jika kamu ingin menghapus produk live, kamu bisa ubah status produk kamu menjadi tidak live. Setelah itu baru kamu bisa menghapus produk kamu.', 'error');
                                    } else {
                                        Swal.close();
                                        Swal.fire('Gagal Hapus Produk', 'Kamu gagal menghapus produkmu, silahkan coba lagi', 'error');
                                    }
                                });
                            },
                            didClose: function () {
                                updateDataProduk();
                            }
                        });
                    }
                });
            }
        });
    });
}

function closeFilterElement() {
    $('.filterProduk .col-12').addClass('d-none');
    $('.filterProduk').css({ opacity: 0,  bottom: '-100px'});
}

function editListedProduk(allMyProduk, dataCeklis) {
    let num = 1;
    let el = ``;
    if (dataCeklis == 'semua') {
        Object.values(allMyProduk).forEach(function (myProduk) {
            if (myProduk) {
                myProduk.forEach(function (pro) {
                    el = el + `
                        <tr class="tableRow" data-lala="${pro.id}">
                            <th scope="row">${num++}</th>
                            <td width="20%"><img src="/img/upload/${pro.img}" width="100%" class="rounded" alt="iconProduk"></td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <p class="font-weight-bold">${pro.nama_produk}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="">Rp${pro.harga_awal}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">Stok</p>
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">${pro.stok_produk}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
                });
            }
        });
        $('.rowMyProduk').html(el);
    } else if (dataCeklis == 'live') {
        if (allMyProduk.myProdukLive) {
            allMyProduk.myProdukLive.forEach(function (pro) {
            el = el + `
                        <tr class="tableRow" data-lala="${pro.id}">
                            <th scope="row">${num++}</th>
                            <td width="20%"><img src="/img/upload/${pro.img}" width="100%" class="rounded" alt="iconProduk"></td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <p class="font-weight-bold">${pro.nama_produk}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="">Rp${pro.harga_awal}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">Stok</p>
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">${pro.stok_produk}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
            });
            $('.rowMyProduk').html(el);
        } else {
            let text = `
                <tr>
                    <th>!</th>
                    <td>
                        <div class="col-12 text-center"><h6>Maaf, Kamu tidak memiliki produk live :(</h6></div>
                    </td>
                    <td></td>
                </tr>
                `;
            $('.rowMyProduk').html(text);
        }
        
    } else if (dataCeklis == 'draf') {
        if (allMyProduk.myProdukDraft) {
            allMyProduk.myProdukDraft.forEach(function (pro) {
            el = el + `
                        <tr class="tableRow" data-lala="${pro.id}">
                            <th scope="row">${num++}</th>
                            <td width="20%"><img src="/img/upload/${pro.img}" width="100%" class="rounded" alt="iconProduk"></td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <p class="font-weight-bold">${pro.nama_produk}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="">Rp${pro.harga_awal}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">Stok</p>
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">${pro.stok_produk}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
            });
            $('.rowMyProduk').html(el);
        } else {
            let text = `
                <tr>
                    <th>!</th>
                    <td>
                        <div class="col-12 text-center"><h6>Maaf, Kamu tidak memiliki produk draf :(</h6></div>
                    </td>
                    <td></td>
                </tr>
                `;
            $('.rowMyProduk').html(text);
        }
        
    } else if (dataCeklis == 'selesai') {
        if (allMyProduk.myProdukSelesai) {
            allMyProduk.myProdukSelesai.forEach(function (pro) {
            el = el + `
                        <tr class="tableRow" data-lala="${pro.id}">
                            <th scope="row">${num++}</th>
                            <td width="20%"><img src="/img/upload/${pro.img}" width="100%" class="rounded" alt="iconProduk"></td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <p class="font-weight-bold">${pro.nama_produk}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="">Rp${pro.harga_awal}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">Stok</p>
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">${pro.stok_produk}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
            });
            $('.rowMyProduk').html(el);
        } else {
            let text = `
                <tr>
                    <th>!</th>
                    <td>
                        <div class="col-12 text-center"><h6>Maaf, Kamu tidak memiliki produk yang terjual :(</h6></div>
                    </td>
                    <td></td>
                </tr>
                `;
            $('.rowMyProduk').html(text);
        }
        
    
    } else if (dataCeklis == 'kadaluarsa') {
        if (allMyProduk.myProdukKadaluarsa) {
            allMyProduk.myProdukKadaluarsa.forEach(function (pro) {
            el = el + `
                        <tr class="tableRow" data-lala="${pro.id}">
                            <th scope="row">${num++}</th>
                            <td width="20%"><img src="/img/upload/${pro.img}" width="100%" class="rounded" alt="iconProduk"></td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <p class="font-weight-bold">${pro.nama_produk}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="">Rp${pro.harga_awal}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">Stok</p>
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="col">
                                        <p class="">${pro.stok_produk}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
            });
            $('.rowMyProduk').html(el);
        } else {
            let text = `
                <tr>
                    <th>!</th>
                    <td>
                        <div class="col-12 text-center"><h6>Maaf, Kamu tidak memiliki produk Kadaluarsa :(</h6></div>
                    </td>
                    <td></td>
                </tr>
                `;
            $('.rowMyProduk').html(text);
        }
        
    
    }
}

function updateDataProduk() {
    // $('.myJs').attr('src', '');
    // $('.myJs').attr('src', '/js/script.js');
    myAjax('/produk/getProduk2', { pass: 'A411LOADPRODUK' }, function (result) {
        result = JSON.parse(result);
        let status = result.status;
        if (status == 'berhasil') {
            produkLive = result.produkLive;
            produkNotLiveAwal = result.produkNotLiveAwal;
            loadDataAllProdukLive();
            loadDataKelolaProduk();
            if (produkLive && produkNotLiveAwal) {
                loadDataProduk('semua');
            } else {
                if (produkNotLiveAwal) {
                    loadDataProduk('cumaNotLive');
                } else if (produkLive) {
                    loadDataProduk('cumaLive');
                } else {
                    loadDataProduk('tidakAda');
                }
            }
        }
        eventTambahProduk();
    });
}


function removeEventListedAllProduk() {
    $('.btnEditProduk, .closeEditProduk, .tblFilter, .closeFilter, .listFilter, .tableRow').off('click');
    $('.imgFileProdukEdit, .statusProdukEdit').off('change');
}

function eventEditProduk(lala) {
    $('.btnEditProduk, .closeEditProduk').off('click');
    $('.imgFileProdukEdit, .statusProdukEdit').off('change');
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
            $('.labelImgFileProdukEdit').val('Pilih Gambar');
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
            notifikasi(true, 'Maaf, Terjadi error!', 'danger');
            setTimeout(function () {
                notifikasi(false);
                document.location.href = '/';
            }, 2000);
        }
    });
    $('.closeEditProduk').on('click', function () {
        $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-valid');
        $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .stokProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .imgFileProdukEdit, .statusProdukEdit').removeClass('is-invalid');
        $('.namaProdukEdit, .hargaAwalEdit, .deskripsiProdukEdit, .kadaluarsaProduk, .kadaluarsaProdukJamEdit').val('');
        $('.imgFileProdukEdit').val(null);
        $('.stokProdukEdit').val('1');
        $('.imgPreviewProdukEdit').attr('src', '/img/imageNotFound.png');
        $('.labelImgFileProdukEdit').html('Pilih Gambar');
    });

    $('.imgFileProdukEdit').on('change', function () {
        $('.imgFileProdukEdit').removeClass('is-invalid');
        $('.imgFileProdukEdit').removeClass('is-valid');
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

            $('.labelImgFileProdukEdit').html(file.name);
            $('.imgFileProdukEdit').addClass('is-valid');
 
        } else {
            $('.imgFileProdukEdit').val(null);
            $('.labelImgFileProdukEdit').html('Gambar salah!');
            $('.imgFileProdukEdit').addClass('is-invalid');
            $(".imgPreviewProdukEdit").attr("src", '/img/warning.png');
        }
    });

    

    $('.btnEditProduk').on('click', function () {
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
                        if (result == 'berhasil') {
                            $('.namaProdukEdit, .imgFileProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .deskripsiProdukEdit, .stokProdukEdit, .hargaAwalEdit').addClass('is-valid');
                            $('.modalEditProduk').modal('hide');
                            $('.labelImgFileProdukEdit').val('Pilih gambar');
                            $('.imgFileProdukEdit').val(null);
                            updateDataProduk();
                            Swal.fire({
                                icon: 'success',
                                title: 'Berhasil diedit!',
                                text: 'Produk kamu berhasil diedit..'
                            });
                        } else if (result == 'gagal') {
                            $('.modalEditProduk').modal('hide');
                            $('.labelImgFileProdukEdit').val('Pilih gambar');
                            $('.imgFileProdukEdit').val(null);
                            Swal.fire({
                                icon: 'error',
                                title: 'Gagal!',
                                text: 'Produk kamu gagal diedit.. Coba periksa internet kamu, lalu coba lagi'
                            });
                        } else if (result == 'gagal upload') {
                            $('.modalEditProduk').modal('hide');
                            $('.labelImgFileProdukEdit').val('Pilih gambar');
                            $('.imgFileProdukEdit').val(null);
                            Swal.fire({
                                icon: 'error',
                                title: 'Gagal Upload!',
                                text: 'Gambar dari produk kamu gagal diupload.. Coba periksa internet kamu, lalu coba lagi'
                            });
                        } else if (result == 'tidakAda') {
                            $('.modalEditProduk').modal('hide');
                            $('.labelImgFileProdukEdit').val('Pilih gambar');
                            $('.imgFileProdukEdit').val(null);
                            Swal.fire({
                                icon: 'error',
                                title: 'Terjadi Error',
                                showConfirmButton: false
                            });
                            setTimeout(() => {
                                document.location.href = '/';
                            }, 2000);
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
                    if (result == 'berhasil') {
                        $('.namaProdukEdit, .imgFileProdukEdit, .kadaluarsaProdukEdit, .kadaluarsaProdukJamEdit, .deskripsiProdukEdit, .stokProdukEdit, .hargaAwalEdit').addClass('is-valid');
                        $('.modalEditProduk').modal('hide');
                        $('.labelImgFileProdukEdit').val('Pilih gambar');
                        $('.imgFileProdukEdit').val(null);
                        updateDataProduk();
                        Swal.fire({
                            icon: 'success',
                            title: 'Berhasil diedit!',
                            text: 'Produk kamu berhasil diedit..'
                        });
                    } else if (result == 'gagal') {
                        $('.modalEditProduk').modal('hide');
                        $('.labelImgFileProdukEdit').val('Pilih gambar');
                        $('.imgFileProdukEdit').val(null);
                        Swal.fire({
                            icon: 'error',
                            title: 'Gagal!',
                            text: 'Produk kamu gagal diedit.. Coba periksa internet kamu, lalu coba lagi'
                        });
                    } else if (result == 'tidakAda') {
                        $('.modalEditProduk').modal('hide');
                        $('.labelImgFileProdukEdit').val('Pilih gambar');
                        $('.imgFileProdukEdit').val(null);
                        Swal.fire({
                            icon: 'error',
                            title: 'Terjadi Error',
                            showConfirmButton: false
                        });
                        setTimeout(() => {
                            document.location.href = '/';
                        }, 2000);
                    }
                });

            }
        }
        $('.btnEditProduk').prop('disabled', false);
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

function searchProduk() {
    $('.cari').attr('readonly', true);
        $('.loaderOnSearch').removeClass('d-none');
        $('.loaderOnSearch').css({
            width: '10%',
            transition: '.6s'
        });
        let keyword = $('.cari').val();
        myAjax('/produk/cari', { keyword: keyword }, function (result) {
            $('.loaderOnSearch').css({
                width: '45%',
                transition: '1s'
            });
            result = JSON.parse(result);
            $('.backCari').off('click');
            if (result) {
                $('.loaderOnSearch').css({
                    width: '75%',
                    transition: '.6s'
                });
                let el = ``;
                Object.values(result).forEach(function (produk) {
                    if (produk.status == 1) {
                        el = el + `
                            <div class="col-sm-4 mb-3 produkLive" data-lala="${produk.id}">
                            <div class="card shadow-sm position-relative">
                                <img src="/img/upload/${produk.img}" class="cLive" width="100%" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${produk.nama_produk}</h5>
                                    <p class="card-text">RP. ${produk.harga_awal}</p>
                                    <p class="card-text"><strong>@${produk.nama_user.split(' ')[0]}</strong></p>
                                    
                                    <p class="card-text tanggal">${produk.created_at} - ${produk.kadaluarsa}</p>
                                    <button type="button" class="btn-auth btn-danger text-center berikanTawaran">Berikan Tawaranmu!</button>
                                </div>
                            </div>
                        </div>
                        `;
                        
                    } else if (produk.status == 2) {
                        el = el + `
                        <div class="col-sm-4 mb-3" data-lala="${produk.id}">
                            <div class="card shadow-sm">
                                <img src="/img/upload/${produk.img}" class="" width="100%" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${produk.nama_produk}</h5>
                                    <p class="card-text">RP. ${produk.harga_awal}</p>
                                    <p class="card-text tawar"><strong>Pelelang: ${produk.nama_user.split(' ')[0]}</strong></p>
                                    <p class="card-text tawar"><strong>Pemenang Lelang: ${produk.pemenang.split(' ')[0]}</strong></p>
                                    <p class="card-text tanggal"><strong>Tawaran Pemenang: RP. ${produk.tawaran_pemenang}</strong></p>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                });
                el = el + `<div class="col-12 text-center"><button type="button" class="btn-auth mx-auto btn-danger backCari">Kembali</button></div>`;
                $('.loaderOnSearch').css({
                    width: '100%',
                    transition: '1s'
                });

                $('.detailProduk').css({ opacity: 0, transform: 'translateY(-100px)' });
                clearInterval(window.x);
                clearInterval(window.cekKadaluarsaInterval);
                setTimeout(() => {
                    $('.hasilCari').removeClass('d-none');
                    $('.mainApp').addClass('d-none');
                    $('.detailProduk').addClass('d-none');
                }, 300);
                $('.resultOf').html('Hasil dari: "' + keyword + '"');
                $('.rowProdukPencarian').html(el);
                $('.backCari').on('click', function () {
                    $('.loaderOnSearch').removeClass('d-none');
                    $('.cari').val('');
                    $('.loaderOnSearch').css({
                        width: '25%',
                        transition: '1s'
                    });
                    setTimeout(function() {
                        $('.loaderOnSearch').css({
                            width: '50%'
                        });
                        $('html, body').animate({ scrollTop: "0" }, 400);
                    }, 300);
                    setTimeout(function() {
                        $('.loaderOnSearch').css({
                            width: '100%'
                        });

                        $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
                    }, 600);
                    setTimeout(() => {
                        $('.cari').attr('readonly', false);
                        $('.loaderOnSearch').addClass('d-none');
                        $('.loaderOnSearch').css({
                            width: '0%',
                            transition: '1s'
                        });
                        $('.mainApp').removeClass('d-none');
                        $('.hasilCari').addClass('d-none');
                        $('.detailProduk').addClass('d-none');
                    }, 2000);
                });
                setTimeout(() => {
                    $('.cari').attr('readonly', false);
                    $('.loaderOnSearch').addClass('d-none');
                    $('.loaderOnSearch').css({
                        width: '0%',
                        transition: '1s'
                    });
                }, 3000);

                // event for produk
                eventForProduk();
            } else {
                $('.loaderOnSearch').css({
                    width: '100%',
                    transition: '1s'
                });
                $('.hasilCari').removeClass('d-none');
                $('.mainApp').addClass('d-none');
                $('.resultOf').html('Hasil dari: "' + keyword + '"');
                $('.rowProdukPencarian').html('<div class="col-12"><h4 class="text-center mt-3">Maaf, produk yang kamu cari tidak ada :(</h4></div><div class="col-12"><h5 class="text-center mt-3">Silahkan coba cari dengan keyword yang lain..</h5></div><div class="col-12 text-center"><button type="button" class="btn-auth mx-auto btn-danger backCari">Kembali</button></div>');
                $('.backCari').on('click', function () {
                    $('.loaderOnSearch').removeClass('d-none');
                    $('.cari').val('');
                    $('.loaderOnSearch').css({
                        width: '25%',
                        transition: '1s'
                    });
                    setTimeout(function() {
                        $('.loaderOnSearch').css({
                            width: '50%'
                        });
                    }, 300);
                    setTimeout(function() {
                        $('.loaderOnSearch').css({
                            width: '100%'
                        });
                    }, 600);
                    setTimeout(() => {
                        $('.cari').attr('readonly', false);
                        $('.loaderOnSearch').addClass('d-none');
                        $('.loaderOnSearch').css({
                            width: '0%',
                            transition: '1s'
                        });
                        $('.mainApp').removeClass('d-none');
                        $('.hasilCari').addClass('d-none');
                        $('.detailProduk').addClass('d-none');
                    }, 2000);
                });
                setTimeout(() => {
                    $('.cari').attr('readonly', false);
                    $('.loaderOnSearch').addClass('d-none');
                    $('.loaderOnSearch').css({
                        width: '0%',
                        transition: '1s'
                    });
                }, 3000);
            }
        });
}

function detailProduk(lala) {
    $('.detailProduk .timerTawaran').html('');

    $('.backDP, .tombolBerikanAtauAmbil').off('click');
    $('.loaderOnSearch').removeClass('d-none');
    $('.loaderOnSearch').css({
        width: '10%',
        transition: '.6s'
    });
    myAjax('/produk/getOneProduk', { lala: lala, pass: 'A411MYPRODUK', live: 'live' }, function (result) { 
        result = JSON.parse(result);

        let produk = result.produk;
        $('.loaderOnSearch').css({
            width: '58%',
            transition: '.3s'
        });
        if (result.status == 'ada') {
            $('.loaderOnSearch').css({
                width: '100%',
                transition: '.6s'
            });

            // Siapkan halaman detail produk
            $('.imgDetailProduk img').attr('src', `/img/upload/${produk.img}`);
            $('.detailProduk .titlePage').html(`Mulai dari Rp ${produk.harga_awal}`);
            $('.detailProduk .namaProd').html(produk.nama_produk);
            $('.detailProduk .authorProduk').html(`By: ${produk.nama_user}`);
            $('.detailProduk .deskripsiDetailProduk').html(`${produk.deskripsi_produk}`);
            let hari, bulan, tahun, jam, menit, detik, timeS, selisih;

            // let pemisah = produk.kadaluarsa.split(' ');
            // let tanggalProduk = pemisah[0].split('-')[2],
            //     bulanProduk = pemisah[0].split('-')[1],
            //     tahunProduk = pemisah[0].split('-')[0],
            //     jamProduk = pemisah[1].split(':')[0],
            //     menitProduk = pemisah[1].split(':')[1],
            //     detikProduk = pemisah[1].split(':')[2];
            
            let timeP = new Date(produk.kadaluarsa).getTime();
            timeP = (timeP / 1000);
            
            let timer = ``;
            
            window.x = setInterval(() => {
                // tanggal = new Date().getDate();
                // bulan = new Date().getMonth() + 1;
                // tahun = new Date().getFullYear();
            
                // jam = new Date().getHours();
                // menit = new Date().getMinutes();
                // detik = new Date().getSeconds();
                timeS = new Date().getTime() / 1000;
                selisih = Math.round(timeP - timeS);

                if (selisih > (3600 * 24 * 30 * 12)) {
                    tahun = Math.floor(selisih / (3600 * 24 * 30 * 12));
                    // bulan = Math.floor(selisih / (3600 * 24 * 30)) - (tahun * 12);
                    // hari = Math.floor(selisih / (3600 * 24)) - (bulan * 30) - (tahun * 365);
                    // jam = Math.floor(selisih / 3600) - (hari * 24) - (bulan * 30 * 24) - (tahun * 365 * 24);
                    // menit = (selisih / 60) - (jam * 60) - (hari * 24 * 60) - (bulan * 30 * 24 * 60) - (tahun * 365 * 24 * 60);
                    // detik = (selisih - (menit * 60)) - (jam * 3600) - (hari * 24 * 3600) - (bulan * 30 * 24 * 3600) - (tahun * 365 * 24 * 3600);

                    // jam = (jam < 10) ? `0${jam}`: jam;
                    // menit = (menit < 10) ? `0${menit}` : menit;
                    // detik = (detik < 10) ? `0${detik}`: detik;
                    timer = `&plusmn; ${tahun} tahun lagi...`;
                } else if (selisih > (3600 * 24 * 30)) {
                    bulan = Math.floor(selisih / (3600 * 24 * 30));
                    // hari = Math.floor(selisih / (3600 * 24)) - (bulan * 30) + (Math.floor((selisih / (3600 * 24 * 30)) - bulan) * 30);
                    // jam = Math.floor(selisih / 3600) - (hari * 24) - (bulan * 30 * 24) + (Math.floor((selisih / (3600 * 24 * 30)) - bulan) * 30 * 24);
                    // menit = Math.floor((selisih / 60)) - (jam * 60) - (hari * 24 * 60) - (bulan * 30 * 24 * 60) + (Math.floor((selisih / (3600 * 24 * 30)) - bulan) * 30 * 24 * 60);
                    // detik = (selisih - (menit * 60)) - (jam * 3600) - (hari * 24 * 3600) - (bulan * 30 * 24 * 3600) + (Math.floor((selisih / (3600 * 24 * 30)) - bulan) * 30 * 24 * 3600);

                    // jam = (jam < 10) ? `0${jam}`: jam;
                    // menit = (menit < 10) ? `0${menit}` : menit;
                    // detik = (detik < 10) ? `0${detik}`: detik;
                    timer = `&plusmn; ${bulan} bln lagi..`;
                } else if (selisih > (3600 * 24)) {
                    hari = Math.floor(selisih / (3600 * 24));
                    // jam = Math.floor(selisih / 3600) - (hari * 24);
                    // menit = Math.floor((selisih / 60)) - (jam * 60) - (hari * 24 * 60);
                    // detik = (selisih - (menit * 60)) - (jam * 3600) - (hari * 24 * 3600);

                    // jam = (jam < 10) ? `0${jam}`: jam;
                    // menit = (menit < 10) ? `0${menit}` : menit;
                    // detik = (detik < 10) ? `0${detik}`: detik;
                    timer = `&plusmn; ${hari} hari lagi...`;
                } else if (selisih > 3600 && selisih < (3600 * 24)) {
                    jam = Math.round(selisih / 3600);
                    timer = `&plusmn; ${jam} jam lagi...`;

                } else if (selisih > 60 && selisih < 3600) {
                    menit = Math.floor(selisih / 60);
                    timer = `&plusmn; ${menit} mnt lagi...`;
                } else if (selisih < 60) {
                    if (selisih >= 0) 
                        timer = `&plusmn; ${selisih} dtk lagi...`;
                    else 
                        timer = `selesai`;
                }

                $('.detailProduk .timerTawaran').html(timer);
                if (timer == 'selesai') {
                    stopPenawaran(lala);
                }

            }, 1000);


            window.cekKadaluarsaInterval = setInterval(() => {
                myAjax('/produk/cekKadaluarsa', {pass: 'A411CeKk4l4dU4R5a', lala: lala, timeP: timeP}, function (response) {
                    response = JSON.parse(response);
                    let status = response.status, timeBaru = response.timePbaru;

                    if (status == 'berubah') {
                        timeP = timeBaru;
                    }
                });
            }, 30000);


            myAjax('/produk/getPenawar', { lala: lala, pass: 'A@4I1GETP3NAW4Rs' }, function (result) {
                result = JSON.parse(result);
                $('.kolomPenawar').html('');
                let status = result.status, data = result.dataTawarWithDataUser;
                if (status == 'berhasil') {
                    let dataTawarTeratas = data[0];
                    let el = ``;
                    let delay, i = 1;
                    Object.values(data).forEach(function (d) {
                        delay = 400 * i;
                        setTimeout(() => {
                            if (d == dataTawarTeratas) {
                                el = `
                                <div class="row justify-content-center mt-4 calonPemenang" data-email="${d.dataTawar.email_penawar}">
                                        <div class="col-2 text-right">
                                            <img src="/img/upload/${d.user.img}" alt="a" width="30" class="rounded-circle">
                                        </div>
                                        <div class="col-3 text-left mr-0 p-0">
                                            <div class="badgeUser pl-2">${d.user.username}</div>
                                        </div>
                                        <div class="col-2 ml-0">
                                            <img src="/img/king.png" alt="king">
                                        </div>
                                        <div class="col-5 text-right">
                                            <div class="badgeHarga text-left pl-3">Rp. ${d.dataTawar.tawaran}</div>
                                        </div>
                                    </div>
                                    <hr>
                                `;
                                // $('.kolomPenawar .calonPemenang').css('animation-delay', delay + 's');
                            } else {
                                el = `
                                    <div class="row justify-content-center mt-4 calon${i} calon2Pemenang">
                                        <div class="col-2 text-right">
                                            <img src="/img/upload/${d.user.img}" alt="a" width="30" class="rounded-circle">
                                        </div>
                                        <div class="col-5 text-left mr-0 p-0">
                                            <div class="badgeUser pl-2">${d.user.username}</div>
                                        </div>
                                        <div class="col-5 text-right">
                                            <div class="badgeHarga text-left pl-3">Rp. ${d.dataTawar.tawaran}</div>
                                        </div>
                                    </div>
                                    <hr>
                                `;
                            }

                            
                            $('.kolomPenawar').append(el);
                        }, delay);
                        if (i < data.length) {
                            i++;
                        }
                    });
                } else {
                    let el = `<h4 class="text-center" style="margin-top: 50%;">Belum ada penawar...</h4>`;
                    $('.kolomPenawar').html(el);
                }
                cekPenawarRealTime(data, lala);
            });

            if (produk.email_user == user.email) {
                $('.tombolBerikanAtauAmbil').data('aksi', 'ambil');
                $('.tombolBerikanAtauAmbil').html('Ambil Tawaranmu!');
            } else {
                $('.tombolBerikanAtauAmbil').data('aksi', 'tawar');
                $('.tombolBerikanAtauAmbil').html('Berikan Tawaranmu!');
            }
            

            $('.mainApp').addClass('d-none');
            $('.hasilCari').addClass('d-none');
            $('.livePage').addClass('d-none');
            $('.detailProduk').removeClass('d-none');
            setTimeout(() => {
                $('.detailProduk').css({opacity: 1, transform: 'translateY(0)'});                
            }, 100);
            $('.loaderOnSearch').addClass('d-none');
            $('.loaderOnSearch').css({
                width: '0%',
                transition: '.6s'
            });


            $('.tombolBerikanAtauAmbil').on('click', function () {
                let dataAksi = $(this).data('aksi');
                if (dataAksi == 'tawar') {
                    
                    (async () => {
                        let { value: tawaranPenawar } = await Swal.fire({
                            title: 'Masukkan Harga Tawaran Kamu',
                            inputLabel: 'Rp',
                            input: 'text',
                            inputAttributes: {
                                onKeyPress: 'return hanyaAngka(event);',
                                autocapitalize: 'off',
                                class: 'swal-input'
                            },
                            showCancelButton: true,
                            showConfirmButton: true,
                            confirmButtonText: 'Tawar!',
                            cancelButtonText: 'Batal',
                            // showLoaderOnConfirm: true,
                            inputValidator: (value) => {
                                if (!value) {
                                    return 'Kamu tidak bisa memberikan tawaran kosong!'
                                }
                            },
                            // willOpen: () => {
                            //     $('.swalInput').off('change');
                            //     $('.swalInput').on('change', hanyaAngka);
                            // },
                            // allowOutsideClick: () => !Swal.isLoading()
                        });

                        if (tawaranPenawar) {
                            let data = {
                                tawaranPenawar: tawaranPenawar,
                                HELLO: 'WORLD',
                                mylala: lala
                            };
                            myAjax('/produk/tawar', data, function (result) {
                                result = JSON.parse(result);
                                let status = result.status;

                                if (status == 'berhasil') {
                                    user = result.user;
                                    ubahDataUser();
                                    Swal.fire({
                                        icon: 'success', 
                                        title: 'Mantap!', 
                                        text: 'Tawaran kamu berhasil masuk! Semoga kamu menang!',
                                        confirmButtonText: 'OK',
                                    }).then(function (result) {
                                        if (result.isConfirmed) {
                                            $('html, body').animate({ scrollTop: "0" }, 400);
                                        }
                                    });
                                } else if(status == 'gagal') {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Gagal!',
                                        text: 'Tawaran yang kamu tawarkan belum masuk... Silahkan coba lagi.'
                                    });
                                } else if (status == 'dia authornya') { 
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Maaf..',
                                        text: 'Kamu adalah pelelang produk ini...'
                                    });
                                } else if (status == 'email fake dia') {
                                    Swal.fire({
                                        icon: 'error', 
                                        title: 'Kamu Menggunakan Email Yang Belum Terdaftar!', 
                                        text: 'Kamu akan terlogout secara automatis..',
                                        confirmButtonText: 'OK',
                                        allowOutsideClick: false
                                    }).then(function (result) {
                                        if (result.isConfirmed) {
                                            if (!$('.livePage').hasClass('d-none')) {
                                                logout('.livePage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                                            } else {
                                                logout('.webAppPage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                                            }
                                        }
                                    });
                                } else if (status == 'uangnya tidak cukup') {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Saldo tidak cukup!',
                                        confirmButtonText: 'OK'
                                    });
                                } else if (status == 'kurangduit') {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Tawaran yang kamu masukkan kurang dari harga awal produk ini',
                                        confirmButtonText: 'OK'
                                    });
                                }  else {
                                    Swal.fire({
                                        icon: 'info', 
                                        title: 'Kamu Sudah Menawar!', 
                                        text: 'Kamu tidak bisa memberi tawaran lagi. Silahkan saksikan proses lelang mu dengan mengeklik gambar produk yang kamu beri tawaran...',
                                        confirmButtonText: 'OK',
                                    }).then(function (result) {
                                        if (result.isConfirmed) {
                                            $('html, body').animate({ scrollTop: "0" }, 400);
                                        }
                                    });
                                }
                            });
                        }
                    })();
                } else if (dataAksi == 'ambil') {
                    Swal.fire({
                        icon: 'info',
                        title: 'Yakin kamu??',
                        text: 'Semakin lama kamu tunggu, semakin besar peluangmu untuk mendapatkan keuntungan yang besar',
                        showCancelButton: true,
                        cancelButtonText: 'tidak',
                        customClass: {
                            cancelButton: ['btn', 'btn-outline-warning']
                        },
                        preConfirm: () => {
                            clearInterval(window.vblCekPenawar);
                        }
                    }).then(function (result) {
                        clearInterval(window.vblCekPenawar);
                        if (result.isConfirmed) {
                            stopPenawaran(lala);
                        }
                    });;
                }
            });

            $('.backDP').on('click', function () {
                clearInterval(window.vblCekPenawar);
                setTimeout(() => {
                    $('.kolomPenawar').html('');
                }, 700);
                $('html, body').animate({ scrollTop: "0" }, 400);
                $('.loaderOnSearch').removeClass('d-none');
                $('.cari').val('');
                $('.loaderOnSearch').css({
                    width: '25%',
                    transition: '1s'
                });
                setTimeout(function() {
                    $('.loaderOnSearch').css({
                        width: '50%'
                    });
                }, 300);
                setTimeout(function() {
                    $('.loaderOnSearch').css({
                        width: '100%'
                    });
                    
                    $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
                }, 600);
                setTimeout(() => {
                    $('.cari').attr('readonly', false);
                    $('.loaderOnSearch').addClass('d-none');
                    $('.loaderOnSearch').css({
                        width: '0%',
                        transition: '1s'
                    });
                    $('.mainApp').removeClass('d-none');
                    $('.hasilCari').addClass('d-none');
                    $('.detailProduk').addClass('d-none');
                }, 2000);
                clearInterval(window.x);
                clearInterval(window.cekKadaluarsaInterval);
            });
        } else {
            $('.loaderOnSearch').css({
                width: '100%',
                transition: '.6s'
            });
            Swal.fire({
                icon: 'error',
                title: '',
                text: 'Pelelangan ini sudah selesai. Sayang sekali.. Kamu kalah cepat!'
            });
            $('.loaderOnSearch').addClass('d-none');
            $('.loaderOnSearch').css({
                width: '0%',
                transition: '.3s'
            });
            
            loadDataAllProdukLive();
            loadDataKelolaProduk();
            if (produkLive && produkNotLiveAwal) {
                loadDataProduk('semua');
            } else {
                if (produkNotLiveAwal) {
                    loadDataProduk('cumaNotLive');
                } else if (produkLive) {
                    loadDataProduk('cumaLive');
                } else {
                    loadDataProduk('tidakAda');
                }
            }
        }
        

    });

}


function logout(kelas, text = null) {
    myAjax('/auth/logout', { pass: 'A411LOGOUT' }, function (result) {
        if (result == 'berhasil') {
            if ($('.mainApp').hasClass('d-none'))
                backFromCari();
            if (!$('.detailProduk').hasClass('d-none')) 
                backFromDetailProduk();
            
            $('.toadmin').off('click');
            $('.contoadmin').remove();
            loading("login");
            closeLoader(8000, function () {
                user = undefined;
                $(kelas).css('opacity', 0);
                $(kelas).addClass('d-none');
                setTimeout(() => {
                    ubahDataUser();
                    loadDataAllProdukLive();
                    if (produkLive && produkNotLiveAwal) {
                        loadDataProduk('semua');
                    } else {
                        if (produkNotLiveAwal) {
                            loadDataProduk('cumaNotLive');
                        } else if (produkLive) {
                            loadDataProduk('cumaLive');
                        } else {
                            loadDataProduk('tidakAda');
                        }
                    }
                    $('.loginPageAsli').removeClass('d-none');
                    setTimeout(() => {
                        $('.loginPageAsli').css({ opacity: 1, transform: 'scale(1)' });
                        slidingImage('login');
                        if (text) {
                            notifikasi(true, text, 'warning');
                        } else {
                            notifikasi(true, 'Selamat, kamu berhasil logout. Aku berharap kamu mengunjungi aku lagi.. Terima kasih ya.. <i class= "far fa-grin-wink text-white" ></i> ', 'warning');
                        }
                        // Refresh styleWebInterval
                        refreshStyleWebInterval();
                    }, 200);
                    setTimeout(() => {
                        $('.emailLogin').focus();
                    }, 1000);
                    setTimeout(function () {
                        notifikasi(false);
                    }, 5000);
                }, 7000);
            });
        } else {
            document.location.href = '/';
        } //else if (result == "gagal") {
        //     notifikasi(true, 'Maaf... Kamu gagal untuk logout. Cek internet kamu lalu coba lagi..', 'danger');
        //     setTimeout(function () {
        //         notifikasi(false);
        //     }, 5000);
        // }
    });
}

function cekPenawarRealTime(dataLama, lala) {
    window.vblCekPenawar = setInterval(() => {
        myAjax('/produk/getPenawar', { lala: lala, pass: 'A@4I1GETP3NAW4Rs' }, function (result) {
            result = JSON.parse(result);

            let status = result.status, dataBaru = result.dataTawarWithDataUser;
            if (status == 'berhasil') {
                if (dataLama.length != dataBaru.length) {
                    $('.kolomPenawar').html('');
                    let dataTawarTeratas = dataBaru[0];
                    let el = ``;
                    let delay, i = 1;
                    Object.values(dataBaru).forEach(function (d) {
                        delay = 400 * i;
                        setTimeout(() => {
                            if (d == dataTawarTeratas) {
                                el = `
                                <div class="row justify-content-center mt-4 calonPemenang">
                                        <div class="col-2 text-right">
                                            <img src="/img/upload/${d.user.img}" alt="a" width="30" class="rounded-circle">
                                        </div>
                                        <div class="col-3 text-left mr-0 p-0">
                                            <div class="badgeUser pl-2">${d.user.username}</div>
                                        </div>
                                        <div class="col-2 ml-0">
                                            <img src="/img/king.png" alt="king">
                                        </div>
                                        <div class="col-5 text-right">
                                            <div class="badgeHarga text-left pl-3">Rp. ${d.dataTawar.tawaran}</div>
                                        </div>
                                    </div>
                                    <hr>
                                `;
                                // $('.kolomPenawar .calonPemenang').css('animation-delay', delay + 's');
                            } else {
                                el = `
                                    <div class="row justify-content-center mt-4 calon${i} calon2Pemenang">
                                        <div class="col-2 text-right">
                                            <img src="/img/upload/${d.user.img}" alt="a" width="30" class="rounded-circle">
                                        </div>
                                        <div class="col-5 text-left mr-0 p-0">
                                            <div class="badgeUser pl-2">${d.user.username}</div>
                                        </div>
                                        <div class="col-5 text-right">
                                            <div class="badgeHarga text-left pl-3">Rp. ${d.dataTawar.tawaran}</div>
                                        </div>
                                    </div>
                                    <hr>
                                `;
                            }

                            
                            $('.kolomPenawar').append(el);
                        }, delay);
                        if (i < dataBaru.length) {
                            i++;
                        }
                    });

                    dataLama = dataBaru;
                }
            } else if (status == 'produkTidakLive') {
                clearInterval(window.vblCekPenawar);
                clearInterval(window.vblCekPenawar);
                clearInterval(window.vblCekPenawar);
                stopPenawaran(lala);
            } else if (status == 'tidakAdaProduk') {
                clearInterval(window.vblCekPenawar);
                clearInterval(window.vblCekPenawar);
                clearInterval(window.vblCekPenawar);
                stopPenawaran(lala);
            } else {
                let el = `<h4 class="text-center" style="margin-top: 50%;">Belum ada penawar...</h4>`;
                $('.kolomPenawar').html(el);
            }
            
        });
    }, 500);
}

function stopPenawaran(lala, userLogged) {
    clearInterval(window.vblCekPenawar);
    clearInterval(window.x);
    clearInterval(window.cekKadaluarsaInterval);
    let data = { lala: lala, pass: 'AM1RSt0PP3naW4RAN'};
    myAjax('/produk/stopPenawaran', data, function (result) {
        result = JSON.parse(result);

        let status = result.status;

        if (status == 'success') {
            produkLive = result.produkLive;
            produkNotLiveAwal = result.produkNotLive;
            user = result.user;
            Swal.fire({
                title: 'Pelelangan Produk Ini berakhir...',
                width: 600,
                padding: '3em',
                backdrop: `
                    url("/img/fireworks.jpg")
                    cover
                    no-repeat
                `,
                allowOutsideClick: false, 
                confirmButtonText: 'OK'
            }).then(function (response) {
                if (response.isConfirmed) {
                    Swal.fire({
                        title: (result.userPemenang.email == user.email) ? 'Kamu Menang' : result.userPemenang.username,
                        text: (result.userPemenang.email == user.email) ? 'Kamu pemenang lelang produk ini. Selamat!!': 'Sebagai pemenang lelang produk ini. Selamat!! ',
                        imageUrl: `/img/upload/${result.userPemenang.img}`,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'icon user',
                        imageClass: 'rounded-circle',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false
                    }).then(function (response) {
                        if (response.isConfirmed) {
                            updateDataProduk();
                            ubahDataUser();
                            clearInterval(window.vblCekPenawar);
                            $('html, body').animate({ scrollTop: "0" }, 400);
                            $('.loaderOnSearch').removeClass('d-none');
                            $('.cari').val('');
                            $('.loaderOnSearch').css({
                                width: '25%',
                                transition: '1s'
                            });
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '50%'
                                });
                            }, 300);
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '100%'
                                });
                                
                                $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
                            }, 600);
                            setTimeout(() => {
                                $('.cari').attr('readonly', false);
                                $('.loaderOnSearch').addClass('d-none');
                                $('.loaderOnSearch').css({
                                    width: '0%',
                                    transition: '1s'
                                });
                                $('.mainApp').removeClass('d-none');
                                $('.hasilCari').addClass('d-none');
                                $('.detailProduk').addClass('d-none');
                            }, 2000);
                            clearInterval(window.x);
                            clearInterval(window.cekKadaluarsaInterval);
                        }
                    });

                }
            });
        } else if (status == 'kadaluarsa') {
            Swal.fire({
                title: 'Pelelangan Produk Ini berakhir...',
                width: 600,
                padding: '3em',
                backdrop: `
                    url("/img/fireworks.jpg")
                    cover
                    no-repeat
                `,
                allowOutsideClick: false, 
                confirmButtonText: 'OK'
            }).then(function (response) {
                if (response.isConfirmed) {
                    produkLive = result.produkLive;
                    produkNotLiveAwal = result.produkNotLive;
                    user = result.user;
                    Swal.fire({
                        title: 'Tidak Ada Pemenang',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            updateDataProduk();
                            ubahDataUser();
                            clearInterval(window.vblCekPenawar);
                            $('html, body').animate({ scrollTop: "0" }, 400);
                            $('.loaderOnSearch').removeClass('d-none');
                            $('.cari').val('');
                            $('.loaderOnSearch').css({
                                width: '25%',
                                transition: '1s'
                            });
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '50%'
                                });
                            }, 300);
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '100%'
                                });
                                
                                $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
                            }, 600);
                            setTimeout(() => {
                                $('.cari').attr('readonly', false);
                                $('.loaderOnSearch').addClass('d-none');
                                $('.loaderOnSearch').css({
                                    width: '0%',
                                    transition: '1s'
                                });
                                $('.mainApp').removeClass('d-none');
                                $('.hasilCari').addClass('d-none');
                                $('.detailProduk').addClass('d-none');
                            }, 2000);
                            clearInterval(window.x);
                            clearInterval(window.cekKadaluarsaInterval);
                        }
                    });

                }
            });
        } else if (status == 'dihentikan') {
            Swal.fire({
                title: 'Pelelangan Produk Ini berakhir...',
                width: 600,
                padding: '3em',
                backdrop: `
                    url("/img/fireworks.jpg")
                    cover
                    no-repeat
                `,
                allowOutsideClick: false, 
                confirmButtonText: 'OK'
            }).then(function (response) {
                if (response.isConfirmed) {
                    produkLive = result.produkLive;
                    produkNotLiveAwal = result.produkNotLive;
                    user = result.user;
                    Swal.fire({
                        title: 'Pelelang menghentikan lelang produk ini..',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            updateDataProduk();
                            ubahDataUser();
                            clearInterval(window.vblCekPenawar);
                            $('html, body').animate({ scrollTop: "0" }, 400);
                            $('.loaderOnSearch').removeClass('d-none');
                            $('.cari').val('');
                            $('.loaderOnSearch').css({
                                width: '25%',
                                transition: '1s'
                            });
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '50%'
                                });
                            }, 300);
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '100%'
                                });
                                
                                $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
                            }, 600);
                            setTimeout(() => {
                                $('.cari').attr('readonly', false);
                                $('.loaderOnSearch').addClass('d-none');
                                $('.loaderOnSearch').css({
                                    width: '0%',
                                    transition: '1s'
                                });
                                $('.mainApp').removeClass('d-none');
                                $('.hasilCari').addClass('d-none');
                                $('.detailProduk').addClass('d-none');
                            }, 2000);
                            clearInterval(window.x);
                            clearInterval(window.cekKadaluarsaInterval);
                        }
                    });

                }
            });
        } else if (status == 'produkDihapus') {
            Swal.fire({
                title: 'Pelelangan Produk Ini berakhir...',
                width: 600,
                padding: '3em',
                backdrop: `
                    url("/img/fireworks.jpg")
                    cover
                    no-repeat
                `,
                allowOutsideClick: false, 
                confirmButtonText: 'OK'
            }).then(function (response) {
                if (response.isConfirmed) {
                    produkLive = result.produkLive;
                    produkNotLiveAwal = result.produkNotLive;
                    user = result.user;
                    Swal.fire({
                        title: 'Produk dihapus..',
                        text: 'Admin menghapus produk ini.. Silahkan hubungi admin untuk mengetahui informasi ini lebih lanjut..',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            updateDataProduk();
                            ubahDataUser();
                            clearInterval(window.vblCekPenawar);
                            $('html, body').animate({ scrollTop: "0" }, 400);
                            $('.loaderOnSearch').removeClass('d-none');
                            $('.cari').val('');
                            $('.loaderOnSearch').css({
                                width: '25%',
                                transition: '1s'
                            });
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '50%'
                                });
                            }, 300);
                            setTimeout(function() {
                                $('.loaderOnSearch').css({
                                    width: '100%'
                                });
                                
                                $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
                            }, 600);
                            setTimeout(() => {
                                $('.cari').attr('readonly', false);
                                $('.loaderOnSearch').addClass('d-none');
                                $('.loaderOnSearch').css({
                                    width: '0%',
                                    transition: '1s'
                                });
                                $('.mainApp').removeClass('d-none');
                                $('.hasilCari').addClass('d-none');
                                $('.detailProduk').addClass('d-none');
                            }, 2000);
                            clearInterval(window.x);
                            clearInterval(window.cekKadaluarsaInterval);
                        }
                    });

                }
            });
        }
    });
}


function createShortcutLinkRandom() {
    $('.shortcut-cari p').html('');
    $('.shortcut-cari p').data('shortcut', 'blank');
    if (produkLive != null) {
        let batasan = 0;
        if (produkLive.length > 4)
            batasan = 4;
        else 
            batasan = produkLive.length;
        let acakSebelum = 0;
        for (let i = 0; i < batasan; i++) {
            let acak = Math.round(Math.random() * (Object.values(produkLive).length - 1));
            if (i != 0) {
                while (Object.values(produkLive)[acak] == Object.values(produkLive)[acakSebelum]) {
                    acak = Math.round(Math.random() * (Object.values(produkLive).length - 1));
                }
            }
            let shrct = Object.values(produkLive)[acak].nama_produk;
            let shrctData = shrct;
            shrct = (shrct.split(' ').length > 1) ? shrct.split(' ') : shrct;
            if(Array.isArray(shrct))
                shrct = shrct[0] + " " + shrct[1].substring(0, 3) + '..';
            $(`.shrct-${i+1}`).data('shortcut', shrctData);
            $(`.shrct-${i + 1}`).html(shrct);
            acakSebelum = acak;
        }
        $('.shortcut-cari p').off('click');
        $('.shortcut-cari p').on('click', function () {
            console.log('masuk');
            console.log('Link  ' + $(this).html()+ ' => ' + $(this).data('shortcut'));
            $('.cari').val($(this).data('shortcut'));
            searchProduk();
        });
    }
}

function slidingImage(tipe) {
    if (tipe == 'daftar') {
        window.slidingImgIntervalDaftar = setInterval(() => {
            let style = {
                transform: 'translateX(-200px)',
                opacity: 0
            };
            $('.loginPage .columnImg img').css(style);
            setTimeout(() => {
                let img = $('.loginPage .columnImg img');
                let indicatorLama = $('.loginPage .columnImg .myIndicators.indicatorActive');

                img.css('transform', 'translateX(200px)');

                if (img.data('slide') == 1) {
                    img.attr('src', '/img/orgDengerMusik.png');
                    img.data('slide', 2);
                    $('.loginPage .columnImg .myIndicators[data-slide=2]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                } else if (img.data('slide') == 2) {
                    img.attr('src', '/img/orgNaikBola.png');
                    img.data('slide', 3);
                    $('.loginPage .columnImg .myIndicators[data-slide=3]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                } else if (img.data('slide') == 3) {
                    img.attr('src', '/img/roketDaftar2.png');
                    img.data('slide', 1);
                    $('.loginPage .columnImg .myIndicators[data-slide=1]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                }
            }, 1000);
        }, 4500);
    } else if (tipe == 'login') {
        window.slidingImgIntervalLogin = setInterval(() => {
            let style = {
                transform: 'translateX(200px)',
                opacity: 0
            };
            $('.loginPageAsli .columnImg img').css(style);
            setTimeout(() => {
                let img = $('.loginPageAsli .columnImg img');
                let indicatorLama = $('.loginPageAsli .columnImg .myIndicators.indicatorActive');

                img.css('transform', 'translateX(-200px)');

                if (img.data('slide') == 1) {
                    img.attr('src', '/img/orgNaikMotor.png');
                    img.data('slide', 2);
                    $('.loginPageAsli .columnImg .myIndicators[data-slide=2]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                } else if (img.data('slide') == 2) {
                    img.attr('src', '/img/orgBelajar.png');
                    img.data('slide', 3);
                    $('.loginPageAsli .columnImg .myIndicators[data-slide=3]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                } else if (img.data('slide') == 3) {
                    img.attr('src', '/img/metaverseLogin2.png');
                    img.data('slide', 1);
                    $('.loginPageAsli .columnImg .myIndicators[data-slide=1]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                }
            }, 1000);
        }, 4500);
    } else if (tipe == 'loginAdmin') {
        window.slidingImgIntervalLogin = setInterval(() => {
            let style = {
                transform: 'translateX(200px)',
                opacity: 0
            };
            $('.loginPageAdmin .columnImg img').css(style);
            setTimeout(() => {
                let img = $('.loginPageAdmin .columnImg img');
                let indicatorLama = $('.loginPageAdmin .columnImg .myIndicators.indicatorActive');

                img.css('transform', 'translateX(-200px)');

                if (img.data('slide') == 1) {
                    img.attr('src', '/img/orgNaikMotor.png');
                    img.data('slide', 2);
                    $('.loginPageAdmin .columnImg .myIndicators[data-slide=2]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                } else if (img.data('slide') == 2) {
                    img.attr('src', '/img/orgBelajar.png');
                    img.data('slide', 3);
                    $('.loginPageAdmin .columnImg .myIndicators[data-slide=3]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                } else if (img.data('slide') == 3) {
                    img.attr('src', '/img/metaverseLogin2.png');
                    img.data('slide', 1);
                    $('.loginPageAdmin .columnImg .myIndicators[data-slide=1]').addClass('indicatorActive');
                    setTimeout(() => {
                        indicatorLama.removeClass('indicatorActive');
                        img.css({transform: 'translateX(0)', opacity: 1});
                    }, 500);
                }
            }, 1000);
        }, 4500);
    }
}


function clearSlidingImage(tipe) {
    if (tipe == 'daftar') {
        clearInterval(window.slidingImgIntervalDaftar);
    } else if (tipe == 'login') {
        clearInterval(window.slidingImgIntervalLogin);
    }
}

function ambilDataDaerahIndonesia(tipe = null) {
    let kelasProvinsi,
        kelasRegencies,
        kelasDistricts,
        kelasVillages,
        kelasLoader;
    if (tipe == 'profile') {
        kelasProvinsi = '.provincesProf';
        kelasRegencies = '.regenciesProf';
        kelasDistricts = '.districtsProf';
        kelasVillages = '.villagesProf';
        kelasLoader = '.loaderApiDaerahProf';
    } else {
        kelasProvinsi = '.provinces';
        kelasRegencies = '.regencies';
        kelasDistricts = '.districts';
        kelasVillages = '.villages';
        kelasLoader = '.loaderApiDaerah';
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

        $(`${kelasProvinsi}`).addClass('activeSelectLokasi');
        $(`${kelasLoader}`).removeClass('animationForLoaderApi');

        $(`${kelasProvinsi}`).on('change', function () {
            $(`${kelasRegencies}`).off('change');
            $(`${kelasProvinsi}, ${kelasRegencies}, ${kelasDistricts}, ${kelasVillages}`).prop('disabled', true);
            $(`${kelasLoader}`).addClass('animationForLoaderApi');
            if (tipe == 'profile') {
                $('.checktoedit').prop('disabled', true);
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
                    nextSelectEl.removeClass('d-none');
                    response = JSON.parse(response);
                    $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                    if (tipe == 'profile') {
                        $('.checktoedit').prop('disabled', false);
                    }
                    setTimeout(() => {
                        $(`${kelasRegencies}`).addClass('activeSelectLokasi');
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
                        if (tipe == 'profile') {
                            $('.checktoedit').prop('disabled', true);
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
                                nextSelectEl.removeClass('d-none');
                                result = JSON.parse(result);
                                $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                                if (tipe == 'profile') {
                                    $('.checktoedit').prop('disabled', false);
                                }
                                setTimeout(() => {
                                    $(kelasDistricts).addClass('activeSelectLokasi');
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
                                    if (tipe == 'profile') {
                                        $('.checktoedit').prop('disabled', true);
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
                                            nextSelectEl.removeClass('d-none');
                                            result = JSON.parse(result);
                                            $(`${kelasLoader}`).removeClass('animationForLoaderApi');
                                            if (tipe == 'profile') {
                                                $('.checktoedit').prop('disabled', false);
                                            }
                                            setTimeout(() => {
                                                $(kelasVillages).addClass('activeSelectLokasi');
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


function getTheNextProdukNotLive() {

    let lengthRowNotLive = $('.rowLelangAwal').children().children().length,
        elNotLiveNext = ``,
        myLength = (produkNotLiveAwal.length > (lengthRowNotLive + 4)) ? (lengthRowNotLive + 4) : produkNotLiveAwal.length;
    
    for (let i = lengthRowNotLive; i < myLength; i++) {
        elNotLiveNext = elNotLiveNext + `
                    <div class="col-6 mb-3" data-lala="${produkNotLiveAwal[i].id}">
                        <div class="card shadow-sm">
                            <img src="/img/upload/${produkNotLiveAwal[i].img}" class="" width="100%" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${produkNotLiveAwal[i].nama_produk}</h5>
                                <p class="card-text">RP. ${produkNotLiveAwal[i].harga_awal}</p>
                                <p class="card-text tawar"><strong>Pelelang: ${produkNotLiveAwal[i].nama_user.split(' ')[0]}</strong></p>
                                <p class="card-text tawar"><strong>Pemenang Lelang: ${produkNotLiveAwal[i].pemenang.split(' ')[0]}</strong></p>
                                <p class="card-text tanggal"><strong>Tawaran Pemenang: RP. ${produkNotLiveAwal[i].tawaran_pemenang}</strong></p>
                            </div>
                        </div>
                    </div>
                `;
    }
    // elNotLiveNext = `<div class="myConProdukNotLive row">${elNotLiveNext}</div>`;
    $('.rowLelangAwal').append(elNotLiveNext);

    // setTimeout(() => {
    //     $('.myConProdukNotLive .card').addClass('produkNotLiveMuncul');
    // }, 1000);

    // let nomorUser = $('.firstNotLive').data('lala') + 1;
    // let elNotLiveAwal = $('.rowLelangAwal').html();
    // let myLength = (produkNotLiveAwal.length > (nomorUser + 4)) ? (nomorUser + 4) : produkNotLiveAwal.length;
    // let elNotLiveNext = ``;
    
    
    
}

function alertNotSignin() {
    let fire = {
        icon: 'info',
        title: 'Login dulu ya...',
        text: 'Kamu harus login terlebih dahulu jika ingin menggunakan fitur ini',
        didClose: function () {
            $('#tambahProdukModal').modal('hide');
            if ($('.mainApp').hasClass('d-none')) 
                backFromCari();
            // document.location.href = '/';
            // loading('login');
            // myAjax('/auth/logout', { pass: 'A411LOGOUT' }, function (result) {
            //     if (result == 'berhasil') {
            //         closeLoader(1000, function () {
            //             $('.webAppPage').css('opacity', 0);
            //             $('.webAppPage').addClass('d-none');
            //             setTimeout(function() {
            //                 $('.loginPageAsli').removeClass('d-none');
            //                 setTimeout(() => {
            //                     $('.loginPageAsli').css({ opacity: 1, transform: 'scale(1)' });
            //                     slidingImage('login');
            //                 }, 200);
            //                 setTimeout(() => {
            //                     $('.emailLogin').focus();
            //                 }, 1000);
            //             }, 0);
            //         });
            //     } else {
            //         document.location.href = '/';
            //     }
            // });
            if (!$('.livePage').hasClass('d-none')) {
                logout('.livePage', 'Silahkan login terlebih dahulu untuk mendapatkan seluruh fitur MasakanRumahPedia');
            } else {
                logout('.webAppPage', 'Silahkan login terlebih dahulu untuk mendapatkan seluruh fitur MasakanRumahPedia');
            }
        }
    };
    Swal.fire(fire);
}


function backFromCari() {
    $('.loaderOnSearch').removeClass('d-none');
    $('.cari').val('');
    $('.loaderOnSearch').css({
        width: '25%',
        transition: '1s'
    });
    setTimeout(function() {
        $('.loaderOnSearch').css({
            width: '50%'
        });
        $('html, body').animate({ scrollTop: "0" }, 400);
    }, 300);
    setTimeout(function() {
        $('.loaderOnSearch').css({
            width: '100%'
        });

        $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
    }, 600);
    setTimeout(() => {
        $('.cari').attr('readonly', false);
        $('.loaderOnSearch').addClass('d-none');
        $('.loaderOnSearch').css({
            width: '0%',
            transition: '1s'
        });
        $('.mainApp').removeClass('d-none');
        $('.hasilCari').addClass('d-none');
        $('.detailProduk').addClass('d-none');
    }, 2000);
}

function refreshStyleWebInterval() {
    window.styleWebInterval = setInterval(() => {
        
        if (user != undefined) {
            updateDataProduk();
            $('.muatLagi, .shortcut-cari p, .tambahProduk').off('click');

            $('.muatLagi').on('click', function () {
                if (user == null) {
                    alertNotSignin();
                    return;
                }
                if (produkNotLiveAwal.length > $('.rowLelangAwal .col-6').length) {
                    getTheNextProdukNotLive();

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Produk Sudah Terload Semua..',
                        text: 'Tunggu beberapa jam mungkin produk member lain atau produkmu sudah ada yang terjual.'
                    });
                }
            });

            createShortcutLinkRandom();
            cekApakahAdmin(false);
            ubahDataUser();
            // console.log(produkNotLiveAwal);
            clearInterval(window.styleWebInterval);
        } else {
            $('.muatLagi, .tambahProduk').off('click');
            $('.muatLagi').on('click', function () {
                alertNotSignin();
                return;
            });
            $('.tambahProduk').on('click', function () {
                alertNotSignin();
                return;
            });
        }
    }, 100);
}


function cekApakahAdmin(verified) {
    if (!verified) {
        myAjax('/admin/verificate', { pass: '4A11V3r1v!ed4dM!n' }, function (result) {
            if (result == 'success') {
                let el = `
                    <div class="row contoadmin">
                        <div class="col">
                            <a class="dropdown-item toadmin" href="#"><i class="fas fa-user-cog"></i> Admin</a>
                        </div>
                    </div>
                `;
                $(el).insertBefore('.logout');
                $('.toadmin').off('click');
                $('.toadmin').on('click', function () {
                    if (!$('.detailProduk').hasClass('d-none')) {
                        backFromDetailProduk();
                    } else if (!$('.hasilCari').hasClass('d-none')) 
                        backFromCari();

                    Swal.fire({
                        title: 'Memuat Halaman...',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        didOpen: function () {
                            Swal.showLoading();
                            let data = {
                                pass: 'A4114ddm1nnSS'
                            };
                            myAjax('/admin/loadPage', data, function (result) {
                                result = JSON.parse(result);
                                if (result.status == 'andaAdmin') {
                                    Swal.close();
                                    document.location.href = `/admin/home/${result.token}/${result.isLi}`
                                } else if (result.status == 'andaBukanAdmin') {
                                    Swal.close();
                                    notifikasi(true, 'Anda bukan seorang admin..', 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                        document.location.href = '/';
                                    }, 3000);
                                } else if (result.status == 'userFake') {
                                    Swal.close();
                                    notifikasi(true, '<strong>Kamu menggunakan email yang belum terdaftar!</strong> Kamu akan terlogout secara automatis.. Silahkan kamu login terlebih dahulu..', 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                        if (!$('.livePage').hasClass('d-none')) {
                                            logout('.livePage', 'Silahkan kamu login terlebih dahulu..');
                                        } else {
                                            logout('.webAppPage', 'Silahkan kamu login terlebih dahulu..');
                                        }
                                    }, 6500);
                                } else if (result.status == 'gagal') {
                                    Swal.close();
                                    notifikasi(true, 'Kamu gagal memuat halaman admin.. Cek internet kamu lalu coba lagi ya...', 'danger');
                                    setTimeout(() => {
                                        notifikasi(false);
                                    }, 6500);
                                }
                            });
                        }
                    });
                });
            } else if (result == 'bukanAdmin') { 
                $('.toadmin').off('click');
                $('.contoadmin').remove();
            } else if (result == 'unregistered') {
                Swal.fire({
                    icon: 'error', 
                    title: 'Kamu Menggunakan Email Yang Belum Terdaftar!', 
                    text: 'Kamu akan terlogout secara automatis..',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                }).then(function (result) {
                    if (result.isConfirmed) {
                        if (!$('.livePage').hasClass('d-none')) {
                            logout('.livePage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                        } else {
                            logout('.webAppPage', 'Silahkan kamu login terlebih dahulu.. Jika kamu belum punya akun, silahkan kamu daftar terlebih dahulu..');
                        }
                    }
                });
            }
        });
    }
}


function backFromDetailProduk() {
    updateDataProduk();
    clearInterval(window.vblCekPenawar);
    setTimeout(() => {
        $('.kolomPenawar').html('');
    }, 700);
    $('html, body').animate({ scrollTop: "0" }, 400);
    $('.loaderOnSearch').removeClass('d-none');
    $('.cari').val('');
    $('.loaderOnSearch').css({
        width: '25%',
        transition: '1s'
    });
    setTimeout(function() {
        $('.loaderOnSearch').css({
            width: '50%'
        });
    }, 300);
    setTimeout(function() {
        $('.loaderOnSearch').css({
            width: '100%'
        });
        
        $('.detailProduk').css({opacity: 0, transform: 'translateY(-100px)'});
    }, 600);
    setTimeout(() => {
        $('.cari').attr('readonly', false);
        $('.loaderOnSearch').addClass('d-none');
        $('.loaderOnSearch').css({
            width: '0%',
            transition: '1s'
        });
        $('.mainApp').removeClass('d-none');
        $('.hasilCari').addClass('d-none');
        $('.detailProduk').addClass('d-none');
    }, 2000);
    clearInterval(window.x);
    clearInterval(window.cekKadaluarsaInterval);
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

function showIconProsesMemuat(kelas, kelasTambahanChangeColor = null) {
    $(kelas).css({ opacity: 1 }).removeClass('fa-1x').addClass('fa-2x');
    if (kelasTambahanChangeColor) {
        $(kelasTambahanChangeColor).css('opacity', 1);
        changeColorInterval(`${kelas}, ${kelasTambahanChangeColor}`);
    } else
        changeColorInterval(kelas);
}

function hideIconProsesMemuat(kelas, kelasTambahanChangeColor = null) {
    $(kelas).css({ opacity: 0}).removeClass('fa-2x').addClass('fa-1x');
    if (kelasTambahanChangeColor) {
        $(kelasTambahanChangeColor).css('opacity', 0);
    }
    clearInterval(window.vblChangeColorInt);
}
// function myHash(input) {
//     let kata = input.split("");

//     kata.forEach(function (huruf) {
        
//         if (huruf == 'a') {
            
//         }
//     });
// }
// Tutup MyFunctions