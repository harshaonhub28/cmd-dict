//api path for definitions
let apiPath = "/definitions";
const request = require("../request");

//function to fetch definitions of a word
const getDefinition = (word, isGame = false) => {
  return request(apiPath, word)
    .then(response => {
      //looping over the definitions of a word
      const definitionsArray = JSON.parse(response);

      if (definitionsArray.length) {
        if (isGame) {
          let randomIndex = Math.floor(Math.random() * definitionsArray.length);

          //printing the first definition
          console.log(
            `Definition for the word: ${definitionsArray[randomIndex].text}`
          );
        } else {
          for (let i = 0; i < definitionsArray.length; i++) {
            console.log(
              "Definition-" + (i + 1) + ":\n" + definitionsArray[i].text
            );
            console.log("\n");
          }
          return;
        }
      } else {
        console.log("No definitions found for the word");
      }
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
      return;
    });
};

module.exports = getDefinition;
