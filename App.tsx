import { StatusBar } from "expo-status-bar";
import React from "react";
import { LoadAssets, theme } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
import { AuthStackNavigator } from "./src/navigation/AuthStack";

const fonts = {
  Bold: require("./assets/fonts/DMSans-Bold.ttf"),
  Medium: require("./assets/fonts/DMSans-Medium.ttf"),
  Regular: require("./assets/fonts/DMSans-Regular.ttf"),
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LoadAssets fonts={fonts}>
        <ThemeProvider {...{ theme }}>
          <StatusBar style="auto" />
          <AuthStackNavigator />
        </ThemeProvider>
      </LoadAssets>
    </>
  );
}
