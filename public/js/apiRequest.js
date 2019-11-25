// function getData will push an object to wordsArray.
// object keys: word (string), definitions (array), synonyms (nested arrays)

let wordsArray = [];

// Get a random word that is:
// between 3 and 10 letters long
// Min Frequency 5 (max is 8 so fairly common words).
// Match regex pattern that limits to letters only.
// Must have definitions and some synonyms.
function getData() {
  let responseObj = {};
  fetch(
    "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5B%5E%5CW0-9%5Cs%5D%7B3%2C10%7D&frequencyMin=5&random=true",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "30f5aff5d9msha651378ce5a3dcap1cfe17jsn3eaca2fbd7b5"
      }
    }
  )
    .then(response => {
      return response.json();
    })
    .then(responseJSON => {
      // console.log(responseJSON);
      if (
        !responseJSON["results"] ||
        !responseJSON["results"][0] ||
        !responseJSON["results"][0]["definition"] ||
        !responseJSON["results"][0]["synonyms"]
      ) {
        console.log("no definition or synonyms, getting another word");
        getData();
      } else {
        responseObj["word"] = responseJSON["word"];
        responseObj["definitions"] = [];
        responseObj["synonyms"] = [];
        // create an array of all the different definitions
        responseJSON["results"].forEach((def, i) => {
          responseObj["definitions"][i] = def["definition"];
        });
        // create an array of synonyms for each definition, store all in array
        responseJSON["results"].forEach((syn, i) => {
          responseObj["synonyms"][i] = syn["synonyms"];
        });
        wordsArray.push(responseObj);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
// setTimeout necessary to allow http requests to complete before sending new request.
function loadTwoWords() {
  for (let i = 0; i < 2; i++) {
    setTimeout(getData());
  }
}


console.log(wordsArray);

//Render to DOM
// Initial render to DOM - to be called once at start of game
const definitionOutput = document.querySelector(".definition");
const synonymsOutput = document.querySelector(".synonyms");
const synsQty = 3;

function render() {
  if (!wordsArray[0]) {
    definitionOutput.textContent = "Still loading first word";
    setTimeout(render, 500);
  } else {
    definitionOutput.textContent = wordsArray[0]["definitions"][0];
    synonymsOutput.textContent = wordsArray[0]["synonyms"][0].slice(0, synsQty);
  }
}


function refresh(defIndex) {
  defIndex++;
  if (!wordsArray[wordIndex]["synonyms"][defIndex]) {
    defIndex = 0;
    definitionOutput.textContent =
      wordsArray[wordIndex]["definitions"][defIndex];
    synonymsOutput.textContent = wordsArray[wordIndex]["synonyms"][
      defIndex
    ].slice(0, synsQty);
  } else {
    definitionOutput.textContent =
      wordsArray[wordIndex]["definitions"][defIndex];
    synonymsOutput.textContent = wordsArray[wordIndex]["synonyms"][
      defIndex
    ].slice(0, synsQty);
  }
  return defIndex;
}

function skip(wordIndex) {
  defIndex = 0; // refresh going back to first word definitions...
  if (wordIndex < wordsArray.length - 1) {
    definitionOutput.textContent =
      wordsArray[wordIndex + 1]["definitions"][defIndex];
    synonymsOutput.textContent = wordsArray[wordIndex + 1]["synonyms"][
      defIndex
    ].slice(0, synsQty);
    wordIndex++;
  } else {
    wordIndex = -1;
    //skip(wordIndex);
  }
  return wordIndex;
}

// Check if score is correct, includes score increment
function correctOrNot(e, score, wordIndex) {
  console.log(wordIndex);
  if (e.keyCode == 13) {
    if (e.target.value == wordsArray[wordIndex]["word"]) {
      correctSound.play();
      let scoreDisplay = document.getElementById("showScore");
      scoreDisplay.textContent = ++score;
      loadTwoWords();
      wordIndex = skip(wordIndex);
    } else {
      wrongSound.play();
      let input = document.getElementById("shake");
      input.classList.add("wrong");
      setTimeout(function() {
        input.classList.remove("wrong");
      }, 100);
    }
    e.target.value = "";
  }
  return wordIndex;
}

function timerStart(time, timeDisplay) {
  timeDisplay.textContent = time;
  setInterval(function() {
    flashStyle(time,timeDisplay);
    if (time >= 0) {
      timeDisplay.textContent = time;
      time--;
    } else if (time === -1) {
      gameEnd();
    }
  }, 1000);
  return true;
}

function flashStyle(remainingTime, timeDisplay) {
  if (remainingTime <= 15) {
    timeDisplay.classList.add("bigFlash");
  }
}

function gameEnd() {
  let scoreDisplay = document.getElementById("showScore");
  document.getElementById("scoreinput").value =  scoreDisplay.textContent; // Put the score in the hidden form for submitting
  document.getElementById("hiddenscore").submit();
}

function init() {
  // starting game variables
  const timeDisplay = document.getElementById("timer");
  const time= 60;
  timeDisplay.textContent = time;
  let keyPressStarted = false;
  let scoreDisplay = document.getElementById("showScore");
  scoreDisplay.textContent = 0;
  var wordIndex = 0; // skip default value
  loadTwoWords();

  document.querySelector("input[name='userAnswer']").addEventListener("keyup", function(e) {
    if (keyPressStarted === false) {
      keyPressStarted = timerStart(time, timeDisplay);
    }
    wordIndex = correctOrNot(e, scoreDisplay.textContent, wordIndex);
  });

  window.onload = render;
  // skip the word
  const skipText = document.getElementById("skipbttn");
  skipText.addEventListener("click", function(e) {
    wordIndex = skip(wordIndex);
  });
  const refreshDef = document.getElementById("refreshbttn");
  let defIndex=0;
  refreshDef.addEventListener("click", function(e) {
    defIndex=refresh(defIndex);
  });
}
// load of the audio for more efficiency
const wrongSound = new Audio("public/sounds/wrong.mp3");
const correctSound = new Audio("public/sounds/correct.mp3");
{
  init();
}

