import React from 'react';
import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';
import { useAppSelector } from '../redux/hooks';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonCard } from '../components/PokemonCard';

export const Home = () => {
  const { top } = useSafeAreaInsets();
  const { colors } = useAppSelector(state => state.theme.theme);
  const { simplePokemonList, isLoading, loadPokemons } = usePokemon();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBg}
      />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          showsVerticalScrollIndicator={false}
          //Header Component
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                color: colors.text,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          //Infinite Scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          //Activity Indicator
          ListFooterComponent={
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color={colors.text}
            />
          }
        />
      </View>
    </>
  );
};
