import React from "react";
import ReactDOM from "react-dom/client";

//Own Module Imports
import './index.css';
import SSRouterProvider from "./SSRouter/components/SSRouterProvider/SSRouterProvider";
import { BROWSER_ROUTER, CREATE_BROWSER } from "./constants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SSRouterProvider type={BROWSER_ROUTER} />
  </React.StrictMode>
);
