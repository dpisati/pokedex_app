import React, { Component } from "react";
import styled from "styled-components";
import spinner from "../../pictures/spinner.gif";
import { Link } from "react-router-dom";

const Sprite = styled.img`
  width: 10em;
  height: 10em;
  display: none;
`;

const Card = styled.div`
  cursor: pointer;
  -moz-user-select: none;
  -website-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="result">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className="">
            {/* <h5 className="">{this.state.pokemonIndex}</h5> */}
            <div className="spinner_div">
              {this.state.imageLoading ? (
                <img
                  alt="spinner"
                  src={spinner}
                  style={{ width: "2em", height: "2em" }}
                  className=""
                />
              ) : null}
              <Sprite
                className="onepokemon_img"
                onLoad={() => this.setState({ imageLoading: false })}
                onError={() => this.setState({ toManyRequests: true })}
                src={this.state.imageUrl}
                alt={this.state.id}
                style={
                  this.state.toManyRequests
                    ? { display: "none" }
                    : this.state.imageLoading
                    ? null
                    : { display: "block" }
                }
              ></Sprite>
              {this.state.toManyRequests ? (
                <h6 className="mx-auto">
                  <span className="">To many requests...</span>
                </h6>
              ) : null}
              {/* <h6 className="">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map(
                    letter =>
                      letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(" ")}
              </h6> */}
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}

export default PokemonCard;
