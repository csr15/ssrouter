import { Navigate } from "react-router-dom";

/**
 * -----------------------------------------------------------------
 * VALIDATIONS
 * -----------------------------------------------------------------
 */

/**
 * -----------------------------------------------------------------
 * @component SSNavLink
 * @description
 * Used to redirect to new page. Mainly used in conditional rendering.
 * -----------------------------------------------------------------
 */
const SSRedirect = ({ path, to, ...props }) => {
  return (
    <Navigate to={path} replace={true} {...props} />
  );
};

export default SSRedirect;
