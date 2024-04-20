import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native-elements';
import api from '../api/api.js';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Account from './Account/Account';
import Cart from './Cart/Cart';
import Mainn from './HomeMain/MainScreen';
import {Component} from 'react';

//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Main"
            activeColor="#e91e63"
            activeIndicatorStyle={{backgroundColor: 'tomato', height: 45}}
            barStyle={{
              backgroundColor: '#F87469',
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Tab.Screen
              name="Main"
              component={Mainn}
              options={{
                tabBarLabel: null,
                tabBarIcon: ({color}) => (
                  <Image
                    style={[styles.icon]}
                    source={require('../assets/icons/home.png')}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Cart"
              component={Cart}
              options={{
                tabBarLabel: null,
                tabBarIcon: ({color}) => (
                  <Image
                    style={[styles.icon]}
                    source={require('../assets/icons/cart.png')}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Account}
              options={{
                tabBarLabel: null,
                tabBarIcon: ({color}) => (
                  <Image
                    style={[styles.icon]}
                    source={require('../assets/icons/profileicon.png')}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
