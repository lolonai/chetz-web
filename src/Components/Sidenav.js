import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Sidenav() {
  const closeNav = () => {
    const sidenav = document.querySelector("#sidenav");
    const menuBtn = document.querySelector("#menuBtn");

    menuBtn.classList.remove("roll-out-bottom");
    sidenav.style.height = "0";
  };

  return (
    <React.Fragment>
      <div id="sidenav" className="sidenav">
        <div className="menuTop">
          <i onClick={closeNav} class="fas fa-times"></i>
        </div>
        <div className="menuBottom">
          <ul>
            <li>
              <NavLink
                onClick={closeNav}
                exact
                activeClassName="selected"
                to="/accueil"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                exact
                activeClassName="selected"
                to="/info"
              >
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                exact
                activeClassName="selected"
                to="/tarif"
              >
                Tarif
              </NavLink>
            </li>
            <li>
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
      </div>
    </React.Fragment>
  );
}

export default withRouter(Sidenav);
