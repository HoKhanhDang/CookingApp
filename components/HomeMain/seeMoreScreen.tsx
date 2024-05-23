import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Recipes from '../Recipe/Recipe';
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';


export default function SeeMore({navigation}) {
  const [cities, setCities] = useState([]);
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
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle]}>Trending</Text>
      <ScrollView contentContainerStyle={[styles.scroll]}>
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
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F4F4F8',
    marginHorizontal: 15,
  },
  //text
  textTitle: {
    marginVertical:10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF724C',
  },
  textContent: {
    fontSize: 15,
    color: 'black',
  },
  textNomal: {
    fontSize: 15,
    color: 'black',
  },
  scroll: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

