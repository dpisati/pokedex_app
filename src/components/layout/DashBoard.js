import React, { Component } from "react";
import PokemonList from "../pokemon/PokemonList";

export class DashBoard extends Component {
  render() {
    return (
      <div className="row main">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}

export default DashBoard;
