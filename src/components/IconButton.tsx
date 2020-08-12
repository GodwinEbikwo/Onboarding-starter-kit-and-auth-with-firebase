import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleProp, ViewStyle } from "react-native";

interface props {
  iconName: string;
  color?: string;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function IconButton({
  iconName,
  color,
  size,
  onPress,
  style,
}: props) {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
}
