import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Colors } from "@/styles/Colors";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useAppNavigation } from "@/src/navigation/app-navigation";
import { AppStackParamList } from "@/src/@types/routes";
import { useRoute } from "@react-navigation/native";

export function TabNavigation() {
  const route = useRoute();
  const appNavigation = useAppNavigation();

  const handleGoScreen = (screen: keyof AppStackParamList) => {
    if (route.name !== screen) {
      appNavigation.push(screen);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome5
            name="wallet"
            size={30}
            color={Colors.light.veryLightBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleGoScreen("HomeScreen")}
        >
          <FontAwesome name="home" size={35} color={Colors.light.lightBlue} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome
            name="gear"
            size={35}
            color={Colors.light.veryLightBlue}
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
    backgroundColor: Colors.light.bgBlueLight,
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
