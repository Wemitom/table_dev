import { useReducer, useState } from 'react';

import * as d3 from 'd3';
import { D3ZoomEvent, svg } from 'd3';
import { useNavigate } from 'react-router-dom';

import {
  MOBILE_BREAKPOINT,
  SCHEME_HEIGHT,
  SCHEME_WIDTH,
  TIME_MENU_HEIGHT,
  TIME_MENU_HEIGHT_MOBILE,
  TIME_MENU_WIDTH,
  TIME_MENU_WIDTH_MOBILE,
} from '../../services/constants';
import {
  useGetTablesInfoQuery,
  useLazyReservateTableQuery,
} from '../../store/api/reservateTableApi';
import DropdownList from '../DropdownList';
import TimeMenu from '../TimeMenu';
import {
  HallLayout,
  HallSchemeState,
  HallSchemeStateAction,
  HallSchemeStateActionType,
} from './interfaces';

const HallScheme = ({ hallLayout }: { hallLayout: HallLayout }) => {
  const initState: HallSchemeState = {
    date: { label: '12 апреля', value: '12-04-2022' },
    time: { label: '11:00-12:00', value: '11:00-12:00' },
    numGuests: { label: null, value: null },
    lenStay: { label: null, value: null },
  };
  const reducer = (
    state: HallSchemeState,
    action: HallSchemeStateAction
  ): HallSchemeState => {
    switch (action.type) {
      case 'DATE':
        return {
          date: action.payload,
          time: state.time,
          numGuests: state.numGuests,
          lenStay: state.lenStay,
        };
      case 'TIME':
        return {
          date: state.date,
          time: action.payload,
          numGuests: state.numGuests,
          lenStay: state.lenStay,
        };
      case 'NUM_GUESTS':
        return {
          date: state.date,
          time: state.time,
          numGuests: action.payload,
          lenStay: state.lenStay,
        };
      case 'LEN_STAY':
        return {
          date: state.date,
          time: state.time,
          numGuests: state.numGuests,
          lenStay: action.payload,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const [showTime, setShowTime] = useState(false);
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  const [chosenTable, setChosenTable] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //const { data } = useGetTablesInfoQuery(state);
  //const [bookTable, { error, isSuccess }] = useLazyBookTableQuery();

  const tables = d3.selectAll('.table');
  const labels = d3.selectAll('.scheme__label');
  const svgNode = d3.select('.reservation-table__hall');

  const handleZoom = (e: D3ZoomEvent<SVGAElement, unknown>) => {
    setShowTime(false);
    tables.attr('transform', e.transform.toString());
    labels.attr('transform', e.transform.toString());
  };
  const zoom = d3
    .zoom()
    .extent([
      [0, 0],
      [SCHEME_WIDTH, SCHEME_HEIGHT],
    ])
    .scaleExtent([1, 5])
    .translateExtent([
      [0, 0],
      [SCHEME_WIDTH, SCHEME_HEIGHT],
    ])
    .on('zoom', handleZoom) as any;
  svgNode.call(zoom);

  return (
    <section className="reservation-table reservation-table--partners">
      <div className="container">
        <p className="reservation-table__text">Схема зала</p>
        <div className="reservation-table__box">
          <div className="reservation-table__form">
            <div className="form-group form-group--date">
              <DropdownList
                options={[
                  { label: '12 апреля', value: '12-04-2022' },
                  { label: '13 апреля', value: '13-04-2022' },
                  { label: '14 апреля', value: '14-04-2022' },
                  { label: '15 апреля', value: '15-04-2022' },
                ]}
                value={state.date}
                setValue={(value) =>
                  dispatch({
                    payload: value,
                    type: HallSchemeStateActionType.Date,
                  })
                }
              />
            </div>
            <div className="form-group form-group--time">
              <DropdownList
                options={[
                  { label: '11:00-12:00', value: '11:00-12:00' },
                  { label: '12:00-13:00', value: '12:00-13:00' },
                  { label: '13:00-14:00', value: '13:00-14:00' },
                  { label: '14:00-15:00', value: '14:00-15:00' },
                ]}
                value={state.time}
                setValue={(value) =>
                  dispatch({
                    payload: value,
                    type: HallSchemeStateActionType.Time,
                  })
                }
              />
            </div>
            <div className="form-group form-group--quantity">
              <DropdownList
                options={[
                  { label: '1', value: 1 },
                  { label: '2', value: 2 },
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                ]}
                value={state.numGuests}
                setValue={(value) =>
                  dispatch({
                    payload: value,
                    type: HallSchemeStateActionType.NumGuests,
                  })
                }
                placeholder="Кол-во гостей"
              />
            </div>
            <div className="form-group form-group--len">
              <DropdownList
                options={[
                  { label: '30 мин.', value: '30min' },
                  { label: '1 час', value: '1hour' },
                  { label: '1.5 часов', value: '1.5hours' },
                  { label: '2 часа', value: '2hours' },
                ]}
                value={state.lenStay}
                setValue={(value) =>
                  dispatch({
                    payload: value,
                    type: HallSchemeStateActionType.LenStay,
                  })
                }
                placeholder="Продол. пребывания"
              />
            </div>
          </div>
          <div className="reservation-table__zoom">
            <button
              className="reservation-table__btn btn-reset reservation-table__btn--plus"
              onClick={() => svgNode.transition().call(zoom.scaleBy, 1.5)}
            >
              <span className="visually-hidden">приблизить</span>
            </button>
            <button
              className="reservation-table__btn btn-reset reservation-table__btn--minus"
              onClick={() => svgNode.transition().call(zoom.scaleBy, 0.67)}
            >
              <span className="visually-hidden">отдалить</span>
            </button>
          </div>
          <div className="reservation-table__scheme">
            <svg
              className="reservation-table__hall"
              width="1200"
              height="630"
              viewBox={`0 0 ${SCHEME_WIDTH} ${SCHEME_HEIGHT}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {hallLayout.tables.map((table, index) => (
                <g
                  key={`table_${index}`}
                  id={`table__${index}`}
                  className="table free-table"
                  onClick={(e) => {
                    setShowTime(true);
                    setChosenTable(index);
                    const {
                      width: maxWidth,
                      height: maxHeight,
                      left,
                      top,
                    } = e.currentTarget.parentElement!.getBoundingClientRect();
                    let xCoord = e.clientX - left,
                      yCoord = e.clientY - top;

                    const menuWidth =
                        window.innerWidth > MOBILE_BREAKPOINT
                          ? TIME_MENU_WIDTH
                          : TIME_MENU_WIDTH_MOBILE,
                      menuHeight =
                        window.innerWidth > MOBILE_BREAKPOINT
                          ? TIME_MENU_HEIGHT
                          : TIME_MENU_HEIGHT_MOBILE;
                    console.log(menuWidth);
                    xCoord += xCoord + menuWidth > maxWidth ? -menuWidth : 0;
                    yCoord += yCoord + menuHeight > maxHeight ? -menuHeight : 0;
                    setMenuCoords({
                      x: xCoord,
                      y: yCoord,
                    });
                  }}
                >
                  {table.map((svg, i) => {
                    if (svg.type === 'ellipse') {
                      return (
                        <ellipse
                          key={`chair_${i}`}
                          cx={svg.cx}
                          cy={svg.cy}
                          rx={svg.rx}
                          ry={svg.ry}
                          transform={svg?.transform}
                        />
                      );
                    } else {
                      return (
                        <rect
                          key={`t_${i}`}
                          x={svg.x}
                          y={svg.y}
                          width={svg.width}
                          height={svg.height}
                          rx={svg.rx}
                          transform={svg?.transform}
                        />
                      );
                    }
                  })}
                </g>
              ))}
              <g>
                {hallLayout.labels.map((label, index) => (
                  <path
                    key={`label_${index}`}
                    className="scheme__label"
                    d={label}
                    fill="white"
                  />
                ))}
              </g>
            </svg>
            {showTime && (
              <TimeMenu
                menuCoords={menuCoords}
                showTime={showTime}
                onClose={() => setShowTime(false)}
              />
            )}
          </div>
        </div>
        {chosenTable !== null &&
          (chosenTable ? (
            <p style={{ textAlign: 'center' }}>Выбран стол №{chosenTable}</p>
          ) : (
            <p style={{ textAlign: 'center' }}>Выбрана барная стойка</p>
          ))}
        <button
          className={`reservation-table__reserv btn-reset main-btn${
            isLoading ? '--disabled' : ''
          }`}
          type="button"
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              navigate('reservation-status', {
                state: {
                  status: 'success',
                  numTable: chosenTable,
                  date: state.date.label,
                  time: state.time.label,
                },
              });
            }, 500);
          }}
        >
          Забронировать
        </button>
      </div>
    </section>
  );
};

export default HallScheme;
