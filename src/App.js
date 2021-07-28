import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default class App extends Component {
    obj = {name: "bottom"};
  render() {
    return (
      <div>
        <Navigation title={"NAV"} />
        Main content
        <Footer title={"FOOT"}/>
      </div>
    );
  }
}
