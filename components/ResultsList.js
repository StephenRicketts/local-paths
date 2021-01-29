import React, { useState } from "react";
import { Pressable, ScrollView, View, Text } from "react-native";

import ResultsListItem from "../components/ResultsListItem";

const ResultsList = (props) => {
  return (
    <View>
      <ScrollView>
        {props.results.map((movie) => {
          let yearReleased = movie.release_date.substr(0, 4);
          return (
            <View key={movie.id}>
              <ResultsListItem
                poster={movie.poster_path}
                title={movie.original_title}
                yearReleased={yearReleased}
                navigation={props.navigation}
                movieData={movie}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ResultsList;
