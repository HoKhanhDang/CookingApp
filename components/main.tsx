import * as React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Component, useEffect, useState} from 'react';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import 'react-native-gesture-handler';
import InsideScreen from './Authentication/InsideScreen';
import { User } from 'realm';

import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase/firebase';

//const Stack = createNativeStackNavigator();
const StackApp = createStackNavigator();
const StackLogin = createStackNavigator();



export default function App(){
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        });
    }, []);

    return (
      <NavigationContainer>
          <StackApp.Navigator initialRouteName='Login'>

            
            {
                user == null?(
                  <>
                    <StackApp.Screen name="Login" component={Login} options={{headerShown:false}}/>
                    <StackApp.Screen name="Register" component={Register} options={{headerShown:false}}/>
                  </>
                    
                ):(
                    <StackApp.Screen name="Main" component={InsideScreen} options={{headerShown:false}}/>
                )
            }
            
      
          </StackApp.Navigator>
      </NavigationContainer>
    );
  
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
