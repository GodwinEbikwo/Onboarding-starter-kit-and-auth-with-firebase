import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Landing from "../screen/Landing";
import LoginScreen from "../screen/LoginScreen";
import { Routes } from "../components/Navigation";

function RegisterScreen() {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
}

function ForgotPassword() {
  return (
    <View>
      <Text>Hello forgot</Text>
    </View>
  );
}

const AuthStack = createStackNavigator<Routes>();
export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Landing" headerMode="none">
      <AuthStack.Screen name="Landing" component={Landing} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}
