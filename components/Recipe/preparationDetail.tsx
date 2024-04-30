import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MainPreparationDetail = () => {
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
};

const styles = StyleSheet.create({
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
});

export default MainPreparationDetail;
