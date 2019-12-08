import React from 'react';
// import Home from './pages/Home'
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Hire from './components/Contact-me';
import Team from './components/Team';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';
import Blog from './pages/Blog'
import Contact from './components/Contact-form';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './assets/css/bootstrap.min.css';

import './assets/inc/custom-slider/css/nivo-slider.css';
import './assets/inc/custom-slider/css/preview.css';
import './assets/css/meanmenu.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/animate.css';
import './assets/css/flaticon.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/colors/default.css';
export default function Razz() {
  return (
    <Router >
    <div className="raz-wrapper">
      <Header />
      <Switch>
        <Route path="/" exact strict component={Slider} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/team" exact component={Team} />
        <Route path="/portfolio" exact component={Skills} />
        <Route path="/clients" exact component={Testimonial} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        

      </Switch>

      
      <Footer />
    </div>
  </Router>
  );
}
