<?php ob_start(); ?>

<div id="content"> 
    
    <div id="side">
        Score: <span id="showScore">0</span> 
        <div id="timer"> </div>
    </div>
    
    <div class="defDiv">
        <h1>Definition:</h1>  
        <p class="definition"></p> <!-- this is where youll insert the definition -->
    </div>
    <div class="synDiv">
        <h1>Synonym:</h1>  
        <p class="synonyms"></p> <!-- this is where youll insert the synonymns -->
    </div>
    <div class="inputDiv">
            <input id="shake" name="userAnswer" type="text" autocomplete="off">
        <div id="bttns">
            <a id="skipbttn" name="skip">skip</a>
            <a id="refreshbttn" name="refresh">refresh</a>
        </div>
    </div>
    <form id="hiddenscore" action="index.php" method="POST">  <!-- Used to submit score to backend -->
        <input type="hidden" name="action" value="enterHighscore" />
        <input id="scoreinput" type="hidden" name="score" value="">
    </form>
</div>

<script src="./public/js/apiRequest.js"></script>

<?php
$content= ob_get_clean();
require('template.php');
?>