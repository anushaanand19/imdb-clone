import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="searchcontainer">
        <div className="container">
          <img className="logo" src="/images/logo.png" />
          <input
            type="text"
            className="searchbox"
            placeholder="Search.."
            onChange={this.props.OnSearching}
          />
        </div>
      </div>
    );
  }
}

export default Header;
