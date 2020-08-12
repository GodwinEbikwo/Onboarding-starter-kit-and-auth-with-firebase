import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { Landing } from "../Authentication/Onboarding";
import LoginScreen from "../screen/LoginScreen";
import { Routes } from "../components/Navigation";
import { Welcome } from "../Authentication";
import SignUpScreen from "../screen/SignupScreen";

function ForgotPassword() {
  return (
    <View>
      <Text>Hello forgot</Text>
    </View>
  );
}

const AuthStack = createStackNavigator<Routes>();
export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Landing" component={Landing} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}
