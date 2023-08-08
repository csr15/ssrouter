import React from "react";

/**
 * -----------------------------------------------------------------
 * @component NoAccess
 * @description
 * If user doesn't have enough permission to access a route then this component will render.
 * -----------------------------------------------------------------
 */
const NoAccess = () => {
  return (
    <div className="ss-container ss-no-access">
      <h3>⚠️ You don't have access to this page.</h3>
    </div>
  );
};

export default NoAccess;
