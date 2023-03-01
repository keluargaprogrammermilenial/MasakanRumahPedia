<?php

require "conn.php";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $response = array();
    $email = $_POST['email'];

    $cek = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_fetch_array(mysqli_query($connect, $cek));

    if (isset($result)) {
        $response['value'] = 1;
        $response['message'] = 'Login Berhasil';
        $response['email'] = $email;
        echo json_encode($response);
    } else {
        $response['value'] = 0;
        $response['message'] = "login gagal";
        echo json_encode($response);
    }
}
