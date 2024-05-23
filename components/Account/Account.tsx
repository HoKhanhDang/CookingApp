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
import { DocumentData, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { set } from 'firebase/database';
import Login from '../Authentication/Login';

const stack = createNativeStackNavigator();


function ShowRecipe({name,img,id}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.showRecipe} onPress={()=>navigation.navigate("detail", { courseID: id })}>
        <View style={{height:'70%',alignItems:'center'}}>
            <Image 
              style={{height: 170, width: 170,borderRadius: 5}}
              source={{uri: img}}
            />
        </View>
        <View style={{height:'30%',padding:5}}>
            <Text style={styles.textRecipe}>{name}</Text>
        </View>
    </TouchableOpacity>
  );
}

function tab1({navigation}) {
  const [coursesID, setCoursesID] = useState<DocumentData>([]);
  const [coursesDisplay, setCoursesDisplay] = useState<DocumentData>([]);

  const userContext = useContext(UserContextInsideScreen);

  async function getCoursesSavedIDs() {
    try {
      const q = query(
        collection(FIREBASE_STORE, "savedRecipes"),
        where("email", "==", userContext.email)
      );
  
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => doc.data());
  
      setCoursesID(list);
    } catch (e) {
      console.error("Error getting courses", e);
    }
  }
  async function getCoursesDisplay() {
    const list: DocumentData = [];
    for (let i = 0; i < coursesID.length; i++) {
      console.log(coursesID[i].courseID);
      const q = query(
        collection(FIREBASE_STORE, "courses"),
        where("id", "==",  coursesID[i].courseID)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
    }
    console.log(list);
    setCoursesDisplay(list);  
  }

  useEffect(() => {
    getCoursesSavedIDs();
  }, []); 

  useEffect(() => {
    console.log(coursesID.length);
    if (coursesID.length > 0) {
      getCoursesDisplay();
    }
  }, [coursesID]); 

  return (
          <>     
              <ScrollView style={styles.scrollRecipes}>               
                  <View style={styles.wrap}>
                      {coursesDisplay.map((course) => {
                        return <ShowRecipe name={course.name} img={course.img} id={course.id} />;
                      } )}                      
                  </View>                                 
              </ScrollView>
          </>         
  );
}
function tab2() { 
  const [coursesID, setCoursesID] = useState<DocumentData>([]);
  const [coursesDisplay, setCoursesDisplay] = useState<DocumentData>([]);

  const userContext = useContext(UserContextInsideScreen);

  async function getCoursesSavedIDs() {
    try {
      const q = query(
        collection(FIREBASE_STORE, "doneRecipes"),
        where("email", "==", userContext.email)
      );
  
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => doc.data());
  
      setCoursesID(list);
    } catch (e) {
      console.error("Error getting courses", e);
    }
  }
  async function getCoursesDisplay() {
    const list: DocumentData = [];
    for (let i = 0; i < coursesID.length; i++) {
      console.log(coursesID[i].courseID);
      const q = query(
        collection(FIREBASE_STORE, "courses"),
        where("id", "==",  coursesID[i].courseID)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
    }
    console.log(list);
    setCoursesDisplay(list);  
  }

  useEffect(() => {
    getCoursesSavedIDs();
  }, []); 

  useEffect(() => {
    console.log(coursesID.length);
    if (coursesID.length > 0) {
      getCoursesDisplay();
    }
  }, [coursesID]); 
  return (
          <>     
              <ScrollView style={styles.scrollRecipes}>               
                  <View style={styles.wrap}>
                      {coursesDisplay.map((course) => {
                        return <ShowRecipe name={course.name} img={course.img} id={course.id} />;
                      })}                             
                  </View>
                                 
              </ScrollView>
          </>   
  );
}


const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#F4F4F8' }}
    style={{ backgroundColor: '#FF724C' }}
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
    { key: 'second', title: 'Completed' },
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
  ),[]; 
 
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
              style={{backgroundColor: '#F4F4F8',width: '100%', height: '100%'}}
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
        console.log(doc.data().name);
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });
  });

  return (
    <UserProvider user={name}>
      <stack.Navigator>
        <stack.Screen name="Account" component={Account} options={{ headerShown: false }}/>
        <stack.Screen name="EditAccount" component={EditAccount}
          options={{
      
        
            headerStyle: {
              backgroundColor: '#FF724C',
            },

          }} 
        />
        <stack.Screen
            name="detail"
            component={showRecipeScreen}
            options={{
    
              headerShown: false,
              headerStyle: {
                backgroundColor: '#FF724C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
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
    backgroundColor: '#F4F4F8'
  },
  icon:{
    width: 40,
    height:40
  },
  search:{
    fontSize: 18,
    color: 'white',
    borderRadius: 45,
    backgroundColor: '#F4F4F8',
  },
  conMain:{
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FF724C',

  },
  conTop:{
    height:'40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF724C',
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
    backgroundColor: '#F4F4F8',
    borderTopColor: 'white',

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
    color: '#2A2C41',
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 10,
  },
  text:{
    color: '#F4F4F8',
  },
  textNomo:{
    color: '#2A2C41',
    fontSize: 20,
    fontWeight: '600',
  },
  textRecipe:{
    color: '#2A2C41',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  conFooter:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#FF724C'
  },
  scrollRecipes:{
    flex:1,
    width: '100%',
    padding: 10,
    backgroundColor: '#F4F4F8',
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