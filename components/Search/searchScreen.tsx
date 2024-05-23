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


type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'search'>;
const SearchScreen = ({navigation}) => {
  const route = useRoute<DetailRecipeRouteProp>();
  const { courseList } = route.params;
  const [searchText, setSearchText] = useState('');
  const [courseSearch, setCourseSearch] = useState([]);

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
    <View style={styles.container}>
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
  container:{
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  results: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  //text
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF724C',
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