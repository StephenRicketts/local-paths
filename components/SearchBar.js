import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const SearchBar = (props) => {
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=a7bbb7332a2c4eaee994c90369bd5850&language=en-US&page=1&include_adult=false";
  const [query, setQuery] = useState("");

  const search = () => {
    axios(apiUrl + "&query=" + query).then(({ data }) => {
      props.setSearchResults(data);
    });
    console.log(
      "this should be the search results",
      props.searchResults.results
    );
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-search"
        size={24}
        color="black"
        style={{ padding: 6 }}
      />
      <TextInput
        style={styles.searchBox}
        value={query}
        placeholder={"Please enter a movie title"}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
  },
  searchBox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 10,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
});

export default SearchBar;
