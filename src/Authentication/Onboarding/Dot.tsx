import React from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.42, 1, 0.42],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.75, 1, 0.75],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity,
        transform: [{ scale }],
      }}
    />
  );
};

export default Dot;

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 5,
    borderRadius: 5,
    margin: 4,
    backgroundColor: "#fff",
  },
});
