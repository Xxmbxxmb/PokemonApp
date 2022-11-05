import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterface';
import { FadeInImage } from './UseFadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}>
      <View style={{ ...styles.container, marginTop: 370 }}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <Text
              key={type.name}
              style={{ ...styles.regularText, marginRight: 10 }}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>{pokemon.weight} lb</Text>
      </View>

      <View style={{ ...styles.container }}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      <View style={styles.container}>
        <Text style={styles.title}>Abilities</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities.map(({ ability }) => (
            <Text
              style={{ ...styles.regularText, marginRight: 10 }}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{ ...styles.container }}>
        <Text style={styles.title}>Moves</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {pokemon.moves.map(({ move }) => (
            <Text
              style={{ ...styles.regularText, marginRight: 10 }}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{ ...styles.container, paddingBottom: 70 }}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={i} style={{ flexDirection: 'row' }}>
              <Text
                style={{ ...styles.regularText, marginRight: 10, width: 150 }}>
                {stat.stat.name}
              </Text>
              <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  regularText: {
    fontSize: 17,
    color: 'black',
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
