import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MovieCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: "80%",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  title: {
    fontSize: 12,
  },
});

export default MovieCard;
