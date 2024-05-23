import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import "firebase/firestore";
import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, orderBy} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';
type RootStackParamList = {
  detail: { courseID: string };
};
type DetailRecipeRouteProp = RouteProp<RootStackParamList, 'detail'>;

export default function Preparation({navigation}) {
  const [instructions, setInstructions] = useState([]);
  const route = useRoute<DetailRecipeRouteProp>();
  const { courseID } = route.params;
  console.log('courseID:', courseID);
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
    getFilteredCourses(courseID);
    getStepOfCourses(courseID);
  }, [courseID]);
    return (
        <View style={{}}>
            <Text style={[styles.textTitle, {paddingBottom: 20}]}>Preparation</Text>

            <View style={[styles.timePrepare]}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
                        Total Time
                    </Text>
                    <Text style={styles.textContent}>50 min</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
                        Prep Time
                    </Text>
                    <Text style={styles.textContent}>{prepTime}</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
                        Cook Time
                    </Text>
                    <Text style={styles.textContent}>{cookTime}</Text>
                </View>
            </View>

            <View>
                <Text
                    style={[
                        styles.textNomal,
                        {alignSelf: 'center', paddingVertical: 20, fontSize: 20},
                    ]}>
                    Step-by-step instructions
                </Text>
                {instructions.map((instruction, index) => (
                    <View key={instruction.id}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('detailPreparation', {content: instruction.content, img: instruction.img})}>
                            <View style={styles.stepsInstruction}>
                                <Text
                                    style={[
                                        styles.textNomal,
                                        {
                                            flex: 1,
                                            padding: 10,
                                            marginLeft: 20,
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                        },
                                    ]}>
                                    {instruction.step}
                                </Text>
                                <Text style={[styles.textNomal, {flex: 10, padding: 10}]}>
                                    {instruction.content}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
                <View></View>
            </View>
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
    textNomal: {
      fontSize: 15,
      color: 'black',
    },
    timePrepare: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stepsInstruction: {
      flexDirection: 'row',
      paddingVertical: 10,
      backgroundColor: '#768884',
      marginVertical: 5,
      borderRadius: 10,
    },
  });
