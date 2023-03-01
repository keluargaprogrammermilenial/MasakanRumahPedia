<?php

namespace App\Models;

use CodeIgniter\Model;

class PenawarModel extends Model
{
    protected $table      = 'penawar';
    protected $primaryKey = 'id';

    protected $useAutoIncrement = true;
    protected $allowedFields = ['id_produk', 'email_penawar', 'tawaran'];
}
