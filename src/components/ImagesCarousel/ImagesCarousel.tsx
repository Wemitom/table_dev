import { useEffect, useState } from 'react';
import 'react-awesome-slider/dist/styles.css';
import { Slide } from './interfaces';

const ImagesCarousel = ({ slides }: { slides: Slide[] }) => {
  const [curSlide, setCurSlide] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <section className="hero-section">
      <h2 className="visually-hidden">слайдер с описанием кухни</h2>
      <div className="container">
        <div className="hero-slider swiper">
          <ul
            className="hero-slider__list list-reset swiper-wrapper"
            style={{
              transform: `translate3d(-${
                curSlide * (window.innerWidth - 47)
              }px, 0px, 0px)`,
            }}
          >
            {slides.map((slide, index) => {
              let slideClassName = 'hero-slider__item swiper-slide';
              if (index === curSlide) {
                slideClassName += ' swiper-slide-active';
              } else if (index === curSlide - 1) {
                slideClassName += ' swiper-slide-prev';
              } else if (index === curSlide + 1) {
                slideClassName += ' swiper-slide-next';
              }

              return (
                <li
                  className={slideClassName}
                  key={`img_${index}`}
                  style={{
                    backgroundImage: `url(${slide.imgPath})`,
                    width: window.innerWidth - 47,
                  }}
                >
                  <div className="hero-slider__container">
                    <div className="hero-slider__inner">
                      <h3 className="hero-slider__title">{slide.title}</h3>
                      <div className="hero-slider__text">
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div
            className={`swiper-button-next ${
              curSlide !== slides.length - 1 ? '' : 'swiper-button-disabled'
            }`}
            onClick={() => setCurSlide(curSlide + 1)}
          ></div>
          <div
            className={`swiper-button-prev ${
              curSlide ? '' : 'swiper-button-disabled'
            }`}
            onClick={() => setCurSlide(curSlide - 1)}
          ></div>
          <div
            className={
              slides.length
                ? 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'
                : 'swiper-pagination'
            }
          >
            {slides.map((_, index) => (
              <span
                key={`go_to_img_${index}`}
                className={`swiper-pagination-bullet ${
                  curSlide === index ? 'swiper-pagination-bullet-active' : ''
                }`}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesCarousel;
