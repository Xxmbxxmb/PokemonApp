import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { SinglePokemon } from '../interfaces/pokemonInterface';
import { FadeInImage } from './UseFadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

interface Props {
  pokemon: SinglePokemon;
}

const { width, height } = Dimensions.get('window');

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigator = useNavigation();

  useEffect(() => {
    const getColor = async () => {
      const uri = pokemon.picture;
      const result = await ImageColors.getColors(uri, { fallback: 'grey' });
      let color;

      if (!isMounted.current) return;

      switch (result.platform) {
        case 'android':
          color = result.dominant;
          break;
        case 'ios':
          color = result.background;
          break;
        default:
          throw new Error('Unexpected platform key');
      }
      setBgColor(color || 'grey');
    };
    getColor();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigator.navigate('Pokemon' as never, { pokemon, color: bgColor } as never )
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: width * 0.43,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={{ ...styles.name }}>
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={{ ...styles.pokebola }}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={{ ...styles.pokemonImage }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    // overflow: 'hidden',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -7,
    bottom: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: 0.5,
    overflow: 'hidden',
  },
});
