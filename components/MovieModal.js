import React from "react";
import { Modal, Text, View, Image, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";

const MovieModal = (props) => {
  console.log(props.movieInfo);
  const movieInfo = props.movieInfo;
  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.container}>
        <MainButton
          style={{ paddingTop: 6 }}
          onPress={props.setShowMovieModal(false)}
        >
          {"< back"}
        </MainButton>
        <View style={styles.titleContainer}>
          <Image />
          <Text>
            {movieInfo.original_title} -{props.yearReleased}
          </Text>
        </View>
        <View style={styles.overviewContainer}>
          <Text>{movieInfo.overview}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEFBFB",
  },
});

export default MovieModal;
