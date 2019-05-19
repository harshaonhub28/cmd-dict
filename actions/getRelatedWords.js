//api path for fetching related words
let apiPath = "/relatedWords";
const request = require("../request");

//function to fetch related words
const getRelatedWords = (word, relationshipType = "both", isGame = false) => {
  return request(apiPath, word)
    .then(response => {
      let responseArray = JSON.parse(response);

      if (responseArray.length) {
        //if both are requested, no filtering the response
        let relatedWordArray =
          relationshipType === "both"
            ? responseArray
            : responseArray.filter(resObject => {
                return resObject.relationshipType === relationshipType;
              });

        //if the game is on, then only a synonym is printed;
        //in other case, all the requested related words are printed
        if (isGame) {
          let randomIndex = Math.floor(
            Math.random() * relatedWordArray[0].words.length
          );

          if (relatedWordArray[0].relationshipType === "synonym") {
            console.log(
              `Synonym for the word: ${relatedWordArray[0].words[randomIndex]}`
            );
          } else {
            console.log(
              `Antonym for the word: ${relatedWordArray[0].words[randomIndex]}`
            );
          }
        } else {
          //not a game
          if (relatedWordArray.length) {
            if (relationshipType === "synonym") {
              //printing synonyms
              let synonyms = relatedWordArray[0].words;

              console.log(`Synonyms for the word '${word}':`);
              //console.log(synonyms);
              synonyms.forEach(synonym => {
                console.log(synonym);
                console.log("\n");
              });
              return;
            } else if (relationshipType === "antonym") {
              //printing antonyms
              let antonyms = relatedWordArray[0].words;

              console.log(`Antonyms for the word '${word}':`);
              //console.log(synonyms);
              antonyms.forEach(antonym => {
                console.log(antonym);
                console.log("\n");
              });
              return;
            } else {
              //printing all

              let synonyms = [];
              let antonyms = [];

              relatedWordArray.forEach(wordObject => {
                if (wordObject.relationshipType === "synonym") {
                  synonyms = wordObject.words;
                } else {
                  antonyms = wordObject.words;
                }
              });

              if (synonyms.length) {
                //printing synonyms
                console.log(`Synonyms for the word '${word}':`);
                //console.log(synonyms);
                synonyms.forEach(synonym => {
                  console.log(synonym);
                  console.log("\n");
                });
              } else {
                console.log("No synonyms were found");
              }

              //printing antonyms
              if (antonyms.length) {
                console.log(`Antonyms for the word '${word}':`);
                //console.log(synonyms);
                antonyms.forEach(antonym => {
                  console.log(antonym);
                  console.log("\n");
                });
                return;
              } else {
                console.log("No antonyms were found");
              }
            }
          } else {
            if (relationshipType === "synonym") {
              console.log("..No synonyms were found");
            } else if (relationshipType === "antonym") {
              console.log("..No antonyms were found");
            }
          }
        }
      } else {
        console.log("No Related words found");
        return;
      }
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
      return;
    });
};

module.exports = getRelatedWords;
