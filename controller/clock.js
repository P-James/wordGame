let i = 31;
// let score = document.getElementById('score');
let score = 5;

let countdown = setInterval(function(){
    i--;
    if(i > 0){
        console.log(i);    
    }
    else{
        window.location.href = "./model/redirect.php?score=" + score;
        clearInterval(countdown);
    }
}, 1000);

