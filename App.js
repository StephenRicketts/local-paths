import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./screens/SearchScreen";
import MovieCard from "./components/MovieCard";
import Colors from "./constants/Colors";

export default function App() {
  const Stack = createStackNavigator();

  const headerOptions = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={headerOptions}
        initialRouteName="SearchScreen"
      >
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: "Search Movies" }}
        />
        <Stack.Screen name="MovieCard" component={MovieCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
