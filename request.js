const request = require("request-promise");

const performRequest = url => {
  request(url)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

module.exports = performRequest;
