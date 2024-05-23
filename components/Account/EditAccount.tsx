import React, { Component, useContext, useEffect, useState } from 'react';
import {  Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions,} from 'react-native';
const windowWidth = Dimensions.get('window').width;

import { UserContextInsideScreen } from '../Authentication/InsideScreen';
import { UserContextAcc } from './Account';
import { FIREBASE_AUTH, FIREBASE_DATABASE ,FIREBASE_STORE,FIREBASE_STORAGE, db} from '../../firebase/firebase';

import { updateEmail ,updateProfile,updatePassword  } from "firebase/auth";
import { collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { set } from 'firebase/database';

export default function EditAccount({navigation}) {

    const auth = FIREBASE_AUTH;
    const curUser = auth.currentUser;
    const [oldEmail, setOldEmail] = useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isSetPassword, setIsSetPassword] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const [isUpdate, setIsUpdate] = React.useState(false);

    const [account, setAccount] = React.useState({});

    const user = useContext(UserContextInsideScreen);
    const nameContext = useContext(UserContextAcc);

    useEffect(() => {
        setOldEmail(user.email);
        setEmail(user.email);
        setName(nameContext);
    }, []);

    const handleUpdate = async () => {
        setIsUpdate(!isUpdate);
        try {   

            if (email !== '' ) {
                await updateEmail(curUser, email);
            }
            if (isSetPassword) {
                if (password !== confirmPassword) {
                    alert('Password not match');
                } else {
                    await updatePassword(curUser, password);
                }
                setIsSetPassword(false);
            }

            const account = {
                avatar: 'https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/avatar.png?alt=media&token=04783c5f-b097-40f8-a6cf-13f454e1a382', 
                name: name, 
                email: email 
            }
            const accRef = doc(FIREBASE_STORE, 'accounts', email);
            await setDoc(accRef, account);
          
        } catch (error) {
            console.log(error);
            setIsUpdate(!isUpdate);
        }
        finally
        {      
            setIsUpdate(!isUpdate);          
            if (email !== oldEmail) {
                //xóa email cũ
                await deleteDoc(doc(FIREBASE_STORE, "accounts", oldEmail));

                Alert.alert(
                    'Notice',
                    'Email has been changed, please log in again',
                    [
                      {
                        text: 'OK',
                        onPress: () => auth.signOut()
                      }
                    ]
                  );
            }
            else{
                alert('Update success');
                navigation.popToTop()
            }
            
        }
    }

    return (

        <View style={[styles.container]}>
            <View style={styles.itemImage}>
                <Image 
                    style={[styles.picture]}
                    source={{uri: user.avatar}}
                />
                <TouchableOpacity >                 
                    <Text style={[styles.text,{marginVertical:10}]}>Edit image</Text>
                </TouchableOpacity>
            </View>
            

            <View style={styles.items}>
                <Text style={[styles.text]}>User Name</Text>
                <TextInput style={[styles.input]}
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.items}>
                <Text style={[styles.text]}>Email</Text>
                <TextInput style={[styles.input]}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            {
                !isSetPassword ? 
                    <>
                        <TouchableOpacity style={styles.saveButton} onPress={()=> setIsSetPassword(!isSetPassword)}>
                            <Text style={[styles.text,{color:'red'}]}>Reset Password</Text>
                        </TouchableOpacity>
                    </>
                :           
                (
                    <>
                        <View style={styles.items}>
                            <Text style={[styles.text]}>Password</Text>
                            <TextInput style={[styles.input]}
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />
                        </View>
                        <View style={styles.items}>
                            <Text style={[styles.text]}>Confirm Password</Text>
                            <TextInput style={[styles.input]}
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                            />
                        </View>
                    </>                   
                )
            }
                    
            <TouchableOpacity style={styles.saveButton} onPress={()=>handleUpdate()}>
                <Text style={[styles.text,{color:'red'}]}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={()=>FIREBASE_AUTH.signOut()}>
                <Text style={[styles.text,{color:'white'}]}>Sign out</Text>
            </TouchableOpacity>

        </View>

    );

}
const styles = StyleSheet.create({
    container:{
        color:"black",
        backgroundColor:"white",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    icon:{
      width: 40,
      height:40
    }, 
    picture:{
      height: 200,
      width: 200,
    },
    text:{
      color: 'black',
        fontSize: 18,
        fontWeight: 'bold', 
    },
    input:{
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textDecorationLine: 'none',

    },
    items:{
      width: '80%',
      marginBottom: 15,
      flexDirection: 'column',
      justifyContent:'space-between',
      height: 70,
    },
    itemImage:{
        width: windowWidth-30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    saveButton:{
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    logoutButton:{
        backgroundColor: 'grey',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
   
  });