import React, { useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width, height } = Dimensions.get("window");
const BORDER_RADIUS = 75;
const slides = [
  {
    title: "Relaxed",
    subtitle: "Find your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfits here",
    color: "#ff9a76",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your website? Explore hundreds of outfit ideas",
    color: "#ff4301",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#222831",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latests trends in fashion and explore your personality ",
    color: "#679b9b",
  },
];

const Onboarding = () => {
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
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: backgroundColor,
          }}
        />
        <View style={{ ...styles.footerContent }}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    // borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    // borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
