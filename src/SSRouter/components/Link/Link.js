import React from "react";
import { Link } from "react-router-dom";

//Own Module Imports
import '../../styles/index.css';

/**
 * -----------------------------------------------------------------
 * @component SSLink
 * @description
 * Used to create a linkable element. we can use this over anchor tag to avoid reloading application.
 * -----------------------------------------------------------------
 */
const SSLink = ({ to, title, ...props }) => {
  let renderingBody = props.children;
  if (title) renderingBody = title;
  
  return (
    <Link className="ss-router__link" to={to} {...props}>
      {renderingBody}
    </Link>
  );
};

export default SSLink;
