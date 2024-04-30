import React, {Component} from 'react';
import {
  Image,
  Text,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import showRecipeScreen from '../Recipe/showRecipe';
import seeMoreScreen from './seeMoreScreen';
import Recipes from '../Recipe/Recipe';
import searchScreen from '../Search/searchScreen';
import seeMoreTips from '../Tips/seeMoreTips';
import preparationDetail from '../Recipe/preparationDetail';
import Home from './Home';

const Stack = createNativeStackNavigator();
export default class Main extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="mainScreens"
          component={Home}
          options={{
            navigation: this.props.navigation,
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerRight: () => (
              <Image
                style={[{height:25,width:25}]}
                source={require('../../assets/icons/menu.png')}
              />
            ),
            headerLeft: () => (
              <Image
                style={[{width: 45,height: 45}]}
                source={require('../../assets/icons/logo.png')}
              />
            ),          
            headerTitle: () => (
              <Text style={{alignSelf:'center',color: 'white'}}>Welcome Quân!</Text>
            ),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="seemore"
          component={seeMoreScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="detail"
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
        <Stack.Screen
          name="search"
          component={searchScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="seemoretips"
          component={seeMoreTips}
          options={{
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="detailPreparation"
          component={preparationDetail}
          options={{
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