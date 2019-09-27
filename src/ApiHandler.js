import TextStorage from "./TextStorage";
const axios = require("axios");

class ApiHandler {
  constructor(textField) {
    this.textField = textField;

    this.apiCalls = {}
    this.apiCalls["Programming Jokes"] = {
      format: this.progJoke,
      link: "https://sv443.net/jokeapi/category/programming"
    }

    this.apiCalls["Useless Facts"] = {
      format: this.uselessFact,
      link: "https://uselessfacts.jsph.pl/random.json?language=en"
    }

    this.apiCalls["Dad Jokes"] = {
      format: this.dadJoke,
      link: "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes"
    }
  }

  getNewInfo(buttonStatus) {
    let joke = buttonStatus[Math.floor(Math.random() * buttonStatus.length)];
    let jokeInfo = this.apiCalls[joke.text];

    return axios
      .get(jokeInfo.link)
      .then(response => {
        return jokeInfo.format(response.data);
      })
  }

  uselessFact(data) {
    return new TextStorage(data.text, null)
  }

  dadJoke(data) {
    return new TextStorage(data.setup, data.punchline);
  }

  progJoke(data) {
    let newText = typeof data.joke !== 'undefined' ? data.joke : data.setup;
    return new TextStorage(newText, data.delivery);
  }
}

export default ApiHandler;
