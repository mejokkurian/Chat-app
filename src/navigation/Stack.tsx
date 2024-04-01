import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screen/Home";
import Settings from "@/screen/Settings";
import LoginScreen from "@/screen/Authenications/Login";
import React from "react";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Settings} />
    </Stack.Navigator>
  );
}

export function AuthStackSCreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
