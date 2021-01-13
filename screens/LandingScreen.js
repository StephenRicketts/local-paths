import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Background from "../components/Background";
import DefaultText from "../components/DefaultText";

const LandingScreen = (props) => {
  const goToSearch = () => {
    props.navigation.dispatch(
      CommonActions.navigate({
        name: "SearchScreen",
      })
    );
  };

  return (
    <Background>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <TitleText style={styles.welcome}>Welcome to...</TitleText>
          <TitleText style={styles.title}>Movie Survivor</TitleText>
        </View>
        <View style={styles.summaryContainer}>
          <DefaultText>
            Search Movie Info, create a viewing list, settle the endless debate
            of what movie to watch.
          </DefaultText>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton style={styles.button} onPress={goToSearch}>
            Search Movies
          </MainButton>
        </View>
        <TitleText style={styles.powered}>Powered by:</TitleText>
        <Image style={styles.logo} source={require("../assets/TMDBlogo.png")} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 26,
    elevation: 12,
  },
  title: {
    fontSize: 40,
    elevation: 24,
  },
  summaryContainer: {
    flex: 1,
    justifyContent: "center",
    width: "60%",
    height: "10%",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
  },
  LogoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
  },
  logo: {
    height: 26,
    width: "100%",
    marginBottom: 10,
  },
  powered: {
    fontSize: 26,
    // paddingTop: "75%",
  },
});

export default LandingScreen;
