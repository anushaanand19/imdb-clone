import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header OnSearching={this.OnType} />
        <div className="container" />
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
