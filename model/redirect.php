<?php

function loadScoreWithParams($params){
    include 'dbconnect.php';
    $res = $db->query("SELECT scores FROM highscores ORDER BY scores DESC LIMIT 0,8");
    $newScore = intval($params['score']);
    while($data = $res->fetch()){
        if($newScore > $data['scores']){
            header("Location: ./controller/pg32.php");
            exit;
            // $res = $db->exec("INSERT INTO highscores(username, scores) VALUES('".$username."', '".$newScore."')");
        }  
    }
    header("Location: ./controller/pg31.php");
}

function loadHighScores($limit){
    include 'dbconnect.php';
    $res = $db->query("SELECT * FROM scores ORDER BY score DESC LIMIT 0,$limit");
    return $res->fetchAll();
}
    