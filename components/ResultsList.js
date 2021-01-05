import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

const ResultsList = (props) => {
  return (
    <View>
      <ScrollView>
        {props.results.map((movie) => {
          console.log("this should be the movie poster", movie.poster_path);
          return (
            <View style={styles.container} key={movie.id}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                }}
              />
              <Text>{movie.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  image: {
    height: 100,
    width: "25%",
  },
});

export default ResultsList;
