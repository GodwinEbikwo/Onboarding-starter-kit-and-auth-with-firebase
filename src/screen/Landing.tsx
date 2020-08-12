import React, { useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";
import Dot from "../screen/Dot";
import Subslide from "../screen/Subslide";
import { StackNavigationProps, Routes } from "../components/Navigation";
import { slides } from "../Authentication/Firebase/config";

const { width } = Dimensions.get("window");

const Landing = ({ navigation }: StackNavigationProps<Routes, "Landing">) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...styles.slider, backgroundColor: backgroundColor }}
      >
        <Animated.ScrollView
          ref={scroll}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate="fast"
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ image }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ image }} />
          ))}
        </Animated.ScrollView>

        <Animated.View
          style={{
            flex: 1.5,
            flexDirection: "row",
            width: width * slides.length,
            transform: [{ translateX: multiply(x, -1) }],
          }}
        >
          {slides.map(({ subtitle, description }, index) => {
            const last = index === slides.length - 1;
            return (
              <Subslide
                key={index}
                onPress={() => {
                  if (last) {
                    navigation.navigate("Welcome");
                  } else {
                    scroll.current?.getNode().scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
                {...{ subtitle, description, last }}
              />
            );
          })}
        </Animated.View>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
  },
  pagination: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
    flex: 0.3,
  },
});
