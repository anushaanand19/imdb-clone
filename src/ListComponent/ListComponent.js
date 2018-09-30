import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";
import "./ListComponent.css";
class ListComponent extends Component {
  render() {
    var listOfMovies = [];
    listOfMovies = this.props.movies.map(movie => {
      return (
        <ListItem
          title={movie.Title}
          key={movie.imdbID}
          poster={movie.Poster}
          year={movie.Year}
        />
      );
    });

    return <div className="listMovieContainer">{listOfMovies}</div>;
  }
}
export default ListComponent;
