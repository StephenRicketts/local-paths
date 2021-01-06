import React from "react";
import { ScrollView, View } from "react-native";
import ResultsListItem from "../components/ResultsListItem";

const ResultsList = (props) => {
  return (
    <View>
      <ScrollView>
        {props.results.map((movie) => {
          console.log("This is the movie", movie);
          let yearReleased = movie.release_date.substr(0, 4);
          return (
            <ResultsListItem
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              yearReleased={yearReleased}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ResultsList;
