import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import showRecipeScreen from '../Recipe/showRecipe';
import seeMoreScreen from './seeMoreScreen';
import Recipes from '../Recipe/Recipe';
import searchScreen from '../Search/searchScreen';
import seeMoreTips from '../Tips/seeMoreTips';
import preparationDetail from '../Recipe/preparationDetail';

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
];



class mainScreen extends Component {
  render() {
    return (
      <View style={[styles.conMain]}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 10,
            }}>
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('search')}>
              <Image
                style={{height: 40, width: 40, margin: 10}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/622/622669.png',
                }}
              />
            </TouchableOpacity>
          </View>

         
          <View style={[styles.conEachRow]}>
            <View style={[styles.conTitle]}>
              <Text style={[styles.textTitle]}>Trending</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('seemore')}>
                <Text>See more</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={[styles.scroll]}>
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


          <View style={[styles.conEachRow]}>
            <View style={[styles.conTitle]}>
              <Text style={[styles.textTitle]}>Recently</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('seemore')}>
                <Text>See more</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[styles.scroll]}>
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
            <View style={[styles.conEachRow]}>
              <View style={[styles.conTitle]}>
                <Text style={[styles.textTitle]}>Category</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('seemore')}>
                  <Text>See more</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.scroll]}>
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
        </ScrollView>      
      </View>
    );
  }
}

const Stack = createNativeStackNavigator();
export default class Main extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="mainScreens"
          component={mainScreen}
          options={{
            navigation: this.props.navigation,
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerRight: () => (
              <Image
                style={[styles.icon,{height:25,width:25}]}
                source={require('../../assets/icons/menu.png')}
              />
            ),
            headerLeft: () => (
              <Image
                style={[styles.icon]}
                source={require('../../assets/icons/logo.png')}
              />
            ),          
            headerTitle: () => (
              <Text style={{alignSelf:'center',color: 'white'}}>Welcome Quân!</Text>
            ),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="seemore"
          component={seeMoreScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="detail"
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
        <Stack.Screen
          name="search"
          component={searchScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="seemoretips"
          component={seeMoreTips}
          options={{
            headerStyle: {
              backgroundColor: '#F87469',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="detailPreparation"
          component={preparationDetail}
          options={{
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
  container: {},
  //text
  textTitle: {
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
  conHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#fa9e51',
  },
  icon: {
    width: 45,
    height: 45,
  },
  search: {
    fontSize: 18,
    color: 'black',
    borderRadius: 45,
    backgroundColor: 'white',
  },
  conMain: {
    padding:10
  },
  conEachRow: {
    width: '100%',
    height: 250,
    marginVertical:5

  },
  conTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
  },
  scroll: {
    marginTop:5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  conFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#fa9e51',
  },

  // Recipe
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

});
