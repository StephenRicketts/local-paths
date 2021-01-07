import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const SearchScreen = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Survivor</Text>
      <SearchBar
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      {searchResults.length !== 0 && (
        <ResultsList
          results={searchResults.results}
          navigation={props.navigation}
        />
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
});

export default SearchScreen;
