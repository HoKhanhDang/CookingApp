import {Component, ReactNode} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, Image, ListItem} from 'react-native-elements';
import Tips from '../Tips/Tip';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import seeMoreTips from '../Tips/SeeMoreTips';

const windowWidth = Dimensions.get('window').width - 30;

class DetailRecipe extends Component {
  render(): React.ReactNode {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.textTitle, {fontSize: 30, fontWeight: 'bold'}]}>
          Galic Shrimp
        </Text>
        <Text style={[styles.textContent, {fontSize: 15, paddingVertical: 10}]}>
          Galic Shrimp dasdasdsad dasd sd d asdad aasd sadsaGalic Shrimp
          dasdasdsad dasd sd d asdad aasd sadsaGalic Shrimp dasdasdsad dasd sd d
          asdad aasd sadsa
        </Text>
        <View style={styles.navDetail}>
          <Image
            style={[{width: 30, height: 30}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6611/6611465.png',
            }}
          />
          <Text style={[styles.textContent, {marginLeft: 10}]}>
            <Text style={{fontWeight: 'bold'}}>90%</Text> would like this
          </Text>
        </View>
        <View style={styles.navDetail}>
          <Image
            style={[{width: 30, height: 30}]}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6611/6611465.png',
            }}
          />
          <Text style={[styles.textContent, {marginLeft: 10}]}>
            Ready in<Text style={{fontWeight: 'bold'}}> under 30 minutes</Text>
          </Text>
        </View>
        <Image
          style={[{width: windowWidth, height: windowWidth}]}
          source={{
            uri: 'https://barona.vn/storage/meo-vat/83/com-ga-xoi-mo.jpg',
          }}
        />
      </View>
    );
  }
}

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

class Ingredients extends Component {
  render() {
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
}

const steps = [
  {stepNumber: 1, detail: 'Preheat the oven to 350°F.'},
  {
    stepNumber: 2,
    detail:
      'In a large mixing bowl, combine the flour, sugar, and baking powder.',
  },
  {
    stepNumber: 3,
    detail:
      'In a separate bowl, whisk together the eggs, milk, and melted butter.',
  },
  {
    stepNumber: 4,
    detail:
      'Gradually add the wet ingredients to the dry ingredients, stirring until just combined.',
  },
  {
    stepNumber: 5,
    detail: 'Pour the batter into a greased baking dish and smooth the top.',
  },
  {
    stepNumber: 6,
    detail:
      'Bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.',
  },
  {stepNumber: 7, detail: 'Allow the cake to cool before serving.'},
];

class Preparation extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{}}>
        <Text style={[styles.textTitle, {paddingBottom: 20}]}>Preparation</Text>

        <View style={[styles.timePrepare]}>
          <View style={{flexDirection: 'column'}}>
            <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
              Total Time
            </Text>
            <Text style={styles.textContent}>50 min</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
              Prep Time
            </Text>
            <Text style={styles.textContent}>10 min</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={[styles.textContent, {fontWeight: 'bold'}]}>
              Cook Time
            </Text>
            <Text style={styles.textContent}>40 min</Text>
          </View>
        </View>

        <View style={[styles.steps]}>
          <Text
            style={[
              styles.textNomal,
              {alignSelf: 'center', paddingVertical: 20, fontSize: 20},
            ]}>
            Step-by-step instructions
          </Text>
          {steps.map((step, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate('detailPreparation')}>
                <View style={styles.stepsInstruction}>
                  <Text
                    style={[
                      styles.textNomal,
                      {
                        flex: 1,
                        padding: 10,
                        marginLeft: 20,
                        justifyContent: 'center',
                        fontWeight: 'bold',
                      },
                    ]}>
                    {step.stepNumber}
                  </Text>
                  <Text style={[styles.textNomal, {flex: 10, padding: 10}]}>
                    {step.detail}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          <View></View>
        </View>
      </View>
    );
  }
}

const RecipesList = [
  {
    recipeName: 'Gà chiên hương thảod asdsadsadasdsad',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
  {
    recipeName: 'Gà chiên hương thảo',
    recipeImage: require('../../assets/icons/ga.png'),
  },
];

class RelateRecipes extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'column', height: 'auto'}}>
        <Text style={[styles.textTitle, {paddingVertical: 20}]}>
          Relate Recipes
        </Text>
        <ScrollView horizontal={true} contentContainerStyle={[styles.scroll]}>
          {RecipesList.map((recipe, index) => (
            <TouchableOpacity key={index} style={styles.relateRecipes}>
              <View style={{flex: 7}}>
                <Image
                  style={{width: 150, height: 150}}
                  source={recipe.recipeImage}
                  borderRadius={10}
                />
              </View>
              <Text style={[styles.textNomal, {flex: 4, fontWeight: 'bold'}]}>
                {recipe.recipeName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

class TipsScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flex: 1, height: 300}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.textTitle}>Tips</Text>
          <TouchableOpacity onPress={() => navigation.navigate('seemoretips')}>
            <Text>See more</Text>
          </TouchableOpacity>
        </View>
        <Tips />
      </View>
    );
  }
}

export default class ShowRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <DetailRecipe />
          <Ingredients />
          <Preparation navigation={navigation} />
          <RelateRecipes />
          <TipsScreen navigation={navigation} />
        </View>
      </ScrollView>
    );
  }
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'black',
    paddingHorizontal: 15,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'gray',
    marginVertical: 15,
  },
  scroll: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  //text
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  textContent: {
    fontSize: 15,
    color: 'black',
  },
  textNomal: {
    fontSize: 15,
    color: 'black',
  },

  //recipe details
  navDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  //ingredients
  ingredients: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  //preparation
  timePrepare: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  steps: {},
  stepsInstruction: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#768884',
    marginVertical: 5,
    borderRadius: 10,
  },
  relateRecipes: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 10,
    width: 150,
    height: 250,
  },

  //tips
  tips: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#FBB2AC',
    padding: 10,
    borderRadius: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
});
