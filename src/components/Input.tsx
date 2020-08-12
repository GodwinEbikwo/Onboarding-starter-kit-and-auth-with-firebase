import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface inputProps {
  leftIcon: string;
  width: string;
  rightIcon: string;
  handlePasswordVisibility: () => void;
}
const gray = "#333";
const lightGrey = "transparent";

export default function Input({
  leftIcon,
  width = "100%",
  rightIcon,
  handlePasswordVisibility,
  ...rest
}: inputProps) {
  return (
    <View style={[styles.container, { width }]}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={gray}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.input} placeholderTextColor={gray} {...rest} />
      {rightIcon && (
        <TouchableOpacity
          onPress={handlePasswordVisibility}
          activeOpacity={0.5}
        >
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={gray}
            style={styles.rightIconStyles}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGrey,
    borderRadius: 1,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: "100%",
    fontSize: 17,
    color: "#333",
    fontFamily: "Regular",
  },
  rightIconStyles: {
    position: "absolute",
    right: 30,
    alignSelf: "center",
  },
});
