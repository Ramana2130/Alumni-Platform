import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AlumniProvider } from "./context/Alumnidetailscontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlumniProvider>
      <App />
    </AlumniProvider>
  </React.StrictMode>
);
