import React from "react";
import { Switch, Route } from "react-router-dom";

import Accueil from "./Components/Accueil";
import Tarif from "./Components/Tarif";
import Info from "./Components/Info";
import Contact from "./Components/Contact";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Accueil} />
    <Route path="/tarif" component={Tarif} />
    <Route path="/info" component={Info} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
