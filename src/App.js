import React from "react";
import "./App.css";
import ContentBody from "./ContentBody";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>TriviApp</h1>
      </header>
      <body className="body">
        <ContentBody />
      </body>
      <footer className="footer">
        <h2>© Erik Erdahl Lange</h2>
      </footer>
    </div>
  );
}

export default App;
