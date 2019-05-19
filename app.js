const request = require("./request");
const Definition = require("./actions/getDefinitions");
const Synonyms = require("./actions/getSynonyms");
const Antonyms = require("./actions/getAntonyms");

//fetching the command line arguments
const cmd = process.argv[2];
//queried word
const word = process.argv[3];

console.log("Word:", word);

switch (cmd) {
  case "def":
    Definition(word);
    break;

  case "syn":
    Synonyms(word);
    break;

  case "ant":
    Antonyms(word);
    break;

  default:
    console.log("Command not found");
}
