import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [pokemonData, setPokemonData] = useState(null)
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  async function fetchPokemon(id: number) {
    try {
      const res = await fetch(BASE_URL + id)
      const data = await res.json()
      setPokemonData(data)
    } catch (error) {
      console.error("Error fetching Pokémon data:", error)
    }
  }
  
  useEffect(() => {
    fetchPokemon(1)
  }, [])

  console.log(pokemonData)

  return (
    <>
    <div className='bg-amber-800'></div>
    </>
  )
}

export default App
