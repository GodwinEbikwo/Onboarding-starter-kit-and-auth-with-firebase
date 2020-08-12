import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface labelprops {
  label?: string | undefined;
  onPress?: () => void;
}

function Button({ label, onPress }: labelprops) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#161616" }]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function FormButton({ label }: labelprops) {
  const { handleSubmit } = useFormikContext();

  return <Button label={label} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
