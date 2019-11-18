<?php ob_start(); ?>

    <div id="title">
        <h1>TOP 10:</h1>
    </div>
    <div id="highScoreDiv">
        <div class="names">
            <p><?= $name="asdhfkjahs" ?></p>
            <p><?= $name="asdhfkjahs" ?></p>
            <p><?= $name="asdhfkjahs" ?></p>
            <p><?= $name="asdhfkjahs" ?></p>
            <p><?= $name="asdhfkjahs" ?></p>
            <p><?= $name="asdhfkjahs" ?></p>
            <p><?= $name="asdhfkjahs" ?></p>
            <p><?= $name="asdhfkjahs" ?></p>
        </div>
        <div class="highscores">
            <p><?= $name="1122" ?></p>
            <p><?= $name="997" ?></p>
            <p><?= $name="543" ?></p>
            <p><?= $name="482" ?></p>
            <p><?= $name="1122" ?></p>
            <p><?= $name="997" ?></p>
            <p><?= $name="543" ?></p>
            <p><?= $name="482" ?></p>
        </div>
    </div>
    <div class="playagainLinkHighScorePg">
        <a href="index.php?action=playGame">Play again?</a>
    </div>


<?php
$content= ob_get_clean();
require('template.php');