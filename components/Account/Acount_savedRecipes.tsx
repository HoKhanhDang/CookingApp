import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import showRecipeScreen from '../Recipe/showRecipe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type recipe = {
    nameRecipe: String;
    deleteImage: any
}

const RecipesList = [
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    deleteImage: require('../../assets/icons/delete.png'),
  },
];

class SavedRecipe extends Component<recipe>{
  render() {
    const {nameRecipe, deleteImage, navigation} = this.props;
    return (
      <View style={[styles.conRecipe]}>
            <TouchableOpacity style={[styles.touchName]} onPress={() => navigation.navigate('showRecipeScreen')}>
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
}

class Account_savedRecipes extends React.Component{
render(){
    return (
        <View style={[styles.conMain]}>
          <ScrollView contentContainerStyle={[styles.scroll]}>
          {RecipesList.map((recipe, index) => (
            <SavedRecipe
              key={index}
              nameRecipe={recipe.recipeName}
              deleteImage={recipe.deleteImage}
              navigation={this.props.navigation}
            />
          ))}
          </ScrollView>
        </View>
    );
  }
}
const Stack = createNativeStackNavigator();
export default class Account_savedRecipes_Na extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Account_savedRecipes"
          component={Account_savedRecipes}
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

