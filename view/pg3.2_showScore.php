<?php 
$userScore=27;
ob_start(); ?>

    <div id="scorePg2">
        <div class="scorepg2">
            <p>your score was</p>
            <h1 id="userScore"><?= $userScore ?></h1> <!-- userscore is inserted here --> 
            <a href="#">Play again?</a>
        </div>
        <div class="toHighscorePg2">
            <a href="#" id="tohighscore">go to HIGH SCORES</a>
        </div>
        
    </div>


<?php
$content= ob_get_clean();
require('template.php');