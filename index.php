<?php
require("./controller/controller.php");

if (isset($_GET['action'])) {
    if($_GET['action'] == "home"){
        loadStartPage();
    } 
    if($_GET['action'] == "playGame"){
        playGame();
    }
    if($_GET['action'] == "showScore"){
        showScore();
    }
    if($_GET['action'] == "enterHighscore"){
        enterHighscore();
    }
    if($_GET['action'] == "highScorePg"){
        highScorePg();
    }

    
    
} else {
   loadStartPage();
}

