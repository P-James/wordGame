<?php ob_start(); ?>

<div id="content"> 
    <div class="defDiv">
        <h1>Definition:</h1>  
        <p>a social unit living together</p>
    </div>
    <div class="synDiv">
        <h1>Synonym:</h1>  
        <p>house, household, menage</p>
    </div>
        <div class="inputDiv">
        <button id="startGameButton">start game</button>
    </div>
</div>
<?php
$content= ob_get_clean();
require('template.php');
?>