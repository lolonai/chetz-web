import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const closeNav = () => {
  const sidenav = document.querySelector("#sidenav");
  const menuBtn = document.querySelector("#menuBtn");

  menuBtn.classList.remove("roll-out-bottom");
  sidenav.style.height = "0";
};

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li className="text-pop-up-tl">
          <NavLink
            onClick={closeNav}
            exact
            activeClassName="selected"
            to="/accueil"
          >
            Accueil
          </NavLink>
        </li>
        <li className="text-pop-up-tl">
          <NavLink
            onClick={closeNav}
            exact
            activeClassName="selected"
            to="/info"
          >
            Info
          </NavLink>
        </li>
        <li className="text-pop-up-tl">
          <NavLink
            onClick={closeNav}
            exact
            activeClassName="selected"
            to="/tarif"
          >
            Tarif
          </NavLink>
        </li>
        <li className="text-pop-up-tl">
          <NavLink
            onClick={closeNav}
            exact
            activeClassName="selected"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Menu);
