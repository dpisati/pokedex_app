import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import DashBoard from "./components/layout/DashBoard";
import Pokemon from "./components/pokemon/Pokemon";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
