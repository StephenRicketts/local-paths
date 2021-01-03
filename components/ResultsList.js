import React from "react";
import { ScrollView, View, Text } from "react-native";
import MovieCard from "../components/MovieCard";

const ResultsList = (props) => {
  return (
    <View>
      <Text>Results Motherfucker</Text>
      <ScrollView>
        {props.results.map((movie) => {
          console.log("this should be the movie", movie);
          return <MovieCard title={movie.original_title} key={movie.id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ResultsList;
