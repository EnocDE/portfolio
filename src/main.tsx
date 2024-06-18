import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MenuContext from "./context/MenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MenuContext>
      <App />
    </MenuContext>
  </React.StrictMode>
);
