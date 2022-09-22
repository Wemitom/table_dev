import { useRef, useState } from 'react';

import SimpleBar from 'simplebar-react';

import useOutsideClickDetect from '../../hooks/useOutsideClickDetect';

const DropdownListSelect = ({
  values,
  placeholder,
  setValues,
  options,
}: {
  values: string[];
  placeholder: string;
  setValues: (values: string[]) => void;
  options: string[];
}) => {
  const [expanded, setExpanded] = useState(false);
  const wrapper = useRef(null);
  useOutsideClickDetect(wrapper, () => setExpanded(false));

  return (
    <div ref={wrapper} className="dropdown">
      <button
        className={`dropdown__button${
          expanded ? ' dropdown__button--active' : ''
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {values.length ? values.join(', ') : placeholder}
      </button>
      <ul
        className={`dropdown__list list-reset${
          expanded ? ' dropdown__list--visible' : ''
        }`}
        data-simplebar
      >
        <SimpleBar
          style={{
            height: '100%',
          }}
          autoHide
        >
          {options.map((option) => (
            <li
              key={option}
              className="dropdown__list-item"
              data-value="travel"
              onClick={() => {
                if (!values.includes(option)) {
                  setValues([...values, option]);
                } else {
                  setValues([...values.filter((value) => value !== option)]);
                }
              }}
              style={{
                background: values.includes(option) ? 'grey' : undefined,
              }}
            >
              {option}
            </li>
          ))}
        </SimpleBar>
      </ul>
      <input
        type="text"
        name="select-category"
        className="dropdown__input-hidden"
      />
    </div>
  );
};

export default DropdownListSelect;
