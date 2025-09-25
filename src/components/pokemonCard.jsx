import React from 'react'

export default function PokemonCard({pokemonData}) {
    if (!pokemonData || !pokemonData[0]) {
        return (
            <div className="bg-white rounded-lg shadow-lg p-4">
                <p className="text-center text-gray-500">Loading...</p>
            </div>
        );
    }   

    const pokemon = pokemonData[pokemonData.length - 1]; // Obtener el último Pokémon añadido

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
            <img 
                src={pokemon.sprites.front_shiny} 
                alt={`${pokemon.name} sprite`}
                className="w-48 h-48 mx-auto object-contain" 
            />
            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold capitalize mb-2">
                    {pokemon.name}
                </h2>
                <p className="text-gray-600 mb-2">#{String(pokemon.id).padStart(3, '0')}</p>
                <div className="flex gap-2 justify-center">
                    {pokemon.types.map((type, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
                        >
                            {type.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>        
    )
}