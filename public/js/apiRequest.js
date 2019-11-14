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
        responseJSON["results"] === undefined ||
        responseJSON["results"][0] === undefined ||
        responseJSON["results"][0]["definition"] === undefined ||
        responseJSON["results"][0]["synonyms"] === undefined
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
        // responseJSON["results"][0]["synonyms"] = responseObj["synonyms"];
        // responseObj["definition"] = responseJSON["results"][0]["definition"];
        wordsArray.push(responseObj);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
// setTimeout necessary to allow http requests to complete before sending new request.
for (let i = 0; i < 3; i++) {
  setTimeout(getData());
}
console.log(wordsArray);

// render to DOM
function render() {
  const wordOutput = document.querySelector(".word");
  const definitionOutput = document.querySelector(".definition");
  wordOutput.textContent = wordsArray[0]["word"];
  definitionOutput.textContent = wordsArray[0]["definition"];
}
