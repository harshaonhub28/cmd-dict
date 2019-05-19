const request = require("./request");
const Definition = require("./actions/getDefinitions");
//const Synonyms = require("./actions/getSynonyms");
//const Antonyms = require("./actions/getAntonyms");
const RelatedWords = require("./actions/getRelatedWords");
const Examples = require("./actions/getExamples");
const FullDict = require("./actions/getFullDict");
const WOTD = require("./actions/getWordOfTheDay");

const game = require("./actions/playGame");

//fetching the command line arguments
let cmd = process.argv[2];
//queried word
let word = process.argv[3];

//if no command and word - word of the day
if (!cmd && !word) {
  //WORD OF THE DAY
  cmd = "WOTD";
}

//if no word is given with a valid command
if (cmd !== "WOTD" && cmd !== "play" && !word) {
  cmd = "No word";
}

if (cmd !== "No word") {
  //In case word of the day - the word is displayed from word of the day function
  if (cmd !== "WOTD" && cmd !== "play") {
    console.log("Word:", word);
  }

  switch (cmd) {
    case "def":
      Definition(word);
      break;

    case "syn":
      //Synonyms(word);
      RelatedWords(word, "synonym", false);
      break;

    case "ant":
      RelatedWords(word, "antonym", false);
      //Antonyms(word);
      break;

    case "ex":
      Examples(word);
      break;

    case "dict":
      FullDict(word);
      break;

    case "WOTD":
      WOTD();
      break;

    case "play":
      game();
      break;

    default:
      console.log("Command not found");
  }
} else {
  console.log("Please enter a valid word");
}
