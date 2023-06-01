import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';



const SendManually = ({ navigation }) => {
  return (
    <LinearGradient colors={['#05B3EA', 'pink']} style={styles.linear}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Send Manually</Text>
        {/* Credit Card */}
        <Image
          style={styles.cardContainer}
          source={{
            uri:
              'https://www.nerdwallet.com/cdn-cgi/image/width=1800,quality=85/cdn/images/marketplace/credit_cards/aaa6e978-36a0-11ec-9125-cf8a6fb9a105/328450945c2d95e666f3ea8e63b7783e2223caf2c8671a25aeda77dae96c0295.jpg',
          }}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.dataText}>Name:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.dataText}>Amount:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.dataText}>Note:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.circleContainer}>
          {/* Big Circle */}
          {/* This is where the main part of the NFC tech will be used, don't know
            how to do it yet so I'm leaving it blank */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TransactionPage')}
          >
            <Text style={styles.buttonText}>Cancel transaction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SendManually;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardContainer: {
    width: '70%',
    height: 175,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    marginBottom: 20,
    // Add any additional styling for the credit card container
  },
  circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 20,
    // Add any additional styling for the circle container
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 15,
  },
  dataText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 60,
    color: 'white',
    fontSize: 22,
  },
});
