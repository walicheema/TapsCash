import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import Bottomnavbar from '../../components/Bottomnavbar';
import UserCard from '../../cards/UserCard';
import MyFinances from './MyFinances';

const My_UserProfile = ({ navigation }) => {
  const data = [
    {
      username: "user1",
      profile_image: "https://picsum.photos/250/300",
      name: "Gwen",
      caption: "Subway Ticket. Awkward!",
      date: "5/23/23",
    },
    {
      username: "user2",
      name: "Miguel",
      profile_image: "https://picsum.photos/200/300",
      caption: "Charity",
      date: "2/20/23",
    },
    {
      username: "user3",
      profile_image: "https://picsum.photos/200/300",
      name: "Hobie",
      caption: "Food",
      date: "7/23/22",
    },
    // ... rest of the data objects
  ];

  const handleTapPress = () => {
    navigation.navigate('TappedPage');
  };

  const [keyword, setKeyword] = useState('');

  

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <View style={styles.content}>

        <View style={styles.header}>
            <Text style={styles.title}>My Profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings1')} style={styles.settingsIcon}>
              <MaterialIcons name="settings" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.profileContainer}>

            <LinearGradient
              colors={['#3D95E4', '#FB5597']}
              start={[0, 0]}
              end={[1, 0]}
              style={styles.profileImageContainer}
            >
              <Image source={{ uri: data[1].profile_image }} style={styles.profileImage} />
            </LinearGradient>

            <View style={styles.infoContainer}>
              <Text style={styles.usernameText}>{data[1].name}</Text>
              <View style={styles.tapsDripsContainer}>
                <Text style={styles.text}>TAPS: <Text style={styles.number}>1610</Text></Text>
                <View style={styles.infoTextSpace}></View>
                <Text style={styles.text}>DRIPS: <Text style={styles.number}>42</Text></Text>
              </View>
            </View>
          </View>
          
          <Text style={styles.headerText}>Friends</Text>
          <View style={{ height: 80 }}>
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

          <View style={styles.itemContainer}>
            <Text style={styles.headerText}>Balance</Text>
            <Text style={styles.balanceAmount}>$10,670.50</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyFinances')}
              style={styles.spendingHistoryButton}
            >
              <LinearGradient
                colors={['#3D95E4', '#FB5597']}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.spendingHistoryGradient}
              >
                <MaterialIcons name="keyboard-arrow-right" size={30} color="white" style={styles.arrow} />
                <Text style={styles.spendingHistoryText}>See Spending History</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.headerText}>Scheduled TAPS</Text>
            {data.map((item, index) => (
              <View style={styles.dataItem} key={index}>
                <Image source={{ uri: item.profile_image }} style={styles.dataItemImage} />
                <View style={styles.dataItemTextContainer}>
                  <Text style={styles.dataItemName}>{item.name}</Text>
                  <Text style={styles.dataItemCaption}>{item.caption}</Text>
                </View>
              </View>
            ))}
            <TouchableOpacity
              onPress={() => console.log('See Spending History')}
              style={styles.spendingHistoryButton}
            >
              <LinearGradient
                colors={['#3D95E4', '#FB5597']}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.spendingHistoryGradient}
              >
                <MaterialIcons name="keyboard-arrow-right" size={30} color="white" style={styles.arrow} />
                <Text style={styles.spendingHistoryText}>See All Scheduled TAPS</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.headerText}>Past DRIPS</Text>
            {data.map((item, index) => (
              <View style={styles.dataItem} key={index}>
                <Image source={{ uri: item.profile_image }} style={styles.dataItemImage} />
                <View style={styles.dataItemTextContainer}>
                  <Text style={styles.dataItemName}>{item.date}</Text>
                  <Text style={styles.dataItemCaption}>{item.caption}</Text>
                </View>
              </View>
            ))}
            <TouchableOpacity
              onPress={() => navigation.navigate('PastDrips')}
              style={styles.spendingHistoryButton}
            >
              <LinearGradient
                colors={['#3D95E4', '#FB5597']}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.spendingHistoryGradient}
              >
                <MaterialIcons name="keyboard-arrow-right" size={30} color="white" style={styles.arrow} />
                <Text style={styles.spendingHistoryText}>See All Past DRIPS</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Bottomnavbar navigation={navigation} page={'TransactionPage'} />
    </View>
  );
};

export default My_UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030818',
  },
  content: {
    flex: 1,
    paddingBottom: 180, // Adjust the padding to leave space for the navbar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  settingsIcon: {
    padding: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 25,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  usernameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  tapsDripsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '70%'
  },
  infoText: {
    fontSize: 24,
    color: 'white',
    marginRight: 0,
    marginBottom: 20
  },
  infoTextSpace: {
    flex: 1,
  },
  balanceContainer: {
    alignItems: 'left',
    width: '80%',
  },
  balanceLabel: {
    fontSize: 18,
    color: 'white',
  },
  balanceAmount: {
    fontSize: 30,
    color: 'white',
    marginLeft: 30,
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  spendingHistoryButton: {
    marginTop: 15,
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 50,
  },
  spendingHistoryGradient: {
    borderRadius: 25,
    paddingHorizontal: 72,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  spendingHistoryText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: 'white',
    textAlign: 'left',
    width: '100%',
    marginRight: 40,
  },
  arrow: {
    position: 'absolute',
    left: 20,
    alignSelf: 'center',
  },
  itemContainer: {
    marginTop: 20,
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 40,
  },
  dataItemImage: {
    width: 45,
    height: 45,
    borderRadius: 15,
    marginRight: 10,
  },
  dataItemTextContainer: {
    flex: 1,
  },
  dataItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  dataItemCaption: {
    fontSize: 14,
    color: 'white',
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
    fontWeight: 'bold'
  },
  number: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'normal',
  },
  
});
