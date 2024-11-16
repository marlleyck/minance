import { useQuery } from "@tanstack/react-query";
import { expensesApi } from "./api";

export function getAllExpenses() {
  const query = useQuery({
    queryKey: ["expenses"],
    queryFn: async function () {
      const result = await expensesApi.getAllExpenses();

      return result.data;
    },
  });

  return {
    expenses: query.data,
  };
}
