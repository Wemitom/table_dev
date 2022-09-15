import { throttle } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios, { AxiosResponse } from 'axios';
import { SearchData } from './interfaces';

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
    if (searchQuery === '') {
      setAutoCompleteOptions([]);
      return undefined;
    }

    setLoading(true);
    fetch(
      { input: searchQuery, returnCount: 10 },
      (results?: AxiosResponse) => {
        if (results) {
          setAutoCompleteOptions([...(results.data as string[])]);
        }
        setLoading(false);
      }
    );
  }, [searchQuery, fetch]);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <a className="header__logo logo" href="#">
            <img
              src="../img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </a>
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
              <a className="menu__link" href="#">
                для партнеров
              </a>
            </li>
            <li className="menu__item" data-menu-item>
              <a className="menu__link" href="#">
                Контакты
              </a>
            </li>
            <li className="menu__item" data-menu-item>
              <a className="menu__link" href="#">
                войти
              </a>
            </li>
            <li className="menu__item" data-menu-item>
              <a className="menu__link" href="#">
                зарегистрироваться
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
