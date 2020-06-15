import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Cardapio from './pages/cardapio';
import Detalhes from './pages/detalhes';
import Qr from './pages/qr';
import Inicio from './pages/inicio';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }} >
        <AppStack.Screen name="Inicio" component={Inicio} />
        <AppStack.Screen name="Detalhes" component={Detalhes} />
        <AppStack.Screen name="Cardapio" component={Cardapio} />
        <AppStack.Screen name="Qr" component={Qr} />

      </AppStack.Navigator>
    </NavigationContainer>
  );
}