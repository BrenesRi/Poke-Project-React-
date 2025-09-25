import { useState, useEffect, use } from 'react'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const requests = [];
      for (let i = 1; i <= 151; i++) {
        requests.push(fetch(BASE_URL + i).then(res => res.json()));
      }
      const results = await Promise.all(requests);
      setPokemonData(results);
    };
    fetchAllPokemon();
  }, []);

  return (
    <div className="min-h-screen bg-emerald-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className='text-4xl text-emerald-50 font-bold text-center mb-12 drop-shadow-lg'>
          SHINY POKE CARDS: DEMO
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} pokemonData={pokemon} />
          ))}
        </div>
      </div>  
    </div>
  )
}
export default App
