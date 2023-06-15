import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, hr80 } from '../../../css/pagecss'
import { formInput, formTextLinkRight, formTextLinkCenter } from '../../../css/formcss'
import { formHead, formbtn } from '../../../css/formcss'
import { LinearGradient } from 'expo-linear-gradient'

const Login = ({ navigation }) => {
  return (
    <View style={styles.gradientContainer}>
      <Text style={styles.signIn}>Sign in</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Email"
          style={styles.formInput}
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          style={styles.formInput}
          secureTextEntry={true}
          placeholderTextColor="white"
        />
      </View>

      <Text style={styles.dontHaveAccount}>
        Don't have an account yet?{' '}
        <Text style={{ color: '#05b3ea' }} onPress={() => navigation.navigate('Signup_enterEmail')}>
          Sign Up
        </Text>
      </Text>
      <Text style={styles.dontHaveAccount}>
        Forgot your password?{' '}
        <Text style={{ color: '#05b3ea' }} onPress={() => navigation.navigate('Forgotpassword_enteremail')}>
          Recover
        </Text>
      </Text>
      <LinearGradient colors={['#60A3F2', '#FD87FF']} style={styles.submitButton}>
        <TouchableOpacity onPress={() => navigation.navigate('TransactionPage')}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    backgroundColor: '#030818'
  },
  signIn: {
    marginTop: 100,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 230,
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  formInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    marginLeft: 20,
  },
  submitButton: {
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    backgroundGradient: 'linear-gradient(90deg, #05B3EA, pink)',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dontHaveAccount: {
    marginLeft: 20,
    marginTop: 20,
    textAlign: 'left',
    fontSize: 14,
    color: 'white',
  },
})

export default Login
