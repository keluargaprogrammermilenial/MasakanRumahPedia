<?php
$connect = new mysqli("localhost", "root", "", "masakkanrumahpedia");

if ($connect) {
} else {
    echo "Connection Failde";
    exit();
}
