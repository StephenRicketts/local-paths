import React from "react";
import { Modal, Text, View } from "react-native";

const MovieModal = (props) => {
  return (
    <Modal visible={props.visible}>
      <View>
        <Text>This is the modal!</Text>
      </View>
    </Modal>
  );
};

export default MovieModal;
