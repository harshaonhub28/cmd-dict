//api path for examples of a word
let apiPath = "/examples";
const request = require("../request");

//function to fetch examples for a word
const getExamples = word => {
  request(apiPath, word)
    .then(response => {
      let examples = JSON.parse(response).examples;

      if (examples.length) {
        console.log(`Examples for the word '${word}:'`);

        for (let i = 0; i < examples.length; i++) {
          console.log("Example-" + (i + 1) + ": " + examples[i].text);
          console.log("\n");
        }
      } else {
        console.log(`No examples found for the word '${word}'`);
      }
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
    });
};

module.exports = getExamples;
