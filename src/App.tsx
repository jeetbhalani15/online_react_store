import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import HomePage from "./components/page-layout/home-page-layout/home-layout-view/home-page-layout";

const queryClient = new QueryClient();
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default App;
