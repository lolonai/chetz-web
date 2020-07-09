import React, { useEffect } from "react";
import ServicesCards from "../Containers/Services_cards";
import AnimationScroll from "../Custom/scrollReveal";

export default function Services() {
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
          <div className="services-items slide-left-interval">
            <div className="services-item-title">
              <i class="fas fa-glass-martini-alt"></i>
              <h6>Site vitrine</h6>
              <p>
                C'est le site idéal pour présenter votre activité et trouver de
                nouveaux clients via le Web. Simple et efficace
              </p>
            </div>
            <div className="services-item-desc">
              <div className="item-desc">
                <p>- Pages de contenu fixe</p>
                <p>
                  - design personnalisé aux couleurs d'un logo existant ou à
                  créer.
                </p>
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
            <div className="services-item-title">
              <i class="fas fa-store"></i>
              <h6>e-commerce</h6>
              <p>Lancez votre boutique en ligne et booster votre entreprise.</p>
            </div>
            <div className="services-item-desc">
              <div className="item-desc">
                <p>- Gestion de produits simplifier</p>
                <p>- Création, modification et suppression de produits</p>
                <p>- Système de paiement en ligne</p>
                <p>- Gestion du stock</p>
                <p>
                  - Donnez-nous vos spécifications techniques et nous adaptons
                  l'outil à votre système d'information.
                </p>
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
            <div className="services-item-title">
              <i class="fas fa-drafting-compass"></i>
              <h6>Administratif ou Sur-mesure</h6>
              <p>
                Gérez vous même votre site web. <br /> Un projet plus complexe ?
                Une solution sur-mesure pour répondre exactement à vos attentes.
              </p>
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
            <div className="services-item-title">
              <i class="fas fa-paper-plane"></i>
              <h6>Impression</h6>
              <p>
                Flyer, dépliants, carte de visite..., nous gérons vos
                impressions et vous orientons vers les meilleurs choix
              </p>
            </div>
            <div className="services-item-desc">
              <div className="item-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
