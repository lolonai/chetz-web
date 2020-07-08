import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function ServicesCards() {
  return (
    <div className="cards-container">
      <div className="services-cards">
        <NavLink exact to="/services">
          <div className="services-card slide-up-interval load-hidden">
            <div className="services-card-title">
              <i class="fas fa-glass-martini-alt"></i>
              <h6>Site vitrine</h6>
            </div>
            <div className="services-card-content">
              <p>
                Une opportunitée de présenter votre activité sur la toile. Nous
                réalisons l’intégralité des fonctionnalités pour vous !
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink exact to="/services">
          <div className="services-card slide-up-interval load-hidden">
            <div className="services-card-title">
              <i class="fas fa-store"></i>
              <h6>Création e-commerce</h6>
            </div>
            <div className="services-card-content">
              <p>
                Création clés en mains de votre site E-commerce, conseil,
                paiement, livraison... Nous développons avec vous votre
                plateforme de vente en ligne.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink exact to="/services">
          <div className="services-card slide-up-interval load-hidden">
            <div className="services-card-title">
              <i class="fas fa-drafting-compass"></i>
              <h6>Application sur-mesure</h6>
            </div>
            <div className="services-card-content">
              <p>
                Un projet plus complexe ? Une solution sur-mesure pour répondre
                exactement à vos attentes. Nous développons pour vous un outil à
                votre image.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink exact to="/services">
          <div className="services-card slide-up-interval load-hidden">
            <div className="services-card-title">
              <i class="fas fa-paper-plane"></i>
              <h6>Impression</h6>
            </div>
            <div className="services-card-content">
              <p>
                Fiers de nos 15 ans d'expérience, nous gérons vos impressions et
                vous orientons vers les meilleurs choix
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(ServicesCards);
