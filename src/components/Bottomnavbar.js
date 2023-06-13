import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { icons1 } from '../css/pagecss';
import { LinearGradient } from 'expo-linear-gradient';

const Bottomnavbar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circleButton}
        onPress={() => navigation.navigate('TransactionPage')}
      >
        <Entypo name="home" size={24} style={icons1} onPress={() => navigation.navigate('TransactionPage')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circleButton}
        onPress={() => navigation.navigate('Mainpage')}
      >
        <Entypo name="camera" size={24} style={icons1} onPress={() => navigation.navigate('Mainpage')} />
      </TouchableOpacity>
      
      <View style={styles.circleButtonWrapper}>
        <LinearGradient
          colors={['#05B3EA', '#FF6699']}
          style={styles.circleButtonGradient}
          start={[0, 0]}
          end={[1, 1]}
        >
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => navigation.navigate('TappedPage')}
          >
            <Text style={styles.circleButtonText}>T</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      
      <TouchableOpacity
        style={styles.circleButton}
        onPress={() => navigation.navigate('Wallet')}
      >
        <MaterialCommunityIcons name="wallet" size={24} style={icons1} onPress={() => navigation.navigate('Wallet')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circleButton}
        onPress={() => navigation.navigate('My_UserProfile')}
      >
        <Ionicons name="person" size={24} style={icons1} onPress={() => navigation.navigate('My_UserProfile')} />
      </TouchableOpacity>
    </View>
  );
};

export default Bottomnavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#172348',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    width: '100%',
    bottom: 20,
    zIndex: 100,
    borderTopWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  circleButtonWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
    overflow: 'hidden'
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circleButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonText: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
});
