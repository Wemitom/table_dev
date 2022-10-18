import { useRef, useState } from 'react';

import SimpleBar from 'simplebar-react';

import useOutsideClickDetect from '../../hooks/useOutsideClickDetect';

const DropdownList = ({
  value,
  setValue,
  options,
}: {
  value: string;
  setValue: (value: string) => void;
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
        {value}
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
                setValue(option);
                setExpanded(false);
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

export default DropdownList;
