import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./src/navigation/routes";

import { store } from "./src/app/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  );
}
