import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={("crimson", "black")} style={styles.background}>
        <Text>Welcome to...</Text>
        <br />
        <Text>Movie Survivor</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});

export default LandingScreen;
