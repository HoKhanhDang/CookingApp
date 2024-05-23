import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { Menu } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import showRecipeScreen from '../Recipe/showRecipe';
import seeMoreScreen from './seeMoreScreen';
import Recipes from '../Recipe/Recipe';
import searchScreen from '../Search/searchScreen';
import seeMoreTips from '../Tips/seeMoreTips';
import preparationDetail from '../Recipe/preparationDetail';
import Home from './Home';

const Stack = createNativeStackNavigator();

import {FIREBASE_AUTH} from '../../firebase/firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { UserContextInsideScreen } from '../Authentication/InsideScreen';


export default function Main({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const user = React.useContext(UserContextInsideScreen);

  return (
    <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="mainScreens"
            component={Home}
            options={{
              navigation: navigation,
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <View>
                  <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                      <TouchableOpacity onPress={()=>openMenu()}>
                          <Image
                            style={[{height:45,width:45,borderRadius:50}]}
                            source={{uri:user.avatar}}
                          />
                      </TouchableOpacity>
                    
                  }
                  >
                    <Menu.Item onPress={()=>FIREBASE_AUTH.signOut()} title="Sign out" />
                  </Menu>
                </View>
                
              ),
              headerLeft: () => (
                <Image
                  style={[{ width: 45, height: 45 }]}
                  source={require('../../assets/icons/logo.png')}
                />
              ),
              headerTitle: () => (
                <Text style={{ alignSelf: 'center', color: '#FF724C',fontSize:18,fontWeight:'bold' }}>Welcome {user.name} !!!</Text>
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
              headerTitle: "Trending Recipes",
            }}
          />
          <Stack.Screen
            name="detail"
            component={showRecipeScreen}
            options={{
              headerShown: false,
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
              headerTitle: 'Results',
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
              headerTitle: null,
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
    </PaperProvider>
    
  );
}
