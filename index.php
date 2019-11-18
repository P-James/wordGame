<?php
require("./controller/controller.php");

if (isset($_GET['action'])) {
    if($_GET['action'] == "home"){
        loadStartPage();
    } 
    if($_GET['action'] == "playGame"){
        playGame();
    }
    // if($_GET['action'] == "showScore"){
    //     playGame();
    // }
    // if($_GET['action'] == "applyScore"){
    //     playGame();
    // }
    
    
} else {
    echo 'hey';
   loadStartPage();
}

