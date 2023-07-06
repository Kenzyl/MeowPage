import React from "react";
import { NavLink } from "react-router-dom";

const LinkActive = ({ isActive }) => {
  return {
    color: isActive ? "grey" : "black"
  };
};

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Kenneth L.</h1>
        <nav className="navigasi">
          <NavLink style={LinkActive} className="link" to="/">
            Home
          </NavLink>
          <NavLink style={LinkActive} className="link" to="/about">
            About
          </NavLink>
          <NavLink style={LinkActive} className="link" to="/contact">
            Contact
          </NavLink>
          <NavLink style={LinkActive} className="link" to="/help">
            Help
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
