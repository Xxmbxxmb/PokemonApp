import { useState, useEffect } from 'react';
import { api } from '../api/api';
import { PokemonFull } from '../interfaces/pokemonInterface';

export const usePokemonDetail = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokeDetail, setPokeDetail] = useState<PokemonFull>(
    {} as PokemonFull,
  );

  const loadDetail = async () => {
    const response = await api.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokeDetail(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadDetail();
  }, []);

  return {
    isLoading,
    pokeDetail,
  };
};
