import { useAuthentication } from "@/src/api/auth/service";
import { Text } from "@/src/components/layout/text";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SplashScreen() {
  const { execute } = useAuthentication();

  useEffect(() => {
    execute();
  }, []);

  return (
    <SafeAreaView>
      <Text style={{ color: "black" }}>Splash Screen</Text>
    </SafeAreaView>
  );
}
