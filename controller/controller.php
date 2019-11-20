<?php
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
    require("./model/saveScore.php");
    $user = saveScore ($params);
    if($user == "used"){
        // display already used pick an other one
        $alreadyUsed = "already used";
        require("./view/pg3.1_enterHighscore.php");
    } else{
         require("./model/redirect.php");
        $highScores = loadHighScores(8);
        require("./view/pg4_highScore.php");
    }
   
}