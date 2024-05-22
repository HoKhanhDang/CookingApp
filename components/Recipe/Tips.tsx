import React, {Component, ReactNode, useState} from 'react';
import {
    StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Tips from '../Tips/Tip';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy} from "firebase/firestore";
import { useEffect } from "react";
import { db } from '../../firebase/firebase';
type RootStackParamList = {
    detail: { courseID: string };
  };
  type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'detail'>;

export default function TipsScreen({navigation}){
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
        <View style={{ flex: 1, height: 300 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={styles.textTitle}>Tips</Text>
                <TouchableOpacity onPress={() => navigation.navigate('seemoretips', {courseID: courseID})}>
                    <Text>See more</Text>
                </TouchableOpacity>
            </View>
            {/* <Tips id={tips[0].id} content={tips[0].content} name={tips[0].name}/>
            <Tips id={tips[1].id} content={tips[1].content} name={tips[1].name}/> */}
        </View>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
      },
});
