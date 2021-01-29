import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const SearchScreen = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <View style={styles.container}>
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
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default SearchScreen;
