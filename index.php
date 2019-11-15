<?php
    if (isset($_GET['action'])) {
        if($_GET['action'] == "home"){
            loadTemplatePage();
        }
    } else {
        loadTemplatePage();
    }
?>