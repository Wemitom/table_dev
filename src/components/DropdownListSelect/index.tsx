import { useRef, useState } from 'react';

import SimpleBar from 'simplebar-react';

import useOutsideClickDetect from '../../hooks/useOutsideClickDetect';
import { option } from '../ChooseRestaurant/interfaces';

const DropdownListSelect = ({
  values,
  placeholder,
  setValues,
  options,
}: {
  values: option;
  placeholder: string;
  setValues: (values: option) => void;
  options: option[];
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
        {(values.label as string[]).length
          ? (values.label as string[]).join(', ')
          : placeholder}
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
              data-value="travel"
              onClick={() => {
                if (
                  !(values.value as string[]).includes(option.value as string)
                ) {
                  setValues({
                    label: [
                      ...(values.label as string[]),
                      option.label as string,
                    ],
                    value: [
                      ...(values.value as string[]),
                      option.value as string,
                    ],
                  });
                } else {
                  setValues({
                    label: (values.label as string[]).filter(
                      (val) => val !== option.label
                    ),
                    value: (values.value as string[]).filter(
                      (val) => val !== option.value
                    ),
                  });
                }
              }}
              style={{
                background: (values.value as string[]).includes(
                  option.value as string
                )
                  ? 'grey'
                  : undefined,
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

export default DropdownListSelect;
