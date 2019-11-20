<?php ob_start(); ?>

    <div id="title">
        <h1>TOP 10:</h1>
    </div>
    <div id="highScoreDiv">
        <div class="names">
        <?php 
            for ($i = 0; $i<count($highScores);$i++){
                $username = $highScores[$i]['username'];
                echo "<p> $username</p>";
            }
            
        ?>
        </div>
        <div class="highscores">
        <?php 
            for ($i = 0; $i<count($highScores);$i++){
                $score = $highScores[$i]['score'];
                echo "<p> $score</p>";
            }
            
        ?>
        </div>
    </div>
    <div class="playagainLinkHighScorePg">
        <a href="index.php?action=playGame">Play again?</a>
    </div>


<?php
$content= ob_get_clean();
require('template.php');