import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { icons1 } from '../css/pagecss';

const Bottomnavbar = () => {
  return (
    <View style={styles.container}>
      <Entypo name="camera" size={24}  style={icons1}/>
      <FontAwesome name="search" size={24} color="black" style={icons1}/>
      <MaterialCommunityIcons name="contactless-payment" size={24} color="black" style={icons1}/>
      <Ionicons name="person" size={24} color="black" style={icons1}/>
    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: "#111111",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 100,
        borderTopWidth: 1,
        paddingVertical: 10,
    }

})