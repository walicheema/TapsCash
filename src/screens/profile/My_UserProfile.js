import { StyleSheet, Text, ScrollView, View, Image, StatusBar, Modal, TouchableOpacity, ScrollViewBase } from 'react-native'
import React, { useState } from 'react'
import { containerFull } from '../../css/pagecss'
import { formHead } from '../../css/formcss'
import Bottomnavbar from '../../components/Bottomnavbar'
import Topnavbar from '../../components/Topnavbar'
import FollowersRandomPost from '../../components/FollowersRandomPost'
import { LinearGradient } from 'expo-linear-gradient'
import My_Drips from './My_Drips'

const My_UserProfile = ({navigation}) => {
  const data= {
    username: 'walicheema',
    followers: 100,
    following: 120,
    transactions: 55,
    description: "This is a basic profile description",
    profile_image: 'https://picsum.photos/500/500',
    posts: [
      {
        id: 1,
        post_image: 'https://picsum.photos/300/400',
      },
      {
        id: 2,
        post_image: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        post_image: 'https://picsum.photos/300/300',
      },
      {
        id: 4,
        post_image: 'https://picsum.photos/400/300',
      },
    ],
    balance: 100,
  }

  const [showDrips, setShowDrips] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);

  const toggleDripsWindow = () => {
    setShowDrips(!showDrips);
  };
  
  const toggleTransactionWindow = () => {
    setShowTransactions(!showTransactions);
  }

  return (
    <LinearGradient colors={['#05B3EA', 'pink']} >
      <View style={styles.container}>
        <StatusBar />
        <Bottomnavbar navigation={navigation} page={"My_UserProfile"}/>
        <Topnavbar navigation={navigation} page={"My_UserProfile"}/>
      
        <ScrollView>
          <View style={styles.c1}>
            <Image style={styles.profilepic} source = {{uri: data.profile_image}}/>
            <Text style={styles.txt}>Balance: ${data.balance}</Text>
            <View style={styles.c11}>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Friends:</Text>
                <Text style={styles.txt2}>{data.followers}</Text>
              </View>
              <View style={styles.vr1} />
              <View style={styles.c111}>
                <Text style={styles.txt1}>Drips:</Text>
                <Text style={styles.txt2}>{data.posts.length}</Text>
              </View>
              <View style={styles.vr1} />
              <View style={styles.c111}>
                <Text style={styles.txt1}>Transactions:</Text>
                <Text style={styles.txt2}>{data.transactions}</Text>
              </View>
            </View>
          </View>
          

          <View style={styles.c1}>
            <TouchableOpacity onPress={toggleDripsWindow}>
              <Text style={styles.txt}>My Drips</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.c1}>
            <TouchableOpacity onPress={toggleTransactionWindow}>
              <Text style={styles.txt}>My Transactions</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.c1}>
            <TouchableOpacity onPress={toggleTransactionWindow}>
              <Text style={styles.txt}>My Friends</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.c1}>
            <TouchableOpacity onPress={() => navigation.navigate("MyFinances")}>
              <Text style={styles.txt}>View Finances</Text>
            </TouchableOpacity>
          </View>

          <Modal visible={showDrips} animationType="slide">
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={toggleDripsWindow} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <ScrollView>
                <View style ={styles.c13}>
                {data.posts.map(item => (
                  <Image
                    key={item.id}
                    style={styles.postpic}
                    source={{uri: item.post_image}}
                  />
                ))}
                </View>
              </ScrollView>
            </View>
          </Modal>

          <Modal visible={showTransactions} animationType="slide">
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={toggleDripsWindow} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <ScrollView>
              </ScrollView>
            </View>
          </Modal>
        
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

export default My_UserProfile

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 50,
  },
  c1: {
    width: '100%',
    alignItems: 'left',
  },
  profilepic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: 'rgba(250,250,250,0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  txt1: {
    color: 'white',
    fontSize: 15,
  },
  txt2: {
    color: 'white',
    fontSize: 20,
  },
  c11: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  c111: {
    alignItems: 'center',
  },
  vr1: {
    width: 1,
    height: 50,
    backgroundColor: 'white'
  },
  description: {
    color: 'white',
    fontSize: 15,
    marginVertical: 10,
    backgroundColor: "#111111",
    width: '100%',
    padding: 10,
    paddingVertical: 20,
  },
  postpic: {
    width: '33.3333333%',
    height: 120,
  },
  c13: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'center'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})
