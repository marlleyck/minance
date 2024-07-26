import { Colors } from "@/styles/Colors";
import { Text, View } from "react-native";

export function Card() {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: Colors.light.darkGreen,
        height: 184,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}
    >
      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          0000 0000 0000 0000
        </Text>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Lorena K L Martins
        </Text>
      </View>
    </View>
  );
}
