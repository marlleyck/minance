import { Colors } from "@/styles/Colors";
import {
  OpenSans_300Light,
  OpenSans_500Medium,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";

import { Text } from "../text";

export function Card() {
  const [loaded, error] = useFonts({
    OpenSans_500Medium,
    OpenSans_300Light,
    OpenSans_700Bold,
  });

  if (!loaded) {
    return <Text>...Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardNumberContainer}>
        <Text style={styles.cardNumber}>0000 0000 0000 0000</Text>
      </View>
      <View style={styles.cardNameContainer}>
        <Text style={styles.cardName}>Lorena K L Martins</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.light.darkGreen,
    height: 184,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cardNumberContainer: {
    width: "100%",
  },
  cardNumber: {
    color: "white",
  },
  cardNameContainer: {
    width: "100%",
  },
  cardName: {
    color: "white",
  },
});
