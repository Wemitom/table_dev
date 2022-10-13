import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useLocalization from '../../hooks/useLocalization';
import { setVersion } from '../../store/versionSlice';

const Footer = () => {
  const { t } = useLocalization();
  const dispatcher = useDispatch();

  return (
    <footer className="footer">
      <section className="section-access">
        <div className="section-access__inner">
          <div
            className="section-access__link"
            style={{ backgroundImage: 'url(/img/access-img/img1.jpg)' }}
            onClick={() => dispatcher(setVersion('forPartners'))}
          >
            <p className="section-access__text title">{t.partners}</p>
          </div>
          <div
            className="section-access__link"
            style={{ backgroundImage: 'url(/img/access-img/img2.jpg)' }}
            onClick={() => dispatcher(setVersion('forClients'))}
          >
            <p className="section-access__text title">{t.clients}</p>
          </div>
        </div>
      </section>
      <div className="footer__inner">
        <div className="footer__info">
          <div className="footer__container">
            <Link to="/" className="logo footer__logo">
              <img src="/img/logo.svg" alt="logo" width="135" height="59" />
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
            <p className="footer__text">{t.learnMore}</p>
            <form className="footer-form" action="#">
              <label className="visually-hidden" htmlFor="name">
                {t.name}
              </label>
              <input
                className="footer-form__input input-reset"
                id="name"
                type="text"
                name="name"
                placeholder={t.name}
                required
              />
              <label className="visually-hidden" htmlFor="tel">
                {t.phoneNum}
              </label>
              <input
                className="footer-form__input footer-form__input--tel input-reset"
                id="tel"
                type="tel"
                name="tel"
                placeholder={t.phoneNum}
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
