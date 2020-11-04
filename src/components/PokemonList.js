import React, { useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
const PokemonList = ({ pokemon }) => {
  const [pokemonColor, setPokemonColor] = useState(
    pokemon.sprites.front_default
  );
  // console.log(pokemon.moves);
  return (
    <div>
      {/* <p>
        {pokemon.moves.map((move) => {
          return <li>{move.move.name}</li>;
        })}
      </p> */}
      <Card style={{ padding: "20px 80px", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={pokemonColor}
          style={{ height: "150px", width: "150px" }}
        />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
        </Card.Body>
      </Card>
      {/* <img
        src={pokemonColor}
        onMouseOver={() => setPokemonColor(pokemon.sprites.front_shiny)}
        onMouseOut={() => setPokemonColor(pokemon.sprites.front_default)}
        alt="pokemon"
      /> */}
    </div>
  );
};

export default PokemonList;
