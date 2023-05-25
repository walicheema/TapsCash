import { StyleSheet, Text, View, StatusBar} from 'react-native'
import React from 'react'
import { containerFull } from '../../css/pagecss'
import { formHead } from '../../css/formcss'
import Bottomnavbar from '../../components/Bottomnavbar'
import Topnavbar from '../../components/Topnavbar'
import FollowersRandomPost from '../../components/FollowersRandomPost'

const My_UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar />
        <Bottomnavbar navigation={navigation} page={"My_UserProfile"}/>
        <Topnavbar />
      <Text style={formHead}>Your Profile</Text>
    </View>
  )
}

export default My_UserProfile

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingVertical: 50,
    }
})