import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar({ titre }) {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo Kasa" />
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              !isActive ? "active-link" : undefined
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              !isActive ? "active-link" : undefined
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
