import { useEffect, useMemo, useRef, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import { throttle } from 'lodash';
import { useNavigate } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import useLocalization from '../../hooks/useLocalization';
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
  const { t } = useLocalization();
  const navigate = useNavigate();

  const fetch = useMemo(
    () =>
      throttle(
        (request: SearchData, callback: (result?: AxiosResponse) => void) => {
          axios.post(`/api/v1/search/search_by_name`, request).then(callback);
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

  useEffect(() => {
    if (autoCompleteOptions.length) {
      setOptionsExpanded(true);
    } else {
      setOptionsExpanded(false);
    }
  }, [autoCompleteOptions]);

  useOutsideClickDetect(wrapper, () => setOptionsExpanded(false));

  return (
    <form
      className="header__search"
      onSubmit={() => navigate(`restaurant/${searchQuery}`)}
    >
      <button className="header__btn btn-reset">
        <span className="visually-hidden">{t.searchButton}</span>
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
          placeholder={t.searchBarPlaceholder}
          autoComplete="off"
          value={searchQuery}
          onFocus={() => {
            if (autoCompleteOptions.length && searchQuery !== '') {
              setOptionsExpanded(true);
            }
          }}
          onChange={(e) => {
            if (autoCompleteOptions.length) {
              setOptionsExpanded(true);
            } else {
              setOptionsExpanded(false);
            }
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
              {autoCompleteOptions.map((option, index) => (
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
              ))}
            </SimpleBar>
          </ul>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
