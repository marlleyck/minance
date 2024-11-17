import { User } from "@/src/@types/user";
import { httpClient } from "../httpClient";

async function getUserInfo() {
  const response = await httpClient.get<User>("/user");
  return response;
}

async function login(email: string, password: string) {
  const response = await httpClient.post<{ token: string; user: User }>(
    "/auth/login",
    {
      email,
      password,
    }
  );

  return response;
}

function updateToken(token: string): void {
  httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken(): void {
  httpClient.defaults.headers.common.Authorization = null;
}

export const authApi = {
  getUserInfo,
  updateToken,
  removeToken,
  login,
};
