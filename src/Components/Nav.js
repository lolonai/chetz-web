import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="title">
        <h1>CheTz Web</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/"> Accueil </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/tarif">Tarif</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
