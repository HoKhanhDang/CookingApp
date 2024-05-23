
import * as React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Component, createContext, useContext, useEffect, useState} from 'react';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import 'react-native-gesture-handler';
import InsideScreen from './Authentication/InsideScreen';
import { User } from 'realm';

import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH ,FIREBASE_STORE } from '../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


//const Stack = createNativeStackNavigator();
const StackApp = createStackNavigator();
const StackLogin = createStackNavigator();

//useContext
export const UserContext = createContext(null);
const UserProvider = ({ children, user }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

//Get data from firestore
async function getUserInfo(userEmail) {
  const userRef = collection(FIREBASE_STORE, "accounts");
  const q = query(userRef, where("email", "==", userEmail));
  const querySnapshot = await getDocs(q);

  const user = querySnapshot.docs.map((doc) => doc.data());
  return user[0];
}

export default function App(){
    const [user, setUser] = useState<User | null>(null);
    const [userInfo, setUserInfo] = useState({email: '', name: '', avatar: '', password: ''});

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, async(user) => {
            setUser(user);
            console.log(user?.displayName);
      
            await getUserInfo(user?.email).then((info) => {
                setUserInfo({
                  email: info?.email,
                  name: info?.name,
                  avatar: info?.avatar,
                  password: info?.password,
                });
            });              
        });
    }, []);

    useEffect(() => {
      console.log(userInfo);
    }, [userInfo]);

    return (
      <NavigationContainer>
        <UserProvider user={userInfo}>
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
        </UserProvider>
          
      </NavigationContainer>
    );
  
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
