import { useEffect, useMemo, useRef, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import { throttle } from 'lodash';
import SimpleBar from 'simplebar-react';

import useOutsideClickDetect from '../../hooks/useOutsideClickDetect';
import {
  AutoCompleteOption,
  SearchData,
  SearchResponse,
} from '../Header/interfaces';

const SearchBar = () => {
  const [optionsExpanded, setOptionsExpanded] = useState(false);
  const wrapper = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    AutoCompleteOption[]
  >([]);
  const [loading, setLoading] = useState(false);

  const fetch = useMemo(
    () =>
      throttle(
        (request: SearchData, callback: (result?: AxiosResponse) => void) => {
          axios.post(`/api/v1/search_by_name`, request).then(callback);
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
    fetch({ search: searchQuery, limit: 10 }, (results?: AxiosResponse) => {
      if (active) {
        if (results) {
          setAutoCompleteOptions([...(results.data as SearchResponse).result]);
        }
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [searchQuery, fetch]);

  useOutsideClickDetect(wrapper, () => setOptionsExpanded(false));

  return (
    <form className="header__search" action="#">
      <button className="header__btn btn-reset">
        <span className="visually-hidden">иконка поиска</span>
      </button>
      <label className="visually-hidden" htmlFor="search">
        Поиск по сайту
      </label>
      <div ref={wrapper}>
        <input
          className="header__input input-reset"
          id="search"
          type="search"
          name="search"
          placeholder="Введите название"
          autoComplete="off"
          value={searchQuery}
          onFocus={() => setOptionsExpanded(true)}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          required
        />
        {optionsExpanded && (
          <ul
            className={`dropdown__list list-reset${
              optionsExpanded ? ' dropdown__list--visible' : ''
            }`}
            style={{
              maxWidth: '260px',
              left: 'unset',
              top: 'unset',
            }}
            data-simplebar
          >
            <SimpleBar
              style={{
                height: '100%',
              }}
              autoHide
            >
              {autoCompleteOptions.length ? (
                autoCompleteOptions.map((option, index) => (
                  <li
                    key={`option.name_${index}`}
                    className="dropdown__list-item"
                    onClick={() => {
                      setSearchQuery(option.name);
                      setOptionsExpanded(false);
                    }}
                  >
                    {option.name}
                  </li>
                ))
              ) : (
                <li className="dropdown__list-item">Ничего не найдено</li>
              )}
            </SimpleBar>
          </ul>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
