import React from "react";
import { Switch, Route } from "react-router-dom";

import Accueil from "./Components/Accueil";
import Services from "./Components/Services";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Accueil} />
    <Route path="/services" component={Services} />
    <Route path="/présentation" component={Presentation} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
