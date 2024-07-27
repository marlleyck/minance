import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";

import { Colors } from "@/styles/Colors";
import { useFonts } from "expo-font";
import {
  OpenSans_300Light,
  OpenSans_500Medium,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

type ColorType = keyof typeof Colors.light;

interface TextProps extends RNTextProps {
  color?: ColorType;
  fontFamily?: FontType;
  containerStyle?: StyleProp<TextStyle>;
}

export const Fonts = {
  openSansLight: "OpenSans_300Light",
  openSansMedium: "OpenSans_500Medium",
  openSansBold: "OpenSans_700Bold",
};

export type FontType = keyof typeof Fonts;

export function Text({
  color = "white",
  fontFamily = "openSansMedium",
  children,
  ...props
}: TextProps) {
  const [fontsLoaded] = useFonts({
    [Fonts.openSansLight]: OpenSans_300Light,
    [Fonts.openSansMedium]: OpenSans_500Medium,
    [Fonts.openSansBold]: OpenSans_700Bold,
  });
  return (
    <RNText
      style={{
        fontFamily: Fonts[fontFamily],
        color: Colors.light[color],
      }}
      {...props}
    >
      {children}
    </RNText>
  );
}
