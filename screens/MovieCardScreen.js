import React from "react";
import { View, StyleSheet, Image } from "react-native";

import TitleText from "../components/TitleText";
import DefaultText from "../components/DefaultText";
import MovieOptionButtons from "../components/MovieOptionButtons";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import RatingStars from "../components/Rating";

const MovieCard = (props) => {
  console.log("this is the route I think", props.route);
  const movieData = props.route.params.movieData;
  const ratingNumber = movieData.vote_average / 2;
  console.log("this should be the rating number", ratingNumber);
  return (
    <View style={styles.content}>
      <Card style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + movieData.poster_path,
          }}
        />
        <View style={styles.details}>
          <TitleText style={styles.title}>{movieData.original_title}</TitleText>
          <DefaultText style={styles.year}>
            {movieData.release_date.substr(0, 4)}
          </DefaultText>
          <DefaultText style={styles.overview}>
            {movieData.overview}
          </DefaultText>
          <View>
            <RatingStars ratingNumber={ratingNumber} />
          </View>
        </View>
        <MovieOptionButtons />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: "40%",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    width: "100%",
    backgroundColor: Colors.secondary,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
  image: {
    height: 225,
    width: "45%",
    alignSelf: "center",
    marginVertical: 8,
  },
  year: { color: Colors.detailThree, paddingVertical: 4 },
  overview: { color: "white" },
});

export default MovieCard;
