import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./screens/SearchScreen";
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
        initialRouteName="FindPath"
      >
        <Stack.Screen
          name="SearchScreen"
          component={FindPathScreen}
          options={{ title: "Search Movies" }}
        />
        <Stack.Screen name="NewPath" component={NewPathScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
