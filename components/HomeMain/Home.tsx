import React, { createContext, useContext } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Recipes from '../Recipe/Recipe';
import "firebase/firestore";
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';
import { UserContext} from '../main';
import { UserContextInsideScreen } from '../Authentication/InsideScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from 'firebase/compat/app';

const windowWidth = Dimensions.get('window').width;

export const UserContextHome1 = createContext(null);
const UserProvider = ({ children, user }) => {
  return <UserContextHome1.Provider value={user}>{children}</UserContextHome1.Provider>;
};

export default function MainScreen({navigation}) {
  const user1 = useContext(UserContext);
  const user = useContext(UserContextInsideScreen);
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);

  const [recentlyCoursesID, setRecentlyCoursesID] = useState([]); // Lưu 4 giá trị đầu của recentlyCoursesID

  const [courseRecently, setCourseRecently] = useState([]);


  async function getCourses() {
    try {
      const citiesCol = collection(db, "courses");
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      setCities(cityList);
    } catch (e) {
      console.error("Error getting cities", e);
    }
  }


  async function getCoursesByID(courseID) {
    try {
      const coursesRef = collection(db, "courses");
      const q = query(coursesRef, where("id", "==", courseID));
  
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => doc.data());

      return list; 
  
    } catch (e) {
      console.error("Error getting courses:", e);
    }
  }

  async function fetchCoursesByID() {
    try {
      const courseIDs = recentlyCoursesID.map(item => item.courseID); 
      let courseList = []; 
      for (const courseID of courseIDs) {
        const course = await getCoursesByID(courseID);
        courseList.push(...course); 
      }
      setCourseRecently(courseList); 
    } catch (e) {
      console.error("Error getting courses:", e);
    }
  }

  async function getRecentlyCourses(emailUser) {
    try {
      // Lấy danh sách các khóa học gần đây của user
      const citiesRef = collection(db, "recentlyCourses");
      const q = query(citiesRef, where('email', '==', emailUser));

      const querySnapshot = await getDocs(q);
      const cities = querySnapshot.docs.map((doc) => doc.data());

      
      setRecentlyCoursesID(cities);
   
    } catch (error) {
      console.error('Error getting recently viewed courses:', error);
      throw error;
    }
  }

  useEffect(() => {
      fetchCoursesByID();
  }, [recentlyCoursesID]);


  async function searchCoursesByName(searchTerm) {
    try {
      const db = getFirestore();
      const coursesRef = collection(db, "courses");
      const q = query(coursesRef, where("name", ">=", searchTerm), where("name", "<=", `${searchTerm}\uf8ff`));
      const querySnapshot = await getDocs(q);
      const courseList = querySnapshot.docs.map((doc) => doc.data());
      navigation.navigate('search', {courseList: courseList})
      return courseList;
    } catch (e) {
      console.error("Error getting courses:", e);
      throw e;
    }
  }

  
  const handleSearch = () => {
    searchCoursesByName(searchTerm);
  };

  useEffect(() => {
    getCourses();
    getRecentlyCourses(user1.email);
    console.log('courseRecently: ', courseRecently);
  }, []);

  
  return (
    <UserProvider user={user}>
      <SafeAreaProvider>
        <View style={[styles.conMain]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 10,
              }}>
              <View style={styles.searchBar}>
                <TextInput
                  underlineColor="#FF724C"
                  activeUnderlineColor="transparent"
                  placeholder="Search for anything"
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#F4F4F8',
                    height: 40,
                    width: '100%',                  
                  }}
                  
                  onChangeText={setSearchTerm}
                    value={searchTerm}
                />
              </View>
              <TouchableOpacity onPress={handleSearch}>
                <Image
                  style={{height: 40, width: 40, marginLeft: 15}}
                  source={require('../../assets/icons/search.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{width:windowWidth-25,height:250,backgroundColor:'black',borderRadius:20,marginVertical:15}}>
                <Image style={{width:"100%",height:250,borderRadius:20}} source={require('../../assets/icons/thumb1.jpg')}/>
                <Text style={{position:'absolute',top:100,right:70,fontSize:25,color:'white',fontWeight:'bold'}}>Enjoy your cooking </Text>
            </View>

            <View style={[styles.conEachRow]}>
              <View style={[styles.conTitle]}>
                <Text style={[styles.textTitle]}>Trending</Text>
                <TouchableOpacity onPress={() => navigation.navigate('seemore')}>
                  <Text>See more</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={[styles.scroll]}>
                {cities.map((citie, index) => (
                  <Recipes
                    key={citie.id}
                    recipeName={citie.name}
                    recipeImage={citie.img}
                    navigation={navigation}
                    id={citie.id}
                  />
                ))}
              </ScrollView>
            </View>

            <View style={{width:windowWidth-25,height:250,backgroundColor:'black',borderRadius:20,marginVertical:20}}>
                <Image style={{width:"100%",height:250,borderRadius:20}} source={require('../../assets/icons/thumb2.jpg')}/>
                <Text style={{position:'absolute',bottom:20,right:60,fontSize:25,color:'white',fontWeight:'bold'}}>Practice make PERFECT</Text>
            </View>

            <View style={[styles.conEachRow]}>
              <View style={[styles.conTitle]}>
                <Text style={[styles.textTitle]}>Recently</Text>
                <TouchableOpacity onPress={() => navigation.navigate('seemore')}>
                  <Text>See more</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.scroll]}>
                {courseRecently.map((courseRecent, index) => (
                  <Recipes
                    key={index}
                    recipeName={courseRecent.name}
                    recipeImage={courseRecent.img}
                    navigation={navigation}
                    id={courseRecent.id}
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
    </SafeAreaProvider>
    </UserProvider>
  );
}



const styles = StyleSheet.create({
  container: {},
  //text
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF724C',
  },
  textContent: {
    fontSize: 15,
    color: '#2A2C41',
  },
  textNomal: {
    fontSize: 15,
    color: '#2A2C41',
  },
  //search bar
  searchBar: {
    flexDirection: 'row',
    height: 50,
    width: '70%',
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  conHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#fa9e51',
  },
  icon: {
    width: 45,
    height: 45,
  },
  search: {
    fontSize: 18,
    color: '#2A2C41',
    borderRadius: 45,
    backgroundColor: '#FF724C',
  },
  conMain: {
    backgroundColor: '#F4F4F8',
    padding:10
  },
  conEachRow: {
    width: '100%',
    height: 280,
    marginVertical:5

  },
  conTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: '#FF724C',
    fontSize: 22,
    fontWeight: '600',
  },
  scroll: {
    marginTop:5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  conFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#FF724C',
  },

  // Recipe
  con: {
    margin: 5,
    height: 200,
    width: 180,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },

});
