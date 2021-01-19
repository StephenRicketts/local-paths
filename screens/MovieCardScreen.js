import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MovieCard = (props) => {
  console.log("this is the route I think", props.route);
  const movieData = props.route.params.movieData;
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + movieData.poster_path,
        }}
      />
      <Text style={styles.title}>{movieData.original_title}</Text>
      <Text style={styles.overview}>{movieData.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223343",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    justifyContent: "center",
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
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "80%",
    padding: 4,
  },
  overview: {
    flex: 1,
  },
});

export default MovieCard;
