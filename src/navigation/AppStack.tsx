import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "../components/Navigation";
import { View, Text } from "react-native";
import { Button } from "../components";
import { logout } from "../Authentication/Firebase/firebase";

function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello from home</Text>
      <Button label="logout" onPress={logout} variant="primary" />
    </View>
  );
}

const AppStack = createStackNavigator<AppRoutes>();
export default function AppStackNavigator() {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}
