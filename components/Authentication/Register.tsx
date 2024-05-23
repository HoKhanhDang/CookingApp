import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import React, { useState } from 'react';
import {
    ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FIREBASE_AUTH } from '../../firebase/firebase';

import { getFirestore, collection, getDocs ,addDoc, doc, getDoc, query, where, setDoc} from "firebase/firestore";
import {FIREBASE_STORE} from '../../firebase/firebase';
import { update } from 'firebase/database';

export default function Register ({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const [isLoading, setIsLoading] = useState(false);
    const [isNullOrEmpty, setIsNullOrEmpty] = useState(false);

    const [checkconfirmPassword, setCheckconfirmPassword] = useState(false);

    const auth = FIREBASE_AUTH;

    const register = async () => {
        setIsLoading(true);
        try {
            if (name == "" || email == "" || password == "" || confirmPassword == "") {         
                setIsNullOrEmpty(true);
                setIsLoading(false);
                return;
            }
            else
            if (password !== confirmPassword) {
                setIsNullOrEmpty(false);
                setCheckconfirmPassword(true);
                setIsLoading(false);
                return;
            }
            else
            {
                setCheckconfirmPassword(false);
                setIsNullOrEmpty(false);

                await createUserWithEmailAndPassword(auth, email, password);
      
                const account = {
                    'name': name,
                    'email': email,
                    'avatar' : 'https://firebasestorage.googleapis.com/v0/b/fb-cooking-app.appspot.com/o/avatar.png?alt=media&token=04783c5f-b097-40f8-a6cf-13f454e1a382',
                }

                const accRef = doc(FIREBASE_STORE, 'accounts', email);
                await setDoc(accRef, account);

                setIsLoading(false);             
            }
            
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
        finally
        {
            setIsLoading(false);
        }

    }

    return (
        <View style={styles.container}>
            {isLoading?(
                <View style={[styles.components,{alignItems:'center'}]}>
                    <ActivityIndicator size="large" color="white"/>
                </View>
            ):
            (
                <>
               
                    <View style={[styles.components]}>
                        <Text style={[styles.title,{justifyContent:"center"}]}>REGISTER</Text>
                    </View>
                    
                    <View style={styles.components}>
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            placeholder='Full Name'
                            placeholderTextColor='grey' 
                            onChangeText={(prevname)=>setName(prevname)}
                        />
                        <TextInput
                            style={styles.textInput}
                            keyboardType="email-address"
                            value={email}
                            placeholder='Email'
                            placeholderTextColor='grey' 
                            onChangeText={(prevemail)=>setEmail(prevemail)}
                        />
                        <TextInput
                            style={styles.textInput}
                            value={password}
                            placeholder='Password'
                            placeholderTextColor='grey' 
                            onChangeText={(prevpassword)=>setPassword(prevpassword)}
                            
                        />
                        <TextInput
                            style={styles.textInput}
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            placeholderTextColor='grey' 
                            onChangeText={(prevconfirmPassword)=>setConfirmPassword(prevconfirmPassword)}
                        />


                        {checkconfirmPassword?(
                            <Text style={[styles.warning]}>Password and Confirm Password do not match</Text>
                        ):(
                            <></>
                        )}
                        {isNullOrEmpty?(
                            <Text style={[styles.warning]}>Please fill all fields</Text>
                        ):(
                            <></>
                        )}
                        
                    </View>

                    <View style={styles.components}>
                        <TouchableOpacity style={[styles.loginbutton]} onPress={()=>register()}>
                            <Text style={[styles.text,{color:'#F4F4F8'}]}>Create Account</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.components,{flexDirection:'row'}]}> 
                        <Text style={[styles.navText]}>Already have an account ? , </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text style={[styles.navText,{fontWeight:"bold",color:"#FF724C"}]}>Sign in</Text>
                        </TouchableOpacity>           
                    </View>
            </>
            )
        }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        color:"white",
        backgroundColor:"#F4F4F8",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    title:{
        fontSize:40,
        color:"#FF724C",
        fontWeight:"bold",
        alignSelf:"center",
    },
    navText:{
        fontSize:15,
        color:"grey",
        alignSelf:"center",
    },
    warning:
    {
        color:"red",
        alignSelf:"center",
    },
    textInput:{
        marginBottom:15,
        height: 45, 
        borderColor: 'gray', 
        borderWidth: 1 , 
        borderRadius:30,
        paddingHorizontal: 20,
        color:"#2A2C41",
        
    },
    loginbutton:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        width:"100%",
        height:40,
        backgroundColor:"#FF724C",
    },
    components:{
        width: '70%',
        margin:10,
    },
    loginMethod:{
        flexDirection: 'row',
        justifyContent:"space-around",
        width: '50%',
        margin:10,
    },
    text:{
        color:"#2A2C41",
        fontSize:18,
    },


});
