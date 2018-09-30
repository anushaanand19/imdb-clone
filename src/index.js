import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header/Header";
import ListComponent from "./ListComponent/ListComponent";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: []
    };
  }

  componentWillMount() {
    fetch("https://www.omdbapi.com/?apikey=2265d192&s=iron")
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.Response === "True") {
          this.setState({ movieList: data.Search });
        }
      });
  }

  OnType = event => {
    console.log(event.target.value);
    fetch("https://www.omdbapi.com/?apikey=2265d192&s=" + event.target.value)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.Response === "True") {
          this.setState({ movieList: data.Search });
        }
      });
  };

  render() {
    return (
      <div>
        <Header OnSearching={this.OnType} />
        <div className="container">
          <ListComponent movies={this.state.movieList} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
