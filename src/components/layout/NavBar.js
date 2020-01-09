import React, { Component } from "react";
import PokedexLogo from "../../pictures/pokedex_logo.png";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="pokedex">
          <div className="back_bar"></div>
          <a href="http://localhost:3000/#/">
            <img
              src={PokedexLogo}
              alt="pokedex_logo"
              className="pokedex_logo"
              onClick={() => console.log("pokemon click")}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
