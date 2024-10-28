import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import "./index.css";
import ThemeContextStore from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextStore>
      <App />
    </ThemeContextStore>
  </StrictMode>
);
