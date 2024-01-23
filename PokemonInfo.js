import React, { useState, useEffect } from 'react';

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'http://localhost:3002/api/v2/pokemon/pikachu';
        const response = await fetch(`${proxyUrl}/${apiUrl}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


};

export default PokemonInfo;
