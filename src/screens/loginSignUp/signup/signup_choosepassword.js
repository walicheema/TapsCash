import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goBack, logo1 } from '../../../css/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import { formHead2, formHead3, formInput, formbtn } from '../../../css/formcss';

const signup_choosepassword = ({navigation}) => {
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
      <Text style={formHead3}>Choose a strong password</Text>
      <TextInput placeholder="Enter a password"
      style ={formInput} />
      <TextInput placeholder="Verify password"
      style ={formInput} />

      <Text style={formbtn}
        onPress={() => navigation.navigate('Signup_account_created')}
        >
            Next
        </Text>



    </View>
  )
}


export default signup_choosepassword

const styles = StyleSheet.create({})