import React from "react";

import { Header } from "./common-components/Header/Header";
import { Footer } from "./common-components/Footer/Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Formacao } from "./screens/Formacao";
import { SobreMim } from "./screens/SobreMim";
import { Experiencia } from "./screens/Experiencia";
import { Hobbies } from "./screens/Hobbies";
import { NotFound } from "./screens/NotFound";
import { NormalizeStyles } from "./shared/NormalizeStyles";
export function App() {
  return (
    <>
      <NormalizeStyles />
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/formacao" exact>
            <Formacao />
          </Route>
          <Route path="/sobremim" exact>
            <SobreMim />
          </Route>
          <Route path="/experiencia" exact>
            <Experiencia />
          </Route>
          <Route path="/hobbies" exact>
            <Hobbies />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}
