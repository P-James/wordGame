<?php
class Manager {
    protected function dbConnect() {
        return new PDO('mysql:host=localhost;dbname=wordgame;charset=utf8','root','root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
}
        