import {SafeAreaView,ScrollView, Text, Image, View, StyleSheet} from 'react-native';
import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MEALS} from '../config/dummy-data';
export const MealDetailsScreen = ({route}) => {
  
  const navigation = useNavigation();
  const meals = MEALS.find(meal => meal.id === route.params.props.item.id);
  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: route.params.props.item.title});
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView>
     <Image style={styles.img} source={{uri: meals.imageUrl}} />
      <Text style={styles.txt}>{meals.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailTxt}>{meals.duration}min</Text>
        <Text style={styles.detailTxt}>{meals.complexity}</Text>
        <Text style={styles.detailTxt}>{meals.affordability}</Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        {meals.ingredients.map((item, index) => (
          <Text style={styles.ingredientsItem} key={index}>{`${index+1}. ${item}`}</Text>
        ))}
      </View>
      <View style={styles.stepsContainer}>
        <Text style={styles.stepsTitle}>Steps</Text>
        {meals.steps.map((item, index) => (
          <Text style={styles.stepsDetail} key={index}>{`${index+1}. ${item}`}</Text>
        ))}
      </View>
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 4,
  },
  img: {
    width: '100%',
    height: 200,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    margin: 5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 4,
  },
  ingredientsContainer:{
    borderRadius:8,
    elevation:4,
    padding:10,
    marginVertical:10,
    justifyContent:'center',
    alignItems:'baseline',
 
  },
  ingredientsTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',

  },
  ingredientsItem:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'baseline',
  },
  stepsContainer:{
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginVertical:10,
    borderRadius:8,
    elevation:4,
  },
  stepsTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    margin: 5,
  },
  stepsDetail:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'baseline',
  },
});
