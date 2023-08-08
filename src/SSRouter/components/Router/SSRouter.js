import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";

//Own Module Imports
import { CustomError } from "../../utils";

/**
 * -----------------------------------------------------------------
 * VALIDATIONS
 * -----------------------------------------------------------------
 */

/**
 * @function
 * @description
 * To check whether the `routes` array has been passed or not, an error will be thrown if it is not present.
 *
 * @param {Array} routes - An array containing route objects.
 * @throws {CustomError} If the provided routes parameter is not an array or is empty.
 * @throws {CustomError} If any of the route objects in the array do not have a valid "component" property.
 * @returns {void}
 *
 */
const _validateRoutes = (routes) => {
  if (!Array.isArray(routes) || routes.length === 0) {
    throw new CustomError(
      '"routes" prop must be a non-empty array. Provide at least one route element. for more information check here: https://google.com'
    );
  }

  for (const route of routes) {
    const routeComponent = route?.element;
    //Have to validate the typeof routeElement is a function
    if (!routeComponent || !React.isValidElement(routeComponent)) {
      throw new CustomError(
        'Each route object must contain a valid "component" property representing a React component to be rendered, for more information check here: https://google.com'
      );
    }
  }
};

const _RenderRoutes = (routes) => {
  return routes?.map(({ path, component, ...rest }) => (
    <Route key={path} path={path} element={component} {...rest}>
      {rest?.routes?.length ? _RenderRoutes(rest?.routes) : null}
    </Route>
  ));
};

/**
 * -----------------------------------------------------------------
 * @component SSRouter
 * @description
 * Used to create routes in the application. Will act as a global router for all children routes
 * -----------------------------------------------------------------
 */
const SSRouter = ({ routes }) => {
  useEffect(() => {
    _validateRoutes(routes);
  }, [routes]);

  return <Routes>{_RenderRoutes(routes)}</Routes>;
};

export default SSRouter;
