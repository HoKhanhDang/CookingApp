import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import DetailRecipe from './DetailRecipe';
import Ingredients from './Ingredients';
import Preparation from './Preparation';
import TipsScreen from './Tips';
import RelateRecipes from './RelateRecipes';


export default function ShowRecipe({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DetailRecipe />
        <Ingredients />
        <Preparation navigation={navigation} />
        <RelateRecipes />
        <TipsScreen navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'black',
    paddingHorizontal: 15,
  }, 
});
