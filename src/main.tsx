import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Backdrop } from "./components/backdrop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Backdrop />
    <App />
  </StrictMode>
);
