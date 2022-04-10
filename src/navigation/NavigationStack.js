import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.HomeScreen name="Home" component={HomeScreen} />
      <Stack.SettingsScreen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
