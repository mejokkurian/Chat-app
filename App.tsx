import TabNavigater from "@/navigation/Tab";

import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <TabNavigater />
    </NavigationContainer>
  );
}
