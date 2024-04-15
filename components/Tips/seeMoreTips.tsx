import React from 'react';
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MainComments extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
        <View style={{flex: 8}}>
          <Text style={styles.textTitle}>Recently</Text>
          <ScrollView>
            <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
              <Tips />
              <Tips />
              <Tips />
              <Tips />
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
            <Text style={{fontSize: 20}}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
