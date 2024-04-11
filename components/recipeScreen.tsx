import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, Button, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native-elements';
import api from './api.js'


export default class DetailScreen extends React.Component{
    constructor(props){
        super(props);
        this.state= {
        
        }
                    
    }
   

    render(): React.ReactNode {
        
        return (
            <View style={{ flex: 1,flexDirection:'row',padding:10,marginVertical:100}}>
                

            </View>
        )
    }
}