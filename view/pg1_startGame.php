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
        <form method="POST" action="index.php">
            <input type="hidden" name="action" value="playGame"/>
            <input type="submit" id="startGameButton" value="start game">
        </form>
    </div>
</div>
<?php
$content= ob_get_clean();
require('template.php');
?>