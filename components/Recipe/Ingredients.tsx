import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import { getFirestore, collection, getDocs, query, where, documentId, orderBy } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';


  type RootStackParamList = {
    detail: { courseID: string };
  };
  type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'detail'>;
export default function Ingredients() {
  const route = useRoute<DetailRecipeRouteProp>();
  const { courseID } = route.params;
  console.log('CourseID của ingredient:', courseID);
  const [coursesIngredients, setCoursesIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [maxID, setMaxID] = useState(null);
  const [minID, setMinID] = useState(null);
  async function getCoursesIngredients(courseID) {
    try {
      const coursesIngredientsRef = collection(db, "coursesIngredients");
      const coursesIngredientsQuery = query(coursesIngredientsRef, where("recipeID", "==", courseID));
      const coursesIngredientsSnapshot = await getDocs(coursesIngredientsQuery);
      const cities = coursesIngredientsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sortedDocs = cities.sort((a, b) => a.id - b.id);
      setCoursesIngredients(sortedDocs);
      if (sortedDocs.length > 0) {
        setMinID(sortedDocs[0].id);
        setMaxID(sortedDocs[sortedDocs.length - 1].id);
      }
    } catch (error) {
      console.error("Error getting ingredients for course:", error);
      return [];
    }
  }

  async function getIngredientsWithinRange(minID, maxID) {
    try {
      const ingredientsRef = collection(db, "ingredients");
      const ingredientsQuery = query(
        ingredientsRef,
        where("id", ">=", minID),
        where("id", "<=", maxID),
        orderBy("id", "asc")
      );
  
      const ingredientsSnapshot = await getDocs(ingredientsQuery);
      const ingredients = ingredientsSnapshot.docs.map((doc) => ({
        id: doc.data().id,
        name: doc.data().name,
        price: doc.data().price,
        type: doc.data().type,
      }));
      
      setIngredients(ingredients)
      console.log(ingredients)
      // return ingredients;
    } catch (error) {
      console.error("Error getting ingredients:", error);
      return [];
    }
  }
   
  useEffect(() => {
    getCoursesIngredients(courseID);
  
    if (minID !== null && maxID !== null) {
      getIngredientsWithinRange(minID, maxID);
    }
  }, [courseID, minID, maxID]);
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.textTitle, {paddingVertical: 20}]}>
          Ingredients
        </Text>
  
        {ingredients.map((ingredient, index) => (
          <View key={index}>
            <View style={styles.ingredients}>
              <Text style={styles.textContent}>{ingredient.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
                  1 {ingredient.type}
                </Text>
                <TouchableOpacity
                  style={{marginLeft: 10, marginTop: 2, height: 30, width: 30}}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-add-icon-png-image_956621.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
    );
    }

    const styles = StyleSheet.create({
        textTitle: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
        },
        textContent: {
            fontSize: 15,
            color: 'black',
        },
        ingredients: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        separator: {
            height: 0.5,
            backgroundColor: 'gray',
            marginVertical: 15,
        },
    });
