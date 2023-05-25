import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { icons1, logo2 } from '../css/pagecss';
import logo from '../../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';

const Topnavbar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo2} />
      {
                page === 'My_UserProfile' &&
                <Ionicons name="settings-sharp" size={24} style={icons1} onPress
                    ={
                        () => navigation.navigate('Settings1')
                    } />
      }
    </View>
  );
};

export default Topnavbar;

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
  },
  settingsContainer: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
});
