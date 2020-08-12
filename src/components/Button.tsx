import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { backgroundColor, color, useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";

interface ButtonProps {
  label?: string;
  variant: "default" | "primary" | "transparent";
  bordered?: "true" | "false";
  onPress: () => void;
}
const BORDER_RADIUS = 25;

const Button = ({ label, variant, bordered, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? theme.colors.transparent
      : theme.colors.buttonColor;

  const color = variant === "primary" ? theme.colors.white : theme.colors.title;
  const borderWidth =
    bordered === "true" ? theme.otherStyles.true : theme.otherStyles.false;

  const fontFamily = variant === "primary" ? "Bold" : "Regular";
  const fontSize = variant === "primary" ? 16 : 15;

  return (
    <RectButton
      style={[styles.container, { backgroundColor, borderWidth }]}
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
    width: 240,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  label: {
    fontWeight: "500",
    textAlign: "center",
  },
});
