import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goBack, logo1 } from '../../../css/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import {formHead3, formInput, formbtn } from '../../../css/formcss';

const signup_enterverification = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={goBack}>
      <Ionicons name="arrow-back" size={28} color="gray" />
        <Text style={{
            color: 'gray',
            fontsize: 16,
            marginLeft: 10,
            fontWeight: 'bold'
        }}>
              Go Back
        </Text>
      </TouchableOpacity>
      <Image source = {logo} style={logo}></Image>
      <Text style={formHead3}>A verification code has been sent to your email.</Text>
      <TextInput placeholder="Enter 6-Digit Code Here.."
      style ={formInput} />

      <Text style={formbtn}
        onPress={() => navigation.navigate('Signup_chooseusername')}
        >
            Next
        </Text>



    </View>
  )
}

export default signup_enterverification

const styles = StyleSheet.create({})