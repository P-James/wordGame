// let i = 31;
// let score = document.getElementById('score');
// let score = 5;

// let countdown = setInterval(function() {
//   i--;
//   if (i > 0) {
//     console.log(i);
//   } else {
//     window.location.href = "./model/redirect.php?score=" + score;
//     clearInterval(countdown);
//   }
// }, 1000);

const timeDisplay = document.getElementById("seconds");
let i = 60;
timeDisplay.textContent = i;
let score = 0;
setInterval(function() {
  if (i >= 0) {
    i--;
    timeDisplay.textContent = i;
  }
}, 1000);
