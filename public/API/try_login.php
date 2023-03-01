<?php
include 'conn.php';

// $connection = new mysqli("localhost", "root", "", "lelang1");
$email      = $_POST['email'];
$pass    = $_POST['password'];

$data       = $connect->query("SELECT * FROM users WHERE email='$email' and password='$password'");

$result = array();

while ($fetchData = $data->fetch_assoc()) {
    $result[] = $fetchData;
}

echo json_encode($result);
