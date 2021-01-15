import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import ResultsListItem from "../components/ResultsListItem";
import MovieModal from "../components/MovieModal";

const ResultsList = (props) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  return (
    <Pressable onPress={setShowMovieModal(!showMovieModal)}>
      <View>
        <MovieModal visible={showMovieModal} />
        <ScrollView>
          {props.results.map((movie) => {
            let yearReleased = movie.release_date.substr(0, 4);
            return (
              <ResultsListItem
                key={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                yearReleased={yearReleased}
                navigation={props.navigation}
                movieData={movie}
              />
            );
          })}
        </ScrollView>
      </View>
    </Pressable>
  );
};

export default ResultsList;
