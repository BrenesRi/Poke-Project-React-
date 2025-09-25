import { useState, useEffect, use } from 'react'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  async function fetchPokemon(id) {
    try {
      const res = await fetch(BASE_URL + id)
      const data = await res.json()
      setPokemonData(prevPokemonData => [...prevPokemonData, data])
    } catch (error) {
      console.error("Error fetching Pokémon data:", error)
    }
  }

  const fetchAllPokemon = async () => {
    for (let i = 1; i <= 151; i++) {
      await fetchPokemon(i)
    }
  }

  useEffect(() => {
    fetchAllPokemon()
  }, [])

  useEffect(() => {
    console.log(pokemonData)
  }, [pokemonData])

   return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-700 py-8">
      <div className="container mx-auto px-4">
        <h1 className='text-4xl text-white font-bold text-center mb-12 drop-shadow-lg'>
          SHINY POKE CARDS: DEMO
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} pokemonData={[pokemon]} />
          ))}
        </div>
      </div>  
    </div>
  )
}

export default App
