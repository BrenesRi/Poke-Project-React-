
import React, { useState } from 'react'

export default function PokemonCard({pokemonData}) {
    if (!pokemonData) {
        return (
            <div className="bg-white rounded-lg shadow-lg p-4">
                <p className="text-center text-gray-500">Loading...</p>
            </div>
        );
    }

    const [showBack, setShowBack] = useState(false);

    const handleFlip = () => setShowBack(prev => !prev);
    const spriteUrl = showBack
        ? pokemonData.sprites.back_shiny
        : pokemonData.sprites.front_shiny;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
            <img 
                src={spriteUrl}
                alt={`${pokemonData.name} sprite`}
                className="w-48 h-48 mx-auto object-contain" 
            />
            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold capitalize mb-2">
                    {pokemonData.name}
                </h2>
                <p className="text-gray-600 mb-2">#{String(pokemonData.id).padStart(3, '0')}</p>
                <div className="flex gap-2 justify-center mb-4">
                    {pokemonData.types.map((type, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
                        >
                            {type.type.name}
                        </span>
                    ))}
                </div>
                <button
                    onClick={handleFlip}
                    className="mt-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded shadow"
                >
                    {showBack ? 'Look Front' : 'Look Back'}
                </button>
            </div>
        </div>
    )
}