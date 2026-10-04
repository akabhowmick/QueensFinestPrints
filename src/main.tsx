import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { loadFonts } from "./theme/loadFonts";

loadFonts();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
