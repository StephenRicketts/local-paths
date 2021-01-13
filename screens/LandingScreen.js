import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["crimson", "black"]} style={styles.background}>
        <View style={styles.contentContainer}>
          <TitleText style={styles.welcome}>Welcome to...</TitleText>
          <TitleText style={styles.title}>Movie Survivor</TitleText>
          <View style={styles.buttonContainer}>
            <MainButton style={styles.button}>Search Movies</MainButton>
          </View>
          <TitleText style={styles.powered}>Powered by:</TitleText>
          <Image
            style={styles.logo}
            source={require("../assets/TMDBlogo.png")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  welcome: {
    fontSize: 26,
    paddingTop: "40%",
    elevation: 12,
  },
  title: {
    fontSize: 40,
    elevation: 24,
    fontWeight: 500,
  },
  button: {
    marginVertical: 25,
  },
  LogoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 26,
    width: "100%",
    marginBottom: 10,
  },
  powered: {
    fontSize: 26,
    paddingTop: "95%",
  },
});

export default LandingScreen;
