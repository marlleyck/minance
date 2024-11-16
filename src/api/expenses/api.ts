import { httpClient } from "../httpClient";
import { Expense } from "./types";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtaW5hbmNlLXNlcnZlciIsInN1YiI6ImIyOGI0MzI1LWFmNGMtNGFiMy05ZjJhLWVhMzY1MDZiOGNhNiJ9.0SJrdWywODhCb5XGbjwtWPmuiCbf3e3Vg8Dup0Z_rKk";

async function getAllExpenses() {
  const response = await httpClient.get<{ total: number; expenses: Expense[] }>(
    "/expenses",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
}

export const expensesApi = {
  getAllExpenses,
};
