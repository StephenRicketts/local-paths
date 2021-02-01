import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import * as listActions from "../store/lists-actions";
import { MaterialIcons } from "@expo/vector-icons";

import MainButton from "./MainButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

const MovieOptionButtons = (props) => {
  const dispatch = useDispatch();

  const addMovie = () => {
    console.log("addMovie Function hit");
    dispatch(listActions.addMovieToViewingList(props.movieId, props.movie));
  };

  return (
    <View style={styles.buttonContainer}>
      <MainButton onPress={addMovie} style={styles.button}>
        <View style={styles.buttonContents}>
          <MaterialIcons name="add" size={24} color="white" />
          <DefaultText style={{ color: "white" }}>List</DefaultText>
        </View>
      </MainButton>
      <MainButton style={styles.button}>
        <View style={styles.buttonContents}>
          <MaterialIcons name="add" size={24} color="white" />
          <DefaultText style={{ color: "white" }} color="white">
            Survivor
          </DefaultText>
        </View>
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 4,
    backgroundColor: Colors.detailThree,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  buttonContents: {
    flexDirection: "row",
  },
  button: {
    margin: 4,
    width: "100%",
  },
});

export default MovieOptionButtons;
