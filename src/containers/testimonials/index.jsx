import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/testimonials.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import testimonial from '../../assets/tower-crane.jpg';
import TestingContent from './testingContent';
import { testiData } from '../../components/constructionData';

const autoplayOptions = {
  delay: 5000,
};

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 }, [Autoplay(autoplayOptions)]);
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
    <div className="testimonials" style={{ backgroundImage: `url(${testimonial})` }}>
      <div className="our-testy">
        <div className="heading">
          <label>Apa Pendapat Mitra Kami?</label>
        </div>
        <div className="heading-viewport" ref={emblaRef}>
          <div className="heading-content">
            {testiData.map((testy) => (
              <TestingContent key={testy.id} name={testy.name} company={testy.company} text={testy.text} />
            ))}
          </div>
          <div className="selected">
            {scrollSnaps.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  scrollTo(index);
                }}
                className={'dots'.concat(index === selectedIndex ? ' dots-active' : '')}
              >
                <button className="dot-button"></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
