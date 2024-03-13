import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Support from './components/support';
import Footer from './components/footer';
import LoadingSpinner from './UI/loadingSpinner';
const HomePage = lazy(() => import('./pages/homePage'));
const AboutPage = lazy(() => import('./pages/aboutPage'));
const ServicesPage = lazy(() => import('./pages/servicesPage'));
const OfferPage = lazy(() => import('./pages/offerPage'));
const FolioPage = lazy(() => import('./pages/folioPage'));
const TestiPage = lazy(() => import('./pages/testiPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const ContactPage = lazy(() => import('./pages/contactPage'));

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
      <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/alat-kami" element={<OfferPage />} />
          <Route path="/folio" element={<FolioPage />} />
          <Route path="/testimoni" element={<TestiPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </section>
  );
}

export default App;
