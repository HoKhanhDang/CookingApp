import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import { getFirestore, collection, getDocs, query, where, documentId } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

const ingredients1 = [ 
    {name: 'Ingredient 1', quantity: 1, type: 'cup'},
    {name: 'Ingredient 2', quantity: 2, type: 'teaspoon'},
    {name: 'Ingredient 3', quantity: 3, type: 'tablespoon'},
    {name: 'Ingredient 4', quantity: 4, type: 'tablespoon'},
    {name: 'Ingredient 5', quantity: 5, type: 'teaspoon'},
    {name: 'Ingredient 6', quantity: 6, type: 'cup'},
    {name: 'Ingredient 7', quantity: 7, type: 'tablespoon'},
    {name: 'Ingredient 8', quantity: 8, type: 'teaspoon'},
    {name: 'Ingredient 9', quantity: 9, type: 'cup'},
  ];

  type RootStackParamList = {
    detail: { courseID: string };
  };
  type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'detail'>;
export default function Ingredients() {
  const route = useRoute<DetailRecipeRouteProp>();
  const { courseID } = route.params;
  console.log('CourseID của ingredient:', courseID);
  const [ingredients, setIngredients] = useState([]);
  async function getIngredientsForCourse(courseID) {
    try {
      // Lấy dữ liệu từ bảng coursesIngredients
      const coursesIngredientsRef = collection(db, "coursesIngredients");
      const coursesIngredientsQuery = query(coursesIngredientsRef, where("recipeID", "==", courseID));
      const coursesIngredientsSnapshot = await getDocs(coursesIngredientsQuery);
      const cities = coursesIngredientsSnapshot.docs.map((doc) => doc.data());
      // Lấy dữ liệu từ bảng ingredients
      const ingredientsRef = collection(db, "ingredients");
      const ingredientsIds = coursesIngredientsSnapshot.docs.map((doc) => doc.data().ingredientID);
      const ingredientsQuery = query(ingredientsRef, where("ingredientID", "==", ingredientsIds));
      const ingredientsSnapshot = await getDocs(ingredientsQuery);
      const cities1 = ingredientsSnapshot.docs.map((doc) => doc.data());
      // Tạo một mảng chứa các thông tin về ingredients và quantity
      const ingredients1: ((prevState: never[]) => never[]) | { name: any; type: any; quantity: any; }[] = [];
      coursesIngredientsSnapshot.docs.forEach((doc) => {
        const ingredientData = ingredientsSnapshot.docs.find((ingredientDoc) => ingredientDoc.id === doc.data().ingredientID)?.data();
        if (ingredientData) {
          ingredients1.push({
            name: ingredientData.name,
            type: ingredientData.type,
            quantity: doc.data().quantity
          });
        }
      });
      console.log(cities);
      
      setIngredients(ingredients1);
      console.log(ingredients);
      console.log(cities1);
    } catch (error) {
      console.error("Error getting ingredients for course:", error);
      return [];
    }
  }
   
  useEffect(() => {
    getIngredientsForCourse(courseID);
  }, [courseID]);
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.textTitle, {paddingVertical: 20}]}>
          Ingredients
        </Text>
  
        {ingredients1.map((ingredient, index) => (
          <View key={index}>
            <View style={styles.ingredients}>
              <Text style={styles.textContent}>{ingredient.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
                  {ingredient.quantity} {ingredient.type}
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
