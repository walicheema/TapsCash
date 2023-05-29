import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import logo from '../../../../assets/logo.png';
import dripexample from '../../../../assets/dripexample.png';
import { containerFull } from '../../../css/pagecss';
import { formHead } from '../../../css/formcss';
import { LinearGradient } from 'expo-linear-gradient';

const SecondIntro = ({ navigation }) => {
  const goToThirdIntro = () => {
    navigation.navigate('ThirdIntro');
  };

  return (
    <LinearGradient colors={['#05B3EA', 'pink']} style={styles.gradientContainer}>
      <View style={containerFull}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Share how you spend</Text>
        <Text style={styles.subtitle}>"Drop your drip"</Text>
        <Image source={dripexample} />
        <TouchableOpacity style={styles.nextButton} onPress={goToThirdIntro}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SecondIntro;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 40,
  },
  nextButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
