import React, { useRef } from 'react';
import '../styles/home.css';
import Hero from '../containers/hero';
import About from '../containers/about';
import Services from '../containers/services';
import Experiences from '../containers/experiences';
import Offering from '../containers/offering';
import Folio from '../containers/folio';
import Testimonials from '../containers/testimonials';
import Faq from '../containers/faq';
import Cooperation from '../containers/cooperation';
import Contact from '../containers/contact';

const Home = () => {
  const contentRef = useRef(null);

  return (
    <div className="home" ref={contentRef} id="content">
      <Hero />
      <About />
      <Experiences />
      <Services />
      <Offering />
      <Folio />
      <Testimonials />
      <Faq />
      <Contact />
      <Cooperation />
    </div>
  );
};

export default Home;
