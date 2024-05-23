import React, {Component, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from 'react-native';
import mainScreen from '../HomeMain/Home';
import { UserContextInsideScreen } from '../Authentication/InsideScreen';
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy, limit} from "firebase/firestore";
import { db } from '../../firebase/firebase';

export type recipesInfo = {
  recipeName: string;
  recipeImage: any;
  navigation: any;
  id: any;
};

export default function Recipes({ recipeName, recipeImage, navigation, id}) {
  const user = useContext(UserContextInsideScreen);
  async function savedRecentlyCourse(email, courseID) {
    try {
      const tipsRef = collection(db, "recentlyCourses");
        const q = query(tipsRef, orderBy("id", "desc"), limit(1));
        const querySnapshot = await getDocs(q);
        const maxTip = querySnapshot.docs[0];
        const maxId = maxTip.data().id;
        const newTip = {
          id: maxId + 1,
          courseID: courseID,
          email: email,
        };
        await addDoc(tipsRef, newTip);
    } catch (error) {
      console.error('Error saving recently viewed course:', error);
    }
  }
  const handlePress = () => {
    savedRecentlyCourse(user.email, id);
    navigation.navigate('detail', { courseID: id });
  };
  
  return (
    <TouchableOpacity
      style={[styles.con]}
      onPress={handlePress}
    >
      <Image style={[styles.image]} source={{uri:recipeImage}} />
      <Text style={[styles.text]}>{recipeName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  con: {
    margin: 5,
    height: 230,
    width: 180,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
