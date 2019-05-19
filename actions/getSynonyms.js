//api path for fetching synonyms
let apiPath = "/relatedWords";
const request = require("../request");

//function to fetch synonyms
const getSynonyms = word => {
  request(apiPath, word)
    .then(response => {
      let responseArray = JSON.parse(response);

      if (responseArray.length) {
        let synonyms = [];
        //console.log(responseArray);

        //Getting synonyms
        for (let i = 0; i < responseArray.length; i++) {
          if (responseArray[i].relationshipType === "synonym") {
            synonyms = responseArray[i].words;
            break;
          }
        }

        if (synonyms.length) {
          console.log(`Synonyms for the word '${word}':`);
          //console.log(synonyms);
          synonyms.forEach(synonym => {
            console.log(synonym);
            console.log("\n");
          });
        } else {
          console.log("No synonyms found");
        }
      } else {
        console.log("No Related words found");
      }
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
    });
};

module.exports = getSynonyms;
