import React, { useState } from "react";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Colors from "../constants/Colors";

const FindPathScreen = (props) => {
  const [userLocation, setUserLocation] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insuffiient permissions!",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      console.log(location);
      setUserLocation(location);
    } catch (err) {
      Alert.alert("Could not fetch location!", "Please try again later", [
        { text: "Okay" },
      ]);
    }
    setIsFetching(false);
  };
  return (
    <View>
      {isFetching ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <Text>This will be a map sometime</Text>
      )}
    </View>
  );
};

export default FindPathScreen;
