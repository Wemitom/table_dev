const ShortFooter = () => {
  return (
    <footer className="footer footer--personal">
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
                totable.info@gmail.com{' '}
              </a>
              <a className="footer__link" href="tel:79269073553">
                +7 926 907-35-53
              </a>
            </div>
            <ul className="socials socials--personal list-reset">
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
      </div>
    </footer>
  );
};

export default ShortFooter;
