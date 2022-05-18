import { QueryClient, QueryClientProvider } from "react-query";
import { SimulatorPage } from "./components";

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Vay Simulator</h1>

      <SimulatorPage />
    </QueryClientProvider>
  );
}