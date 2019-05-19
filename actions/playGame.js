//api path for word of the day
let apiPath = "/randomWord";
const request = require("../request");

const Dict = require("./getFullDict");

const Definition = require("./getDefinitions");
const RelatedWords = require("./getRelatedWords");

const rl = require("readline");

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

//promisifying readline
const userInput = question => {
  return new Promise((resolve, reject) => {
    readline.question(question, answer => {
      resolve(answer);
    });
  });
};

//method to check answer
const checkAnswer = (word, guess) => {
  if (word === guess) {
    console.log("Congrats..You guessed it right!");
    return true;
  } else {
    return false;
  }
};

//method to return an anagram
const jumbleWord = word => {
  let charArray = word.split("");

  for (let i = 0; i < charArray.length; i++) {
    let j = Math.floor(Math.random() * charArray.length);
    let tmp = charArray[j];
    charArray[j] = charArray[i];
    charArray[i] = tmp;
  }

  let jumbledWord = charArray.join("");
  console.log(`Jumbled word: ${jumbledWord}`);
  return jumbledWord;
};

//method for a user to try
const userTry = async word => {
  //asking the user input
  let guess = await userInput("Guess the word\n");

  //checking the answer
  if (!checkAnswer(word, guess)) {
    //further options
    let userOption = await userInput(
      "Type 1 to try again\nType 2 for a hint\nType 3 to quit\n"
    );

    if (userOption == 1) {
      //user tries again
      userTry(word);
    } else if (userOption == 2) {
      //displaying a hint
      let hintChoice = Math.floor(Math.random() * 3 + 1);

      if (hintChoice == 1) {
        await Definition(word, true);
      } else if (hintChoice == 2) {
        await RelatedWords(word, "both", true);
      } else {
        await jumbleWord(word);
      }

      //asking the user again after hint
      userTry(word);
    } else if (userOption == 3) {
      //user quits
      console.log(`The correct word is ${word}`);
      await Dict(word);
    }
  }
};

const game = async () => {
  //fetching a random word
  request(apiPath)
    .then(async response => {
      let word = JSON.parse(response).word;

      let hintChoice = Math.floor(Math.random() + 1);

      //printing a definition or a related word
      if (hintChoice === 0) {
        await Definition(word, true);
      } else {
        await RelatedWords(word, "both", true);
      }

      /* //asking the user input
      let guess = await userInput("Guess the word\n");

      //checking the answer
      if (!checkAnswer(word, guess)) {
        console.log("wrong");
      } */

      userTry(word);
    })
    .catch(error => {
      console.log(error.error, error.statusCode);
      return;
    });
};

module.exports = game;
