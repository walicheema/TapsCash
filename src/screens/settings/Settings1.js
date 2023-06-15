import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
];

const Settings1 = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

        <View style={styles.profileContainer}>
          <LinearGradient
            colors={['#3D95E4', '#FB5597']}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.profileImageContainer}
          >
            <Image source={{ uri: data[1].profile_image }} style={styles.profileImage} />
          </LinearGradient>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>First Name</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="white"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>Last Name</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="white"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>Username</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="white"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>Email</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="white"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>Phone</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="white"
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>Currency</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="white"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>Language</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="white"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Prelogin')}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030818',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  backButton: {
    paddingTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  inputText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#172348',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#172348',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Settings1;
