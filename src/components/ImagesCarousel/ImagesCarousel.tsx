import { useEffect, useReducer, useState } from 'react';
import { CurSlideAction, CurSlideActionType, Slide } from './interfaces';
import { useSwipeable } from 'react-swipeable';

const ImagesCarousel = ({ slides }: { slides: Slide[] }) => {
  const curSlideReducer = (state: number, action: CurSlideAction): number => {
    switch (action.type) {
      case 'NEXT':
        return state === slides.length - 1 ? 0 : state + 1;
      case 'PREV':
        return state === 0 ? slides.length - 1 : state - 1;
      case 'SET':
        return action.payload!;
      default:
        throw new Error();
    }
  };

  const [curSlide, curSlideDispatch] = useReducer(curSlideReducer, 0);
  const [, setWidth] = useState(window.innerWidth);

  const handlers = useSwipeable({
    onSwipedLeft: () => curSlideDispatch({ type: CurSlideActionType.Next }),
    onSwipedRight: () => curSlideDispatch({ type: CurSlideActionType.Prev }),
  });

  useEffect(() => {
    const changeWidth = () => setWidth(window.innerWidth);
    // Ставим эвент листенер на измение ширины, т.к. влияет на переключение слайдов
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  // Ставим интервал в 15сек для автоматической прокрутки по слайдам
  useEffect(() => {
    const timer = setInterval(
      () => curSlideDispatch({ type: CurSlideActionType.Next }),
      15000
    );

    return () => {
      timer && clearInterval(timer);
    };
  });

  return (
    <section className="hero-section">
      <h2 className="visually-hidden">слайдер с описанием кухни</h2>
      <div className="container">
        <div className="hero-slider swiper">
          <ul
            className="hero-slider__list list-reset swiper-wrapper"
            style={{
              transform: `translateX(-${curSlide * 100}%)`,
            }}
            {...handlers}
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
                    width: '100%',
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
            onClick={() => curSlideDispatch({ type: CurSlideActionType.Next })}
          ></div>
          <div
            className={`swiper-button-prev ${
              curSlide ? '' : 'swiper-button-disabled'
            }`}
            onClick={() => curSlideDispatch({ type: CurSlideActionType.Prev })}
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
                onClick={() =>
                  curSlideDispatch({
                    type: CurSlideActionType.Set,
                    payload: index,
                  })
                }
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesCarousel;
