import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsListItem = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + props.poster,
        }}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.yearReleased}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: "25%",
  },
  details: {
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    padding: 10,
  },
  year: {
    color: "crimson",
    fontSize: 12,
    padding: 10,
  },
});

export default ResultsListItem;
