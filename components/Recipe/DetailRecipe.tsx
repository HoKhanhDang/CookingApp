import {Component, ReactNode} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import { RouteProp, useRoute } from '@react-navigation/native';
import Tips from '../Tips/Tip';
import "firebase/firestore";
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  detail: { courseID: string };
};
type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'detail'>;

const windowWidth = Dimensions.get('window').width - 30;

export default function DetailRecipe() {
  const route = useRoute<DetailRecipeRouteProp>();
  const { courseID } = route.params;

  const [cities, setCities] = useState([]);
  const [cookTime, setCookTime] = useState('');
  const [detailContent, setDetailContent] = useState('');
  const [img, setImg] = useState('');
  const [like, setLike] = useState(0);
  const [name, setName] = useState('');
  const [prepTime, setPrep] = useState('');

  async function getFilteredCourses(courseID) {
    const citiesRef = collection(db, "courses");
    const q = query(citiesRef, where("id", "==", courseID));
    const querySnapshot = await getDocs(q);
    const cities = querySnapshot.docs.map((doc) => doc.data());
    setCities(cities);
    if (cities.length > 0) {
      setCookTime(cities[0].cookTime);
      setDetailContent(cities[0].detailContent);
      setImg(cities[0].img);
      setLike(cities[0].like);
      setName(cities[0].name);
      setPrep(cities[0].prepTime);
    }
  }

  useEffect(() => {
    getFilteredCourses(courseID);
  }, [courseID]);
    return (

      <View style={{flex: 1}}>
  
        <Text style={[styles.textTitle, {fontSize: 30, fontWeight: 'bold'}]}>
          {name}
        </Text>
        <Text style={[styles.textContent, {fontSize: 15, paddingVertical: 10}]}>
          {detailContent}
        </Text>
  
        <View style={styles.navDetail}>
          <Image
            style={[{width: 30, height: 30}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6611/6611465.png',
            }}
          />
          <Text style={[styles.textContent, {marginLeft: 10}]}>
            <Text style={{fontWeight: 'bold'}}>{like}</Text> would like this
          </Text>
        </View>

        <View style={styles.navDetail}>
          <Image
            style={[{width: 30, height: 30}]}
            source={require('../../assets/icons/time.png')}
          />
          <Text style={[styles.textContent, {marginLeft: 10}]}>
            Ready in<Text style={{fontWeight: 'bold'}}> {prepTime}</Text>
          </Text>
        </View>
        <Image
          style={[{width: windowWidth, height: windowWidth,marginTop: 15}]}
          source={{
            uri: img,
          }}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 15,
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF724C',
    },
    textContent: {
        fontSize: 15,
        color: 'black',
    },
    navDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 5,
    },
});

