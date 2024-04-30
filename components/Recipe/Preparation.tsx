import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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

export default function Preparation({navigation}) {
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

            <View>
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
    textNomal: {
      fontSize: 15,
      color: 'black',
    },
    timePrepare: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stepsInstruction: {
      flexDirection: 'row',
      paddingVertical: 10,
      backgroundColor: '#768884',
      marginVertical: 5,
      borderRadius: 10,
    },
  });
