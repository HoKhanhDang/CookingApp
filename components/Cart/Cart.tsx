import {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';

interface CartItem {
  id: number;
  userId: number;
  ingredient: string;
  quantity: number;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    userId: 1,
    ingredient: 'Tomato',
    quantity: 3,
  },
  {
    id: 2,
    userId: 1,
    ingredient: 'Onion',
    quantity: 2,
  },
  {
    id: 3,
    userId: 2,
    ingredient: 'Potato',
    quantity: 4,
  },
  {
    id: 4,
    userId: 2,
    ingredient: 'Carrot',
    quantity: 5,
  },
  {
    id: 5,
    userId: 3,
    ingredient: 'Broccoli',
    quantity: 1,
  },
  {
    id: 6,
    userId: 3,
    ingredient: 'Spinach',
    quantity: 2,
  },
  {
    id: 7,
    userId: 4,
    ingredient: 'Chicken',
    quantity: 2,
  },
  {
    id: 8,
    userId: 4,
    ingredient: 'Fish',
    quantity: 3,
  },
  {
    id: 9,
    userId: 5,
    ingredient: 'Eggs',
    quantity: 6,
  },
  {
    id: 10,
    userId: 5,
    ingredient: 'Milk',
    quantity: 2,
  },
];

export default class Cart extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 7}}>
          <Text
            style={{
              padding: 30,
              alignSelf: 'center',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Number of ingredients: {cartItems.length}
          </Text>
          <ScrollView>
            {cartItems.map((item, index) => (
              <View key={index} style={styles.cart}>
                <View style={[styles.cartItems, {flex: 5}]}>
                  <Text>{item.ingredient}</Text>
                </View>
                <View style={[styles.cartQuantity, {flex: 2}]}>
                  <Text>{item.quantity}</Text>
                </View>
                <View style={styles.buttonCart}>
                  <View>
                    <TouchableOpacity>
                      <Image
                        style={{width: 20, height: 25}}
                        source={{
                          uri: 'https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 10, height: 10, margin: 5}}
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/63/63747.png',
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={{width: 10, height: 10, margin: 5}}
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/25/25232.png',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                padding: 30,
                alignSelf: 'center',
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Total: 1000vnd
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingRight: 10,
                  alignSelf: 'center',
                  fontSize: 20,
                  color: 'red',
                  fontWeight: 'bold',
                }}>
                Clear all
              </Text>
              <Image
                style={{width: 30, height: 35, margin: 5, alignSelf: 'center'}}
                source={{
                  uri: 'https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  cart: {
    margin: 10,
    flexDirection: 'row',
    height: 40,
    color: 'black',
  },

  buttonCart: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cartItems: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartQuantity: {
    marginLeft: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemsButton: {},
});
