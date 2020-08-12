import React from "react";
import { StyleSheet, Text, Alert } from "react-native";

interface errorProps {
  error: string;
  visible: boolean;
}

export default function ErrorMessage({ error, visible }: errorProps) {
  if (!error || !visible) {
    return null;
  }

  // const errorAlert = (error: string) => {
  //   Alert.alert(
  //     "Error occured",
  //     `${error}`,
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //       { text: "OK", onPress: () => console.log("OK Pressed") },
  //     ],
  //     { cancelable: false }
  //   );
  // };

  return (
    <>
      {/* {errorAlert(error)} */}
      <Text style={styles.errorText}>{error}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "#ed6663",
    fontSize: 14,
    marginLeft: 5,
    marginBottom: 5,
  },
});
