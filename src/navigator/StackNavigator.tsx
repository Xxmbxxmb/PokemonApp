import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Pokemon } from '../screens/Pokemon';
import { useAppSelector } from '../redux/hooks';
import { SinglePokemon } from '../interfaces/pokemonInterface';

export type RootStackParams = {
  Home: undefined;
  Pokemon: { pokemon: SinglePokemon; color: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const { colors } = useAppSelector(state => state.theme.theme);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.background },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
