<?php

$connection = new mysqli("localhost", "root", "", "masakkanrumahpedia");
$data       = mysqli_query($connection, "select * from users");
$data       = mysqli_fetch_all($data, MYSQLI_ASSOC);

echo json_encode($data);
