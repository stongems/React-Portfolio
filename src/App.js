import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));

export default class App extends Component {
  obj = { name: "bottom" };
  render() {
    return (
      <Router>
        <Navigation title={"NAV"} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
          </Switch>
        </Suspense>
        Main content
        <Footer title={"FOOT"} />
      </Router>
    );
  }
}
