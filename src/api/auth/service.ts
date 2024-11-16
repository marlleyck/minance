import { AppStorageKeys } from "@/src/app/app-storage";
import { useAppDispatch, useAppSelector } from "@/src/app/hooks/redux-hooks";
import { authActions } from "@/src/app/slices/auth-slice";
import { useRootNavigation } from "@/src/navigation/root-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { authApi } from "./api";
import { AppDispatch } from "@/src/app/store";
import { RootNavigationProp } from "@/src/@types/routes";

async function getTokenFromStorage(): Promise<string | null> {
  return await AsyncStorage.getItem(AppStorageKeys.token);
}

async function authenticateUser(
  tokenStorage: string | null,
  dispatch: AppDispatch,
  rootNavigation: RootNavigationProp
) {
  if (tokenStorage) {
    try {
      const result = await authApi.getUserInfo();
      const user = result?.data;

      authApi.updateToken(tokenStorage);

      dispatch(authActions.setUser(user));

      rootNavigation.replace("App", { screen: "HomeScreen" });
    } catch (error) {
      dispatch(authActions.clear());
      AsyncStorage.removeItem(AppStorageKeys.token);
      rootNavigation.replace("Auth", { screen: "LoginScreen" });
    }
  } else {
    rootNavigation.replace("Auth", { screen: "LoginScreen" });
  }
}

export function useAuthentication() {
  const dispatch = useAppDispatch();
  const rootNavigation = useRootNavigation();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchTokenAndAuthenticate = async () => {
      const tokenStorage = await getTokenFromStorage();
      dispatch(authActions.setToken(tokenStorage || ""));
      authenticateUser(tokenStorage, dispatch, rootNavigation);
    };

    fetchTokenAndAuthenticate();
  }, [dispatch, rootNavigation]);

  return {
    execute: () => authenticateUser(token, dispatch, rootNavigation),
  };
}

export function logout() {
  const dispatch = useAppDispatch();
  const rootNavigation = useRootNavigation();

  const execute = async () => {
    await AsyncStorage.removeItem(AppStorageKeys.token);

    dispatch(authActions.setToken(""));

    rootNavigation.replace("Auth", { screen: "LoginScreen" });
  };

  return { execute };
}
