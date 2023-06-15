import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { containerFull } from '../../css/pagecss';
import { formHead } from '../../css/formcss';
import Bottomnavbar from '../../components/Bottomnavbar';
import Topnavbar from '../../components/Topnavbar';
import FollowersRandomPost from '../../components/FollowersRandomPost';
import { LinearGradient } from 'expo-linear-gradient';

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Bottomnavbar navigation={navigation} page={'Mainpage'} />
      <View style={styles.contentContainer}>
        <Text style={styles.captureTitle}>Capture the Moment</Text>
        <Text style={styles.sectionTitle}>Explore your friends Drip</Text>
        <FollowersRandomPost />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030818',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  captureTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 40,
  },
});

export default MainPage;
