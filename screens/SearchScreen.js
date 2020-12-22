import React, { useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchScreen = (props) => {
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=a7bbb7332a2c4eaee994c90369bd5850";
  const [searchState, setSearchState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {},
  });

  const search = () => {
    axios(apiUrl + "&query=" + searchState.s).then(({ data }) => {
      let results = data.search;
      setSearchState((prevState) => {
        return { ...prevState, result: results };
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie DB</Text>
      <TextInput
        style={styles.searchBox}
        value={searchState.s}
        onChangeText={(text) =>
          setSearchState((prevState) => {
            return { ...prevState, s: text };
          })
        }
        onSubmitEditing={search}
      />
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
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  searchBox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    norderRadius: 8,
    marginBottom: 40,
  },
});

export default SearchScreen;
