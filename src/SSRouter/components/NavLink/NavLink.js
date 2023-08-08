import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

//Own Module Imports
import "../../styles/index.css";
import { CustomError } from "../../utils";

/**
 * -----------------------------------------------------------------
 * VALIDATIONS
 * -----------------------------------------------------------------
 */

/**
 * @function
 * @description
 * Validates the props for a navigation link.
 *
 * @param {Object} props - The props object containing the navigation link properties.
 * @param {Function} props.className - The className prop for the navigation link.
 * @throws {CustomError} If the "className" prop is provided and is not a function.
 */
const _validateNavLinkProps = ({ className }) => {
  if (className && typeof className !== "object") {
    if (!(className.hasOwnProperty('active') || className.hasOwnProperty('inactive')))
    throw new CustomError(
      '"className" prop must be a object with either active or inactive key. for more information check here: https://google.com'
    );
  }
};

/**
 * -----------------------------------------------------------------
 * @component SSNavLink
 * @description
 * Used to create a linkable element same link SSLink but here we can pass classNames for styling.
 * we can use this over anchor tag to avoid reloading application.
 * -----------------------------------------------------------------
 */
const SSNavLink = ({ to, title, className, ...props }) => {
  useEffect(() => {
    _validateNavLinkProps({ className });
  }, [className]);
  let renderingBody = props.children;
  if (title) renderingBody = title;

  return (
    <NavLink className={className} to={to} {...props}>
      {renderingBody}
    </NavLink>
  );
};

export default SSNavLink;
