import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, hr80} from '../../../css/pagecss'
import {formInput, formTextLinkRight, formTextLinkCenter} from '../../../css/formcss'
import {formHead, formbtn} from '../../../css/formcss'
import { LinearGradient } from 'expo-linear-gradient'
const Login = ({ navigation  }) => {
  return (
    <LinearGradient colors={['#05B3EA', 'pink']} style={styles.gradientContainer}>
    <View style={containerFull}>
        <Image source = {logo} style={logo}></Image>
        <Text style={formHead}>Login</Text>
      <TextInput placeholder ="Enter Your Email" style={formInput} />
      <TextInput placeholder ="Enter Your Password" style={formInput} 
        secureTextEntry={true}
      />

<Text style={formTextLinkRight} onPress={() => navigation.navigate('Forgotpassword_enteremail')}>
Forgot Password?
</Text>

    <Text style={formbtn} onPress={
        () => navigation.navigate('TransactionPage')
    }>
        Submit
    </Text>

    <View style={hr80}></View>

    <Text style={{formTextLinkCenter}}>
         <Text style = {{ color: 'white'}}
            onPress={() => navigation.navigate('Signup_enterEmail')}>Don't have an account? Signup</Text>
    </Text>
    </View>
    </LinearGradient>
  )
}

export default Login

const styles = StyleSheet.create({
  gradientContainer: {
    fill: 1
  }


})