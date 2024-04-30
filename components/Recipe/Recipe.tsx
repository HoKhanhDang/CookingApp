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
};

export default function Recipes({ recipeName, recipeImage, navigation }) {
  return (
    <TouchableOpacity
      style={[styles.con]}
      onPress={() => navigation.navigate('detail')}
    >
      <Image style={[styles.image]} source={recipeImage} />
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
