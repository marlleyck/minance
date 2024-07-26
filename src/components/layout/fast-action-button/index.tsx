import { Colors } from "@/styles/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface FastActionProps {
  iconName: string;
  iconSize: number;
  title: string;
}

export function FastActionButton({
  iconName,
  iconSize,
  title,
}: FastActionProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.content}>
          <FontAwesome6 name={iconName} size={iconSize} />
        </View>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  content: {
    backgroundColor: Colors.light.bgGrayLight,
    width: 62,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
});
