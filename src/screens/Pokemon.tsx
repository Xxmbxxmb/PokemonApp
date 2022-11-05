import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/UseFadeInImage';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { PokemonDetail } from '../components/PokemonDetail';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

export const Pokemon = ({ navigation, route }: Props) => {
  const { pokemon, color } = route.params;
  const { id, name } = pokemon;
  const { top } = useSafeAreaInsets();
  const { isLoading, pokeDetail } = usePokemonDetail(id);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{ ...styles.backButton, top: top + 10 }}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
        <Text style={{ ...styles.pokemonName, top: top + 45 }}>
          {name[0].toUpperCase() + name.slice(1) + '\n#' + id}
        </Text>

        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetail pokemon={pokeDetail} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    top: 20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
