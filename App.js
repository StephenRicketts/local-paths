import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthScreen from "./screens/AuthScreen";
import FindPathScreen from "./screens/FindPathScreen";
import NewPathScreen from "./screens/NewPathScreen";
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
          name="FindPath"
          component={FindPathScreen}
          options={{ title: "Nearby Paths" }}
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
