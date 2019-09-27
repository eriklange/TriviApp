import React, { Component } from "react";

class GetInfoButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("hi");
    this.props.handleClick("yoyo");
  }

  render() {
    return (
      <button style={{ backgroundColor: "#282B28" }} onClick={this.onClick}>
        <p>{this.props.title}</p>
      </button>
    );
  }
}

export default GetInfoButton;
