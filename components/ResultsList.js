import React, { useState } from "react";
import { Pressable, ScrollView, View, Text } from "react-native";

import ResultsListItem from "../components/ResultsListItem";
import MovieModal from "../components/MovieModal";

const ResultsList = (props) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  return (
    <View>
      <ScrollView>
        {props.results.map((movie) => {
          let yearReleased = movie.release_date.substr(0, 4);
          return (
            <View>
              <MovieModal
                movieInfo={movie}
                visible={showMovieModal}
                yearReleased={yearReleased}
                key={movie.id}
                setShowMovieModal={setShowMovieModal}
              />
              <ResultsListItem
                poster={movie.poster_path}
                title={movie.original_title}
                yearReleased={yearReleased}
                navigation={props.navigation}
                movieData={movie}
                setShowMovieModal={setShowMovieModal}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ResultsList;
