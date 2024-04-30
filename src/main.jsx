import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter basename={"/yum_r/"}>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
