import React, { useContext, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

import { FIREBASE_AUTH } from '../../firebase/firebase';

import { CheckBox, Input } from 'react-native-elements';
import { ActivityIndicator } from 'react-native-paper';
import {GoogleAuthProvider ,signInWithRedirect,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCredential } from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { set } from 'firebase/database';


export default function Login ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const auth = FIREBASE_AUTH;

    const login = async () => {
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoading(false);
            setIsError(false);
        } catch (error) {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
        }
        finally {
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
                    <View style={[styles.components,{alignItems:'center'}]}>
                        <Image
                            style={[{height:150,width:150 }]}
                            source={require('../../assets/icons/logo.png')}
                        />
                    </View>

                    <View style={styles.components}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput              
                            style={styles.textInput}
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder='Enter your email'
                            placeholderTextColor={"grey"}
                        />             
                    </View>
                    <View style={styles.components}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry={!isShowPassword}
                            placeholder='Enter your password'
                            placeholderTextColor={"grey"}
                        />
                        <View style={{position:"absolute", top:45,right:20}}>
                            <TouchableOpacity onPress={()=>{setIsShowPassword(!isShowPassword)}}>           
                                <Image
                                    style={[{height:20,width:20 }]}

                                    source={isShowPassword?require('../../assets/icons/hide_w.png'):require('../../assets/icons/show_w.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {isError ? (
                        <>
                            <View style={[styles.components,{alignItems:'center'}]}>
                                    <Text style={{color:"red"}}>Invalid email or password</Text>
                                </View>
                            </>
                    ) : (
                        <>

                        </>
                    )
                }
                    
                    <TouchableOpacity style={[styles.components,styles.loginbutton]} onPress={()=> login()}>
                        <Text style={[styles.text,{color:'#F4F4F8'}]}>Sign in</Text>
                    </TouchableOpacity>


                    <View style={[styles.components,{flexDirection:'row'}]}> 
                        <Text style={[styles.text]}>Have an account yet? , </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                            <Text style={[styles.text,{fontWeight:"bold",color:"#FF724C"}]}>Sign up</Text>
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
    textInput:{
        marginTop:10,
        height: 40, 
        borderColor: '#2A2C41', 
        borderWidth: 1 , 
        borderRadius:15,
        paddingHorizontal:20,
        color:"#2A2C41",

    },
    loginbutton:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        width:"70%",
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
