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

type recipe = {
    nameRecipe: String;
    deleteImage: any
}

const RecipesList = [
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    //recipeImage: require('../../assets/icons/ga.png'),
  },
];

function SavedRecipe({nameRecipe, deleteImage}: recipe): React.JSX.Element {
      return (
          <View style={[styles.conRecipe]}>
            <TouchableOpacity style={[styles.touchName]}>
            <Text style={[styles.textNomal]}>{nameRecipe}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={[{height: 40, width: 40}]}
                    source={deleteImage}
                />
            </TouchableOpacity>
            
          </View>
      );
  }

function Account_savedRecipes(): React.JSX.Element {

    return (
        <View style={[styles.conMain]}>
          <ScrollView contentContainerStyle={[styles.scroll]}>
            <SavedRecipe nameRecipe={RecipesList[0].recipeName} deleteImage={RecipesList[0].deleteImage}/>
            <SavedRecipe nameRecipe={RecipesList[0].recipeName} deleteImage={RecipesList[0].deleteImage}/>
            <SavedRecipe nameRecipe={RecipesList[0].recipeName} deleteImage={RecipesList[0].deleteImage}/>
            <SavedRecipe nameRecipe={RecipesList[0].recipeName} deleteImage={RecipesList[0].deleteImage}/>
            <SavedRecipe nameRecipe={RecipesList[0].recipeName} deleteImage={RecipesList[0].deleteImage}/>
            <SavedRecipe nameRecipe={RecipesList[0].recipeName} deleteImage={RecipesList[0].deleteImage}/>
            <SavedRecipe nameRecipe={RecipesList[0].recipeName} deleteImage={RecipesList[0].deleteImage}/>
          </ScrollView>
        </View>
    );
  
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
  conRecipe:{
    marginTop: 15,
    flexDirection: 'row',
    width: '90%',
    height: 70,
    borderRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: '#fa9e51',
  },
  touchName:{
    backgroundColor: 'lightgrey',
    height: '80%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
});

export default Account_savedRecipes;
