<?php
require("./controller/controller.php");
try{
    if (isset($_REQUEST['action'])) {
        if($_REQUEST['action'] == "home"){
            loadStartPage();
        } 
        if($_REQUEST['action'] == "playGame"){
            playGame();
        }
        if($_REQUEST['action'] == "showScore"){
            showScore();
        }
        if($_REQUEST['action'] == "enterHighscore"){
            enterHighscore();
        }
        if($_REQUEST['action'] == "highScorePg"){
            highScorePg($_REQUEST);
        }  
    } else {
       loadStartPage();
    }
<<<<<<< HEAD
    if($_GET['action'] == "highScorePg"){
        highScorePg($_POST);
        
    }

    
    
} else {
   loadStartPage();
=======
} catch(Exception $e){
   echo 'Error : '. $e->getMessage();
>>>>>>> b51a188abbf5709ec722b2be8bbea61fb034e34a
}


