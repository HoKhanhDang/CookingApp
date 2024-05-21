import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from 'react-native';
import mainScreen from '../HomeMain/Home';

export type recipesInfo = {
  recipeName: string;
  recipeImage: any;
  navigation: any;
  id: any;
};

export default function Recipes({ recipeName, recipeImage, navigation, id}) {
  return (
    <TouchableOpacity
      style={[styles.con]}
      onPress={() => navigation.navigate('detail', { courseID: id })}
    >
      <Image style={[styles.image]} source={{uri:recipeImage}} />
      <Text style={[styles.text]}>{recipeName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  text: {
    color: 'black',
    fontSize: 18,
  },
});
