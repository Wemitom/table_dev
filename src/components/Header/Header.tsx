import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  useEffect(() => {
    menuExpanded
      ? document.body.classList.add('dis-scroll')
      : document.body.classList.remove('dis-scroll');
  }, [menuExpanded]);

  const closeMenu = () => setMenuExpanded(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <Link to="/" className="header__logo logo">
            <img
              src="/img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </Link>
          <SearchBar />
          <button
            className={`burger btn-reset${
              menuExpanded ? ' burger--active' : ''
            }`}
            aria-label="Открыть меню"
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
                для партнеров
              </Link>
            </li>
            <li className="menu__item" data-menu-item onClick={closeMenu}>
              <Link to="/contacts" className="menu__link">
                Контакты
              </Link>
            </li>
            <li className="menu__item" data-menu-item onClick={closeMenu}>
              <Link to="/login" className="menu__link">
                войти
              </Link>
            </li>
            <li className="menu__item" data-menu-item onClick={closeMenu}>
              <Link to="/signup" className="menu__link">
                зарегистрироваться
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
