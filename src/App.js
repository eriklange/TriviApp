import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionBody from './QuestionBody';

function App() {
  return (
    <div className="TriviApp">
      <header className="header">
        TriviApp
      </header>

      <body className="body">
        <QuestionBody/>
      </body>

      <footer className="footer">
        Written by Erik Erdahl Lange
      </footer>
    </div>
  );
}

export default App;
