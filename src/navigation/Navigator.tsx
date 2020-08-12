import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Authentication/Firebase/firebase";

import { AuthUserContext } from "./AuthUserProvider";
import Loading from "../components/Loading";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import { LoadAssets, theme } from "../components";
import AppStackNavigator from "./AppStack";
import AuthStackNavigator from "./AuthStack";

const fonts = {
  Bold: require("../../assets/fonts/DMSans-Bold.ttf"),
  Medium: require("../../assets/fonts/DMSans-Medium.ttf"),
  Regular: require("../../assets/fonts/DMSans-Regular.ttf"),
};

export default function Navigator() {
  const { user, setUser } = useContext(AuthUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <LoadAssets fonts={fonts}>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" />
        {user ? <AppStackNavigator /> : <AuthStackNavigator />}
      </ThemeProvider>
    </LoadAssets>
  );
}
