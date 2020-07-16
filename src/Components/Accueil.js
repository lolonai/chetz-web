import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import ServicesCards from "../Containers/Services_cards";
import ContactForm from "../Containers/Form";

import AnimationScroll from "../Custom/scrollReveal";

function Accueil() {
  useEffect(() => {
    AnimationScroll();
  }, []);
  return (
    <div className="home-container">
      <div className="title-container">
        <div className="card-home">
          <div className="card-title">
            <p>Votre agence web en ligne</p>
            <h6 className="slide-down load-hidden">
              Vous connaissez la musique, nous avons la partition !
            </h6>
            <div className="contact-btn-home slide-down load-hidden">
              <NavLink exact to="/contact">
                <button>Contactez nous</button>
              </NavLink>
            </div>
          </div>
          <div className="card-illustration">
            <img
              className="slide-right load-hidden"
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
