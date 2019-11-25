<?php
ob_start(); ?>


    <div id="highScorePg1">
        <div class="score">
            <p>your score was</p>
            <h1 id="userScore"><?= $_REQUEST['score'] ?></h1>
            <a href="index.php?action=playGame">Play again?</a>
        </div>
        <div class="inputsBottom">
            <div class="inputDiv">
                <p>save your score?</p>
                <p>enter your username below</p>
                <span> <?php if (isset($alreadyUsed)) {echo $alreadyUsed;}?></p>
                <form id="usernameInput" action="index.php" method="POST">
                    <input type="text" name="userNameInput"/>
                    <input type="hidden" name="score" value="<?= $_POST['score']?>"/>
                    <input type="hidden" name="action" value="highScorePg"/>
                </form>
            </div>
            <div class="toHighscorePg">
            <a href="index.php?action=highScorePg">go to HIGH SCORES</a>
            </div>
        </div>
    </div>

<script src="./public/js/scoreSubmit.js"></script>
<?php
$content= ob_get_clean();
require('template.php');
?>