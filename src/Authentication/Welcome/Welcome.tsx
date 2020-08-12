import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "../../components";
import { StackNavigationProps, Routes } from "../../components/Navigation";

interface Props {}

const uri =
  "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1597226199/pixeltrue-welcome-1_rtuqbo.png";

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image source={{ uri: uri }} style={styles.image} />
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 40,
        }}
      >
        <Text style={styles.title}>Hey, let's get started</Text>
        <Text style={styles.subtitle}>
          Login to your account below or signup for an amazing experience
        </Text>
        <Button
          label="Login"
          onPress={() => navigation.navigate("Login")}
          variant="primary"
        />
        <Button
          label="Sign up"
          onPress={() => navigation.navigate("SignUp")}
          bordered="true"
        />
        <Button label="Forgot password" onPress={() => alert("Hi")} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageContainer: {
    height: 450,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Medium",
    fontSize: 24,
    lineHeight: 50,
    color: "#333",
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#777",
    textAlign: "center",
    marginBottom: 15,
  },
});
