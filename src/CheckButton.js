import React, { Component } from "react";

const notSelected = {
  background: "#621708",
  text: "#c8f7c5"
};

const selected = {
  background: "#9BE564",
  text: "#1c2833"
};

class CheckButton extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: !this.props.initActive };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(state => ({
      checked: !state.checked
    }));
  }

  render() {
    var colorScheme = this.state.checked ? selected : notSelected;
    return (
      <button
        style={{ backgroundColor: colorScheme.background }}
        onClick={this.onClick}
      >
        <p style={{ color: colorScheme.text }}>{this.props.title}</p>
      </button>
    );
  }
}

export default CheckButton;
