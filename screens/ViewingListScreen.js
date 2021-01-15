import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Background from "../components/Background";

const ViewingListScreen = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text>Viewing List Page</Text>
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

export default ViewingListScreen;
