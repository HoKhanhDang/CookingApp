import React, { Component } from 'react';

import account_savedRecipes from './Acount_savedRecipes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import showRecipeScreen from '../Recipe/showRecipe';
import Account from './Account';

const Stack = createNativeStackNavigator();
export default class AccountStack extends Component{
  render() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="AccountScreen"
          component={Account}     
        />
        <Stack.Screen
          name="showRecipeScreen"
          component={showRecipeScreen}
          options={{
            navigation: this.props.navigation,
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        </Stack.Navigator>
  );
}
}