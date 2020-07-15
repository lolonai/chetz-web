import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Erreur() {
  return (
    <div className="erreur">
      <p className="erreur-404">Erreur 404 : page non trouvée</p>
      <NavLink exact activeClassName="selected" to="/">
        <p className="txt">Retour vers l'accueil</p>
      </NavLink>
    </div>
  );
}
export default withRouter(Erreur);
