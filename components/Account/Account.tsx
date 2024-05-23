import React, { Component, createContext, useContext, useEffect, useState } from 'react';
import {  Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions,} from 'react-native';
import account_savedRecipes from './Acount_savedRecipes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import showRecipeScreen from '../Recipe/showRecipe';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ScrollView } from 'react-native-gesture-handler';
import EditAccount from './EditAccount';

const windowWidth = Dimensions.get('window').width;

import { useNavigation } from '@react-navigation/native';

import { UserContextInsideScreen } from '../Authentication/InsideScreen';
import { FIREBASE_STORE } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { set } from 'firebase/database';
import Login from '../Authentication/Login';

const stack = createNativeStackNavigator();

function ShowRecipe() {
  return (
    <View style={styles.showRecipe}>
        <View style={{height:'70%',alignItems:'center'}}>
            <Image 
              style={{height: 170, width: 170,borderRadius: 5}}
              source={require('../../assets/icons/ga.png')}
            />
        </View>
        <View style={{height:'30%',padding:5}}>
            <Text style={styles.textRecipe}>Recipe sadasd Nasadasdsameasdsadsad</Text>
        </View>
    </View>
  );
}

function tab1({navigation}) {
  return (
          <>     
              <ScrollView style={styles.scrollRecipes}>               
                  <View style={styles.wrap}>
                      <ShowRecipe />    
                      <ShowRecipe />
                      <ShowRecipe />                            
                  </View>
                    
                  
              </ScrollView>
          </>         
  );
}
function tab2() { 
  return (
          <>     
              <ScrollView style={styles.scrollRecipes}>               
                  <View style={styles.wrap}>
                      <ShowRecipe />    
                      <ShowRecipe />
                      <ShowRecipe />                            
                  </View>
                                 
              </ScrollView>
          </>   
  );
}


const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'pink' }}
    style={{ backgroundColor: 'black' }}
  />
);

const renderScene = SceneMap({
  first: tab1,
  second: tab2,
});

function Account({navigation}){
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Saved' },
    { key: 'second', title: 'Liked' },
  ]);

  const [account, setAccount] = useState({});

  const navigationn = useNavigation();
  const userContext = useContext(UserContextInsideScreen);

  useEffect(() => {
    const userRef = doc(FIREBASE_STORE, "accounts", userContext.email);
    getDoc(userRef).then((doc) => {
      if (doc.exists()) {
          setAccount(doc.data());
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });
  }
 );
 
  return (
      
      <View style={[styles.conMain]}>
        
        <View style={[styles.conTop]}>
            <Image 
              style={[styles.picture]}
              source={{uri: account.avatar}}
            />
       
            <Text style={[styles.textName,styles.text]}>{account.name}</Text>
            <View style={[styles.conOfLike]}>
                <Text style={[styles.textNomo,styles.text]}>Like: 0</Text>
                <Text style={[styles.textNomo,styles.text, styles.margin]}>Cart: 1</Text>
            </View>
            <TouchableOpacity style={{position: 'absolute',top: 30, right: 50}} onPress={()=>navigationn.navigate('EditAccount')}>
              <Image 
              style={[{width: 50, height: 50}]}
              source={require('../../assets/icons/setting.png')}
              />
            </TouchableOpacity>
            
        </View>

        <View style={[styles.conBot]}>   
            <TabView
              renderTabBar={renderTabBar}
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: Dimensions.get('window').width  }}
              style={{backgroundColor: 'white',width: '100%', height: '100%'}}
            />
        </View>
      </View>
  );
}

export const UserContextAcc = createContext(null);
const UserProvider = ({ children, user }) => {
  return <UserContextAcc.Provider value={user}>{children}</UserContextAcc.Provider>;
};

export default function AccountStack() {
  const userContext = useContext(UserContextInsideScreen);
  const [name, setName] = useState('');

  useEffect(() => {
    const userRef = doc(FIREBASE_STORE, "accounts", userContext.email);
    getDoc(userRef).then((doc) => {
      if (doc.exists()) {
        setName(doc.data().name);
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });
  });

  return (
    <UserProvider user={name}>
      <stack.Navigator>
        <stack.Screen name="Account" component={Account} options={{ headerShown: false }}/>
        <stack.Screen name="EditAccount" component={EditAccount} />
      </stack.Navigator>
    </UserProvider>
      
  );
}

const styles = StyleSheet.create({
  conHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#fa9e51'
  },
  icon:{
    width: 40,
    height:40
  },
  search:{
    fontSize: 18,
    color: 'white',
    borderRadius: 45,
    backgroundColor: 'white',
  },
  conMain:{
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',

  },
  conTop:{
    height:'40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderTopStartRadius: 100,
    borderTopEndRadius: 100,
    backgroundColor: 'black',
  },
  conOfLike:{
    flexDirection: 'row',
  },
  picture:{
    height: 150,
    width: 150,
  },
  conBot:{
    height: '60%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: 'black',
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderEndStartRadius: 100,
    borderEndEndRadius: 100,

  },
  conSave:{
    margin: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  margin:{
    marginLeft: 20,
  },
  touchOpa:{
    margin: 10,
    height: 50,
    width: 300,
    borderRadius: 20,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  textName:{
    color: 'black',
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 10,
  },
  text:{
    color: 'white',
  },
  textNomo:{
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  textRecipe:{
    color: 'white',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  conFooter:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#fa9e51'
  },
  scrollRecipes:{
    flex:1,
    width: '100%',
    padding: 10,
    backgroundColor: 'black',
  },
  wrap:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    width: '100%',
  
   
  }, 
  showRecipe:{
    alignItems:'center',
    width: (windowWidth/2)-15,
    height: 250,
    marginBottom: 15,
  
  },
});

