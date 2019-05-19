//api path for word of the day
let apiPath = "/randomWord";
const request = require("../request");

//const Definition = require("./getDefinitions");
//const Synonyms = require("./getSynonyms");
//const Antonyms = require("./getAntonyms");
//const Examples = require("./getExamples");
const Dict = require("./getFullDict");

//function to print a word of the day and its details
const getWordOfTheDay = async () => {
  request(apiPath)
    .then(response => {
      let wordOfTheDay = JSON.parse(response).word;
      console.log("Word of the day:", wordOfTheDay);

      //printing full details for word of the day
      Dict(wordOfTheDay);
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
      return;
    });
};

module.exports = getWordOfTheDay;
