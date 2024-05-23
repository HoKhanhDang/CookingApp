import React, {Component, useContext, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Touchable,
  View,
} from 'react-native';
import DetailRecipe from './DetailRecipe';
import Ingredients from './Ingredients';
import Preparation from './Preparation';
import TipsScreen from './Tips';
import RelateRecipes from './RelateRecipes';
import { Image, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';

import { UserContextInsideScreen } from '../Authentication/InsideScreen';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { FIREBASE_STORE } from '../../firebase/firebase';
import { set } from 'firebase/database';

const windowWidth = Dimensions.get('window').width;

type RootStackParamList = {
  detail: { courseID: string };
};
type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'detail'>;

export default function ShowRecipe({ navigation }) {
  const route = useRoute<DetailRecipeRouteProp>();
  const { courseID } = route.params;

  const [isLike, setIsLike] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const  user = useContext(UserContextInsideScreen);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(FIREBASE_STORE, "savedRecipes", user.email + courseID);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      } catch (error) {
        console.error('Error finding document', error);
      }
    };
    const fetchData2 = async () => {
      try {
        const docRef = doc(FIREBASE_STORE, "doneRecipes", user.email + courseID);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setIsDone(true);
        } else {
          setIsDone(false);
        }
      } catch (error) {
        console.error('Error finding document', error);
      }
    };
    
    fetchData();
    fetchData2();
  }, []);

  const onLike = async () => {
    setIsLike(!isLike);
    console.log("user" + user?.email)
    try {
      await setDoc(doc(FIREBASE_STORE, "savedRecipes", user.email + courseID), {
        email: user.email,
        courseID: courseID,
      });
      console.log('Liked');
    }
    catch (error) {
      console.log('not like');
    }
  
  }
   
  const onDislike = async() => { 
    setIsLike(!isLike);

    try {
      const docRef = doc(FIREBASE_STORE, "savedRecipes", user.email+courseID);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error disliking', error);
    }
  }


  const onDone = async () => {
    setIsDone(!isDone);
    try {
      await setDoc(doc(FIREBASE_STORE, "doneRecipes", user.email + courseID), {
        email: user.email,
        courseID: courseID,
      });
      console.log('Done');
    }
    catch (error) {
      console.log('not done');
    }
  }
  const onNotDone = async() => { 
    setIsDone(!isDone);

    try {
      const docRef = doc(FIREBASE_STORE, "doneRecipes", user.email+courseID);
      await deleteDoc(docRef);
      console.log('Not Done');
    } catch (error) {
      console.error('Error not done', error);
    }
  }

  return (
    <View style={{flex: 1,backgroundColor:"#F4F4F8"}}>
      <View style={styles.navTop}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image style={[styles.icon]} source={require('../../assets/icons/back.png')}/>
          </TouchableOpacity>

          {isLike ? 
          (
            <TouchableOpacity onPress={()=>onDislike()}>
              <Image style={[styles.icon]} source={require('../../assets/icons/heart.png')}/>
            </TouchableOpacity>
          ) 
          :
          (
            <TouchableOpacity onPress={()=>onLike()}>
              <Image style={[styles.icon]} source={require('../../assets/icons/unheart.png')}/>
            </TouchableOpacity>
          )}
          
      </View>
      <ScrollView style={{position:'relative'}}> 
        <View style={styles.container}>
          <DetailRecipe />
          <Ingredients />
          <Preparation navigation={navigation} />
          <TipsScreen navigation={navigation} />
        </View>
        <View style={styles.doneRecipe}>
    
              {isDone ?
              (
                <TouchableOpacity style={styles.done}  onPress={()=>onNotDone()}>
                  <Image style={[styles.iconBottom]} source={require('../../assets/icons/congratulation.png')}/>
                  <Text style={{fontSize:22,color:"white"}}>I have done this course !!!</Text>  
                </TouchableOpacity>

              )
              :(
                <TouchableOpacity style={styles.notDone}  onPress={()=>onDone()}>              
                  <Text style={{fontSize:25,color:"white"}}>I will do it later.</Text>  
                  <Image style={[styles.iconBottom]} source={require('../../assets/icons/bake.png')}/>
                </TouchableOpacity>
              )}
                     
        </View >
        
      </ScrollView>

      

  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'black',
    paddingHorizontal: 15,
    marginTop:10,
    marginBottom: 100,
  }, 
  navTop:{
    paddingHorizontal:15,
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  icon:
  {
    height: 30,
    width: 30,
  },
  iconBottom:
  {
    height: 100,
    width: 100,
  },
  doneRecipe:{
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    marginBottom:50
  },
  done:{
    flexDirection: 'row',
    width:windowWidth,
    height: 150,
    justifyContent: "space-evenly",
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor:'#44B678',
  },
  notDone:{
    flexDirection: 'row',
    width:windowWidth,
    height: 150,
    justifyContent: "space-evenly",
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor:'grey',
  },

});
