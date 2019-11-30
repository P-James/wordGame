<?php
require_once("./model/ManagerGame.php");

function loadStartPage(){
    require("./view/pg1_startGame.php");
}

function playGame(){
    require("./view/pg2_game.php");
}

function showScore(){
    require("./view/pg3.2_showScore.php");
}

function enterHighscore(){
    require("./view/pg3.1_enterHighscore.php");
}

function highScorePg($params){
    $managerGame = new ManagerGame();
    $user = $managerGame->saveScore($params);
    if($user == "used"){
        // display already used pick an other one
        $alreadyUsed = "already used";
        require("./view/pg3.1_enterHighscore.php");
    } else{
        $highScores = $managerGame->loadHighScores(10);
        require("./view/pg4_highScore.php");
    }
   
}