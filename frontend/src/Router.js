import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';

import English from './pages/english';
import Projects from './pages/english/projects';
import Contact from './pages/english/contact';

import Espanol from './pages/espanol';
import Proyectos from './pages/espanol/projects';
import Contacto from './pages/espanol/contact';

import NotFound from './pages/notFound';

const Router = () => (
  <BrowserRouter>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/en" component={English} />
      <Route exact path="/en/projects" component={Projects} />
      <Route exact path="/en/contact" component={Contact} />
      <Route exact path="/es" component={Espanol} />
      <Route exact path="/es/proyectos" component={Proyectos} />
      <Route exact path="/es/contacto" component={Contacto} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
