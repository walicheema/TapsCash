import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, hr80 } from '../../../css/pagecss'
import { formInput, formTextLinkRight, formTextLinkCenter } from '../../../css/formcss'
import { formHead, formbtn } from '../../../css/formcss'
import { LinearGradient } from 'expo-linear-gradient'
import { CheckBox } from 'react-native-elements'

const Signup_enterEmail = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <View style={styles.gradientContainer}>
      <Text style={styles.signUp}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          style={styles.formInput}
          placeholderTextColor="white"
        />
      </View>
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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirm Password"
          style={styles.formInput}
          secureTextEntry={true}
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isChecked}
          onPress={toggleCheckbox}
          checkedColor="#05b3ea"
          uncheckedColor="white"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxText}>I accept the</Text>
        <Text style={[styles.checkboxText, styles.termsLink]} onPress={() => navigation.navigate('Login')}>
          Terms & Conditions
        </Text>
      </View>

      <Text style={styles.PrivacyPolicy}>
        and{' '}
        <Text style={{ color: '#05b3ea' }} onPress={() => navigation.navigate('Login')}>
          Privacy Policy
        </Text>
      </Text>

      <LinearGradient colors={['#60A3F2', '#FD87FF']} style={styles.submitButton}>
        <TouchableOpacity onPress={() => navigation.navigate('TransactionPage')}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.TermsAndConditions}>
        Already have an account?{' '}
        <Text style={{ color: '#05b3ea' }} onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    backgroundColor: '#030818'
  },
  signUp: {
    marginTop: 120,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 120,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  checkbox: {
    padding: 0,
    marginRight: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 14,
    color: 'white',
  },
  termsLink: {
    color: '#05b3ea',
    textDecorationLine: 'underline',
  },
  submitButton: {
    marginTop: 90,
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
  TermsAndConditions: {
    marginLeft: 20,
    marginTop: 20,
    textAlign: 'left',
    fontSize: 14,
    color: 'white',
  },
  PrivacyPolicy: {
    marginLeft: 20,
    textAlign: 'left',
    fontSize: 14,
    color: 'white',
  },
})

export default Signup_enterEmail
