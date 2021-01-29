import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";

const MainButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={{ ...props.style, ...styles.background }}>
        <TitleText style={styles.font}>{props.children}</TitleText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    borderColor: Colors.primary,
    elevation: 32,
  },
  font: {
    fontSize: 10,
    color: "white",
    padding: 2,
  },
});

export default MainButton;
