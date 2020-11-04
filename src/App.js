import React, { useState } from "react";
import { useEffect } from "react";
import PokemonList from "./components/PokemonList";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PikaLoad from "./components/LoadingPokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchData = async () => {
      const fetchResults = await fetch(pokemonUrl);
      const data = await fetchResults.json();
      await getResultsUrlData(data.results);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  const getResultsUrlData = async (urlData) => {
    const eachPokemonData = await Promise.all(
      urlData.map(async (ep) => {
        const pokemonRecord = await getPokemon(ep.url);
        return pokemonRecord;
      })
    );
    setPokemon(eachPokemonData);
    // console.log(eachPokemonData);
  };
  const getPokemon = async (url) => {
    const fetchUrlDataOfEachPokemon = await fetch(url);
    const fetchUrlDataOfEachPokemonJson = await fetchUrlDataOfEachPokemon.json();
    // console.log(fetchUrlDataOfEachPokemonJson);
    return fetchUrlDataOfEachPokemonJson;
  };
  console.log(pokemon);

  return (
    <div>
      <Container>
        <Row>
          {loading ? (
            <PikaLoad />
          ) : (
            pokemon.map((pokemon, i) => {
              return (
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  lg={4}
                  md={4}
                >
                  <PokemonList pokemon={pokemon} key={i} />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
