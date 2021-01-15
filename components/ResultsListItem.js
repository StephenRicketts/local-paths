import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { CommonActions } from "@react-navigation/native";

import ResultsButtons from "../components/ResultsButtons";

const ResultsListItem = (props) => {
  const selectMovie = () => {
    console.log("selectMovie hit");
    props.navigation.dispatch(
      CommonActions.navigate({
        name: "MovieCard",
        params: {
          movieData: props.movieData,
        },
      })
    );
  };

  return (
    <Pressable onPress={selectMovie}>
      <View style={styles.detailsContainer}>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  buttonContainer: {},
  image: {
    height: 100,
    width: "25%",
  },
  details: {
    justifyContent: "center",
    flexShrink: 1,
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
