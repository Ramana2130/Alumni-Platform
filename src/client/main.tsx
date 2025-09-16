import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ActiveThemeProvider } from "./components/alumni/sidebar/active-theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ActiveThemeProvider>
    <App />
    </ActiveThemeProvider>
  </React.StrictMode>,
);
