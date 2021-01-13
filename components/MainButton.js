import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";

const MainButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={{ ...props.style, ...styles.background }}>
        <TitleText>{props.children}</TitleText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    borderColor: Colors.primary,
    elevation: 32,
  },
});

export default MainButton;
