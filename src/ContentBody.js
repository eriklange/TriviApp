import React, { Component } from "react";
import CheckButton from "./CheckButton";
import ApiHandler from "./ApiHandler";
import CheckButtonState from "./CheckButtonState";
import TriviaText from "./TriviaText";
import TextStorage from "./TextStorage";

class ContentBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: TextStorage.default().text
    }

    this.apiHandler = new ApiHandler();
    this.initLayout = this.initLayout.bind(this);
    this.updateTextField = this.updateTextField.bind(this);
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
        <div className="body-row">
          {this.getCheckButtons()}
        </div>
        <TriviaText text={this.state.text} subtext={this.state.subtext}></TriviaText>
        <div id="check-buttons" className="body-row">

          <button style={{ backgroundColor: "#282B28" }} onClick={this.updateTextField}>
            <p>{"Get New Trivia"}</p>
          </button>
        </div>
      </div>
    );
  }

  getCheckButtons() {
    return Object.keys(this.checkedButtons).map((key) => {
      return this.checkedButtons[key].button;
    });
  }

  updateTextField() {
    var buttonCheckedStates = Object.keys(this.checkedButtons)
      .filter((key) => {
        return this.checkedButtons[key].btnState.checked
      })
      .map((key) => {
        return this.checkedButtons[key].btnState;
      });

    if (buttonCheckedStates.length === 0) {
      this.updateFieldWithData(TextStorage.default());
    } else {
      this.apiHandler.getNewInfo(buttonCheckedStates).then(data => {
        this.updateFieldWithData(data);
      })
    }
  }

  updateFieldWithData(data) {
    this.setState({
      text: data.text,
      subtext: data.subtext
    });
  }
}

export default ContentBody;