import React from "react";
import {
  BROWSER_ROUTER,
  CREATE_BROWSER,
  HASH_ROUTER,
  MEMORY_ROUTER,
} from "../../../constants";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { rootChildren } from "../../../routes";
import App from "../../../app/App";
import NewApp from "../../../NewApp/NewApp.js";

const SSRouterProvider = (props) => {
  const _RenderRouterProvider = (type) => {
    switch (type) {
      case CREATE_BROWSER:
        return (
          <RouterProvider
            router={createBrowserRouter([
              {
                path: "/",
                element: <NewApp />,
                children: rootChildren,
              },
            ])}
          />
        );
      case BROWSER_ROUTER:
        return (
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );
      case HASH_ROUTER:
        return (
          <HashRouter>
            <App />
          </HashRouter>
        );
      case MEMORY_ROUTER:
        return (
          <MemoryRouter>
            <App />
          </MemoryRouter>
        );
      default:
        console.log("Please provide a valid router type");
    }
  };
  return _RenderRouterProvider(props.type);
};

export default SSRouterProvider;
