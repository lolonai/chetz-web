import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import ServicesCards from "../Containers/Services_cards";
import ContactForm from "../Containers/Form";

function Accueil() {
  return (
    <div className="home-container">
      <div className="title-container">
        <div className="card-home">
          <div className="card-title">
            <p>Votre agence web en ligne</p>
            <h6 className="bounce-in-top">
              Vous connaissez la musique, nous avons la partition !
            </h6>
            <div className="contact-btn-home">
              <NavLink exact to="/contact">
                <button className="jello-horizontal ">Contactez nous</button>
              </NavLink>
            </div>
          </div>
          <div className="card-illustration">
            <img
              className="slide-in-blurred-right"
              src="./images/happy_music.svg"
              alt="Oiseau qui chante"
            />
          </div>
        </div>
      </div>
      <ServicesCards />
      <div className="home-contact-form">
        <ContactForm />
      </div>
    </div>
  );
}

export default withRouter(Accueil);
