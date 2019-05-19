const request = require("./request");
const definition = require("./actions/getDefinitions");

//fetching the command line arguments
const cmd = process.argv[2];
//queried word
const word = process.argv[3];

console.log("Word:", word);

switch (cmd) {
  case "def":
    definition(word);
    break;

  default:
    console.log("Command not found");
}
