import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import * as listActions from "../store/lists-actions";

import MainButton from "./MainButton";

const MovieActionOptions = (props) => {
  const dispatch = useDispatch();

  const addMovie = () => {
    console.log("addMovie Function hit");
    dispatch(listActions.addMovieToViewingList(props.movieId, props.movie));
  };

  return (
    <View style={styles.buttonContainer}>
      <MainButton style={styles.button}>Add to List</MainButton>
      <MainButton style={styles.button}>Nominate for survivor</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 125,
    height: 50,
  },
  button: {
    margin: 4,
    width: "100%",
  },
});

export default MovieActionOptions;
