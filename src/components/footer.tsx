import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  onPress: () => void;
}

export default function Social({ label, onPress }: Props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          margin: 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={styles.iconBg}
          onPress={() => alert("not implemented yet ")}
        >
          <AntDesign name="google" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBg}
          onPress={() => alert("not implemented yet ")}
        >
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBg}
          onPress={() => alert("not implemented yet ")}
        >
          <Ionicons name="logo-apple" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text
        onPress={onPress}
        style={{ fontFamily: "Regular", color: "#111f4d" }}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  footerButtonContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  forgotPasswordButtonText: {
    color: "grey",
    fontSize: 15,
    fontFamily: "Medium",
  },
  iconBg: {
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
});
