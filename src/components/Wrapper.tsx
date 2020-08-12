import React, { ReactNode } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

interface props {
  children: ReactNode;
  style: ReactNode;
  footer?: ReactNode;
}

export default function Container({ children, style, footer }: props) {
  return (
    <SafeAreaView style={[styles.safeAreaContainer, style]}>
      <View style={[styles.container, style]}>{children}</View>
      <View style={styles.footer}>{footer}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  },
  footer: {
    // height: 200,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#c1c1c1",
  },
});
