import { collection, deleteDoc, doc, getDocs, query, sum, where } from 'firebase/firestore';
import {Component, useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import { FIREBASE_STORE } from '../../firebase/firebase';

import { UserContextInsideScreen } from '../Authentication/InsideScreen';


function CartItems({item, index, setIsLoad}) {
  const [check, setCheck] = useState(false);

  const handleDelete = async() => {
      try {
        setIsLoad(true)
        const docRef = doc(FIREBASE_STORE, "cart", item.email+item.ingredientName);
        await deleteDoc(docRef);
        setIsLoad(false);
      } catch (error) {
        console.error("Error deleting document:", error);
      }
  }
 
  return (
      <View key={index} style={styles.cart}>
        <View style={[styles.cartItems, {flex: 5}]}>
          <Text style={styles.text}>{item.ingredientName}</Text>
        </View>
        <View style={[styles.cartQuantity, {flex: 3}]}>      
                     
            <Text style={styles.text}>{item.quantity} {item.type}</Text>

        </View>
        <View style={[styles.buttonCart, {flex: 3}]}>
            <TouchableOpacity onPress={()=>setCheck(!check)}>
              {check ? (
                  <>                  
                      <Image
                        style={styles.icon}
                        source={require('../../assets/icons/checked.png')}
                      />      
                  </>
              ):(
                <>         
                    <Image
                      style={styles.icon}
                      source={require('../../assets/icons/uncheck.png')}
                    />
                
                </>
                
              )}
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>handleDelete()}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/trash.png')}
              />
            </TouchableOpacity>
            
        </View>
      </View>
  );
}

export default function Cart () {
    const [cartItems, setCartItems] = useState([]);
    const [estimate, setEstimate] = useState(0);

    const [isLoad, setIsLoad] = useState(false);


    const user = useContext(UserContextInsideScreen);

    const getCartItems = async () => {
      try {
        const q = query(
          collection(FIREBASE_STORE, "cart"),
          where("email", "==", user.email)
        );
    
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map((doc) => doc.data());
    
        setCartItems(list);      

      } catch (e) {
        console.error("Error getting courses", e);
      }
    }

    const handleClearAll = async() => {
      try {
        cartItems.forEach(async(item) => {
            const docRef = doc(FIREBASE_STORE, "cart", item.email+item.ingredientName);
            await deleteDoc(docRef);
        })
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    }
    useEffect(() => {
      getCartItems();
    }, []);

    useEffect(() => {
      getCartItems();
    }, [isLoad]);


    useEffect(() => {
      let totalEstimate = 0;
      cartItems.forEach(item => {
          totalEstimate += (item.price);
          console.log(estimate);    
      })
      setEstimate(totalEstimate);
    }
    ),[cartItems];

    return (
      <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 7}}>
          <View style={{
              width:"100%",
              padding: 10,
              alignSelf: 'center',         
              backgroundColor: '#FF724C',
              borderRadius: 10,
              marginBottom: 10,
              alignItems: 'center',
            }}
            >
                <Image style={{height:60,width:60}} source={require("../../assets/icons/shopping-cart.png")}/>
                <Text style={{fontWeight: 'bold',fontSize: 20,
              color: 'white'}}>  
                  Cart size: {cartItems.length}        
                </Text>
                
            </View>
          

          <View style={styles.navTitle}>
            <View style={{flex:5}}>
              <Text style={styles.navText}>Ingredient</Text>
            </View>
            <View style={{flex:3}}>
              <Text style={styles.navText}>Quantity</Text>
            </View>
              
            <View style={{flex:3}}></View>
          </View>
          <ScrollView>
            {cartItems.map((item, index) => (                     
                <CartItems item={item} index={index} setIsLoad={setIsLoad}/>
            ))}
          </ScrollView>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={styles.sumPrice}>
                Estimate price:
              </Text>
              <Text
                style={[styles.sumPrice,{color:'red'}]}>
                {estimate} USD
              </Text>
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.buttonClearall} 
              onPress={()=>handleClearAll()}
              >
              
              <Image
                style={{width: 30, height: 35, margin: 5, alignSelf: 'center'}}
                source={require('../../assets/icons/delete.png')}
              />
              <Text
                style={styles.fontBig}>
                Clear all
              </Text>
              
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {},
  cart: {
    margin: 10,
    flexDirection: 'row',
    height: 40,
    color: 'black',
  },
  text:{
    fontSize: 15,
  },
  icon:{
    width: 30,
    height: 30,
  },
  fontBig:{
    fontSize: 21,
    color:'white'
  },
  buttonClearall:{
    borderRadius: 10,
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitle:{
    color:"#FF724C",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navText:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20,
    marginBottom:10,
    color:"#FF724C"
  },
  sumPrice: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
  },
  buttonCart: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cartItems: {
    backgroundColor: '#FF724C',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartQuantity: {
    flexDirection: 'row',
    marginLeft: 10,
    backgroundColor: '#FF724C',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cartItemsButton: {},
});
