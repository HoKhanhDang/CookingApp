import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
} from 'react-native';
import {Image} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'react-native-gesture-handler';
import Account from '../Account/Account';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Cart/Cart';
import HomeRoute from '../HomeMain/HomeRoute';

const Tab = createMaterialBottomTabNavigator();
export default function InsideScreen() {
    return (
      <SafeAreaProvider>
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
                component={HomeRoute}
                options={{
                  tabBarLabel: null,
                  tabBarIcon: ({color}) => (
                    <Image
                      style={[styles.icon]}
                      source={require('../../assets/icons/home.png')}
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
                      source={require('../../assets/icons/cart.png')}
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
                      source={require('../../assets/icons/profileicon.png')}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
    
        </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
    },
  });