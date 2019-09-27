import React from "react";
const axios = require("axios");

class ApiHandler {
  getNewInfo() {}

  getCatFact() {
    axios
      .get("https://sv443.net/jokeapi/category/programming")
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  updateTextField(text){

  }
}

export default ApiHandler;
