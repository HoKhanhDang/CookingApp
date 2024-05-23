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
    apiKey: "AIzaSyBMLNQ-oL6oaE24QiLiRi0KX27cafmJB5E",
  authDomain: "cookingappdatabase.firebaseapp.com",
  projectId: "cookingappdatabase",
  storageBucket: "cookingappdatabase.appspot.com",
  messagingSenderId: "989772326015",
  appId: "1:989772326015:web:17016a4fca3bdc7ad70b4a",
  measurementId: "G-DMF49SE6RM"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [cities, setCities] = useState([]);
  const [instructions, setInstructions] = useState([]);

  async function addTips() {
    const tips = [
      {
        "id": 1,
        "recipeID": 1,
        "email": "quan@gmail.com",
        "name": "Quan",
        "content": "Add a teaspoon of ground cardamom for a slight flavor variation!",
      },
      {
        "id": 2,
        "recipeID": 1,
        "email": "dang@gmail.com",
        "name": "Dang",
        "content": "This is perfect, didnt change a thing and followed instructions step by step",
      },
      {
        "id": 3,
        "recipeID": 1,
        "email": "minhquan31102003@gmail.com",
        "name": "MinhQuan",
        "content": "Put the dough in a warm place (like the microwave, TURNED OFF!!!!!) and it will rise even more!!",
      },
      {
        "id": 4,
        "recipeID": 2,
        "email": "quan@gmail.com",
        "name": "Quan",
        "content": "I made this with chicken and it turned out great!",
      },
      {
        "id": 5,
        "recipeID": 2,
        "email": "dang@gmail.com",
        "name": "Dang",
        "content": "oooooo looks yummm!!!",
      },
      {
        "id": 6,
        "recipeID": 2,
        "email": "minhquan31102003@gmail.com",
        "name": "MinhQuan",
        "content": "It's really easy to do when you follow each step.",
      },
      {
        "id": 7,
        "recipeID": 3,
        "email": "quan@gmail.com",
        "name": "Quan",
        "content": "Double the butter, heavy cream, garlic mixture add about 3-4 tbsp of garlic, add the sauce slowly until you reach the consistency you like your mashed potatoes",
      },
      {
        "id": 8,
        "recipeID": 3,
        "email": "dang@gmail.com",
        "name": "Dang",
        "content": "I added bacon for an extra crunch! 🥰",
      },
      {
        "id": 9,
        "recipeID": 3,
        "email": "minhquan31102003@gmail.com",
        "name": "MinhQuan",
        "content": "Very crumbly and dry. I doubled the butter, cream, and sour cream which much improved the flavor and texture.",
      },
      {
        "id": 10,
        "recipeID": 4,
        "email": "quan@gmail.com",
        "name": "Quan",
        "content": "I added grape tomatoes to make it more colorful and yummy!",
      },
      {
        "id": 11,
        "recipeID": 4,
        "email": "dang@gmail.com",
        "name": "Dang",
        "content": "I used about half the butter that the recipe called for and it was still delicious!",
      },
      {
        "id": 12,
        "recipeID": 4,
        "email": "minhquan31102003@gmail.com",
        "name": "MinhQuan",
        "content": "Added heavy whipping cream to make it creamy and which helps cut down the spiciness, so yummy!",
      },
    ];
    const accountsCol = collection(db, 'tips');
  
    for (const accout of tips) {
      await addDoc(accountsCol, accout);
    }
  }

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

  

  async function addIngredients() {
    const ingredients = [
      {
        "id": 1,
        "name": "soy sauce",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 2,
      },
      {
        "id": 2,
        "name": "rice vinegar",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 3,
        "name": "toasted sesame oil",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 4,
        "name": "brown sugar",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 5,
        "name": "Gourmet Garden™ Ginger Stir-In Paste",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 2,
      },
      {
        "id": 6,
        "name": "white pepper",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 2,
        "quantity": '½',
      },
      {
        "id": 7,
        "name": "steak (about 1 pound)",
        "type": "flank",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 8,
        "name": "beef stock",
        "type": "cup",
        "price": 1,
        "recipeID": 2,
        "quantity": '⅓',
      },
      {
        "id": 9,
        "name": "honey",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 2,
      },
      {
        "id": 10,
        "name": "cornstarch",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 11,
        "name": "vegetable oil, divided",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 2,
      },
      {
        "id": 12,
        "name": "medium red bell pepper, sliced",
        "type": "",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 13,
        "name": "medium yellow onion, sliced",
        "type": "",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 14,
        "name": "broccoli florets",
        "type": "cup",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 15,
        "name": "red pepper flakes",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 2,
        "quantity": '½',
      },
      {
        "id": 16,
        "name": "red pepper flakes, (optional)",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 17,
        "name": "sliced scallion",
        "type": "",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 18,
        "name": "sesame seeds",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 2,
        "quantity": 2,
      },
      {
        "id": 19,
        "name": "cooked rice",
        "type": "",
        "price": 1,
        "recipeID": 2,
        "quantity": 1,
      },
      {
        "id": 20,
        "name": "whole milk",
        "type": "cup",
        "price": 1,
        "recipeID": 1,
        "quantity": '½',
      },
      {
        "id": 21,
        "name": "unsalted butter, melted",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 1,
        "quantity": 8,
      },
      {
        "id": 22,
        "name": "active dry yeast",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 1,
        "quantity": '2 ¼',
      },
      {
        "id": 23,
        "name": "all-purpose flour",
        "type": "cup",
        "price": 1,
        "recipeID": 1,
        "quantity": 5,
      },
      {
        "id": 24,
        "name": "baking powder",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 1,
        "quantity": 1,
      },
      {
        "id": 25,
        "name": "kosher salt",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 1,
        "quantity": 2,
      },
      {
        "id": 26,
        "name": "light brown sugar",
        "type": "cup",
        "price": 1,
        "recipeID": 1,
        "quantity": '¾',
      },
      {
        "id": 27,
        "name": "milk",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 1,
        "quantity": 4,
      },
      {
        "id": 28,
        "name": "vanilla extract",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 1,
        "quantity": 1,
      },
      {
        "id": 29,
        "name": "powdered sugar",
        "type": "cup",
        "price": 1,
        "recipeID": 1,
        "quantity": 1,
      },
      {
        "id": 30,
        "name": "sugar",
        "type": "cup",
        "price": 1,
        "recipeID": 1,
        "quantity": '½',
      },
    ];
    const savedRecipesCol = collection(db, 'ingredients');
  
    for (const accout of ingredients) {
      await addDoc(savedRecipesCol, accout);
    }
  }

  async function addIngredients4() {
    const ingredients = [
      {
        "id": 31,
        "name": "red bliss potato",
        "type": "kg",
        "price": 1,
        "recipeID": 4,
        "quantity": '2 ¼',
      },
      {
        "id": 32,
        "name": "cold water",
        "type": "",
        "price": 1,
        "recipeID": 4,
        "quantity": '',
      },
      {
        "id": 33,
        "name": "kosher salt, plus more to taste",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 4,
        "quantity": 1,
      },
      {
        "id": 34,
        "name": "unsalted butter(115 g)",
        "type": "cup",
        "price": 1,
        "recipeID": 4,
        "quantity": '½',
      },
      {
        "id": 35,
        "name": "heavy cream(120 mL)",
        "type": "cup",
        "price": 1,
        "recipeID": 4,
        "quantity": '½',
      },
      {
        "id": 36,
        "name": "garlic, minced",
        "type": "clove",
        "price": 1,
        "recipeID": 4,
        "quantity": 1 ,
      },
      {
        "id": 37,
        "name": "sour cream(115 g)",
        "type": "cup",
        "price": 1,
        "recipeID": 4,
        "quantity": '½',
      },
      {
        "id": 38,
        "name": "green onion, chopped, for garnish",
        "type": "tablespoon",
        "price": 1,
        "recipeID": 4,
        "quantity": 1,
      },
    ];
    const savedRecipesCol = collection(db, 'ingredients');
  
    for (const accout of ingredients) {
      await addDoc(savedRecipesCol, accout);
    }
  }

  async function addIngredients3() {
    const ingredients = [
      {
        "id": 39,
        "name": "linguine()",
        "type": "g",
        "price": 1,
        "recipeID": 3,
        "quantity": 225,
      },
      {
        "id": 40,
        "name": "olive oil",
        "type": "tablespoons",
        "price": 1,
        "recipeID": 3,
        "quantity": 4,
      },
      {
        "id": 41,
        "name": "unsalted butter, 1 stick",
        "type": "tablespoons",
        "price": 1,
        "recipeID": 3,
        "quantity": 8,
      },
      {
        "id": 42,
        "name": "garlic, minced",
        "type": "cloves",
        "price": 1,
        "recipeID": 3,
        "quantity": 4,
      },
      {
        "id": 43,
        "name": "red pepper flakes",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 3,
        "quantity": 1,
      },
      {
        "id": 44,
        "name": "large shrimp",
        "type": "g",
        "price": 1,
        "recipeID": 3,
        "quantity": 570,
      },
      {
        "id": 45,
        "name": "salt, pepper",
        "type": "",
        "price": 1,
        "recipeID": 3,
        "quantity": 'to taste',
      },
      {
        "id": 46,
        "name": "dried oregano",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 3,
        "quantity": 1,
      },
      {
        "id": 47,
        "name": "parmesan cheese",
        "type": "g",
        "price": 1,
        "recipeID": 3,
        "quantity": 25,
      },
      {
        "id": 48,
        "name": "fresh parsley, chopped",
        "type": "tablespoons",
        "price": 1,
        "recipeID": 3,
        "quantity": 2,
      },
      {
        "id": 49,
        "name": "lemon juice",
        "type": "teaspoon",
        "price": 1,
        "recipeID": 3,
        "quantity": 1,
      },
    ];
    const savedRecipesCol = collection(db, 'ingredients');
  
    for (const accout of ingredients) {
      await addDoc(savedRecipesCol, accout);
    }
  }

  async function addIntructionCourse6() {
    const instructions = [
      {
        "ID": 49,
        "courseID": 6,
        "content": "In a medium bowl, mix together the sugar and cream cheese with a rubber spatula until well combined. Whisk in the egg until incorporated.",   
        "img": "base64encodedimage",
        "step": 1,
      },
      {
        "ID": 50,
        "courseID": 6,
        "content": "Add the orange zest and lemon juice; whisk to combine. Whisk in the pancake mix and melted butter until just combined; do not overmix the batter.",   
        "img": "base64encodedimage",
        "step": 2,
      },
      {
        "ID": 51,
        "courseID": 6,
        "content": "Brush the bottom of a rice cooker bowl with some melted butter. Sprinkle with a thin layer of sugar, turning the bowl to spread evenly. Arrange the sliced oranges all around the bottom and sides of the bowl.",   
        "img": "base64encodedimage",
        "step": 3,
      },
      {
        "ID": 52,
        "courseID": 6,
        "content": "Pour the batter into the prepared bowl, place into the rice cooker, and cover with the lid.",   
        "img": "base64encodedimage",
        "step": 4,
      },
      {
        "ID": 53,
        "courseID": 6,
        "content": "Cook for 20 minutes, or until the center of the cake springs back when gently pressed.",   
        "img": "base64encodedimage",
        "step": 5,
      },
      {
        "ID": 54,
        "courseID": 6,
        "content": "Enjoy!",   
        "img": "base64encodedimage",
        "step": 6,
      },
    ]
      const coursesCol = collection(db, 'instructions');
    for (const ins of instructions) {
      await addDoc(coursesCol, ins);
    }
    }

  async function addIntructionCourse5() {
    const instructions = [
      {
        "ID": 41,
        "courseID": 5,
        "content": "Preheat oven to 400°F (200°C).",   
        "img": "base64encodedimage",
        "step": 1,
      },
      {
        "ID": 42,
        "courseID": 5,
        "content": "In a large bowl, mix the self-rising flour and Greek yogurt until it comes together to form a ball.",   
        "img": "base64encodedimage",
        "step": 2,
      },
      {
        "ID": 43,
        "courseID": 5,
        "content": "Transfer the dough ball to a lightly floured work surface and use your hands to begin flattening and shaping the rough into about a 12-inch (30 cm) round. If at any point the dough begins to stick, sprinkle on a bit more flour.",   
        "img": "base64encodedimage",
        "step": 3,
      },
      {
        "ID": 44,
        "courseID": 5,
        "content": "Carefully transfer the dough to a lightly floured baking sheet.",   
        "img": "base64encodedimage",
        "step": 4,
      },
      {
        "ID": 45,
        "courseID": 5,
        "content": "Spread the sauce evenly across the dough, sprinkle on the cheese, and top with pepperonis.",   
        "img": "base64encodedimage",
        "step": 5,
      },
      {
        "ID": 46,
        "courseID": 5,
        "content": "Bake for 20 minutes, until the cheese has melted and the crust has turned golden-brown.",   
        "img": "base64encodedimage",
        "step": 6,
      },
      {
        "ID": 47,
        "courseID": 5,
        "content": "Slice and serve.",   
        "img": "base64encodedimage",
        "step": 7,
      },
      {
        "ID": 48,
        "courseID": 5,
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

    async function addIngredients6() {
      const ingredients = [
        {
          "id": 55,
          "name": "sugar, plus more for sprinkling",
          "type": "g",
          "price": 1,
          "recipeID": 6,
          "quantity": '¼',
        },
        {
          "id": 56,
          "name": "cream cheese, room temperature",
          "type": "tablespoons",
          "price": 1,
          "recipeID": 6,
          "quantity": 2,
        },
        {
          "id": 57,
          "name": "large egg",
          "type": "",
          "price": 1,
          "recipeID": 6,
          "quantity": 1,
        },
        {
          "id": 58,
          "name": "mandarin orange, zested",
          "type": "",
          "price": 1,
          "recipeID": 6,
          "quantity": 1,
        },
        {
          "id": 59,
          "name": "lemon juice",
          "type": "tablespoon",
          "price": 1,
          "recipeID": 6,
          "quantity": '½',
        },
        {
          "id": 60,
          "name": "dry pancake mix",
          "type": "cup",
          "price": 1,
          "recipeID": 6,
          "quantity": '½',
        },
        {
          "id": 61,
          "name": "melted butter, plus more for brushing",
          "type": "tablespoons",
          "price": 1,
          "recipeID": 6,
          "quantity": 2,
        },
        {
          "id": 62,
          "name": "mandarin oranges, sliced into ¼-inch rounds",
          "type": "",
          "price": 1,
          "recipeID": 6,
          "quantity": 4,
        },
      ];
      const savedRecipesCol = collection(db, 'ingredients');
    
      for (const accout of ingredients) {
        await addDoc(savedRecipesCol, accout);
      }
    }

  async function addIngredients5() {
    const ingredients = [
      {
        "id": 50,
        "name": "self-rising flour, plus more for dusting",
        "type": "g",
        "price": 1,
        "recipeID": 5,
        "quantity": 220,
      },
      {
        "id": 51,
        "name": "greek yogurt",
        "type": "g",
        "price": 1,
        "recipeID": 5,
        "quantity": 245,
      },
      {
        "id": 52,
        "name": "pizza sauce",
        "type": "g",
        "price": 1,
        "recipeID": 5,
        "quantity": 113,
      },
      {
        "id": 53,
        "name": "shredded mozzarella cheese",
        "type": "g",
        "price": 1,
        "recipeID": 5,
        "quantity": 100,
      },
      {
        "id": 54,
        "name": "pepperoni slice, for topping",
        "type": "",
        "price": 1,
        "recipeID": 5,
        "quantity": '',
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

  async function addCourses6() {
    const courses = [
      {
        "id": 6,
        "name": "Citrus Rice Cooker Cake",
        "category": "Mexican",
        "detailContent": "This citrus cake is one of the moistest desserts you'll ever eat! It is super easy, perfect for dinner parties or summer gatherings, and only takes 30 minutes to make. Note: The recipe is designed for a small rice cooker, so double the ingredients for a larger one.",
        "like": 80,
        "img": "https://firebasestorage.googleapis.com/v0/b/cookingappdatabase.appspot.com/o/CitrusRiceCookerCake.png?alt=media&token=3e64052e-fada-4483-aae0-8d1bcb76dd4c",
        "prepTime": "25 minutes",
        "cookTime": "30 minutes"
      },
  ];

  const coursesCol = collection(db, 'courses');

  for (const course of courses) {
    await addDoc(coursesCol, course);
  }
}

  async function addCourses5() {
    const courses = [
      {
        "id": 5,
        "name": "2-Ingredient Dough Pizza",
        "category": "Mexican",
        "detailContent": "Satisfy all your pizza cravings in a flash with the magic of 2-Ingredient Dough Pizza! This ingenious recipe simplifies the pizza-making process without sacrificing flavor or satisfaction. With just Greek yogurt and self-rising flour, you can whip up a dough that's simple to knead and shape. Mix the flour and yogurt, shape the dough, and cover with pizza sauce, mozzarella cheese, and your favorite toppings. Pop it in the oven for a quick bake, and within minutes, you'll be rewarded with a golden brown crust and bubbly cheese. This 2-ingredient wonder ensures that homemade pizza night is always within reach.",
        "like": 80,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7",
        "prepTime": "25 minutes",
        "cookTime": "30 minutes"
      },
  ];

  const coursesCol = collection(db, 'courses');

  for (const course of courses) {
    await addDoc(coursesCol, course);
  }
}

  async function addCourses() {
    const courses = [
      {
        "id": 1,
        "name": "How To Make Cinnamon Rolls",
        "category": "Italian",
        "detailContent": "There's nothing quite as wonderful as biting into a warm, fluffy cinnamon roll. So, we made sure to extensively test this recipe to ensure we were giving you the best of the best! With a pillowy soft dough, rich cinnamon sugar filling, and melt-in-your-mouth cream cheese frosting, this baked treat will blow your mind. After letting the yeasted dough rise until soft and fluffy, you'll roll out the dough, generously cover it with cinnamon sugar, and tightly roll it up for that perfect spiral. After baking to golden perfection, generously drizzle with mouthwatering cream cheese icing for the final touch. Whether it's a cozy Thanksgiving morning, a festive Christmas breakfast, or any special occasion, these homemade cinnamon rolls will become a cherished tradition in your home.",
        "like": 100,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7",
        "prepTime": "25 minutes",
        "cookTime": "30 minutes"
      },
      {
        "id": 2,
        "name": "Ginger Beef Stir-Fry",
        "category": "Italian",
        "detailContent": "Instead of peeling and grating ginger at home, use Gourmet Garden™ Ginger Paste to make this quick and super flavorful stir-fry, complete with steak and veggies. Served with rice, it’s a homemade meal that’s better than takeout.",
        "like": 100,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7",
        "prepTime": "25 minutes",
        "cookTime": "30 minutes"
      },
      {
        "id": 3,
        "name": "Chunky, Skin-On Mashed Potatoes",
        "category": "Indian",
        "detailContent": "Indulge in these Chunky Skin-On Mashed Potatoes for a rustic and flavorful spin on a classic side dish. With a delightful mix of creamy and chunky textures, this recipe will have everyone coming back for seconds!",
        "like": 150,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7",
        "prepTime": "25 minutes",
        "cookTime": "30 minutes"
      },
      {
        "id": 4,
        "name": "One-Pot Lemon Garlic Shrimp Pasta",
        "category": "Mexican",
        "detailContent": "This easy 30-minute pasta recipe transforms ingredients that you already have in your kitchen into a posh, seafood dish you’ll want to serve at your next dinner party. And since the whole dish is made in a single pot, clean-up is easy. Don’t be surprised if this becomes your favorite quick go-to.",
        "like": 80,
        "img": "https://firebasestorage.googleapis.com/v0/b/test-480f9.appspot.com/o/ga.png?alt=media&token=5585bc73-538a-4fd9-9046-056b58de82c7",
        "prepTime": "25 minutes",
        "cookTime": "30 minutes"
      },
    ];
  
    const coursesCol = collection(db, 'courses');
  
    for (const course of courses) {
      await addDoc(coursesCol, course);
    }
  }

  async function addIntructionCourse4() {
    const instructions = [
      {
        "ID": 27,
        "courseID": 4,
        "content": "Add the potatoes to a large pot and cover with cold water. Add the salt. Bring to a boil over high heat and cook until the potatoes are fork-tender, about 20 minutes longer. Drain and return to the pot. Set aside.",   
        "img": "base64encodedimage",
        "step": 1,
      },
      {
        "ID": 28,
        "courseID": 4,
        "content": "In a small pot over medium heat, bring the butter, cream, and garlic to a simmer. Once simmering, remove from the heat.",   
        "img": "base64encodedimage",
        "step": 2,
      },
      {
        "ID": 29,
        "courseID": 4,
        "content": "Pour the cream mixture over the potatoes. Add the sour cream, then mash with a hand masher until the potatoes are creamy, but still very chunky. Season to taste with salt and pepper.",   
        "img": "base64encodedimage",
        "step": 3,
      },
      {
        "ID": 30,
        "courseID": 4,
        "content": "Garnish with green onions, if desired.",   
        "img": "base64encodedimage",
        "step": 4,
      },
      {
        "ID": 31,
        "courseID": 4,
        "content": "Note: Any small waxy potato would work well in this recipe — such as Yukon Golds or new potatoes.",   
        "img": "base64encodedimage",
        "step": 5,
      },
      {
        "ID": 32,
        "courseID": 4,
        "content": "Enjoy!",   
        "img": "base64encodedimage",
        "step": 6,
      },
      
    ]
      const coursesCol = collection(db, 'instructions');
    for (const ins of instructions) {
      await addDoc(coursesCol, ins);
    }
    }

    async function addIntructionCourse3() {
      const instructions = [
        {
          "ID": 33,
          "courseID": 3,
          "content": "In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.",   
          "img": "base64encodedimage",
          "step": 1,
        },
        {
          "ID": 34,
          "courseID": 3,
          "content": "Drain and set pasta aside.",   
          "img": "base64encodedimage",
          "step": 2,
        },
        {
          "ID": 35,
          "courseID": 3,
          "content": "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.",   
          "img": "base64encodedimage",
          "step": 3,
        },
        {
          "ID": 36,
          "courseID": 3,
          "content": "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.",   
          "img": "base64encodedimage",
          "step": 4,
        },
        {
          "ID": 37,
          "courseID": 3,
          "content": "Add oregano and spinach, cook until wilted.",   
          "img": "base64encodedimage",
          "step": 5,
        },
        {
          "ID": 38,
          "courseID": 3,
          "content": "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.",   
          "img": "base64encodedimage",
          "step": 6,
        },
        {
          "ID": 39,
          "courseID": 3,
          "content": "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot.",   
          "img": "base64encodedimage",
          "step": 7,
        },
        {
          "ID": 40,
          "courseID": 3,
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
        "content": "Make the dough: In a large bowl, whisk together the warm milk, sugar, and melted butter. The mixture should be just warm, registering between 100-110˚F (37-43˚C). If any warmer, allow to cool slightly.",   
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
