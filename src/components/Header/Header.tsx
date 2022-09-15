import { throttle } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios, { AxiosResponse } from 'axios';
import { SearchData } from './interfaces';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = useMemo(
    () =>
      throttle(
        (request: SearchData, callback: (result?: AxiosResponse) => void) => {
          axios
            .get(`https://9e2e80b2-4903-4347-b057-95b2b86e9283.mock.pstmn.io`)
            .then(callback);
        },
        200
      ),
    []
  );

  useEffect(() => {
    let active = true;

    if (searchQuery === '') {
      setAutoCompleteOptions([]);
      return undefined;
    }

    setLoading(true);
    fetch(
      { input: searchQuery, returnCount: 10 },
      (results?: AxiosResponse) => {
        if (active) {
          if (results) {
            setAutoCompleteOptions([...(results.data as string[])]);
          }
          setLoading(false);
        }
      }
    );
  }, [searchQuery, fetch]);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <Link to="/" className="header__logo logo">
            <img
              src="../img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </Link>
          <SearchBar
            value={searchQuery}
            setValue={(value) => setSearchQuery(value)}
            autoCompleteOptions={autoCompleteOptions}
            loading={loading}
          />
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
            <li className="menu__item" data-menu-item>
              <Link to="/for-partners" className="menu__link">
                для партнеров
              </Link>
            </li>
            <li className="menu__item" data-menu-item>
              <Link to="/contacts" className="menu__link">
                Контакты
              </Link>
            </li>
            <li className="menu__item" data-menu-item>
              <Link to="/auth/login" className="menu__link">
                войти
              </Link>
            </li>
            <li className="menu__item" data-menu-item>
              <Link to="/auth/signup" className="menu__link">
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
