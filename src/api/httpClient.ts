import axios from "axios";
const API_URL = process.env.API_URL;

export const httpClient = axios.create({
  baseURL: API_URL,
});
