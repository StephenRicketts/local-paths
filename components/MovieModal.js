import React from "react";
import { Modal, Text, View, Image, StyleSheet } from "react-native";

const MovieModal = (props) => {
  console.log(props.movieInfo);
  const movieInfo = props.movieInfo;
  return (
    <Modal visible={props.visible}>
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
            {movieInfo.original_title} -{yearReleased}
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
    backgroundColor: "EEFBFB",
  },
});

export default MovieModal;
