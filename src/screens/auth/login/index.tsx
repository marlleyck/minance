import { Text } from "@/src/components/layout/text";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: "black" }}>Login Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
