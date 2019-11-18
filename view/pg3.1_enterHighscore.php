<?php 
$userScore=27;
ob_start(); ?>


    <div id="highScorePg1">
        <div class="score">
            <p>your score was</p>
            <h1 id="userScore"><?= $userScore ?></h1>
            <a href="index.php?action=playGame">Play again?</a>
        </div>
        <div class="inputsBottom">
            <div class="inputDiv">
                <p>save your score?</p>
                <p>enter your username below</p>
                <input type="text" name="userNameInput">
            </div>
            <div class="toHighscorePg">
            <a href="index.php?action=highScorePg">go to HIGH SCORES</a>
            </div>
        </div>
    </div>


<?php
$content= ob_get_clean();
require('template.php');
?>