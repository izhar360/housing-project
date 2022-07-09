import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/404";
import { Route, Switch } from "react-router-dom";
import Navbarr from "./components/Navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./pages/singleProject";
import Contact from "./pages/contact";
import Prices from "./pages/prices";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbarr />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about/" component={About} />
                  <Route exact path="/projects/:slug" component={Project} />
                  <Route exact path="/prices/:slug" component={Prices} />
                  <Route exact path="/contact" component={Contact} />
                  <Route component={Error} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
