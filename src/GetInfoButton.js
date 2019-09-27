import React, { Component } from "react";

class GetInfoButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button style={{ backgroundColor: "#282B28" }} onClick={this.props.handleClick}>
        <p>{this.props.title}</p>
      </button>
    );
  }
}

export default GetInfoButton;
