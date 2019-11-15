<?php
    include 'dbconnect.php';
    $res = $db->query("SELECT scores FROM highscores ORDER BY scores LIMIT 0,5");
    $newScore = intval($_GET['score']);
    while($data = $res->fetch()){
        if($newScore > $data['scores']){
            header("Location: ./controller/pg32.php");
            exit;
            // $res = $db->exec("INSERT INTO highscores(username, scores) VALUES('".$username."', '".$newScore."')");
        }  
    }
    header("Location: ./controller/pg31.php");
?>