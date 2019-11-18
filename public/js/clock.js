//     window.location.href = "./model/redirect.php?score=" + score;
//     clearInterval(countdown);

const timeDisplay = document.getElementById("timer");
const guessBar = document.querySelector("input[name='userAnswer']");
let i = 60;
timeDisplay.textContent = i;
let score = 0;
let keyPressStarted = false;
guessBar.addEventListener("keyup", timerStart);
function timerStart() {
  if (keyPressStarted === false) {
    setInterval(function() {
      if (i >= 0) {
        timeDisplay.textContent = i;
        i--;
      }
    }, 1000);
    keyPressStarted = true;
  }
}
