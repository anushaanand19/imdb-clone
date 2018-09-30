import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    return (
      <div className="Listitem" title={this.props.title}>
        <img className="avatar" alt="" src={this.props.poster} />
        <div className="movie-details">
          <div className="Name titles-in-bold" title={this.props.title}>
            {this.props.title}
          </div>
          <div className="Profile">
            <div>{this.props.year}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListItem;
