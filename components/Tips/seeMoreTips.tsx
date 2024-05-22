import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Tips from './Tip';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy} from "firebase/firestore";
import { useEffect } from "react";
import { db } from '../../firebase/firebase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
type RootStackParamList = {
  detail: { courseID: string };
};
type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'detail'>;

const MainComments = () => {
  const route = useRoute<DetailRecipeRouteProp>();
    const { courseID } = route.params;
    console.log('courseID:', courseID);
    const [tips, setTips] = useState([]);
    async function getTips(courseID) {
      const citiesRef = collection(db, "tips");
      const q = query(citiesRef, where("recipeID", "==", courseID));
      const querySnapshot = await getDocs(q);
  
      const cities = querySnapshot.docs.map((doc) => doc.data());
      setTips(cities);
      console.log(cities);
    }
    useEffect(() => {
      getTips(courseID);
    }, [courseID]);
  return (
    <View style={{ flex: 1, flexDirection: 'column', padding: 10 }}>
      <View style={{ flex: 8 }}>
        <Text style={styles.textTitle}>Recently</Text>
        <ScrollView>
          <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
          {tips.map((tip, index) =>(
            <Tips key={index} id={tip.id} content={tip.content} name={tip.name}/>
          ))}
            
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <TextInput
          style={{
            width: '70%',
            borderColor: 'black',
            borderRadius: 30,
            borderWidth: 1,
          }}></TextInput>
        <TouchableOpacity style={styles.tipsButton}>
          <Text style={{ fontSize: 20 }}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //text
  textTitle: {
    marginVertical: 10,
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
  tipsButton: {
    width: '30%',
    backgroundColor: 'pink',
    borderRadius: 30,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainComments;