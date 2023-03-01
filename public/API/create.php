<?php

$connection = new mysqli("localhost", "root", "", "masakkanrumahpedia");
$username      = $_POST['username'];
$email      = $_POST['email'];
$password    = $_POST['password'];
$no_hp    = $_POST['no_hp'];
// $date       = date('Y-m-d');

$result = mysqli_query($connection, "insert into users set username='$username', email='$email', password='$password'");

if ($result) {
    echo json_encode([
        'message' => 'Data input successfully',
        'email' => $email,
        'password' => $password,
        'username' => $username,
    ]);
} else {
    echo json_encode([
        'message' => 'Data Failed to input'
    ]);
}
