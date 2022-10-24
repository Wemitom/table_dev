import { useRef } from 'react';

import SimpleBar from 'simplebar-react';

import useOutsideClickDetect from '../../hooks/useOutsideClickDetect';

const TimeMenu = ({
  menuCoords,
  showTime,
  onClose,
}: {
  menuCoords: { x: number; y: number };
  showTime: boolean;
  onClose: () => void;
}) => {
  const wrapper = useRef(null);
  useOutsideClickDetect(wrapper, () => onClose());

  return (
    <div
      className={`table-time ${showTime ? 'table-time--active' : ''}`}
      style={{
        top: menuCoords.y,
        left: menuCoords.x,
      }}
      ref={wrapper}
    >
      <button
        className="table-time__close btn-reset"
        onClick={() => onClose()}
      ></button>
      <ul className="table-time__list list-reset" data-simplebar>
        <SimpleBar style={{ height: '100%' }}>
          <li className="table-time__item">
            11:00 — 12:00
            <div className="table-time__circle"></div>
          </li>
          <li className="table-time__item">
            12:00 — 13:00
            <div className="table-time__circle table-time__circle--free"></div>
          </li>
          <li className="table-time__item">
            14:00 — 15:00
            <div className="table-time__circle"></div>
          </li>
          <li className="table-time__item">
            16:00 — 17:00
            <div className="table-time__circle table-time__circle--engaged"></div>
          </li>
        </SimpleBar>
      </ul>
    </div>
  );
};

export default TimeMenu;
