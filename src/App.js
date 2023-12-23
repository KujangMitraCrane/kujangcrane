import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Support from './components/support';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.querySelector('#content');
      const scrollPercentage = (window.scrollY / (contentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 15) {
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
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
