import { useEffect } from "react";

//Own Module Imports
import { features, isLoggedIn } from "../../../constants/index";
import NoAccess from "../../UI/NoAccess";
import { CustomError } from "../../utils";

/**
 * -----------------------------------------------------------------
 * VALIDATIONS
 * -----------------------------------------------------------------
 */

/**
 * @function
 *
 * @description
 * Validates the props for a PrivateRoute component.
 *
 * @param {Object} props - The props object for the PrivateRoute component.
 * @param {React.ComponentType} props.component - The component to be rendered when the route is accessed.
 * @throws {CustomError} Throws a CustomError if the 'component' prop is not provided.
 *
 */
export const validatePropsForPrivateRoute = ({ component }) => {
  if (!component) {
    throw new CustomError(
      "PrivateRoute must contain component and a feature to validate. for more information check here: https://google.com"
    );
  }
};

/**
 * -----------------------------------------------------------------
 * @component SSAuthRoute
 * 
 * @description
 * To render a component by certain conditions.
 * -----------------------------------------------------------------
 */
const SSAuthRoute = ({ element: Element, feature, isAuth, ...props }) => {
  useEffect(() => {
    validatePropsForPrivateRoute({ component: Element, feature, isAuth });
  }, [Element, feature, isAuth]);

  //Checking feature first.
  let userHasAccess = feature && features.includes(feature);

  //If the route is protected by authentication then isAuth is validated.
  if (isAuth) {
    userHasAccess = localStorage.getItem(isLoggedIn);
  }

  // If sufficient authentication is not met, then the NOACCESS screen will display.
  const RenderingComponent = userHasAccess ? Element : NoAccess;

  return <RenderingComponent {...props} />;
};

export default SSAuthRoute;
