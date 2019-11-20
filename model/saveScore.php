<?php
function saveScore ($params){
    $db = require "dbconnect.php";
    if(!checkUsername($params['userNameInput'])){
        $saveScore = $db->prepare("INSERT INTO scores (username, score) VALUES(:username, :score)");
        $saveScore->execute([
            'username'=>$params['userNameInput'],
            'score'=>$params['score']
        ]);
    } else {
        return "used";
    }
   
}
function checkUsername($username){
    $db = require "dbconnect.php";
    $query = $db->prepare("SELECT
    id,
    username
  FROM
    scores
  WHERE
    username = :username
  ORDER BY
    score DESC
  LIMIT
    0, 10");
    $query->execute([
        'username'=>$username,
    ]);
    $username = $query->fetch();
    return ($username) ? true : false;
}


//adds username/score to db
//sorts db in descending
//deletes anything after the 10th highscore

// function deleteScoresPastTopTen(){
//     $db = require "dbconnect.php";
//     $query = $db->prepare("SELECT * FROM scores");
//     $number = $query->fetchAll();
//     if (count($number) > 10){
//         $query = $db->query("DELETE FROM `scores` ORDER BY score ASC LIMIT 1");
//     }
// }