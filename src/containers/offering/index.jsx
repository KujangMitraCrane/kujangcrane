import React, { useCallback } from 'react';
import '../../styles/offering.css';
import useEmblaCarousel from 'embla-carousel-react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { offerData } from '../../components/constructionData';
import OfferContent from './offerContent';

const Offering = ({ homePage }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
  });

  const previousMove = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const nextMove = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="offering">
      <div className="our-offer">
        <div className="headline">
          <h1>Apa yang Kami Tawarkan?</h1>
          <span />
          <p>Kujang Mitra Crane memiliki berbagai crane yang dapat memenuhi kebutuhan anda. Mulai dari 3 ton - 500 ton</p>
        </div>
        {!homePage && (
          <div className="arrow">
            <button className="nextMove" onClick={previousMove}>
              <MdNavigateBefore />
            </button>
            <button className="previousMove" onClick={nextMove}>
              <MdNavigateNext />
            </button>
          </div>
        )}
      </div>
      <div className={!homePage ? 'offer-viewport' : 'offer-viewport-open'} ref={!homePage ? emblaRef : null}>
        <div className={!homePage ? 'offer-content' : 'offer-content-open'}>
          {offerData.map((offer) => (
            <OfferContent key={offer.id} title={offer.title} specific={offer.specific} merk={offer.merk} image={offer.image} />
          ))}
        </div>
      </div>
      {/* {!homePage ? (
        <div className="offer-viewport" ref={emblaRef}>
          <div className={!homePage ? 'offer-content': 'offer-content-open'}>
            {offerData.map((offer) => (
              <OfferContent key={offer.id} title={offer.title} specific={offer.specific} merk={offer.merk} image={offer.image} />
            ))}
          </div>
        </div>
      ) : (
        <div className="offer-content-open">
          {offerData.map((offer) => (
            <OfferContent key={offer.id} title={offer.title} specific={offer.specific} merk={offer.merk} image={offer.image} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Offering;
