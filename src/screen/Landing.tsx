import React, { useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";
import Dot from "../screen/Dot";
import Subslide from "../screen/Subslide";
import { StackNavigationProps, Routes } from "../components/Navigation";

const { width, height } = Dimensions.get("window");
const slides = [
  {
    title: "Relaxed",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1596790785/marginalia-productive-work_dzm3tg.png",
    subtitle: "Find your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfits here",
    color: "#a4b494",
  },
  {
    title: "Playful",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1596282567/pixeltrue-settings-1_nmkacn.png",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your website? Explore hundreds of outfit ideas",
    color: "#3282b8",
  },
  {
    title: "Excentric",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1596973769/abstract-phone-purchases_ujecdw.png",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#be79df",
  },
  {
    title: "Funky",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1597223392/pixeltrue-idea_mcxuhs.png",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latests trends in fashion and explore your personality ",
    color: "#ff9a76",
  },
];

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
