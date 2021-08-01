import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import "./styles/reset.css";
import "./styles/main.css";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Work = lazy(() => import("./pages/Work/Work"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

export default class App extends Component {
  obj = { name: "bottom" };
  render() {
    return (
      <Router>
        <Navigation title={"Matthew St. Onge"} />
        <Suspense fallback={<div>Loading...</div>}>
          <div style={{padding: '4% 6%'}}>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/work"><Work /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
          </div>
        </Suspense>
        Main content
        <Footer title={"FOOT"} />
      </Router>
    );
  }
}
