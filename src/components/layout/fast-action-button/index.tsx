import { Colors } from "@/styles/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "../text";

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
      <Text style={[styles.text, { color: Colors.light.veryLightBlue }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  content: {
    backgroundColor: Colors.light.bgBlueLight,
    width: 62,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
