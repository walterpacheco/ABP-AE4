// assets/js/pokemon.js

import { data } from './data.js';

// Función para buscar un Pokémon por ID o nombre
export const buscarPokemon = (criterio, callback) => {
    setTimeout(() => {
        const resultado = data.find(pokemon => pokemon.id === criterio || pokemon.name.toLowerCase() === criterio.toLowerCase());
        callback(resultado);
    }, 1000); // Simulación de retardo con setTimeout
};

// Función para ordenar Pokémon por ID o nombre
export const ordenarPokemon = (criterio, callback) => {
    setTimeout(() => {
        let resultado;
        if (criterio === 'id') {
            resultado = [...data].sort((a, b) => a.id - b.id);
        } else if (criterio === 'name') {
            resultado = [...data].sort((a, b) => a.name.localeCompare(b.name));
        }
        callback(resultado);
    }, 1000); // Simulación de retardo con setTimeout
};
