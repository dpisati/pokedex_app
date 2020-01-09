import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import OnePokemon from "./OnePokemon";
import Pokedex from "../../pictures/pokedex_backgroup.png";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=20",
    oneUrl: "",
    pokemon: null,
    pokemonOn: false,
    onePokemon: null,
    onePokeUrl: "",
    input: ""
  };

  resetState() {
    this.setState({
      url: "https://pokeapi.co/api/v2/pokemon/?limit=20",
      oneUrl: "",
      pokemon: null,
      pokemonOn: false,
      onePokemon: null,
      onePokeUrl: "",
      input: ""
    });
  }

  async pokemonOn() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
    this.setState({ pokemonOn: true });
  }

  getPokemon() {
    if (this.state.pokemon) {
      return (
        <div className="row">
          {this.state.pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="loading_div">
          <h1 className="loading">Loading Pokemon...</h1>
        </div>
      );
    }
  }

  inputChange(input) {
    const inputValue = input.target.value.toLowerCase();
    const onePokeUrl = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`;
    this.setState({ oneUrl: onePokeUrl });
  }

  async searchPokemon() {
    const res = await axios.get(this.state.oneUrl);
    this.setState({
      onePokemon: res.data,
      onePokeUrl: `https://pokeapi.co/api/v2/pokemon/${res.data.id}/`
    });
  }

  getOnePokemon() {
    if (this.state.onePokemon) {
      return (
        <div className="pokemon_result">
          <OnePokemon
            key={this.state.onePokemon.name}
            name={this.state.onePokemon.name}
            url={this.state.onePokeUrl}
          />
        </div>
      );
    } else {
      return (
        <div className="loading_div">
          {/* <h1 className="loading">Error to search Pokemon...</h1> */}
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="pokedex_div">
          <div
            // src={Pokedex}
            className="pokedex_background"
            alt="pokedex_background"
          ></div>

          <div>{this.getOnePokemon()}</div>
          <div className="input_div">
            <input
              type="text"
              onChange={this.inputChange.bind(this)}
              placeholder="Search..."
              className="input_pokemon"
            />
            <button
              className="input_button"
              onClick={this.searchPokemon.bind(this)}
            >
              Submit
            </button>
          </div>
        </div>
        <button className="pokemonOn_btn" onClick={this.pokemonOn.bind(this)}>
          Get Pokemons
        </button>

        <div className={this.state.pokemonOn ? "loads" : "loads_off"}>
          {this.getPokemon()}
        </div>
      </React.Fragment>
    );
  }
}
