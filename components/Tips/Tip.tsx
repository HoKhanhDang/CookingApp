import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export type recipesInfo = {
  id: string;
  name: any;
  content: any;
};

const Tips = ({id, name, content}) => {
  return (
    <View style={styles.tips}>
      <View
        style={{
          flex: 3,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/icons/profile.png')}
        />
        <Text style={{color:"#F4F4F8"}}>{name}</Text>
      </View>
      <View style={{ flex: 5 }}>
        <Text style={[styles.textContent, { padding: 20 }]}>
          {content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //tips
  tips: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#FF724C',
    padding: 10,
    borderRadius: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  textContent: {
    fontSize: 15,
    color: '#F4F4F8',
  },
});

export default Tips;