import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Landing from "./pages/Landing";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App /> */}
      <Landing />
    </ThemeProvider>
  </React.StrictMode>
);
