import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from '@expo/vector-icons';
import { goBack } from '../../../css/pagecss';

const TappedPage = ({ navigation }) => {
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    startPulseAnimation();
  }, []);

  const startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 2500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1.2,
          duration: 2500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const handleCirclePress = async () => {
    try {
      const { success, error } = await LocalAuthentication.authenticateAsync();
      if (success) {
        // Face ID authentication succeeded
        console.log('Authentication succeeded');
        // Add your logic here for what happens after successful authentication
      } else {
        // Face ID authentication failed or was cancelled
        console.log('Authentication failed');
        // Add your logic here for what happens after failed authentication
      }
    } catch (error) {
      // Error occurred during Face ID authentication
      console.log('Authentication error:', error);
      // Add your error handling logic here
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={goBack} onPress={() => navigation.navigate('TransactionPage')}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Image
        style={styles.cardContainer}
        source={{
          uri:
            'https://www.nerdwallet.com/cdn-cgi/image/width=1800,quality=85/cdn/images/marketplace/credit_cards/aaa6e978-36a0-11ec-9125-cf8a6fb9a105/328450945c2d95e666f3ea8e63b7783e2223caf2c8671a25aeda77dae96c0295.jpg',
        }}
      />

      
      <TouchableOpacity onPress={handleCirclePress}>
        <LinearGradient colors={['#05B3EA', '#FF6699']} style={styles.circleContainer}>
          <Animated.View
            style={[
              styles.pulseCircle,
              {
                transform: [{ scale: pulseAnimation }],
              },
            ]}
          />
          <Text
            style={[
              styles.tapText,
            ]}
          >
            TAP
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.manuallyButton]} onPress={() => navigation.navigate('SendManually')}>
          <Text style={styles.buttonText}>TAP Manually</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.scheduleButton]} onPress={() => navigation.navigate('ScheduleSend')}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TappedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#030818',
  },
  backButton: {
    position: 'absolute',
    marginTop: 40,
    left: 10,
  },
  cardContainer: {
    width: '80%',
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 100,
    // Add any additional styling for the credit card container
  },
  circleContainer: {
    width: 250,
    height: 250,
    borderRadius: 200,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // Add any additional styling for the circle container
  },
  pulseCircle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 200,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    opacity: 0.6,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  manuallyButton: {
    backgroundColor: '#172348',
    borderWidth: 1,
    borderColor: '#05B3EA',
  },
  scheduleButton: {
    backgroundColor: '#172348',
    borderWidth: 1,
    borderColor: '#FF6699',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'redHatDisplayMedium',
    fontWeight: '500',
  },
  tapText: {
    color: 'white',
    fontSize: 120,
    justifyContent: 'center',
    position: 'absolute',
  },
});
