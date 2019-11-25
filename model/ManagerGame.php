<?php
require_once("./model/Manager.php");
class ManagerGame extends Manager {
    public function saveScore ($params){
        $db = $this->dbConnect();
        if(!$this->checkUsername($params['userNameInput'])){
            $saveScore = $db->prepare("INSERT INTO scores (username, score) VALUES(:username, :score)");
            $saveScore->execute([
                'username'=>$params['userNameInput'],
                'score'=>$params['score']
            ]);
        } else {
            return "used";
        }
       
    }
    public function checkUsername($username){
        print_r($username);
        $db = $this->dbConnect();
        $query = $db->prepare("SELECT id FROM scores WHERE username = ?");
        $query->bindParam(1,$username, PDO::PARAM_STR, 12);
        $query->execute();
        $username = $query->fetch();
        return ($username) ? true : false;
    }
    
    public function loadHighScores($limit){
        $db = $this->dbConnect();
        $res = $db->query("SELECT username, score FROM scores ORDER BY score DESC LIMIT 0,$limit");
        return $res->fetchAll();
    }
        
    

}