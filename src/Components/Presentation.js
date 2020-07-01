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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                omnis reiciendis magni adipisci reprehenderit dolorem illo vel
                minus doloribus recusandae?
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
                Fraichment debarque des US, Alex c'est specialise dan le
                development back-end, Ruby on Rails, et base de donnes S.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
