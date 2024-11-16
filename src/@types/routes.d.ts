import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RouteNamesAuth = keyof AuthStackParamList;
type RouteNamesApp = keyof AppStackParamList;

type RootStackParamsList = {
  SplashScreen: undefined;
  Auth: { screen: keyof AuthStackParamsList };
  App: { screen: keyof TabNavigationStackParamsList };
};

type AuthStackParamList = {
  LoginScreen: undefined;
};

type AppStackParamList = {
  HomeScreen: undefined;
};

type AuthScreenProps<T extends RouteNamesAuth> = NativeStackScreenProps<
  AuthStackParamList,
  T
>;

type AppScreenProps<T extends RouteNamesApp> = NativeStackScreenProps<
  AppStackParamList,
  T
>;
