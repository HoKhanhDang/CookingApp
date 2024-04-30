import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';


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

export default function RelateRecipes() {
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
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    textNomal: {
        fontSize: 15,
        color: 'black',
    },
    relateRecipes: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight: 10,
        width: 150,
        height: 250,
    },
    scroll: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
  