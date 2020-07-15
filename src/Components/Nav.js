import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import Menu from "../Containers/Menu";

const Nav = () => {
  const openNav = () => {
    const sidenav = document.querySelector("#sidenav");
    const menuBtn = document.querySelector("#menuBtn");

    menuBtn.style.transform = "rotate(0deg)";
    menuBtn.classList.add("roll-out-bottom");

    function openSideNav() {
      sidenav.style.height = "100%";
    }
    setTimeout(openSideNav, 300);
  };

  const closeNav = () => {
    const sidenav = document.querySelector("#sidenav");
    const menuBtn = document.querySelector("#menuBtn");

    menuBtn.classList.remove("roll-out-bottom");
    sidenav.style.height = "0";
  };

  return (
    <React.Fragment>
      <div id="sidenav" className="sidenav">
        <div onClick={closeNav} className="menuTop triangle">
          <i className="fas fa-times"></i>
        </div>
        <Menu />
      </div>
      <nav>
        <NavLink exact to="/">
          <div className="title">
            <img src="./images/CHETZ.svg" alt="THE_CHETZ_WEB" />
          </div>
        </NavLink>
        <div className="grid">
          <Menu />
          <i onClick={openNav} id="menuBtn" className="fas fa-bars"></i>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(Nav);
