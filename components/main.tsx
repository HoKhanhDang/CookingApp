import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, Button, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native-elements';
import api from './api.js';
import RecipeScreen from './recipeScreen.tsx';

  
const Stack = createNativeStackNavigator();

export default class App extends React.Component{
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                                  
                    <Stack.Screen 
                        name="Details" 
                        component={RecipeScreen} 
                        options={{title:'Detail',headerTitleAlign:'center'}}

                    />            

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
