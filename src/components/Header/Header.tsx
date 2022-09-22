import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import useLocalization from '../../hooks/useLocalization';
import { Languages } from '../../store/interfaces';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const { t, lang, setLang } = useLocalization();

  useEffect(() => {
    menuExpanded
      ? document.body.classList.add('dis-scroll')
      : document.body.classList.remove('dis-scroll');

    return () => {
      document.body.classList.remove('dis-scroll');
    };
  }, [menuExpanded]);

  const closeMenu = () => setMenuExpanded(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <Link to="/" className="header__logo logo">
            <img src="/img/logo.svg" alt="logo" width="135" height="59" />
          </Link>
          <SearchBar />
          <button
            className={`burger btn-reset${
              menuExpanded ? ' burger--active' : ''
            }`}
            aria-label="Open menu"
            aria-expanded="false"
            onClick={() => setMenuExpanded(!menuExpanded)}
            data-burger
          >
            <span className="burger__line"></span>
          </button>
          <ul
            className={`menu list-reset${menuExpanded ? ' menu--active' : ''}`}
            data-menu
          >
            <li className="menu__item" data-menu-item onClick={closeMenu}>
              <Link to="/for-partners" className="menu__link">
                {t.partners}
              </Link>
            </li>
            <li className="menu__item" data-menu-item onClick={closeMenu}>
              <Link to="/contacts" className="menu__link">
                {t.contacts}
              </Link>
            </li>
            <li className="menu__item" data-menu-item onClick={closeMenu}>
              <Link to="/login" className="menu__link">
                {t.login}
              </Link>
            </li>
            <li className="menu__item" data-menu-item onClick={closeMenu}>
              <Link to="/signup" className="menu__link">
                {t.signup}
              </Link>
            </li>
            <li
              className="menu__item"
              data-menu-item
              onClick={() =>
                setLang(lang === Languages.ru ? Languages.en : Languages.ru)
              }
            >
              debug
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
