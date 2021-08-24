<?php

//Definir los atributos de la clase 

$db = null;
$hostname = 'localhost';
$database = 'Profe';
$username = 'root';
$password = '';
$dsn = "mysql:host=$hostname;dbname=$database;charset=UTF8";

try{
    $db= new PDO($dsn, $username, $password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
}catch(PDOException $e){
    echo 'Exepcion capturada:', $e->getMessage(), self::$dsn, "\n";
}

?>