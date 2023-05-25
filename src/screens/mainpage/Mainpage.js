import { StyleSheet, Text, View, StatusBar} from 'react-native'
import React from 'react'
import { containerFull } from '../../css/pagecss'
import { formHead } from '../../css/formcss'
import Bottomnavbar from '../../components/Bottomnavbar'
import Topnavbar from '../../components/Topnavbar'
import FollowersRandomPost from '../../components/FollowersRandomPost'

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar />
        <Bottomnavbar />
        <Topnavbar />
      <FollowersRandomPost />
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingVertical: 50,
    }
})