import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { icons1 } from '../css/pagecss';

const Bottomnavbar = ({navigation, page}) => {
    console.log(page)
  return (
    <View style={styles.container}>

        {
            page === 'Mainpage' ?
            <Entypo name="camera" size={24}  style={styles.activeicons1}

            onPress={() => navigation.navigate('Mainpage')} />
            :
            <Entypo name="camera" size={24}  style={icons1}

            onPress={() => navigation.navigate('Mainpage')} />
        }
        {
            page === 'SearchUserPage' ?
                <FontAwesome name="search" size={24} color="black" style={styles.activeicons1}
                onPress={() => navigation.navigate('SearchUserPage')} 
                />
            :
                <FontAwesome name="search" size={24} color="black" style={icons1}
                onPress={() => navigation.navigate('SearchUserPage')} 
                />
        }
        {
            page === 'TransactionPage' ?
            <MaterialCommunityIcons name="contactless-payment" size={24} color="black" style={styles.activeicons1}
            onPress={() => navigation.navigate('TransactionPage')} 
            />
            :
            <MaterialCommunityIcons name="contactless-payment" size={24} color="black" style={icons1}
            onPress={() => navigation.navigate('TransactionPage')} 
            />
            
        }
        {
            page === 'My_UserProfile' ?
            <Ionicons name="person" size={24} color="black" style={styles.activeicons1}
            onPress={() => navigation.navigate('My_UserProfile')} 
            />
            :
            <Ionicons name="person" size={24} color="black" style={icons1}
            onPress={() => navigation.navigate('My_UserProfile')} 
            />
        }
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
        alignItems: 'center',
    },
    activeicons1: {
        backgroundColor: 'white',
        borderRadius: 50,
        fontSize: 30,
        padding: 10,
    }

})