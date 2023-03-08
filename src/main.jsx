import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { store } from "./store";
import { Provider } from "react-redux";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#5932b6",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
