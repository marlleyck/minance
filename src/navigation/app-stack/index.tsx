import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/app/home";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
