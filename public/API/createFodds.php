    

<?php

$connection = new mysqli("localhost", "root", "", "masakkanrumahpedia");

//get image name
$image = $_FILES['image']['name'];
$name      = $_POST['name'];
$price      = $_POST['price'];
$description    = $_POST['description'];

//create date now
$date = date('Y-m-d');

//make image path
$imagePath = 'images/' . $image;

$tmp_name = $_FILES['image']['tmp_name'];

//move image to images folder
move_uploaded_file($tmp_name, $imagePath);

$result = mysqli_query($connection, "insert into produk set img='$image', date='$date', name='$name', price='$price', description='$description'");

if ($result) {
    echo json_encode([
        'message' => 'Data input successfully'
    ]);
} else {
    echo json_encode([
        'message' => 'Data Failed to input'
    ]);
}
?>