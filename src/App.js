import './App.css';
import React, {useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(someResponse => {
      return someResponse.json();
    }).then(anotherResponse => {
      console.log(anotherResponse.results);
      // set my state variable here
      setPokemon(anotherResponse.results);
    }).catch( someErr => console.log(someErr))
  }

  return (
    <div className='App'>
      <h1>Pokemon API</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <hr />
      {/* pokemon: {JSON.stringify(pokemon)} */}
      <div>
        {
          pokemon.map( (poke, idx) => {
            return (
              <ul key={idx}>
                <li>Name: {poke.name}</li>
              </ul>
            )
          })
        }
      </div>
    </div>
  );
}


export default App;