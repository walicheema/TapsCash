import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { formHead } from '../../../css/formcss';

const Prelogin = ({navigation}) => {
  return (
    <LinearGradient colors={['#05B3EA', 'pink']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to TAPS</Text>
        <Text style={styles.Head}>Secure.</Text>
        <Text style={styles.Head}>Smart.</Text>
        <Text style={styles.LastHead}>Swift.</Text>
        <View style={styles.line} />
        <View style={styles.buttonsContainer}>
          <Text style={[styles.button, styles.signupButton]} onPress={() => navigation.navigate('Signup_enterEmail')}>Sign Up</Text>
          <Text style={[styles.button, styles.loginButton]} onPress={() => navigation.navigate('Login')}>Login</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Prelogin;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 20,
    marginTop: 60
  },
  secureText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    fontSize: 25,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  signupButton: {
    alignSelf: 'flex-start',
  },
  loginButton: {
    alignSelf: 'flex-end',
  },
  Head: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    },
    LastHead: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 200
    },
});
