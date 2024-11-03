<?php
$connect = mysqli_connect('localhost','root','','db_comerce');
if(!$connect){
    echo "Gagal menyambungkan database";
}
?>