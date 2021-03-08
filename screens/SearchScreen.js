import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../constants/Colors";

import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const SearchScreen = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Survivor</Text>
      <Image style={styles.logo} source={"../../assets/TMDBlogo.png"} />
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
  title: {
    fontSize: 28,
    color: Colors.primary,
    paddingTop: 20,
  },
  logo: {
    height: 20,
    width: "100%",
  },
});

export default SearchScreen;
