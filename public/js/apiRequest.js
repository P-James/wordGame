// function getData will push an object to wordsArray.
// object keys: word (string), definitions (array), synonyms (nested arrays)

let wordsArray = [];
let score = 0;

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
function loadThreeWords() {
  for (let i = 0; i < 3; i++) {
    setTimeout(getData());
  }
}
loadThreeWords();

console.log(wordsArray);

//Render to DOM
// Initial render to DOM - to be called once at start of game
const definitionOutput = document.querySelector(".definition");
const synonymsOutput = document.querySelector(".synonyms");

function render() {
  if (!wordsArray[0]) {
    definitionOutput.textContent = "Still loading first word";
    setTimeout(render, 500);
  } else {
    definitionOutput.textContent = wordsArray[0]["definitions"][0];
    synonymsOutput.textContent = wordsArray[0]["synonyms"][0];
  }
}
let defIndex = 0;
let wordIndex = 0;

function refresh() {
  defIndex++;
  if (defIndex == wordsArray[0]["definitions"].length) {
    defIndex = 0;
    definitionOutput.textContent =
      wordsArray[wordIndex]["definitions"][defIndex];
    synonymsOutput.textContent = wordsArray[wordIndex]["synonyms"][defIndex];
  } else {
    definitionOutput.textContent =
      wordsArray[wordIndex]["definitions"][defIndex];
    synonymsOutput.textContent = wordsArray[wordIndex]["synonyms"][defIndex];
  }
}

function skip() {
  defIndex = 0; // refresh going back to first word definitions...
  if (wordIndex < wordsArray.length - 1) {
    definitionOutput.textContent =
      wordsArray[wordIndex + 1]["definitions"][defIndex];
    synonymsOutput.textContent =
      wordsArray[wordIndex + 1]["synonyms"][defIndex];
    wordIndex++;
  } else {
    wordIndex = -1;
    skip();
  }
  loadThreeWords();
}

const goBtn = document.querySelector("#go");
goBtn.addEventListener("click", render);

const refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener("click", refresh);

const skipBtn = document.querySelector("#skip");
skipBtn.addEventListener("click", skip);

const body = document.querySelector("body");
body.addEventListener("keyup", e => {
  if (e.keyCode == 49) {
    refresh();
    e.preventDefault();
  }
});
const guessBar = document.querySelector("input[name='userAnswer']");
guessBar.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    if (guessBar.value == wordsArray[wordIndex]["word"]) {
      score++;
      skip();
    } else {
      console.log("incorrect");
    }
  }
});
