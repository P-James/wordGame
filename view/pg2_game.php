<?php ob_start(); ?>

<div id="content"> 
    <div id="timer">
        <!-- <p>30</p> this is where you insert the count down -->
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
        <input name="userAnswer" type="text" autocomplete="off">
    </div>
</div>

<script src="./public/js/clock.js"></script>
<script src="./public/js/apiRequest.js"></script>

<?php
$content= ob_get_clean();
require('template.php');
?>