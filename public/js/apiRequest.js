let wordsArray = [];

function fetchWordFromAPI() {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      let responseObj = {};
      let responseJSON = JSON.parse(this.responseText);
      if (
        responseJSON["results"] === undefined ||
        responseJSON["results"][0] === undefined ||
        responseJSON["results"][0]["definition"] === undefined
      ) {
        console.log("trying again");
        fetchWordFromAPI();
      } else {
        responseObj["word"] = responseJSON["word"];
        responseObj["definition"] = responseJSON["results"][0]["definition"];
        wordsArray.push(responseObj);
      }
    }
  });

  xhr.open(
    // Get a random word that is:
    // between 3 and 10 letters long
    // Min Frequency 5 (max is 8 so fairly common words).
    // Match regex pattern that limits to letters only.
    "GET",
    "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5B%5E%5CW0-9%5Cs%5D%7B3%2C10%7D&frequencyMin=5&random=true"
  );
  xhr.setRequestHeader("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "30f5aff5d9msha651378ce5a3dcap1cfe17jsn3eaca2fbd7b5"
  );

  xhr.send(data);
}

for (let i = 0; i < 4; i++) {
  fetchWordFromAPI();
}

// render to DOM
function render() {
  const wordOutput = document.querySelector(".word");
  const definitionOutput = document.querySelector(".definition");
  wordOutput.textContent = wordsArray[0]["word"];
  definitionOutput.textContent = wordsArray[0]["definition"];
}
setTimeout(render);

console.log(wordsArray);
