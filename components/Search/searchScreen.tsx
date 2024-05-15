import {Component, ReactNode} from 'react';
import {search} from '../../firebase/api';
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
    "name": " ",
    "category": "Dessert",
    "detailContent": "Decadent chocolate cake made with rich cocoa powder, butter, sugar, and eggs.",
    "like": 200,
    "img": "https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/5.jpg?alt=media&token=2b4896c7-f030-41ef-9c28-626fa79b91a5"}
];

export default class SearchScreen extends Component {
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
              recipeName={recipe.name}
              recipeImage={recipe.img}
              navigation={null}
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
