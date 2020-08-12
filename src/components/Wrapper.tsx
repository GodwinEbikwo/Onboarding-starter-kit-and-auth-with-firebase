import React, { ReactNode } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

interface props {
  label: string;
  subtitle: string;
  children: ReactNode;
  style: ReactNode;
  footer?: ReactNode;
}

export default function Container({
  children,
  style,
  footer,
  label,
  subtitle,
}: props) {
  return (
    <SafeAreaView style={[styles.safeAreaContainer, style]}>
      <View
        style={{
          marginBottom: 5,
          paddingTop: Constants.statusBarHeight,
          marginHorizontal: 15,
        }}
      >
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={[styles.container, style]}>{children}</View>
      <View style={styles.footer}>{footer}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    padding: 15,
    paddingTop: Constants.statusBarHeight,
  },
  label: {
    fontSize: 30,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Bold",
  },
  subtitle: {
    fontSize: 15,
    marginTop: 10,
    color: "grey",
    fontFamily: "Regular",
  },
  container: {
    flex: 1,
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#c1c1c1",
  },
});
