import React, { useEffect } from "react";

import AnimationScroll from "../Custom/scrollReveal";

export default function Presentation() {
  useEffect(() => {
    AnimationScroll();
  });
  return (
    <div className="presentation-container">
      <div className="team-container slide-down load-hidden">
        <h6>Notre équipe</h6>
        <div className="team-cards">
          <div className="team-card">
            <div className="team-title card-a">
              <div>
                <p>Laurent</p>
                <a
                  href="https://www.linkedin.com/in/lolo-ntz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="team-content">
              <p>
                Laurent, l'imprimeur devenu développeur. <br />
                Après 15 ans passé dans l'industrie graphique il à tout plaqué
                pour le web.
                <br />
                C'est notre dev front
                <br />
                Il est aussi notre référent impression.
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-title card-b">
              <div>
                <p>Alex</p>
                <a
                  href="https://www.linkedin.com/in/alexandre-chelednik-729a6b164/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="team-content">
              <p>
                Alex, l'Americain de l'équipe. <br />
                Arrivé sur le vieux continent en 2016.
                <br />
                C'est le développeur back-end de notre équipe <br /> il
                participe aussi à chaque étape de la conception d'un site web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
