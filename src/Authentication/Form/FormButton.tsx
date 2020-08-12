import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface labelprops {
  label?: string;
  onPress?: () => void;
}

function Button({ label, onPress }: labelprops) {
  return (
    <RectButton
      style={[styles.button, { backgroundColor: "#161616" }]}
      {...{ onPress }}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </RectButton>
  );
}

export default function FormButton({ label }: labelprops) {
  const { handleSubmit } = useFormikContext();

  return <Button label={label} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({
  button: {
    margin: 15,
    height: 50,
    width: 240,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Medium",
  },
});
