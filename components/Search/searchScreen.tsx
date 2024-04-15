import {Component, ReactNode} from 'react';
import {search} from '../../api/api';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Recipes from '../Recipe/Recipe';
import {Image} from 'react-native-elements';

const RecipesList = [
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {recipeName: 'Gà 45kg', recipeImage: require('../../assets/icons/ga.png')},
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
];

export default class searchScreen extends Component {
  render(): ReactNode {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.searchBar}>
            <TextInput
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              placeholder="Search for anything"
              style={{
                alignSelf: 'center',
                backgroundColor: '#F0F0F0',
                height: 40,
                width: '100%',
              }}
            />
          </View>
          <TouchableOpacity>
            <Image
              style={{height: 40, width: 40, margin: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/622/622669.png',
              }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.textTitle}>Result</Text>

        <ScrollView contentContainerStyle={[styles.results]}>
          {RecipesList.map((recipe, index) => (
            <Recipes
              key={index}
              recipeName={recipe.recipeName}
              recipeImage={recipe.recipeImage}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  results: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  //text
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  textContent: {
    fontSize: 15,
    color: 'black',
  },
  textNomal: {
    fontSize: 15,
    color: 'black',
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
});
