import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import "./fonts/IRANSansWeb.ttf";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
