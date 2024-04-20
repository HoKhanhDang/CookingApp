import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Recipes from '../Recipe/Recipe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import showRecipeScreen from '../Recipe/ShowRecipe';

const RecipesList = [
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
class SeeMore extends React.Component {
  render() {
    return (
        <View style={[styles.conMain]}>
          <Text style={[styles.textTitle]}>Trending</Text>
          <ScrollView contentContainerStyle={[styles.scroll]}>
            {RecipesList.map((recipe, index) => (
              <Recipes
                key={index}
                recipeName={recipe.recipeName}
                recipeImage={recipe.recipeImage}
                navigation={this.props.navigation}
              />
            ))}
          </ScrollView>
        </View>
    );
  }
}

const Stack = createNativeStackNavigator();
export default class SeeMoreDetail extends React.Component{
  render(){
    return(
        <Stack.Navigator>
          <Stack.Screen
            name="countScreen"
            component={SeeMore}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="showRecipeScreen"
            component={showRecipeScreen}
            options={{
              navigation: this.props.navigation,
              headerStyle: {
                backgroundColor: '#F87469',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
    );
  }
}


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

  conMain: {
    padding: 10,
    marginBottom:60

  },
  scroll: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

