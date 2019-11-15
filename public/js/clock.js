{
    let i = 31;

    var timer = document.getElementById('timer');
    // console.log(list);

    let countdown = setInterval(function () {
        i--;
        if (i > 0) {
            // console.log(i);
            timer.innerHTML = "<p>" + i + "</p>";
        } else {
            // window.location.href = "./model/redirect.php?score=" + score;
            clearInterval(countdown);
        }
    }, 1000);
}