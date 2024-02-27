import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import { Link as WaLink } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaWhatsapp } from 'react-icons/fa';
import { heroImage, heroData } from '../../components/constructionData';
import DotsSelected from './dotsSelected';

const autoplayImageOptions = {
  delay: 7000,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};

const autoplayTextOptions = {
  delay: 3000,
};

const Hero = () => {
  const whatsappLink = `https://wa.me/081511020455`;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [Autoplay(autoplayImageOptions)]);
  const [emblaTextRef] = useEmblaCarousel({ loop: true, axis: 'y' }, [Autoplay(autoplayTextOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="hero-slider" ref={emblaRef}>
      <div className="hero-slider-container">
        {heroImage.map((slide, index) => (
          <div className="hero-slide" key={index} style={{ backgroundImage: `url(${slide})` }} />
        ))}
      </div>
      <div className="hero-slider-content">
        <div className="viewport-title" ref={emblaTextRef}>
          <div className="title">
            {heroData.map((hero) => (
              <h1 key={hero.id}>{hero.title}</h1>
            ))}
          </div>
        </div>
        <p>
          Jasa sewa crane berkualitas full support kepada customer. Menyediakan kebutuhan sewa crane diantaranya,
          <i style={{ fontWeight: 'bold' }}> Mobile Crane, All Terrain Crane, Roughter Crane, Crawler Crane, Truck Mounted Crane & Forklift.</i> Menggunakan tenaga profesional dan menjamin keselamatan pekerja.
        </p>
        <div className="actions">
          <Link to="offer" smooth={true} duration={1000}>
            Alat Sewa
          </Link>
          <WaLink to={whatsappLink} target="_blank">
            Kontak Kami
            <>
              <FaWhatsapp />
            </>
          </WaLink>
        </div>
        <div className="dots-selected">
          {scrollSnaps.map((_, index) => (
            <DotsSelected key={index} onClick={() => scrollTo(index)} className={'dots'.concat(index === selectedIndex ? ' dots-active' : '')} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;