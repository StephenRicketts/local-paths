import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...props.style, ...styles.card }}>
      <View>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 8,
    marginVertical: 10,
  },
});

export default Card;
