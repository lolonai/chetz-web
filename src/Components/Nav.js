import React from "react";

import Sidenav from "./Sidenav";

const Nav = () => {
  const openNav = () => {
    const sidenav = document.querySelector("#sidenav");
    const menuBtn = document.querySelector("#menuBtn");

    menuBtn.classList.add("roll-out-bottom");

    function openSideNav() {
      sidenav.style.height = "100%";
    }
    setTimeout(openSideNav, 500);
  };

  return (
    <React.Fragment>
      <Sidenav />
      <nav>
        <div className="title">
          <img src="CHETZ.svg" alt="THE_CHETZ_WEB" />
        </div>
        <div className="grid">
          <i onClick={openNav} id="menuBtn" class="fas fa-bars "></i>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
