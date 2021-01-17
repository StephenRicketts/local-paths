import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SearchScreen from "./screens/SearchScreen";
import LandingScreen from "./screens/LandingScreen";
import MovieCard from "./components/MovieCard";
import Colors from "./constants/Colors";
import SurvivorScreen from "./screens/SurvivorScreen";
import ViewingListScreen from "./screens/ViewingListScreen";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Search") {
              iconName = "search-web";
            } else if (route.name === "ViewingList") {
              iconName = "view-list";
            } else if (route.name === "Survivor") {
              iconName = "campfire";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.secondary,
        }}
      >
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="ViewingList" component={ViewingListScreen} />
        <Tab.Screen name="Survivor" component={SurvivorScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
