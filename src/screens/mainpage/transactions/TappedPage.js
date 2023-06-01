import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as LocalAuthentication from 'expo-local-authentication';

const TappedPage = ({navigation}) => {

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
    <LinearGradient colors={['#05B3EA', 'pink']} style={styles.linear}>
      <View style={styles.container}>
      <Image style={styles.cardContainer}
              source={{
                uri:
                  'https://www.nerdwallet.com/cdn-cgi/image/width=1800,quality=85/cdn/images/marketplace/credit_cards/aaa6e978-36a0-11ec-9125-cf8a6fb9a105/328450945c2d95e666f3ea8e63b7783e2223caf2c8671a25aeda77dae96c0295.jpg',
              }}
            />
        <TouchableOpacity onPress={handleCirclePress}>
          <View style={styles.circleContainer}>
            {/* Big Circle */}
            {/* Add any content or styling for the circle container */}
          </View>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonRight} onPress={() => navigation.navigate("SendManually")}>
            <Text style={styles.buttonText}>Send Manually</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity style={styles.buttonRight} onPress={() => navigation.navigate("ScheduleSend")}>
            <Text style={styles.buttonText}>Schedule Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLeft} onPress={() => navigation.navigate("TransactionPage")}>
            <Text style={styles.buttonText}>Cancel transaction</Text>
        </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TappedPage;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 40,
    // Add any additional styling for the circle container
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonLeft: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 0,
  },
  buttonRight: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
  separator: {
    width: 0.1,
    backgroundColor: 'gray',
    marginHorizontal: 0,
  },
});
