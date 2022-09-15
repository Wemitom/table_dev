import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="section-access">
        <div className="section-access__inner">
          <a
            className="section-access__link"
            href="#"
            style={{ backgroundImage: 'url(img/access-img/img1.jpg)' }}
          >
            <p className="section-access__text title">Для партнеров</p>
          </a>
          <a
            className="section-access__link"
            href="#"
            style={{ backgroundImage: 'url(img/access-img/img2.jpg)' }}
          >
            <p className="section-access__text title">Для пользователей</p>
          </a>
        </div>
      </section>
      <div className="footer__inner">
        <div className="footer__info">
          <div className="footer__container">
            <a className="logo footer__logo" href="#">
              <img
                src="img/logo.svg"
                alt="Логотип ресторана"
                width="135"
                height="59"
              />
            </a>
            <div className="footer__contacts">
              <a className="footer__link" href="mailto:totable.info@gmail.com">
                totable.info@gmail.com
              </a>
              <a className="footer__link" href="tel:79269073553">
                +7 926 907-35-53
              </a>
            </div>
            <ul className="socials list-reset">
              <li className="socials__item">
                <a className="socials__link socials__link--vk" href="#">
                  <span className="visually-hidden">ВК</span>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__link socials__link--telegram" href="#">
                  <span className="visually-hidden">Телеграм</span>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__link socials__link--od" href="#">
                  <span className="visually-hidden">Одноклассники</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__more">
          <div className="footer__container footer__container--width">
            <p className="footer__text">Узнайте о проекте больше</p>
            <form className="footer-form" action="#">
              <label className="visually-hidden" htmlFor="name">
                имя
              </label>
              <input
                className="footer-form__input input-reset"
                id="name"
                type="text"
                name="name"
                placeholder="Имя"
                required
              />
              <label className="visually-hidden" htmlFor="name">
                телефон
              </label>
              <input
                className="footer-form__input footer-form__input--tel input-reset"
                id="tel"
                type="tel"
                name="tel"
                placeholder="Телефон"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
