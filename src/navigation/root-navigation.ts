import {
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AppStackParamList, AuthStackParamList } from "../@types/routes";

export type RootNavigationStackParamsList = {
  Auth: { screen: keyof AuthStackParamList };
  App: { screen: keyof AppStackParamList; params?: object };
};

type RootNavigationProps =
  NativeStackNavigationProp<RootNavigationStackParamsList>;

export function useRootNavigation() {
  const navigation = useNavigation<RootNavigationProps>();

  return navigation;
}

export const navigationRef =
  createNavigationContainerRef<RootNavigationStackParamsList>();
