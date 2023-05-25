import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { logo2 } from '../css/pagecss'
import logo from '../../assets/logo.png'

const Topnavbar = () => {
  return (
    <View style={styles.container}>
      <Image source ={logo} style={logo2}/>
    </View>
  )
}

export default Topnavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10, 
        position: 'absolute',
        top: 20,
        zIndex: 100,
    }
})