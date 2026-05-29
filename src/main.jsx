import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Titik masuk aplikasi React
// StrictMode membantu mendeteksi masalah saat development
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
