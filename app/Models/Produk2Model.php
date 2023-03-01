<?php

namespace App\Models;

use CodeIgniter\Model;

class Produk2Model extends Model
{
    protected $table      = 'produk';
    protected $primaryKey = 'id';

    protected $useAutoIncrement = true;
    protected $allowedFields = ['email_user', 'nama_produk', 'harga_awal', 'deskripsi_produk', 'stok_produk', 'img', 'status', 'kadaluarsa', 'is_active', 'pemenang', 'nama_user', 'tawaran_pemenang', 'email_pemenang'];
    protected $useTimestamps = true;
    protected $dateFormat = "datetime";
    protected $createdField  = 'created_at';
    protected $updatedField = 'updated_at';
}
