/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { Component } from "react";
import Form from "./components/Form/index.jsx";
import GraphTeam from "./components/GraphTeam/index.jsx";
import "./App.css";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Form />
        <GraphTeam />
      </div>
    );
  }
}

export default App;
