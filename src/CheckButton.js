import React, { Component } from "react";

class CheckButton extends Component {
  constructor(props) {
    super(props);
    this.buttonState = this.props.state;
    this.state = { checked: this.buttonState.checked };
    this.onClick = this.onClick.bind(this);

  }

  onClick() {
    this.props.state.checked = !this.props.state.checked;
    this.setState(state => ({
      checked: !state.checked
    }));

    this.checked = this.state.checked;
  }

  isChecked() {
    return this.checked;
  }

  render() {
    return (
      <button
        style={{ backgroundColor: this.buttonState.bgColor() }}
        onClick={this.onClick}>
          <p style={{ color: this.buttonState.txtColor() }}>{this.buttonState.text}</p>
      </button>
    );
  }
}
export default CheckButton;
