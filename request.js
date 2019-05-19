const request = require("request-promise");

let apiHost = "https://fourtytwowords.herokuapp.com";
let apiKey =
  "4eba28d583d1bd7f3068e4bd3cbab17ef3605725c1feb1f0bd82f2150887abb7a9b47ece3886b7867a72816eb7acfdc06b6af9929cf1388a97cb32d570ef9d284beb28b2cbeb15f8ed2518e18e3ddd25";

const performRequest = (apiPath, word) => {
  //composing the url
  let url;

  if (apiPath === "/randomWord") {
    url = apiHost + "/words" + apiPath + `?api_key=${apiKey}`;
  } else {
    url = apiHost + "/word/" + word + apiPath + `?api_key=${apiKey}`;
  }

  //api call
  return request(url);
};

module.exports = performRequest;
