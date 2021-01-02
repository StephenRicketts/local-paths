import React from "react";
import { ScrollView, View, Image, Text } from "react-native";

const ResultsList = (props) => {
  return (
    <View>
      <Text>Results Motherfucker</Text>
      <ScrollView>
        {props.results.map((movie) => {
          <View>
            <Image
              source={{ uri: movie.poster_path }}
              style={{
                width: "100%",
                height: 300,
              }}
            />
          </View>;
        })}
      </ScrollView>
    </View>
  );
};

export default ResultsList;
