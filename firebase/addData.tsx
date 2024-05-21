import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy} from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Image } from "react-native-elements";


export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyARqq_7VP6CXy9B_XPMSLVhdO_ZgpzCkhw",
    authDomain: "fb-cooking-app.firebaseapp.com",
    projectId: "fb-cooking-app",
    storageBucket: "fb-cooking-app.appspot.com",
    messagingSenderId: "69778010630",
    appId: "1:69778010630:web:d5b3fb455fa4543533c987",
    measurementId: "G-E5FTXJJK6M",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [cities, setCities] = useState([]);
  const [instructions, setInstructions] = useState([]);

  async function addAccounts() {
    const accounts = [
      {
        "id": 1,
        "username": "MinhQuan",
        "email": "minhquan31102003@gmail.com",
        "password": "quan123",
        "img": "base64encodedimage",
      },
      
    ];
    const accountsCol = collection(db, 'accounts');
  
    for (const accout of accounts) {
      await addDoc(accountsCol, accout);
    }
  }

  async function addCoursesIngredients1() {
    const coursesIngredients = [
      {
        "id": 20,
        "recipeID": 1,
        "ingredientID": 20,
        "quantity": '½',
      },
      {
        "id": 21,
        "recipeID": 1,
        "ingredientID": 21,
        "quantity": 8,
      },
      {
        "id": 22,
        "recipeID": 1,
        "ingredientID": 22,
        "quantity": '2 ¼',
      },
      {
        "id": 23,
        "recipeID": 1,
        "ingredientID": 23,
        "quantity": 5,
      },
      {
        "id": 24,
        "recipeID": 1,
        "ingredientID": 24,
        "quantity": 1,
      },
      {
        "id": 25,
        "recipeID": 1,
        "ingredientID": 25,
        "quantity": 2,
      },
      {
        "id": 26,
        "recipeID": 1,
        "ingredientID": 26,
        "quantity": '¾',
      },
      {
        "id": 27,
        "recipeID": 1,
        "ingredientID": 27,
        "quantity": 4,
      },
      {
        "id": 28,
        "recipeID": 1,
        "ingredientID": 28,
        "quantity": 1,
      },
      {
        "id": 29,
        "recipeID": 1,
        "ingredientID": 29,
        "quantity": 1,
      },     
      {
        "id": 30,
        "recipeID": 1,
        "ingredientID": 30,
        "quantity": '½',
      }, 
    ];
    const accountsCol = collection(db, 'coursesIngredients');
  
    for (const accout of coursesIngredients) {
      await addDoc(accountsCol, accout);
    }
  }

  async function addCoursesIngredients2() {
    const coursesIngredients = [
      {
        "id": 1,
        "recipeID": 2,
        "ingredientID": 1,
        "quantity": 2,
      },
      {
        "id": 2,
        "recipeID": 2,
        "ingredientID": 2,
        "quantity": 1,
      },
      {
        "id": 3,
        "recipeID": 2,
        "ingredientID": 3,
        "quantity": 1,
      },
      {
        "id": 4,
        "recipeID": 2,
        "ingredientID": 4,
        "quantity": 1,
      },
      {
        "id": 5,
        "recipeID": 2,
        "ingredientID": 5,
        "quantity": 2,
      },
      {
        "id": 6,
        "recipeID": 2,
        "ingredientID": 6,
        "quantity": '½',
      },
      {
        "id": 7,
        "recipeID": 2,
        "ingredientID": 7,
        "quantity": 1,
      },
      {
        "id": 8,
        "recipeID": 2,
        "ingredientID": 8,
        "quantity": '⅓',
      },
      {
        "id": 9,
        "recipeID": 2,
        "ingredientID": 9,
        "quantity": 2,
      },
      {
        "id": 10,
        "recipeID": 2,
        "ingredientID": 10,
        "quantity": 1,
      },
      {
        "id": 11,
        "recipeID": 2,
        "ingredientID": 11,
        "quantity": 2,
      },
      {
        "id": 12,
        "recipeID": 2,
        "ingredientID": 12,
        "quantity": 1,
      },
      {
        "id": 13,
        "recipeID": 2,
        "ingredientID": 13,
        "quantity": 1,
      },
      {
        "id": 14,
        "recipeID": 2,
        "ingredientID": 14,
        "quantity": 1,
      },
      {
        "id": 15,
        "recipeID": 2,
        "ingredientID": 15,
        "quantity": '½',
      },
      {
        "id": 16,
        "recipeID": 2,
        "ingredientID": 16,
        "quantity": 1,
      },
      {
        "id": 17,
        "recipeID": 2,
        "ingredientID": 17,
        "quantity": 1,
      },
      {
        "id": 18,
        "recipeID": 2,
        "ingredientID": 18,
        "quantity": 2,
      },
      {
        "id": 19,
        "recipeID": 2,
        "ingredientID": 19,
        "quantity": 1,
      },
      
    ];
    const accountsCol = collection(db, 'coursesIngredients');
  
    for (const accout of coursesIngredients) {
      await addDoc(accountsCol, accout);
    }
  }

  async function addIngredients1() {
    const ingredients = [
      {
        "id": 20,
        "name": "whole milk",
        "type": "cup",
        "price": 1,
      },
      {
        "id": 21,
        "name": "unsalted butter, melted",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 22,
        "name": "active dry yeast",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 23,
        "name": "all-purpose flour",
        "type": "cup",
        "price": 1,
      },
      {
        "id": 24,
        "name": "baking powder",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 25,
        "name": "kosher salt",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 26,
        "name": "light brown sugar",
        "type": "cup",
        "price": 1,
      },
      {
        "id": 27,
        "name": "milk",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 28,
        "name": "vanilla extract",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 29,
        "name": "powdered sugar",
        "type": "cup",
        "price": 1,
      },
      {
        "id": 30,
        "name": "sugar",
        "type": "cup",
        "price": 1,
      },
    ];
    const savedRecipesCol = collection(db, 'ingredients');
  
    for (const accout of ingredients) {
      await addDoc(savedRecipesCol, accout);
    }
  }

  async function addIngredients2() {
    const ingredients = [
      {
        "id": 1,
        "name": "soy sauce",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 2,
        "name": "rice vinegar",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 3,
        "name": "toasted sesame oil",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 4,
        "name": "brown sugar",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 5,
        "name": "Gourmet Garden™ Ginger Stir-In Paste",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 6,
        "name": "white pepper",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 7,
        "name": "steak (about 1 pound), thinly sliced against the grain",
        "type": "flank",
        "price": 1,
      },
      {
        "id": 8,
        "name": "beef stock",
        "type": "cup",
        "price": 1,
      },
      {
        "id": 9,
        "name": "honey",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 10,
        "name": "cornstarch",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 11,
        "name": "vegetable oil, divided",
        "type": "tablespoon",
        "price": 1,
      },
      {
        "id": 12,
        "name": "medium red bell pepper, sliced",
        "type": "",
        "price": 1,
      },
      {
        "id": 13,
        "name": "medium yellow onion, sliced",
        "type": "",
        "price": 1,
      },
      {
        "id": 14,
        "name": "broccoli florets",
        "type": "cup",
        "price": 1,
      },
      {
        "id": 15,
        "name": "red pepper flakes, (optional) sliced scallion, for garnish",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 16,
        "name": "red pepper flakes, (optional)",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 17,
        "name": "sliced scallion",
        "type": "",
        "price": 1,
      },
      {
        "id": 18,
        "name": "sesame seeds",
        "type": "teaspoon",
        "price": 1,
      },
      {
        "id": 19,
        "name": "cooked rice",
        "type": "",
        "price": 1,
      },
    ];
    const savedRecipesCol = collection(db, 'ingredients');
  
    for (const accout of ingredients) {
      await addDoc(savedRecipesCol, accout);
    }
  }

  async function addSavedRecipes() {
    const savedRecipes = [
      {
        "id": 1,
        "courseID": 1,
        "accountID": 1,
      },
      {
        "id": 2,
        "courseID": 2,
        "accountID": 1,
      },
    ];
    const savedRecipesCol = collection(db, 'savedRecipes');
  
    for (const accout of savedRecipes) {
      await addDoc(savedRecipesCol, accout);
    }
  }

  async function addCourses() {
    const courses = [
      {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "category": "Italian",
        "detailContent": "A classic Italian pasta dish made with eggs, cheese, bacon, and pepper.",
        "like": 100,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7"
      },
      {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "category": "Italian",
        "detailContent": "A classic Italian pasta dish made with eggs, cheese, bacon, and pepper.",
        "like": 100,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7"
      },
      {
        "id": 2,
        "name": "Chicken Curry",
        "category": "Indian",
        "detailContent": "A flavorful Indian dish made with chicken, curry spices, and coconut milk.",
        "like": 150,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7"
      },
      {
        "id": 3,
        "name": "Taco Salad",
        "category": "Mexican",
        "detailContent": "A fresh and crunchy salad featuring taco-seasoned ground beef, lettuce, tomatoes, cheese, and tortilla chips.",
        "like": 80,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7"
      },
      {
        "id": 4,
        "name": "Sushi Rolls",
        "category": "Japanese",
        "detailContent": "Delicious sushi rolls filled with rice, seafood, vegetables, and nori.",
        "like": 120,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7"
      },
      {
        "id": 5,
        "name": "Chocolate Cake",
        "category": "Dessert",
        "detailContent": "Decadent chocolate cake made with rich cocoa powder, butter, sugar, and eggs.",
        "like": 200,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7"
      }
    ];
  
    const coursesCol = collection(db, 'courses');
  
    for (const course of courses) {
      await addDoc(coursesCol, course);
    }
  }

  async function addIntructionCourse2() {
    const instructions = [
      {
        "ID": 19,
        "courseID": 2,
        "content": "Make the marinade: In a large bowl, mix together the soy sauce, rice vinegar, sesame oil, brown sugar, Gourmet Garden™ Ginger Stir-In Paste, and white pepper until well combined. Add the steak and toss to coat. Marinate in the refrigerator for at least 30 minutes or up to 24 hours.",   
        "img": "base64encodedimage",
        "step": 1,
      },
      {
        "ID": 20,
        "courseID": 2,
        "content": "Make the sauce: In a small bowl, whisk together the beef stock, Gourmet Garden™ Ginger Stir-In Paste, honey, soy sauce, and cornstarch until well combined. Set aside.",   
        "img": "base64encodedimage",
        "step": 2,
      },
      {
        "ID": 21,
        "courseID": 2,
        "content": "Make the stir-fry: Remove the beef from the marinade and discard the marinade. In a large skillet, heat 1 tablespoon oil over high heat. Add the beef and sear until browned on all sides. Transfer the beef to a plate and set aside.",   
        "img": "base64encodedimage",
        "step": 3,
      },
      {
        "ID": 22,
        "courseID": 2,
        "content": "Add the bell pepper, onion, and broccoli. Sauté for 3-5 minutes, or until vegetables are beginning to soften.",   
        "img": "base64encodedimage",
        "step": 4,
      },
      {
        "ID": 23,
        "courseID": 2,
        "content": "Pour the sauce over the vegetables in the skillet. Stir constantly and bring to a boil over medium-high heat. Boil for 1 minute.",   
        "img": "base64encodedimage",
        "step": 5,
      },
      {
        "ID": 24,
        "courseID": 2,
        "content": "Return the beef to the skillet, add the red pepper flakes, and cook for 3 minutes, or until the sauce thickens.",   
        "img": "base64encodedimage",
        "step": 6,
      },
      {
        "ID": 25,
        "courseID": 2,
        "content": "Serve garnished with scallions and sesame seeds over cooked rice.",   
        "img": "base64encodedimage",
        "step": 7,
      },
      {
        "ID": 26,
        "courseID": 2,
        "content": "Enjoy!",   
        "img": "base64encodedimage",
        "step": 8,
      },
    ]
      const coursesCol = collection(db, 'instructions');
    for (const ins of instructions) {
      await addDoc(coursesCol, ins);
    }
    }

  async function addIntructionCourse1() {
    const instructions = [
      {
        "ID": 1,
        "courseID": 1,
        "content": "Make the filling: In a medium bowl, combine the brown sugar, butter, and cinnamon. Mix well, then set aside. Make the dough: In a large bowl, whisk together the warm milk, sugar, and melted butter. The mixture should be just warm, registering between 100-110˚F (37-43˚C). If any warmer, allow to cool slightly.",   
        "img": "base64encodedimage",
        "step": 1,
      },
      {
        "ID": 2,
        "courseID": 1,
        "content": "Sprinkle the yeast evenly over the milk mixture, stir, and let sit in a warm place for about 10 minutes until the yeast has bloomed.",
        "img": "base64encodedimage",
        "step": 2,
      },
      {
        "ID": 3,
        "courseID": 1,
        "content": "Add 4 cups (500 g) of flour to the milk mixture and stir with a wooden spoon until just combined.",
        "img": "base64encodedimage",
        "step": 3,
      },
      {
        "ID": 4,
        "courseID": 1,
        "content": "Cover the bowl with a kitchen towel or plastic wrap and let rise in a warm place for 1 hour, until nearly doubled in size.",
        "img": "base64encodedimage",
        "step": 4,
      },
      {
        "ID": 5,
        "courseID": 1,
        "content": "Generously butter 2 9-inch (23 cm) round baking pans and set aside.",
        "img": "base64encodedimage",
        "step": 5,
      },
      {
        "ID": 6,
        "courseID": 1,
        "content": "Make the filling: In a medium bowl, combine the brown sugar, butter, and cinnamon. Mix well, then set aside.",
        "img": "base64encodedimage",
        "step": 6,
      },
      {
        "ID": 7,
        "courseID": 1,
        "content": "Remove the plastic wrap from the dough and add the remaining cup of flour, baking powder, and salt. Stir well, then turn out onto a clean surface. Leave a bit of flour nearby to use as needed, but try not to incorporate too much.",
        "img": "base64encodedimage",
        "step": 7,
      },
      {
        "ID": 8,
        "courseID": 1,
        "content": "Knead the dough for at least 10 minutes, adding more flour as necessary, until the dough just loses its stickiness and does not stick to the surface or your hands. The dough should be very smooth and spring back when poked.",
        "img": "base64encodedimage",
        "step": 8,
      },
      {
        "ID": 9,
        "courseID": 1,
        "content": "Roll the dough out into a large rectangle, about ½-inch (1 cm) thick. Fix the corners with a bench scraper or a spatula to make sure they are sharp and even.",
        "img": "base64encodedimage",
        "step": 9,
      },
      {
        "ID": 10,
        "courseID": 1,
        "content": "Spread the filling evenly over the dough.",
        "img": "base64encodedimage",
        "step": 10,
      },
      {
        "ID": 11,
        "courseID": 1,
        "content": "Starting from one short end, roll up the dough into a log and pinch the seam closed. Place seam-side down. Trim any uneven ends.",
        "img": "base64encodedimage",
        "step": 11,
      },
      {
        "ID": 12,
        "courseID": 1,
        "content": "Using unflavored dental floss, cut the log into evenly pieces, about 1½ inches (8cm) thick. Place the cinnamon rolls in the prepared pans, 1 in the center and about 5 around the sides. Cover with a towel and let rise in a warm place for 35-45 minutes, until expanded by about half of their original volume. If you’re saving the cinnamon rolls for later, cover with plastic wrap and freeze for up 3 months.",
        "img": "base64encodedimage",
        "step": 12,
      },
      {
        "ID": 13,
        "courseID": 1,
        "content": "Preheat the oven to 350˚F (180˚C).",
        "img": "base64encodedimage",
        "step": 13,
      },
      {
        "ID": 14,
        "courseID": 1,
        "content": "Bake the cinnamon rolls for 25-30 minutes, until golden brown.",
        "img": "base64encodedimage",
        "step": 14,
      },
      {
        "ID": 15,
        "courseID": 1,
        "content": "While the cinnamon rolls are baking, make the frosting: In a medium bowl, whisk together the cream cheese, melted butter, milk, and vanilla extract until smooth. Gradually add the powdered sugar and whisk until homogenous and runny.",
        "img": "base64encodedimage",
        "step": 15,
      },
      {
        "ID": 16,
        "courseID": 1,
        "content": "When the cinnamon rolls are finished, let cool for about 10 minutes.",
        "img": "base64encodedimage",
        "step": 16,
      },
      {
        "ID": 17,
        "courseID": 1,
        "content": "Drizzle the frosting over the cinnamon rolls, using the back of a spoon to spread if desired.",
        "img": "base64encodedimage",
        "step": 17,
      },
      {
        "ID": 18,
        "courseID": 1,
        "content": "Enjoy!",
        "img": "base64encodedimage",
        "step": 18,
      },
    ]

    const coursesCol = collection(db, 'instructions');
    for (const ins of instructions) {
      await addDoc(coursesCol, ins);
    }
  }



  //lấy ra danh sách các món ăn
  async function getCourses() {
    try {
      const citiesCol = collection(db, "courses");
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      setCities(cityList);
      console.log(cities);
    } catch (e) {
      console.error("Error getting cities", e);
    }
  }


  //in ra danh sách các bước thực hiện theoo id của courses
  async function getFilteredCourses(courseID) {
    const citiesRef = collection(db, "courses");
    const q = query(citiesRef, where("id", "==", courseID));
    const querySnapshot = await getDocs(q);

    const citisnapshot = await getDocs(citiesRef);
    const cities = querySnapshot.docs.map((doc) => doc.data());
    console.log(cities);

  }

  async function getStepOfCourses(courseID) {
    try {
      const citiesRef = collection(db, "instructions");
  
      // Lọc theo courseID
      const courseIdQuery = query(citiesRef, where("courseID", "==", courseID));
      const courseIdSnapshot = await getDocs(courseIdQuery);
      const courseIdDocs = courseIdSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      // Sắp xếp theo step
      const sortedDocs = courseIdDocs.sort((a, b) => a.step - b.step);
  
      setInstructions(sortedDocs);
      console.log(sortedDocs);
    } catch (e) {
      console.error("Error getting instructions", e);
    }
  }

  useEffect(() => {
    ;
  }, []);
  return (
    
    <ScrollView>
      <Text>Add data</Text>
    {instructions.map((instruction) => (
      <View key={instruction.ID}>
        <View>
          <Text>{instruction.step}</Text>
        </View>
        <View>
          <Text>{instruction.content}</Text>
        </View>
      </View>
    ))}
  </ScrollView>
    
  );
}
