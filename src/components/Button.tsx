import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { backgroundColor, color, useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";

interface ButtonProps {
  label?: string;
  variant: "default" | "primary";
  onPress: () => void;
}
const BORDER_RADIUS = 25;

const restyleFunctions = [color, backgroundColor];

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  // const backgroundColor =
  //   variant === "primary" ? "#2cb9b0" : "rgba(12, 13, 52, 0.05)";
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.buttonColor;
  const color = variant === "primary" ? theme.colors.white : theme.colors.title;

  const fontFamily = variant === "primary" ? "Bold" : "Regular";
  const fontSize = variant === "primary" ? 19 : 15;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color, fontFamily, fontSize }]}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontWeight: "500",
    textAlign: "center",
  },
});
