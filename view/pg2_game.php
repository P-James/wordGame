<?php ob_start(); ?>

<div id="content"> 
    <div id="timer">
        <p>30</p> <!-- this is where you insert the count down -->
    </div>
    <div class="defDiv">
        <h1>Definition:</h1>  
        <p><?= $definition= "def"; ?></p> <!-- this is where youll insert the definition -->
    </div>
    <div class="synDiv">
        <h1>Synonym:</h1>  
        <p><?=$synonym="syn"; ?></p> <!-- this is where youll insert the synonymns -->
    </div>
        <div class="inputDiv">
        <input name="userAnswer" type="text" autocomplete="off">
    </div>
</div>
<?php
$content= ob_get_clean();
require('template.php');
?>