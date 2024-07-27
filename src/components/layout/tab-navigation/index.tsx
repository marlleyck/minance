import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Colors } from "@/styles/Colors";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useAppNavigation } from "@/src/navigation/app-navigation";

export function TabNavigation() {
  const appNavigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome5
            name="wallet"
            size={30}
            color={Colors.light.veryLightGreen}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="home" size={35} color={Colors.light.darkGreen} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            appNavigation.push("HomeScreen");
          }}
          style={styles.actionButton}
        >
          <FontAwesome
            name="gear"
            size={35}
            color={Colors.light.veryLightGreen}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 66,
    width: "100%",
    backgroundColor: Colors.light.bgGrayLight,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",

    justifyContent: "space-between",
  },
  actionButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
