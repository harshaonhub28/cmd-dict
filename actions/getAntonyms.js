//api path for fetching synonyms
let apiPath = "/relatedWords";
const request = require("../request");

//function to fetch synonyms
const getAntonyms = word => {
  request(apiPath, word)
    .then(response => {
      let responseArray = JSON.parse(response);

      if (responseArray.length) {
        let antonyms = [];
        //console.log(responseArray);

        //Getting synonyms
        for (let i = 0; i < responseArray.length; i++) {
          if (responseArray[i].relationshipType === "antonym") {
            antonyms = responseArray[i].words;
            break;
          }
        }

        if (antonyms.length) {
          console.log(`Antonyms for the word '${word}':`);
          //console.log(synonyms);
          antonyms.forEach(antonym => {
            console.log(antonym);
          });
        } else {
          console.log("No antonyms found");
        }
      } else {
        console.log("No Related words found");
      }
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
    });
};

module.exports = getAntonyms;
