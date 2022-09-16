import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="section-access">
        <div className="section-access__inner">
          <Link
            to="/for-partners"
            className="section-access__link"
            style={{ backgroundImage: 'url(img/access-img/img1.jpg)' }}
          >
            <p className="section-access__text title">Для партнеров</p>
          </Link>
          <Link
            to="/for-clients"
            className="section-access__link"
            style={{ backgroundImage: 'url(img/access-img/img2.jpg)' }}
          >
            <p className="section-access__text title">Для пользователей</p>
          </Link>
        </div>
      </section>
      <div className="footer__inner">
        <div className="footer__info">
          <div className="footer__container">
            <Link to="/" className="logo footer__logo">
              <img
                src="img/logo.svg"
                alt="Логотип ресторана"
                width="135"
                height="59"
              />
            </Link>
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
                <Link to="#" className="socials__link socials__link--vk">
                  <span className="visually-hidden">ВК</span>
                </Link>
              </li>
              <li className="socials__item">
                <Link to="#" className="socials__link socials__link--telegram">
                  <span className="visually-hidden">Телеграм</span>
                </Link>
              </li>
              <li className="socials__item">
                <Link to="#" className="socials__link socials__link--od">
                  <span className="visually-hidden">Одноклассники</span>
                </Link>
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
