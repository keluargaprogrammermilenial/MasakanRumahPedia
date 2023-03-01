<div class="container webAppPage pt-3 d-none">
    <div class="loaderOnSearch position-fixed fixed-top d-none"></div>
    <div class="row myNavWeb">
        <div class="col-md-1 text-center logo">
            <img src="/img/mrpediaicon.svg" width="50px" alt="">
        </div>
        <div class="col-md-6">
            <div class="row rowSearch">
                <div class="col-sm-12 search">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control cari myInput" placeholder="Cari" aria-label="Cari" aria-describedby="cari">
                        <div class="input-group-prepend">
                            <span class="input-group-text cari-icon" id="cari"><i class="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-2 d-none conCart position-relative">
                    <div class="conCart2 position-absolute conCartHp tambahProduk" data-toggle="modal" data-target="#tambahProdukModal">
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="vertical-lineHp position-absolute d-inline-block"></div>
                </div>
                <!-- <div class="col-2 d-none dDmenuHp colLine">
                    <div class="row">
                        <div class="col">
                            <div class="conSaldoHp position-relative">
                                <div class="overlay-dari-tengah position-absolute"></div>
                                <p class="saldo mt-2 text-left"></p>
                            </div>
                        </div>
                    </div>

                    
                </div> -->
                <div class="col-2 d-none position-relative dDmenuHp colfotoP">
                    <div class="conFotoP ml-4">
                        <img src="/img/default.svg" width="27px" class="fotoP" alt="profile">
                    </div>
                    <div class="position-absolute">
                        <div class="position-relative mydropdown-menu2Hp p-3 text-center">
                            <img src="/img/icon/top_up.gif" class="position-absolute" width="40%" alt="top_up gif">
                            <div class="position-absolute conTopUp">
                                <button class="btn-auth btn-danger text-center topUp">Top Up Saldo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 d-none position-relative dDmenuHp">
                    <div class="row">
                        <div class="col">
                            <div class="conMenu">
                                <img src="/img/menu.svg " alt="menu" width="17px" class="mymenu">
                            </div>
                        </div>
                    </div>




                    <div class="mydropdown-menuHp position-absolute mt-3">
                        <div class="row">
                            <div class="col">
                                <a class="dropdown-item dropItemUser" href="#"></a>
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>

                        <div class="row">
                            <div class="col">
                                <a class="dropdown-item saldo conSaldoHp m-0" href="#"><i class="fas fa-user-circle"></i></a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <a class="dropdown-item profile" href="#"><i class="fas fa-user-circle"></i> Profile</a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <a class="dropdown-item kelolaProduk" href="#"><i class="fas fa-cog"></i> Kelola produk</a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <a class="dropdown-item logout" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row text-left shortcut-cari justify-content-center">
                <div class="col-sm-3">
                    <p class="text-secondary shrct-1" data-shortcut=""></p>
                </div>
                <div class="col-sm-3">
                    <p class="text-secondary shrct-2" data-shortcut=""></p>
                </div>
                <div class="col-sm-3">
                    <p class="text-secondary shrct-3" data-shortcut=""></p>
                </div>
                <div class="col-sm-3">
                    <p class="text-secondary shrct-4" data-shortcut=""></p>
                </div>
            </div>
        </div>


        <div class="col-sm-1 conCart conCartDesk">
            <div class="conCart2 tambahProduk" data-toggle="modal" data-target="#tambahProdukModal">
                <i class="fas fa-plus mt-2"></i>
            </div>
            <div class="vertical-line ml-3"></div>
        </div>
        <div class="col-sm-2 dDmenu colLine colLineDesk">
            <!-- <div class="vertical-line mr-4"></div> -->
            <div class="row">
                <div class="col">
                    <div class="conSaldo position-relative">
                        <div class="overlay-dari-tengah position-absolute"></div>
                        <p class="saldo mt-2 text-left"></p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="position-relative mydropdown-menu2 p-3 text-center">
                        <img src="/img/icon/top_up.gif" class="position-absolute" width="40%" alt="top_up gif">
                        <div class="position-absolute conTopUp">
                            <button class="btn-auth btn-danger text-center topUp">Top Up Saldo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-1 colfotoP colfotoPDesk">
            <div class="conFotoP">
                <img src="/img/default.svg" width="27px" class="fotoP" alt="profile">
            </div>
        </div>
        <div class="col-sm-1 dDmenu dDmenuDesk">
            <div class="row">
                <div class="col">
                    <div class="conMenu">
                        <img src="/img/menu.svg " alt="menu" width="17px" class="mymenu">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="position-relative conMydropdown-menu">
                        <div class="mydropdown-menu position-absolute mt-3">
                            <div class="row">
                                <div class="col">
                                    <a class="dropdown-item dropItemUser" href="#"></a>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>

                            <div class="row">
                                <div class="col">
                                    <a class="dropdown-item profile" href="#"><i class="fas fa-user-circle"></i> Profile</a>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <a class="dropdown-item kelolaProduk" href="#"><i class="fas fa-cog"></i> Kelola produk</a>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <a class="dropdown-item logout" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <!-- Hasil Pencarian -->
    <div class="hasilCari mt-3 container d-none">
        <div class="row">
            <div class="col-12">
                <h4 class="text-center resultOf">Result of: "91922"</h4>
            </div>
        </div>

        <div class="row rowProdukPencarian">
        </div>
    </div>

    <!-- Tutup Hasil Pencarian -->

    <!-- MainApp -->
    <div class="mainApp">
        <div class="row">
            <div class="col-sm-12 banner">
                <div id="carouselExampleControls" class="carousel slide position-relative" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/img/daging.png" width="100%" height="400px" class="d-block w-100 carouselItemDaging" data-interval="3000" alt="gule">
                        </div>
                        <div class="carousel-item">
                            <img src="/img/mi_udang.png" data-interval="3000" width="100%" height="100%" class="d-block w-100" alt="miUdang">
                        </div>
                        <div class="carousel-item">
                            <img src="/img/mi.png" width="100%" height="100%" class="d-block w-100" data-interval="3000" alt="mi">
                        </div>

                        <div class="carousel-item">
                            <img src="/img/ayam.png" width="100%" height="100%" class="d-block w-100" data-interval="3000" alt="ayam">
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                        <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                        <img src="/img/panah.svg" class="position-absolute panah-back" alt="back">
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                        <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                        <img src="/img/panah.svg" class="panah-next position-absolute" alt="back">
                        <span class="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <hr class="mydivider">


        <div class="row rowLelang1Hp d-none">
            <div class="col-12">
                <div class="row text-center">
                    <div class="col-12 serbu serbuHp">
                        <h1 class="text-white">SERBU!</h1>
                        <p class="text-white mt-2">Jangan Ketinggalan!, Berikan tawaran terkuatmu</p>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col text-center">
                        <h3 class="myh3" style="font-size: 20px;">Lelang yang sedang berlangsung</h3>
                    </div>
                </div>


                <div class="row pt-3 conProdukLiveHp">
                </div>
                <div class="row justify-content-center mt-3">
                    <div class="col-sm-2 text-center">
                        <button type="button" class="btn-fill-gradient lihatSemua">
                            <div class="overlay-btn"></div>
                            Lihat Semua <i class="fas fa-angle-right text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row position-relative rowLelang1">
            <div class="position-absolute serbu">
                <br>
                <br>
                <h1 class="text-left text-white mb-5 ml-2">SERBU!</h1>
                <p class="text-white text-left ml-2 mt-5">Jangan <br> Ketinggalan!,<br> Berikan tawaran terkuatmu</p>
            </div>
            <div class="col-sm-12">
                <div class="row mb-4 justify-content-center">
                    <div class="col text-center">
                        <h3 class="myh3">Lelang yang sedang berlangsung</h3>
                    </div>
                </div>
                <div class="row conProdukLive pl-5">
                </div>
                <div class="row justify-content-center mt-3">
                    <div class="col-sm-2">
                        <button type="button" class="btn-fill-gradient lihatSemua">
                            <div class="overlay-btn"></div>
                            Lihat Semua <i class="fas fa-angle-right text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <hr class="mydivider">

        <div class="row mt-3">
            <div class="col-12 lelangSelesai">
                <div class="row text-center mb-4 justify-content-center">
                    <div class="col">
                        <h1>Semua Lelang yang sudah selesai</h1>
                    </div>
                </div>
                <div class="row rowLelangAwal">

                </div>
                <div class="row justify-content-center mt-3 mb-3">
                    <div class="col-12 text-center">
                        <button type="button" class="btn-fill-gradient muatLagi">
                            <div class="overlay-btn"></div>
                            Muat Lagi <i class="fas fa-redo"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Box "Tambah Produk" -->
        <div class="modal fade" id="tambahProdukModal" tabindex="-1" aria-labelledby="tambahProdukModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content modalTambahProduk">
                    <div class="modal-header font-weight-bold text-white">
                        <h2 class="modal-title" id="tambahProdukModalLabel">Tambah Produkmu!</h2>
                        <button type="button" class="close closeTambahProduk text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="namaProduk">NAMA PRODUK</label>
                                        <input type="text" class="form-control myInput namaProduk" id="namaProduk" name="namaProduk">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="hargaAwal">HARGA AWAL (RP)</label>
                                        <input type="text" onkeypress="return hanyaAngka(event);" class="form-control myInput hargaAwal" id="hargaAwal" name="hargaAwal">
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="deskripsiProduk">DESKRIPSI PRODUK</label>
                                        <textarea class="form-control myInput deskripsiProduk" id="deskripsiProduk" placeholder="" name="deskripsiProduk"></textarea>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-6 mt-2 mb-3">
                                            <img src="/img/imageNotFound.png" width="60%" class="imgPreviewProduk" alt="imgPreviewProduk">
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input myInput imgFileProduk" id="customFile">
                                                <label class="custom-file-label labelImgFileProduk" for="customFile">Pilih gambar</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="stokProduk">STOK</label>
                                        <input type="number" class="myInput form-control stokProduk" id="stokProduk" placeholder="password" name="stokProduk" value="1">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="statusProduk">STATUS</label>
                                        <select class="custom-select statusProduk mySelect" id="statusProduk" name="statusProduk">
                                            <option selected class="mySelectOption" value="langsung">Lelang langsung</option>
                                            <option value="dash" class="mySelectOption">Simpan ke dashboard</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="kadaluarsaProduk">TANGGAL BERAKHIRNYA LELANG</label>
                                        <input type="date" class="form-control kadaluarsaProduk myInput" id="kadaluarsaProduk">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="kadaluarsaProdukJam">JAM BERAKHIRNYA LELANG</label>
                                        <input type="time" class="form-control kadaluarsaProdukJam myInput" id="kadaluarsaProdukJam">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-outline-gradient btn-outHp closeTambahProduk" data-dismiss="modal">
                            <div class="overlay-btn"></div>
                            Batal
                        </button>
                        <button type="button" class="btnTambahP btn-fill-gradient">
                            <div class="overlay-btn"></div>
                            Upload!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Tutup MainApp -->

    <!-- DetailProduk -->

    <div class="container detailProduk d-none">
        <div class="row">
            <div class="col-12 mb-3 text-center">
                <h3 class="titlePage">Mulai dari Rp 35000</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col">
                        <div class="imgDetailProduk text-center">
                            <img src="" alt="img" width="100%" height="100%">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h1 class="mt-2 namaProd">Kebuli khas India</h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h4 class="authorProduk">By: Mama India</h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h5>Deskripsi Produk:</h5>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-sm-12 deskripsiDetailProduk"></div>
                </div>

            </div>
            <div class="col-md-6">
                <div class="row justify-content-end">
                    <div class="col-md-10">
                        <div class="kolomTawaran position-relative">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="overlay-kolomTawaranAtas pt-3">
                                        <h4 class="text-center">Tawaran Teratas</h4>
                                        <!-- <p class="text-center text-danger">sedang live</p> -->
                                        <p class="timerTawaran text-center text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="container kolomPenawar">
                                <!-- row calon pemenang -->
                                <!-- <div class="row justify-content-center mt-4 calonPemenang">
                                    <div class="col-2 text-right">
                                        <img src="/img/ayam.jpg" alt="a" width="30" class="rounded-circle">
                                    </div>
                                    <div class="col-3 text-left mr-0 p-0">
                                        <div class="badgeUser pl-2">Cak Cingur</div>
                                    </div>
                                    <div class="col-2 ml-0">
                                        <img src="/img/king.png" alt="king">
                                    </div>
                                    <div class="col-5 text-right">
                                        <div class="badgeHarga text-left pl-3">Rp. 500000</div>
                                    </div>
                                </div>
                                <hr> -->

                                <!-- row list tawaran user -->
                                <!-- <div class="row justify-content-center mt-4 calon2Pemenang">
                                    <div class="col-2 text-right">
                                        <img src="/img/ayam.jpg" alt="a" width="30" class="rounded-circle">
                                    </div>
                                    <div class="col-5 text-left mr-0 p-0">
                                        <div class="badgeUser pl-2">Cak Cingur</div>
                                    </div>
                                    <div class="col-5 text-right">
                                        <div class="badgeHarga text-left pl-3">Rp. 500000</div>
                                    </div>
                                </div>
                                <hr>

                                <div class="row justify-content-center mt-4 calon2Pemenang">
                                    <div class="col-2 text-right">
                                        <img src="/img/ayam.jpg" alt="a" width="30" class="rounded-circle">
                                    </div>
                                    <div class="col-5 text-left mr-0 p-0">
                                        <div class="badgeUser pl-2">Cak Cingur</div>
                                    </div>
                                    <div class="col-5 text-right">
                                        <div class="badgeHarga text-left pl-3">Rp. 500000</div>
                                    </div>
                                </div>
                                <hr>

                                <div class="row justify-content-center mt-4 calon2Pemenang">
                                    <div class="col-2 text-right">
                                        <img src="/img/ayam.jpg" alt="a" width="30" class="rounded-circle">
                                    </div>
                                    <div class="col-5 text-left mr-0 p-0">
                                        <div class="badgeUser pl-2">Cak Cingur</div>
                                    </div>
                                    <div class="col-5 text-right">
                                        <div class="badgeHarga text-left pl-3">Rp. 500000</div>
                                    </div>
                                </div>
                                <hr>

                                <div class="row justify-content-center mt-4 calon2Pemenang">
                                    <div class="col-2 text-right">
                                        <img src="/img/ayam.jpg" alt="a" width="30" class="rounded-circle">
                                    </div>
                                    <div class="col-5 text-left mr-0 p-0">
                                        <div class="badgeUser pl-2">Cak Cingur</div>
                                    </div>
                                    <div class="col-5 text-right">
                                        <div class="badgeHarga text-left pl-3">Rp. 500000</div>
                                    </div>
                                </div>
                                <hr>

                                <div class="row justify-content-center mt-4 calon2Pemenang">
                                    <div class="col-2 text-right">
                                        <img src="/img/ayam.jpg" alt="a" width="30" class="rounded-circle">
                                    </div>
                                    <div class="col-5 text-left mr-0 p-0">
                                        <div class="badgeUser pl-2">Cak Cingur</div>
                                    </div>
                                    <div class="col-5 text-right">
                                        <div class="badgeHarga text-left pl-3">Rp. 500000</div>
                                    </div>
                                </div>
                                <hr> -->
                            </div>


                            <div class="tombolBerikanAtauAmbil text-center  btn-danger position-absolute" data-aksi=""></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="col-12 mt-4 text-center">
            <button type="button" class="btn-auth mx-auto btn-danger backDP">Kembali</button>
        </div>
    </div>

    <!-- Tutup DetailProduk -->

</div>