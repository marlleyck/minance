import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStack } from "./app/app-stack";
import { AuthStack } from "./auth/auth-stack";
import { SplashScreen } from "../screens/splash";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />

          <Stack.Screen name="App" component={AppStack} />
          <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
