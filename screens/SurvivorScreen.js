import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SurvivorScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Survivor Screen Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SurvivorScreen;
