import React from "react";
import { useNavigate } from "../../SSRouter/SSRouterHooks";
import SSLink from "../../SSRouter/components/Link/Link";

const List = ({ title, link }) => {
  const navigate = useNavigate();

  return (
    <li className="nav-item active">
      <p className="nav-link" onClick={() => navigate(link)}>
        {title}
      </p>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <SSLink to="/" title="SuperRoute" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <List title="Home" link="/" />
          <List title="Features" link="/features" />
          <List title="Pricing" link="/pricing" />
          <List title="Account" link="/Account" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
