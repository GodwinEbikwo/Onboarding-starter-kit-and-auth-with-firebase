import React, { useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";
import Dot from "../screen/Dot";
import Subslide from "../screen/Subslide";
import { StackNavigationProp } from "../components/Navigation";

const { width, height } = Dimensions.get("window");
const slides = [
  {
    title: "Relaxed",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1594807971/pixeltrue-icons-receipt-1_kvqba7.png",
    subtitle: "Find your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfits here",
    color: "#a4b494",
  },
  {
    title: "Playful",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1594808362/pixeltrue-icons-web-design-1_ahom2x.png",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your website? Explore hundreds of outfit ideas",
    color: "#ff4301",
  },
  {
    title: "Excentric",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1594808455/pixeltrue-icons-grow-your-money-2_hbutpk.png",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#be79df",
  },
  {
    title: "Funky",
    image:
      "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1594808530/pixeltrue-icons-building-website-2_rgubhj.png",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latests trends in fashion and explore your personality ",
    color: "#0779e4",
  },
];

const Landing = ({ navigation }: StackNavigationProp<Routes, "Landing">) => {
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
            flex: 1,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
});
