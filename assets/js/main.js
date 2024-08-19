import { buscarPokemon, ordenarPokemon } from './pokemon.js';

document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar la búsqueda de Pokémon
    const manejarBusqueda = () => {
        const input = document.getElementById('criterio').value;
        const esNumero = !isNaN(input);

        const criterio = esNumero ? parseInt(input) : input;
        
        buscarPokemon(criterio, (resultado) => {
            const resultadosDiv = document.getElementById('resultados');
            if (resultado) {
                // Mostramos el resultado en el div de resultados
                resultadosDiv.innerHTML = `<p>Pokémon encontrado: <strong>${resultado.name}</strong>, Tipos: ${resultado.types.join(', ')}</p>`;
                console.log('Contenido del div resultados:', resultadosDiv.innerHTML);
            } else {
                // Mostramos un mensaje si no se encuentra el Pokémon
                resultadosDiv.innerHTML = `<p>Pokémon no encontrado.</p>`;
                console.log('Contenido del div resultados:', resultadosDiv.innerHTML);
            }
        });
    };

    // Función para manejar el ordenamiento de Pokémon
    const manejarOrdenamiento = (criterio) => {
        ordenarPokemon(criterio, (resultado) => {
            const resultadosDiv = document.getElementById('resultados');
            resultadosDiv.innerHTML = '<h3>Pokémon ordenados:</h3><ul>';
            resultado.forEach(pokemon => {
                resultadosDiv.innerHTML += `<li>ID: ${pokemon.id}, Nombre: ${pokemon.name}, Tipos: ${pokemon.types.join(', ')}</li>`;
            });
            resultadosDiv.innerHTML += '</ul>';
            console.log('Contenido del div resultados (ordenado):', resultadosDiv.innerHTML);
        });
    };

    // Eventos de los botones
    document.getElementById('buscarBtn').addEventListener('click', manejarBusqueda);
    document.getElementById('ordenarPorId').addEventListener('click', () => manejarOrdenamiento('id'));
    document.getElementById('ordenarPorNombre').addEventListener('click', () => manejarOrdenamiento('name'));
});
