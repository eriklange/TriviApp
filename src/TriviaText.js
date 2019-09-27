import React, { Component } from 'react'

class TriviaText extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div id="trivia-text-field" className="body-row">
          <h2>{this.props.text}</h2>
          <h3>{this.props.subtext}</h3>
        </div>
      );
    }
  }
  
  export default TriviaText;