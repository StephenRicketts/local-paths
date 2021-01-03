import React, { useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=a7bbb7332a2c4eaee994c90369bd5850&language=en-US&page=1&include_adult=false";
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const search = () => {
    axios(apiUrl + "&query=" + query).then(({ data }) => {
      setSearchResults(data);
    });
    console.log("this should be the search results", searchResults.results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie DB</Text>
      <TextInput
        style={styles.searchBox}
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={search}
      />
      {searchResults !== null && (
        <ResultsList results={searchResults.results} />
      )}
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
    borderRadius: 8,
    marginBottom: 40,
  },
});

export default SearchScreen;
