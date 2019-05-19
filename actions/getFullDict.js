const Definition = require("./getDefinitions");
const Synonyms = require("./getSynonyms");
const Antonyms = require("./getAntonyms");
const Examples = require("./getExamples");

//method to display full dict of a word
const getFullDict = async word => {
  //await is used so that the order of details for the word are as written below
  await Definition(word);
  await Synonyms(word);
  await Antonyms(word);
  await Examples(word);
};

module.exports = getFullDict;
