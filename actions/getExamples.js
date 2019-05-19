//api path for examples of a word
let apiPath = "/examples";
const request = require("../request");

//function to fetch examples for a word
const getExamples = word => {
  return request(apiPath, word)
    .then(response => {
      let examples = JSON.parse(response).examples;

      if (examples.length) {
        console.log(`Examples for the word '${word}':`);

        for (let i = 0; i < examples.length; i++) {
          console.log("Example-" + (i + 1) + ": " + examples[i].text);
          console.log("\n");
        }
        return;
      } else {
        console.log(`No examples found for the word '${word}'`);
        return;
      }
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
      return;
    });
};

module.exports = getExamples;
