import React, { Component } from "react";
import Navigation from "./Navigation";

export default class App extends Component {
    obj = {name: "bottom"};
  render() {
    return (
      <div>
        <Navigation title={"NAV"} />
        Main content
        <Footer footer={obj}/>
      </div>
    );
  }
}
