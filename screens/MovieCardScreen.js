import React from "react";
import { View, StyleSheet, Image } from "react-native";
import TitleText from "../components/TitleText";
import DefaultText from "../components/DefaultText";
import MovieOptionButtons from "../components/MovieOptionButtons";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const MovieCard = (props) => {
  console.log("this is the route I think", props.route);
  const movieData = props.route.params.movieData;
  return (
    <Card>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + movieData.poster_path,
          }}
        />
        <View style={styles.details}>
          <TitleText style={styles.title}>{movieData.original_title}</TitleText>
          <DefaultText style={styles.overview}>
            {movieData.overview}
          </DefaultText>
        </View>
        <MovieOptionButtons />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: Colors.secondary,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    height: 150,
    width: "30%",
  },
  overview: {},
});

export default MovieCard;
