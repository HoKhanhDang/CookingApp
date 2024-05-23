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

const RecipesList = [
  {
    "id": 1,
    "name": "Spaghetti Carbonara",
    "category": "Italian",
    "detailContent": "A classic Italian pasta dish made with eggs, cheese, bacon, and pepper.",
    "like": 100,
    "img": "https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/1.jpg?alt=media&token=8bf357c6-b1ba-4c4c-b7cf-431c67492895"},
  {
    "id": 2,
    "name": "Chicken Curry",
    "category": "Indian",
    "detailContent": "A flavorful Indian dish made with chicken, curry spices, and coconut milk.",
    "like": 150,
    "img": "https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/2.jpg?alt=media&token=ff822dc4-4839-4205-9926-0281a4253678"},
  {
    "id": 3,
    "name": "Taco Salad",
    "category": "Mexican",
    "detailContent": "A fresh and crunchy salad featuring taco-seasoned ground beef, lettuce, tomatoes, cheese, and tortilla chips.",
    "like": 80,
    "img": "https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/3.jpg?alt=media&token=224fa62b-efba-48cb-b4eb-78c623da19e8"},
  {
    "id": 4,
    "name": "Sushi Rolls",
    "category": "Japanese",
    "detailContent": "Delicious sushi rolls filled with rice, seafood, vegetables, and nori.",
    "like": 120,
    "img": "https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/4.jpg?alt=media&token=dca68982-870d-4f95-9131-23492b34151e" },
  {
    "id": 5,
    "name": "Chocolate Cake",
    "category": "Dessert",
    "detailContent": "Decadent chocolate cake made with rich cocoa powder, butter, sugar, and eggs.",
    "like": 200,
    "img": "https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/5.jpg?alt=media&token=2b4896c7-f030-41ef-9c28-626fa79b91a5"}
];

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
    <View>
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
  //text
  textTitle: {
    marginVertical:10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
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

