import React, { Component } from "react";
import Navigation from "./Navigation";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation title={"NAV"} />
        Main content
        <Footer />
      </div>
    );
  }
}
