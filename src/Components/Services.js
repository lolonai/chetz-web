import React, { useEffect } from "react";
import ServicesCards from "../Containers/Services_cards";
import AnimationScroll from "../Custom/scrollReveal";

export default function Services() {
  useEffect(() => {
    AnimationScroll();
  }, []);
  return (
    <div className="services-container">
      <h6>Besoin d'information, d'un devis ou même d'une pomme de pin ?</h6>
      <ServicesCards />
    </div>
  );
}
