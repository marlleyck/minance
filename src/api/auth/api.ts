import { User } from "@/src/@types/user";
import { httpClient } from "../httpClient";

async function getUserInfo() {
  const response = await httpClient.get<User>("/user");
  console.log("cosole:", response.data);
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
};
