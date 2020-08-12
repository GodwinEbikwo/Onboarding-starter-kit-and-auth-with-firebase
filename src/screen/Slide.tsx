import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { Text } from "../components";
const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 1 * height;
interface SlideProps {
  title?: string;
  right?: boolean;
  image?: string;
}

const Slide = ({ title, right, image }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 - 175 },
    { rotate: right ? "0deg" : "0deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 275,
    resizeMode: "contain",
  },
});
