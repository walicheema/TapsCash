import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const My_Drips = ({id, post_image}) => {
  return (
    <View style={styles.c13}>
    {
      data.posts.map(
        item =>{
          return(
            <Image key={id} style={styles.postpic}
            source={{uri: post_image}}
            />
          )
        }
      )
    }
    </View>
  )
}

export default My_Drips

const styles = StyleSheet.create({
    c13: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
      justifyContent: 'center'
    }

})