import { createText, BaseTheme } from "@shopify/restyle";

const theme: BaseTheme = {
  colors: {
    primary: "#000",
    title: "#fff",
    // title: "#0C0D34",
    // buttonColor: "rgba(12, 13, 53, 0.05)",
    buttonColor: "#000",
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
