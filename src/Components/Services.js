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
            Besoin d’un site vitrine ou e-Commerce ? <br /> d'un modèle, du
            sur-mesure ?
          </h5>
          <div className="services-items">
            <div className="services-item-title">
              <h6>Site vitrine</h6>
              <p>
                Idéal pour présenter votre activité et trouver de nouveaux
                clients via le Web.
              </p>
            </div>
            <div className="services-item-desc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="services-items">
            <div className="services-item-title">
              <h6>e-commerce</h6>
              <p>
                Le site idéal pour faire de la vente en ligne et booster votre
                entreprise.
              </p>
            </div>
            <div className="services-item-desc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="services-items">
            <div className="services-item-title">
              <h6>Administratif ou Sur-mesure</h6>
              <p>
                Gérez votre site web comme votre boutique ou votre entreprise.
                Vous modifiez et gérez vos contenus à votre guise. Un projet
                plus complexe ? Une solution sur-mesure pour répondre exactement
                à vos attentes. Nous développons pour vous un outil à votre
                image.
              </p>
            </div>
            <div className="services-item-desc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="services-items">
            <div className="services-item-title">
              <h6>Impression</h6>
              <p>
                Fiers de nos 15 ans d'expérience, nous gérons vos impressions et
                vous orientons vers les meilleurs choix
              </p>
            </div>
            <div className="services-item-desc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
