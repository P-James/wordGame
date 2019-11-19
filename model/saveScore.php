<?php
die(var_dump($_POST));
$db = require "dbconnect.php";
$saveScore = $db->prepare("INSERT INTO scores (username, score) VALUES(:username, :score)");
$saveScore->execute([
    'username'=>$_POST['userNameInput'],
    'score'=>$_POST['']
]);