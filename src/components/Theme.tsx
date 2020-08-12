import { createText, BaseTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";

const theme: BaseTheme = {
  otherStyles: {
    true: StyleSheet.hairlineWidth,
    false: 0,
  },
  colors: {
    primary: "#000",
    bordered: "#000",
    transparent: "transparent",
    title: "#000",
    // title: "#0C0D34",
    // buttonColor: "rgba(12, 13, 53, 0.05)",
    buttonColor: "transparent",
    white: "#fff",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      lineHeight: 80,
      fontSize: 80,
      fontFamily: "Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontFamily: "Medium",
      fontSize: 28,
      color: "title",
    },
    title2: {
      fontFamily: "Medium",
      fontSize: 24,
      lineHeight: 30,
      color: "title",
    },
    body: {
      fontFamily: "Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "buttonColor",
    },
  },
  breakpoints: {},
};

export const Text = createText<Theme>();
export type Theme = typeof theme;
export default theme;
