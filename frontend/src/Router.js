import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import NotFound from './pages/notFound';

const Router = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer/>
  </BrowserRouter>
);

export default Router;
