import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where} from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
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
  async function addIntruction() {
    const instructions = [
      {
        "ID": 1,
        "courseID": 1,
        "content": "Preheat the oven to 350°F (175°C).",
        "img": "base64encodedimage"
      },
      {
        "ID": 2,
        "courseID": 1,
        "content": "Grease a baking dish.",
        "img": "base64encodedimage"
      },
      {
        "ID": 3,
        "courseID": 1,
        "content": "Mix flour, sugar, and baking powder in a bowl.",
        "img": "base64encodedimage"
      },
      {
        "ID": 4,
        "courseID": 1,
        "content": "In another bowl, beat eggs and milk together.",
        "img": "base64encodedimage"
      },
      {
        "ID": 5,
        "courseID": 1,
        "content": "Combine wet and dry ingredients, then pour into the baking dish.",
        "img": "base64encodedimage"
      }
    ]

    const coursesCol = collection(db, 'instructions');
    for (const ins of instructions) {
      await addDoc(coursesCol, ins);
    }
  }


  //in ra danh sách các món ăn
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

  async function getFilteredCourses(courseID) {
    const citiesRef = collection(db, "courses");
    const q = query(citiesRef, where("id", "==", courseID));
    const querySnapshot = await getDocs(q);

    const citisnapshot = await getDocs(citiesRef);
    const cities = querySnapshot.docs.map((doc) => doc.data());
    console.log(cities);

  }


  useEffect(() => {
    getFilteredCourses(2);
  }, []);
  return (
    <>
      <View>
        {cities.map((city) => (  
          <View key={city.id}>
          <View>
            <Text>{city.name}</Text>
          </View>
          <View>
            <Image style={{height:100,width:100}} source={{uri:city.img}} /> 
          </View>
          </View>
          
        ))}
      </View>
    </>
  );
}
