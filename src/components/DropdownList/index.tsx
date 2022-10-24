import { useRef, useState } from 'react';

import SimpleBar from 'simplebar-react';

import useOutsideClickDetect from '../../hooks/useOutsideClickDetect';
import { option } from '../ChooseRestaurant/interfaces';

const DropdownList = ({
  value,
  setValue,
  options,
  placeholder,
}: {
  value: option;
  setValue: (value: option) => void;
  options: option[];
  placeholder?: string;
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
        {value.label || placeholder}
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
              key={option.value!.toString()}
              className="dropdown__list-item"
              onClick={() => {
                setValue(option);
                setExpanded(false);
              }}
            >
              {option.label}
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
