
import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonData = async (pokemonName: string) => {
  try {
    const response = await axios.get(`${POKEAPI_URL}/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do Pokémon:', error);
    throw error;
  }
};
