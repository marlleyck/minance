import { AppStorageKeys } from "@/src/app/app-storage";
import { useAppDispatch, useAppSelector } from "@/src/app/hooks/redux-hooks";
import { authActions } from "@/src/app/slices/auth-slice";
import { useRootNavigation } from "@/src/navigation/root-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { authApi } from "./api";
import { AppDispatch } from "@/src/app/store";
import { RootNavigationProp } from "@/src/@types/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function getTokenFromStorage(): Promise<string | null> {
  return await AsyncStorage.getItem(AppStorageKeys.token);
}

async function saveItemToStorage(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    //
  }
}

async function authenticateUser(
  tokenStorage: string | null,
  dispatch: AppDispatch,
  rootNavigation: RootNavigationProp
) {
  console.log("tokenStorage", tokenStorage);
  if (tokenStorage) {
    try {
      authApi.updateToken(tokenStorage);

      const result = await authApi.getUserInfo();
      const user = result?.data;

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

  useEffect(() => {
    const fetchTokenAndAuthenticate = async () => {
      const tokenStorage = await getTokenFromStorage();
      dispatch(authActions.setToken(tokenStorage || ""));
      authenticateUser(tokenStorage, dispatch, rootNavigation);
    };

    fetchTokenAndAuthenticate();
  }, [dispatch, rootNavigation]);

  return {
    execute: async () => {
      const tokenStorage = await getTokenFromStorage();
      authenticateUser(tokenStorage, dispatch, rootNavigation);
    },
  };
}

export function useLogin() {
  const queryClient = useQueryClient();

  const dispatch = useAppDispatch();
  const rootNavigation = useRootNavigation();

  async function execute(data: any) {
    const result = await authApi.login(data.email, data.password);
    return result.data;
  }

  const mutation = useMutation({
    mutationFn: execute,
    onSuccess: (data) => {
      dispatch(authActions.setToken(data.token));
      authApi.updateToken(data.token);
      dispatch(authActions.setUser(data.user));
      saveItemToStorage(AppStorageKeys.token, data.token);

      rootNavigation.replace("App", { screen: "HomeScreen" });
    },
  });

  function login(data: any) {
    mutation.mutate(data);
  }

  return {
    login,
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
