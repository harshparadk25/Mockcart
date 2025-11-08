import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { ReceiptProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReceiptProvider>
      <App />
      <Toaster position="top-right" />
    </ReceiptProvider>
  </StrictMode>
);
