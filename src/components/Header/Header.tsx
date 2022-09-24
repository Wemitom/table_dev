import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import useLocalization from '../../hooks/useLocalization';
import { logout } from '../../store/authSlice';
import { Languages } from '../../store/interfaces';
import { RootState } from '../../store/store';
import Notifications from '../Notifications/Notifications';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const { t, lang, setLang } = useLocalization();
  const location = useLocation();

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
          {location.pathname === '/' && <SearchBar />}
          {user && <Notifications />}
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
            {!user ? (
              <>
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
              </>
            ) : (
              <>
                {location.pathname !== '/profile' ? (
                  <li className="menu__item" data-menu-item onClick={closeMenu}>
                    <Link to="/profile" className="menu__link">
                      {t.profile}
                    </Link>
                  </li>
                ) : (
                  <li className="menu__item" data-menu-item onClick={closeMenu}>
                    <Link to="/profile/favorites" className="menu__link">
                      {t.favorites}
                    </Link>
                  </li>
                )}
                <li
                  className="menu__item"
                  data-menu-item
                  onClick={() => {
                    closeMenu();
                    dispatch(logout());
                  }}
                >
                  <span className="menu__link" style={{ cursor: 'pointer' }}>
                    {t.logout}
                  </span>
                </li>
              </>
            )}

            <li
              className="menu__item"
              data-menu-item
              style={{ cursor: 'pointer' }}
              onClick={() =>
                setLang(lang === Languages.ru ? Languages.en : Languages.ru)
              }
            >
              lang
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
