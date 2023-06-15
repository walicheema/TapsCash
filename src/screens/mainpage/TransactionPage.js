import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'; // Add this line for importing MaterialIcons
import Bottomnavbar from '../../components/Bottomnavbar';
import UserCard from '../../cards/UserCard';
import MoneyInput from '../../cards/MoneyInput';
import { searchbar } from '../../css/pagecss'
import { useState } from 'react';


const TransactionPage = ({ navigation }) => {

  let data =[
    {
        username: "user1",
        profile_image: "https://picsum.photos/250/300",

    },
    {
        username: "user2",
        name: "Miles",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user3",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user4",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user5",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user6",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user7",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user8",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user9",
        profile_image: "https://picsum.photos/200/300"
    },
    {
        username: "user10",
        profile_image: "https://picsum.photos/200/300"
    },
  ]
  const handleTapPress = () => {
    navigation.navigate('TappedPage')
  }

  const [keyword, setKeyword] = useState("")

  return (
    <View style={styles.container}>
      <StatusBar />
      <Bottomnavbar navigation={navigation} page={"TransactionPage"} />
      <Text style={styles.usernameText}>Welcome back, {data[1].name}</Text>

      <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}>
              <Image source={{ uri: data[0].profile_image }} style={styles.userImage} />
          <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>My Balance</Text>
              <Text style={styles.balanceNumber}>$1000</Text>
          </View>
          <TouchableOpacity style={styles.arrowContainer}>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
          </TouchableOpacity>
          </View>
      </View>

      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="white" style={styles.searchIcon} />
        <TextInput
          placeholder="Search.."
          placeholderTextColor="white"
          style={styles.searchInput}
          onChangeText={(text) => {
            setKeyword(text);
          }}
        />
      </View>

      <ScrollView style={styles.userlists}>
        {
            data.filter(
                (user) => {
                    if(keyword == "") {
                        return null
                    }
                    else if(user.username.toLowerCase().includes
                    (keyword.toLowerCase())) {
                        return user
                    }
                }
            ).map((item,index) => {
                return <UserCard key={item.username} user={item}/>
            })
        }
      </ScrollView>

  <Text style={styles.headerText}>View Friend's Drip</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={true}>
    <View style={styles.friendList}>
      {data.map((item, index) => (
        <Image
          key={item.username}
          source={{ uri: item.profile_image }}
          style={styles.friendImage}
        />
      ))}
    </View>
  </ScrollView>


</View>
  )
}

export default TransactionPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030818'
  },
  gradientContainer: {
    flex: 1
  },
  tapContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#05B3EA',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: 'white',
    alignSelf: 'left',
    marginLeft: 30,
  },
  transactionHistoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  userlists: {
    width: '100%',
  },
  usernameText: {
    fontSize: 30,
    fontWeight: 'semibold',
    color: 'white',
    marginTop: 70,
    marginBottom: 15,
    marginLeft: 30
  },
  rectangleContainer: {
    alignItems: 'center',
  },
  rectangle: {
    width: '90%',
    height: 100,
    backgroundColor: '#172348',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  balanceContainer: {
    marginLeft: 20,
  },
  balanceText: {
    fontSize: 12,
    marginBottom: 5,
    color: 'white'
  },
  balanceNumber: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: 'white'
  },
  arrowContainer: {
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  friendListContainer: {
    marginTop: 0,
  },
  friendList: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginLeft: 40,
  },
  friendImage: {
    width: 45,
    height: 45,
    borderRadius: 15,
    marginRight: 5,
  },
    searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#172348',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'white',
    fontSize: 16,
  },
  
  
})
