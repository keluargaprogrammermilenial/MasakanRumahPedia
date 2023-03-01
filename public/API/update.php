<?php

$connection = new mysqli("localhost", "root", "", "masakkanrumahpedia");
$username      = $_POST['username'];
$email      = $_POST['email'];
$password    = $_POST['password'];
$id         = $_POST['id'];

$result = mysqli_query($connection, "update users set username='$username', email='$email', password='$password' where id='$id'");

if ($result) {
    echo json_encode([
        'message' => 'Data edit successfully'
    ]);
} else {
    echo json_encode([
        'message' => 'Data Failed to update'
    ]);
}
