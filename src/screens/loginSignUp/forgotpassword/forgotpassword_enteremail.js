import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goBack, logo1 } from '../../../css/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import { formHead2, formInput, formbtn } from '../../../css/formcss';
import { LinearGradient } from 'expo-linear-gradient';

const Forgotpassword_enteremail = ({navigation}) => {
  return (
    <LinearGradient colors={['#05B3EA', 'pink']}>
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
      <Text style={formHead2}>Enter your account email</Text>
      <TextInput placeholder="Example: xyz@tapscash.com"
      style ={formInput} />

      <Text style={formbtn}
        onPress={() => navigation.navigate('Forgotpassword_enterverificationcode')}
        >
            Next
        </Text>



    </View>
    </LinearGradient>
  )
}
export default Forgotpassword_enteremail

const styles = StyleSheet.create({})