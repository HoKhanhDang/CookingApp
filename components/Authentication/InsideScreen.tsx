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
import { createContext, useContext } from 'react';

import { UserContext} from '../main';

export const UserContextInsideScreen = createContext(null);
const UserProvider = ({ children, user }) => {
  return <UserContextInsideScreen.Provider value={user}>{children}</UserContextInsideScreen.Provider>;
};


const Tab = createMaterialBottomTabNavigator();
export default function InsideScreen() {
  
    const user = useContext(UserContext);
    console.log("dang o insideC"+ user?.email);

    return (
      <UserProvider user={user}>
          <SafeAreaProvider>
            <Tab.Navigator
              initialRouteName="Main"
              activeColor="#FF724C"
              activeIndicatorStyle={{backgroundColor: '#FF724C', height: 50}}
              barStyle={{
                backgroundColor: 'white',
                height: 70,
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
      </UserProvider>

      
    );
  }

  const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
    },
  });