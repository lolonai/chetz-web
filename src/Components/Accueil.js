import React from "react";

export default function Accueil() {
  return (
    <div className="home-container">
      <div className="card-home">
        <div className="card-title">
          <p>Votre agence web en ligne</p>
          <h6>Vous connaissez la musique, nous avons la partition</h6>
          <div className="contact-btn-home">
            <button>Contactez nous</button>
          </div>
        </div>
        <div className="card-illustration">
          <img src="./images/happy_music.svg" alt="Oiseau qui chante" />
        </div>
      </div>
    </div>
  );
}
