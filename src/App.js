import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Support from './components/support';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ServicesPage from './pages/servicesPage';
import OfferPage from './pages/offerPage';
import FolioPage from './pages/folioPage';
import TestiPage from './pages/testiPage';
<<<<<<< HEAD
import FaqPage from './pages/Faqpage';
=======
import FaqPage from './pages/FaqPage';
>>>>>>> d22b71527e5662479a5df6a48fbe0bffe89273d5
import ContactPage from './pages/contactPage';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.querySelector('#content');
      const scrollPercentage = (window.scrollY / (contentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <Support />
      <Navbar isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/folio" element={<FolioPage />} />
        <Route path="/testimonials" element={<TestiPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
