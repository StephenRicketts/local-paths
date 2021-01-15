import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Background from "../components/Background";

const SurvivorScreen = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text>Survivor Screen Page</Text>
      </View>
    </Background>
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
