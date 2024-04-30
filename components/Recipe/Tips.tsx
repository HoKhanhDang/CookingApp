import React, {Component, ReactNode} from 'react';
import {
    StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Tips from '../Tips/Tip';


export default function TipsScreen({navigation}){
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
                <TouchableOpacity onPress={() => navigation.navigate('seemoretips')}>
                    <Text>See more</Text>
                </TouchableOpacity>
            </View>
            <Tips />
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