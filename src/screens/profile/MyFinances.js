import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const MyFinances = ({navigation}) => {
  return (
    <View style={styles.container}>
    <LinearGradient colors={['#05B3EA', 'pink']} style={styles.bigCircle}>
      <View style={styles.circleContainer}>
        <View style={styles.inBigCircle}>
          <Text style={styles.circleTextTop}>All Time Spending:</Text>
          <Text style={styles.circleTextBottom}>$100</Text>
        </View>
      </View>
      </LinearGradient>
      <View style={styles.circleContainer}>
      <LinearGradient colors={['#05B3EA', 'pink']} style={styles.smallCircle}>
        <View style={styles.InSmallCircle}>
          <Text style={styles.circleTextTop}>This Month:</Text>
          <Text style={styles.circleTextBottom}>$100</Text>
        </View>
      </LinearGradient>
      </View>

      <View style={styles.circleContainer}>
        <TouchableOpacity style={styles.buttonLeft} onPress={() => navigation.navigate("My_UserProfile")}>
            <Text style={styles.buttonText}>Tap Out</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    marginVertical: 10,
  },
  bigCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    backgroundColor: 'transparent',
    marginBottom: 60,
  },
  inBigCircle: {
    width: 225,
    height: 225,
    borderRadius: 115,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  smallCircle: {
    width: 200,
    height: 200,
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  InSmallCircle: {
    width: 175,
    height: 175,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circleTextTop: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  circleTextBottom: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonLeft: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyFinances;
