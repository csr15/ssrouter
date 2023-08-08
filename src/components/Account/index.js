import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../../constants";

const Account = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(localStorage.getItem(isLoggedIn));
  }, []);

  const loginHandler = () => {
    localStorage.setItem(isLoggedIn, true);
    setAuth(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(isLoggedIn, true);
    setAuth(false);
  };
  return (
    <div className="ss-container ss-account">
      <p>THIS IS</p>
      <h2>Account</h2>
      <button
        className="btn ss-btn"
        onClick={auth ? logoutHandler : loginHandler}
      >
        {auth ? "LOGOUT" : "LOGIN"}
      </button>
    </div>
  );
};

export default Account;
