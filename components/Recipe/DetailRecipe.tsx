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
import Tips from '../Tips/Tip';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width - 30;

export default function DetailRecipe() {
    return (
      <View style={{flex: 1}}>
  
        <Text style={[styles.textTitle, {fontSize: 30, fontWeight: 'bold'}]}>
          Galic Shrimp
        </Text>
        <Text style={[styles.textContent, {fontSize: 15, paddingVertical: 10}]}>
          Galic Shrimp dasdasdsad dasd sd d asdad aasd sadsaGalic Shrimp
          dasdasdsad dasd sd d asdad aasd sadsaGalic Shrimp dasdasdsad dasd sd d
          asdad aasd sadsa
        </Text>
  
        <View style={styles.navDetail}>
          <Image
            style={[{width: 30, height: 30}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6611/6611465.png',
            }}
          />
          <Text style={[styles.textContent, {marginLeft: 10}]}>
            <Text style={{fontWeight: 'bold'}}>90%</Text> would like this
          </Text>
        </View>
        <View style={styles.navDetail}>
          <Image
            style={[{width: 30, height: 30}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6611/6611465.png',
            }}
          />
          <Text style={[styles.textContent, {marginLeft: 10}]}>
            Ready in<Text style={{fontWeight: 'bold'}}> under 30 minutes</Text>
          </Text>
        </View>
        <Image
          style={[{width: windowWidth, height: windowWidth}]}
          source={{
            uri: 'https://barona.vn/storage/meo-vat/83/com-ga-xoi-mo.jpg',
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
        color: 'black',
    },
    textContent: {
        fontSize: 15,
        color: 'black',
    },
    navDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

