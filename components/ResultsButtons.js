import React from "react";
import { View, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";

const ResultsButtons = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <MainButton style={styles.button}>More Info</MainButton>
      <MainButton style={styles.button}>Add to List</MainButton>
      <MainButton style={styles.button}>Nominate for Survivor</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginVertical: 20,
  },
});

export default ResultsButtons;
