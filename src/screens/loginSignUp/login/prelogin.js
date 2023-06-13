import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../../../css/GlobalStyles";

const Prelogin = ({ navigation }) => {
  return (
    <View style={styles.loadingScreen}>
      <Text style={styles.getReadyTo}>{`GET READY TO TAP INTO THE FUTURE OF FINANCE`}</Text>
      <Text style={styles.enterReallyCool}>
        Enter really cool and really slick slogan here
      </Text>
      <Pressable
        style={[styles.button, styles.signInButton]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.signUpButton]}
        onPress={() => navigation.navigate("Signup_enterEmail")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: "#030818",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  getReadyTo: {
    fontSize: 23,
    letterSpacing: -0.3,
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.white,
    textAlign: "center",
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  enterReallyCool: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontFamily: FontFamily.redHatDisplayRegular,
    color: "#9ea1a4",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#60A3f2",
  },
  signUpButton: {
    backgroundColor: "#FD87FF",
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.redHatDisplayMedium,
    fontWeight: "500",
  },
});

export default Prelogin;
