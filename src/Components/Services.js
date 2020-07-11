import React, { useEffect } from "react";
import AnimationScroll from "../Custom/scrollReveal";
import { NavLink, withRouter } from "react-router-dom";

function Services() {
  useEffect(() => {
    AnimationScroll();
  }, []);
  return (
    <div className="services-container">
      <div className="services-header">
        <div className="services-presentation">
          <h5>
            Besoin d’un site vitrine ou e-Commerce ? <br /> D'un modèle ? de
            sur-mesure ?
          </h5>
          <p>
            Pour toute information complémentaire, devis, ou prise de contact
            veuillez vous référer au{" "}
            <NavLink exact activeClassName="selected" to="/contact">
              <span>formulaire.</span>
            </NavLink>
            <br />
            nous vous recontacterons dans les plus bref délais.
          </p>

          <div className="services-items slide-left-interval">
            <div className="services-item-title bg-title-1">
              <div className="services-icon">
                <i class="fas fa-glass-martini-alt"></i>
              </div>
              <div className="services-title">
                <h6>Site vitrine</h6>
                <p>
                  Indispensable pour présenter votre activité et trouver de
                  nouveaux clients via le Web. Simple et efficace
                </p>
              </div>
            </div>
            <div className="services-item-desc">
              <div className="item-desc">
                <p>- Maximum 5 pages de contenu fixe</p>
                <p>- Design personnalisé à vos couleurs.</p>
                <p>- Formulaire de contact</p>
                <p className="services-support">
                  - Support / maintenance: offerts les 2 premières heures
                </p>

                <div className="mobile-item">
                  <div className="mobile-friendly">
                    <p>Site compatible tablette et mobile</p>
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-items slide-right-interval">
            <div className="services-item-title bg-title-2">
              <div className="services-icon">
                <i class="fas fa-store"></i>
              </div>
              <div className="services-title">
                <h6>e-commerce</h6>
                <p>Lancez votre boutique en ligne et boostez votre business.</p>
              </div>
            </div>
            <div className="services-item-desc">
              <div className="item-desc">
                <p>- Gestion de produits simplifié</p>
                <p>- Création, modification et suppression de produits</p>
                <p>- Système de paiement en ligne</p>
                <p>- Gestion du stock</p>
                <p className="services-support">
                  - Support / maintenance: offerts les 4 premières heures
                </p>
                <p className="services-support">
                  - Formation sur l'utilisation (environ 1H)
                </p>
                <div className="mobile-item">
                  <div className="mobile-friendly">
                    <p>Site compatible tablette et mobile</p>
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-items slide-left-interval">
            <div className="services-item-title bg-title-3">
              <div className="services-icon">
                <i class="fas fa-drafting-compass"></i>
              </div>
              <div className="services-title">
                <h6>Sur-mesure</h6>
                <p>
                  Gérez vous même votre site web. <br /> Une solution sur-mesure
                  pour répondre exactement à vos attentes.
                </p>
              </div>
            </div>
            <div className="services-item-desc">
              <div className="item-desc">
                <p>- Possibilité de créer des pages et modifier leur contenu</p>
                <p>- Administration d'articles</p>
                <p className="services-support">
                  - Support / maintenance: offerts les 2 premières heures
                </p>
                <p className="services-support">
                  - Formation sur l'utilisation (environ 1H)
                </p>
                <div className="mobile-item">
                  <div className="mobile-friendly">
                    <p>Site compatible tablette et mobile</p>
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-items slide-right-interval">
            <div className="services-item-title bg-title-4">
              <div className="services-icon">
                <i class="fas fa-paper-plane"></i>
              </div>
              <div className="services-title">
                <h6>Impression</h6>
                <p>
                  Flyer, dépliants, carte de visite..., nous gérons vos
                  impressions et vous orientons vers les meilleurs choix
                </p>
              </div>
            </div>
            <div className="services-item-desc">
              <div className="item-desc">
                <p>- Prise en charge de vos imprimés</p>
                <p>- Création logo, flyers, carte de visite, ...</p>
                <p>- Impression, façonnage, livraison</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Services);
