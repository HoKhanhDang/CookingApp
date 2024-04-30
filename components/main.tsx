import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
} from 'react-native';
import {Image} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Account from './Account/AccountRoute';
import Cart from './Cart/Cart';
import Home from './HomeMain/Home';
import {Component} from 'react';
import HomeRoute from './HomeMain/HomeRoute';

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
              component={HomeRoute}
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
