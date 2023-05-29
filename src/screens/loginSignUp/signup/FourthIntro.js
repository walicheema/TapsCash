import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import logo from '../../../../assets/logo.png';
import landingpage from '../../../../assets/landingpage.png';
import { containerFull } from '../../../css/pagecss';
import { formHead } from '../../../css/formcss';
import { LinearGradient } from 'expo-linear-gradient';

const FourthIntro = ({ navigation }) => {
  const goToTransactionPage = () => {
    navigation.navigate('TransactionPage');
  };

  return (
    <LinearGradient colors={['#05B3EA', 'pink']} style={styles.gradientContainer}>
      <View style={containerFull}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Tap your way into the future</Text>        
        <View style={styles.arrowContainer}>
          <View style={styles.line} />
          <View style={styles.arrow} />
        </View>
        <TouchableOpacity style={styles.circle} onPress={goToTransactionPage}>
          <Text style={styles.circleText}>TAP!</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

export default FourthIntro;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  circleText: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  arrowContainer: {
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: 100,
    backgroundColor: 'white',
  },
  arrow: {
    width: 0,
    height: 0,
    borderTopWidth: 20,
    borderTopColor: 'white',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
});
