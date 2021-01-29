import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const ViewingListScreen = (props) => {
  const viewingListItems = useSelector((state) => state.viewingList);

  return (
    <View style={styles.container}>
      <Text>Viewing List Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ViewingListScreen;
