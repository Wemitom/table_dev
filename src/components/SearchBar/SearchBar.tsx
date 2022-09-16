import { useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import useOutsideClickDetect from '../../hooks/useOutsideClickDetect';

const SearchBar = ({
  value,
  setValue,
  autoCompleteOptions,
  loading,
}: {
  value: string;
  setValue: (value: string) => void;
  autoCompleteOptions: string[];
  loading: boolean;
}) => {
  const [optionsExpanded, setOptionsExpanded] = useState(false);
  const wrapper = useRef(null);

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
          value={value}
          onFocus={() => setOptionsExpanded(true)}
          onChange={(e) => setValue(e.target.value)}
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
              {!loading ? (
                autoCompleteOptions.length ? (
                  autoCompleteOptions.map((option) => (
                    <li
                      key={option}
                      className="dropdown__list-item"
                      onClick={() => {
                        setValue(option);
                        setOptionsExpanded(false);
                      }}
                    >
                      {option}
                    </li>
                  ))
                ) : (
                  <li className="dropdown__list-item">Ничего не найдено</li>
                )
              ) : (
                <li className="dropdown__list-item">Загрузка...</li>
              )}
            </SimpleBar>
          </ul>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
