import {Component, ReactNode, useState} from 'react';
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
import { RouteProp, useRoute } from '@react-navigation/native';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

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
type RootStackParamList = {
  search: { courseList: any };
};
type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'search'>;
const SearchScreen = ({navigation}) => {
  const route = useRoute<DetailRecipeRouteProp>();
  const { courseList } = route.params;
  const [searchText, setSearchText] = useState('');
  const [courseSearch, setCourseSearch] = useState([]);

  console.log('courseList:', courseList);

  async function searchCoursesByName(searchTerm) {
    try {
      const db = getFirestore();
      const coursesRef = collection(db, "courses");
      const q = query(coursesRef, where("name", ">=", searchTerm), where("name", "<=", `${searchTerm}\uf8ff`));
      const querySnapshot = await getDocs(q);
      const courseList = querySnapshot.docs.map((doc) => doc.data());
      setCourseSearch(courseList);
      return courseList;
    } catch (e) {
      console.error("Error getting courses:", e);
      throw e;
    }
  }

  const handleSearch = () => {
    searchCoursesByName(searchText);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity onPress={handleSearch}>
          <Image
            style={{ height: 40, width: 40, margin: 10 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/622/622669.png',
            }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.textTitle}>Result</Text>

      <ScrollView contentContainerStyle={[styles.results]}>
      {courseSearch.map((recipe, index) => (
          <Recipes
            key={index}
            recipeName={recipe.name}
            recipeImage={recipe.img}
            navigation={navigation}
            id={recipe.id}
          />
        ))}
        {courseList.map((recipe, index) => (
          <Recipes
            key={index}
            recipeName={recipe.name}
            recipeImage={recipe.img}
            navigation={navigation}
            id={recipe.id}
          />
        ))}
        
      </ScrollView>
    </View>
  );
};



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

export default SearchScreen;