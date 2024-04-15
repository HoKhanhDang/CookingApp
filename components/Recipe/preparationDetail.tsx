import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class MainPreparationDetail extends React.Component {
  render() {
    return (
      <View>
        <View style={[styles.conMain]}>
          <Text style={[styles.text]}>Tips</Text>
          <View style={[styles.conStep]}>
            <View style={[styles.conColor]}>
              <Image
                style={[styles.pic]}
                source={require('../../assets/icons/ga.png')}
              />
              <Text style={[styles.stepDetail]}>
                let cook a good dinner nnnnnnnnnnnnnnnnnn jjjjjj jjj hhhhhhhh
                hhhh hhh
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#fa9e51',
  },
  icon: {
    width: 40,
    height: 40,
  },
  search: {
    fontSize: 18,
    color: 'black',
    borderRadius: 45,
    backgroundColor: 'white',
  },
  conMain: {
    width: '100%',
    height: '84%',
  },
  conStep: {
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conColor: {
    backgroundColor: '#fa9e51',
    alignItems: 'center',
    width: '80%',
    height: '90%',
    borderRadius: 30,
  },
  pic: {
    margin: '10%',
    height: '40%',
    width: '70%',
  },
  stepDetail: {
    marginRight: '10%',
    marginLeft: '10%',
    color: 'black',
  },
  text: {
    marginLeft: 10,
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
  },
  scroll: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  conFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#fa9e51',
  },
});

export default MainPreparationDetail;
