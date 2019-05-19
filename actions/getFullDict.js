const Definition = require("./getDefinitions");
//const Synonyms = require("./getSynonyms");
//const Antonyms = require("./getAntonyms");
const RelatedWords = require("./getRelatedWords");
const Examples = require("./getExamples");

//method to display full dict of a word
const getFullDict = async word => {
  //await is used so that the order of details for the word are as written below
  await Definition(word, false);
  await RelatedWords(word, "both", false);
  await Examples(word);
};

module.exports = getFullDict;
