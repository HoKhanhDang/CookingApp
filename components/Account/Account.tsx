import React from 'react';
import {  Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import Recipes from '../Recipe/Recipe';

function Account(): React.JSX.Element {
  return (
    <View>
      <View style={[styles.conHeader]}>
        <Image
          style={[styles.icon]}
          source={require('../../assets/icons/logo.png')}
        />

        <Image
          style={[styles.icon]}
          source={require('../../assets/icons/menu.png')}
        />
      </View>
      <View style={[styles.conMain]}>
        <View style={[styles.conTop]}>
            <Image 
            style={[styles.picture]}
            source={require('../../assets/icons/profile.png')}
            />
            <Text style={[styles.textName]}>Name</Text>
            <View style={[styles.conOfLike]}>
                <Text style={[styles.textNomo]}>Like: 0</Text>
                <Text style={[styles.textNomo, styles.margin]}>Cart: 1</Text>
            </View>
        </View>
        <View style={[styles.conBot]}>
            <View style={[styles.conSave]}>
                <Text style={[styles.textNomo, styles.margin]}>Saved Recipes</Text>
            </View>
            <View>
                <TouchableOpacity style={[styles.touchOpa]}>
                    <Text style={[styles.textNomo]}>Recipe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.touchOpa]}>
                    <Text style={[styles.textNomo]}>Recipe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.touchOpa]}>
                    <Text style={[styles.textNomo]}>Recipe</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#fa9e51'
  },
  icon:{
    width: 40,
    height:40
  },
  search:{
    fontSize: 18,
    color: 'black',
    borderRadius: 45,
    backgroundColor: 'white',
  },
  conMain:{
    width: '100%',
    height: '84%',
  },
  conTop:{
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conOfLike:{
    flexDirection: 'row',
  },
  picture:{
    height: 150,
    width: 150,
  },
  conBot:{
    alignItems: 'center',
  },
  conSave:{
    margin: 10,
    width: '100%',
    alignItems: 'flex-start',
  },
  margin:{
    marginLeft: 20,
  },
  touchOpa:{
    margin: 10,
    height: 50,
    width: 300,
    borderRadius: 20,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  textName:{
    color: 'black',
    fontSize: 28,
    fontWeight: '600',
  },
  textNomo:{
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  conFooter:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#fa9e51'
  }
});

export default Account;
