import React, { Component } from "react";
import CheckButton from "./CheckButton";
import GetInfoButton from "./GetInfoButton";
import ApiHandler from "./ApiHandler";
import CheckButtonState from "./CheckButtonState";
import TriviaText from "./TriviaText";
import TextStorage from "./TextStorage";

class ContentBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "1"
    }

    this.apiHandler = new ApiHandler();
    this.initLayout = this.initLayout.bind(this);
    this.updateField = this.updateField.bind(this);
    this.initLayout();
  }

  initLayout() {
    this.checkedButtons = {};

    let counter = 0;

    for (const key in this.apiHandler.apiCalls) {
      var newState = new CheckButtonState(key, false);

      this.checkedButtons[key] = {
        button: <CheckButton key={counter} text={key} state={newState} />,
        btnState: newState
      }

      counter++;
    }
  }

  render() {
    return (
      <div className="body-column">
        <h3>Select what type of joke or fact you want</h3>
        <div className="body-row">
          {Object.keys(this.checkedButtons).map((key) => {
            return this.checkedButtons[key].button;
          })}
        </div>
        <TriviaText text={this.state.text} subtext={this.state.subtext}></TriviaText>
        <div className="body-row">
          <GetInfoButton
            title="Get New Trivia"
            handleClick={this.updateField}
          />
        </div>
      </div>
    );
  }

  updateField() {
    var buttonCheckedStates = Object.keys(this.checkedButtons)
      .filter((key) => {
        return this.checkedButtons[key].btnState.checked
      })
      .map((key) => {
        return this.checkedButtons[key].btnState;
      });

    if (buttonCheckedStates.length === 0) {
      this.updateFieldWithData(TextStorage.default());
    }else{
      this.apiHandler.getNewInfo(buttonCheckedStates).then(data => {
        this.updateFieldWithData(data);
      })
    }
  }

  updateFieldWithData(data){
    this.setState({
      text: data.text,
      subtext: data.subtext
    });
  }
}

export default ContentBody;