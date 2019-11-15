<?php
    try{
        $db = new PDO('mysql:host=localhost;dbname=wordgame;charset=utf8','root','', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
    catch(Exception $e){
        die('Error : '.$e->getMessage());
    }
?>