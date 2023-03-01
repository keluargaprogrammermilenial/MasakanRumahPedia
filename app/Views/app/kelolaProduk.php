<div class="kelolaProdukPage d-none">
    <div class="container-fluid font-weight-bold text-white ">
        <div class="row headerKelolaProduk">
            <div class="col-sm-12 pt-4">
                <p class="position-absolute mt-3 backKelolaProduk text-left">
                    <i class="fas fa-angle-left"></i>
                </p>
                <h3 class="text-center">Kelola Produk</h3>
            </div>
        </div>
    </div>

    <div class="container con mb-5 text-left p-5 mt-5">


        <div class="row justify-content-center">
            <div class="col text-center">
                <span width="20px" class="fas fa-3x fa-spinner prosesMemuat fa-spin" style="opacity: 0; transition: .3s;"></span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">List Produkmu</th>
                            <th scope="col"></th>
                            <th scope="col" class="text-right">
                                <div class="tblFilter"><i class="fas fa-sliders-h"></i></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="rowMyProduk">
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row filterProduk position-fixed">
            <div class="col-12 d-none">
                <div class="row judulFilter">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-2">
                                <h6 class="font-weight-bold d-inline-block text-left">Filter</h6>
                            </div>
                            <div class="col-10">
                                <div class="closeFilter d-inline-block text-right col"><i class="fas fa-times"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row listFilter">
                    <div class="col mb-2">
                        <div class="row">
                            <div class="col-2">
                                Semua
                            </div>
                            <div class="col-10 text-right">
                                <i data-ceklis="semua" class="fas semua fa-check ceklis"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row listFilter">
                    <div class="col mb-2">
                        <div class="row">
                            <div class="col-2">
                                Live
                            </div>
                            <div class="col-10 text-right">
                                <i data-ceklis="live" class="fas d-none fa-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row listFilter">
                    <div class="col mb-2">
                        <div class="row">
                            <div class="col-2">
                                Draf
                            </div>
                            <div class="col-10 text-right">
                                <i data-ceklis="draf" class="fas fa-check d-none"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row listFilter">
                    <div class="col mb-2">
                        <div class="row">
                            <div class="col-2">
                                Terjual
                            </div>
                            <div class="col-10 text-right">
                                <i data-ceklis="selesai" class="fas fa-check d-none"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row listFilter">
                    <div class="col mb-2">
                        <div class="row">
                            <div class="col-2">
                                Kadaluarsa
                            </div>
                            <div class="col-10 text-right">
                                <i data-ceklis="kadaluarsa" class="fas fa-check ceklis d-none"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- Modal -->
    <div class="modal fade modalEditProduk" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content dialogEditProduk">
                <div class="modal-header text-white">
                    <h2 class="modal-title" id="editProdukModalLabel">Edit Produkmu!</h2>
                    <button type="button" class="close closeEditProduk text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="namaProdukEdit">NAMA PRODUK</label>
                                    <input type="text" class="form-control myInput namaProdukEdit" id="namaProdukEdit" name="namaProdukEdit">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="hargaAwalEdit">HARGA AWAL (RP)</label>
                                    <input type="text" onkeypress="return hanyaAngka(event);" class="form-control myInput hargaAwalEdit" id="hargaAwalEdit" name="hargaAwalEdit">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="deskripsiProdukEdit">DESKRIPSI PRODUK</label>
                                    <textarea class="form-control myInput deskripsiProdukEdit" id="deskripsiProdukEdit" placeholder="" name="deskripsiProdukEdit"></textarea>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="row">
                                    <div class="col-6">
                                        <img src="/img/imageNotFound.png" width="60%" class="imgPreviewProdukEdit" alt="imgPreviewProdukEdit">
                                    </div>
                                    <div class="col-6">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input myInput imgFileProdukEdit" id="customFile">
                                            <label class="custom-file-label labelImgFileProdukEdit" for="customFile">Pilih gambar</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="font-weight-bold" for="stokProdukEdit">STOK</label>
                                    <input type="number" class="myInput form-control stokProdukEdit" id="stokProdukEdit" name="stokProdukEdit" value="1">
                                </div>
                            </div>
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
                        <div class="row">
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-outline-gradient btn-outHp closeEditProduk" data-dismiss="modal">
                        <div class="overlay-btn"></div>
                        Batal
                    </button>
                    <button type="button" class="btnEditProduk btn-fill-gradient">
                        <div class="overlay-btn"></div>
                        Ubah!
                    </button>
                </div>
            </div>
        </div>
    </div>


</div>