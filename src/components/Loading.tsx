import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import Wrapper from "./Wrapper";

export default function Spinner() {
  return (
    <Wrapper style={styles.container}>
      <ActivityIndicator size="small" />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
