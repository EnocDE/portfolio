import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MenuContext from "./context/MenuContext.tsx";
import "./bg-pattern.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MenuContext>
      <App />
    </MenuContext>
  </React.StrictMode>
);
