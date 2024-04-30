import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';

const ingredients = [ 
    {name: 'Ingredient 1', quantity: 1, type: 'cup'},
    {name: 'Ingredient 2', quantity: 2, type: 'teaspoon'},
    {name: 'Ingredient 3', quantity: 3, type: 'tablespoon'},
    {name: 'Ingredient 4', quantity: 4, type: 'tablespoon'},
    {name: 'Ingredient 5', quantity: 5, type: 'teaspoon'},
    {name: 'Ingredient 6', quantity: 6, type: 'cup'},
    {name: 'Ingredient 7', quantity: 7, type: 'tablespoon'},
    {name: 'Ingredient 8', quantity: 8, type: 'teaspoon'},
    {name: 'Ingredient 9', quantity: 9, type: 'cup'},
  ];
export default function Ingredients() {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.textTitle, {paddingVertical: 20}]}>
          Ingredients
        </Text>
  
        {ingredients.map((ingredient, index) => (
          <View key={index}>
            <View style={styles.ingredients}>
              <Text style={styles.textContent}>{ingredient.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
                  {ingredient.quantity} {ingredient.type}
                </Text>
                <TouchableOpacity
                  style={{marginLeft: 10, marginTop: 2, height: 30, width: 30}}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-add-icon-png-image_956621.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
    );
    }

    const styles = StyleSheet.create({
        textTitle: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
        },
        textContent: {
            fontSize: 15,
            color: 'black',
        },
        ingredients: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        separator: {
            height: 0.5,
            backgroundColor: 'gray',
            marginVertical: 15,
        },
    });
