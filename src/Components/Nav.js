import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="title">
        <img src="CHETZ.svg" alt="THE_CHETZ_WEB" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink exact activeClassName="selected" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/info">
              Info
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/tarif">
              Tarif
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
