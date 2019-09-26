import React, { Component } from "react";
import CheckButton from "./CheckButton";
import GetInfoButton from "./GetInfoButton";
import ApiHandler from "./ApiHandler";

class ContentBody extends Component {
  constructor(props) {
    super(props);
    this.tmp = this.tmp.bind(this);
    this.apiHandler = new ApiHandler();
  }

  render() {
    return (
      <div className="body-column">
        <h3>Select what type of joke or fact you want</h3>
        <div className="body-row">
          <CheckButton initActive={false} title="Programming Jokes" />
          <CheckButton initActive={true} title="Dad Jokes" />
          <CheckButton initActive={false} title="Useless Facts" />
        </div>
        <div className="body-row">Here comes the boom</div>

        <div className="body-row">
          <GetInfoButton
            title="Get New Trivia"
            handleClick={this.apiHandler.getCatFact}
          />
        </div>
      </div>
    );
  }
  tmp(txt) {
    console.log(txt);
  }
}

export default ContentBody;
