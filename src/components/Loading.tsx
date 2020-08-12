import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default function Spinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
