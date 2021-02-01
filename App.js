import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";

import SearchScreen from "./screens/SearchScreen";
import MovieCardScreen from "./screens/MovieCardScreen";
import Colors from "./constants/Colors";
import SurvivorScreen from "./screens/SurvivorScreen";
import ViewingListScreen from "./screens/ViewingListScreen";
import movieListReducer from "./store/movieLists";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed");
    console.log(err);
  });

const store = createStore(movieListReducer);

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const SearchStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="MovieInfoScreen" component={MovieCardScreen} />
      </Stack.Navigator>
    );
  };

  const MyTheme = {
    colors: {
      background: Colors.detailOne,
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
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
            activeBackgroundColor: Colors.detailOne,
            inactiveBackgroundColor: Colors.detailTwo,
          }}
        >
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="ViewingList" component={ViewingListScreen} />
          <Tab.Screen name="Survivor" component={SurvivorScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
