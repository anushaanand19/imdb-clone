import React, { Component } from "react";
import ListComponent from "../ListComponent/ListComponent";

class Home extends Component {
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
    return <ListComponent movies={this.state.movieList} />;
  }
}
export default Home;
