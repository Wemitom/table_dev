import { useEffect, useReducer, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { YMaps, Map, ListBox, ListBoxItem } from '@pbe/react-yandex-maps';
import axios, { AxiosResponse } from 'axios';

import DropdownList from '../DropdownList/DropdownList';
import Placemarks from '../Placemarks/Placemarks';
import {
  ChooseRestarauntAction,
  ChooseRestarauntActionType,
  ChooseRestarauntResult,
  ChooseRestaurantState,
  RestarauntsInfo,
} from './interfaces';
import './ChooseRestaurant.css';

const ChooseRestaurant = () => {
  const initState = {
    area: 'ЦАО',
    street: 'ул. Маросейка',
    cuisine: 'Японская',
  };
  const initStateMap = {
    center: [55.75, 37.57],
    zoom: 9,
  };

  const reducer = (
    state: ChooseRestaurantState,
    action: ChooseRestarauntAction
  ): ChooseRestaurantState => {
    switch (action.type) {
      case 'AREA':
        return {
          area: action.payload,
          street: state.street,
          cuisine: state.cuisine,
        };
      case 'STREET':
        return {
          area: state.area,
          street: action.payload,
          cuisine: state.cuisine,
        };
      case 'CUISINE':
        return {
          area: state.area,
          street: state.street,
          cuisine: action.payload,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initState); // Состояние с параметрами поиска, выбранными юзером
  const [mapState, setMapState] = useState(initStateMap); // Состояние карты (центр и зум)
  const [restarauntsResult, setRestarauntsResult] = useState<
    ChooseRestarauntResult[]
  >([]); // Массив информации о найденных ресторанах
  const [isMapSmaller, setIsMapSmaller] = useState(window.innerWidth > 640); // Надо ли менять высоту/ширину карты
  const [loading, setLoading] = useState(false); // Выполняется ли запрос?

  /* Мемоизируем функцию, т.к. используется в качестве параметра для useEffect.
     На вход - значения, которые пойдут в http запрос; колбек функция.
  */
  const fetch = (
    request: ChooseRestaurantState,
    callback: (result?: AxiosResponse) => void
  ) => {
    axios
      .post(`/api/v1/search_location`, {
        district: request.area,
        limit: 5,
        cuisine: request.cuisine,
      })
      .then(callback);
  };

  // По клику кнопки получаем значения с сервера
  const handleClick = () => {
    setLoading(true);
    fetch(state, (results?: AxiosResponse) => {
      if (results) {
        setRestarauntsResult([...(results.data as RestarauntsInfo).result]);
      }
      setLoading(false);
    });
  };

  const isRerenderNeeded = () => setIsMapSmaller(window.innerWidth > 640);

  useEffect(() => {
    window.addEventListener('resize', isRerenderNeeded);

    return () => {
      window.removeEventListener('resize', isRerenderNeeded);
    };
  }, []);

  return (
    <section className="choose-restaurant">
      <div className="container">
        <h2 className="choose-restaurant__title title">Подобрать ресторан</h2>
        <div className="choose-restaurant__inner">
          <div className="choose-restaurant__map">
            <div>
              <div
                className="load__indicator"
                style={{
                  height: isMapSmaller ? '500px' : '300px',
                  width: isMapSmaller ? '600px' : '360px',
                  background: loading ? 'rgba(0, 0, 0, 0.3)' : undefined,
                  zIndex: loading ? 2 : 0,
                }}
              >
                {loading && (
                  <CircularProgress
                    style={{ color: 'white', position: 'absolute' }}
                  />
                )}
              </div>

              <YMaps query={{ lang: 'ru_RU', mode: 'debug' }}>
                <Map
                  state={mapState}
                  height={isMapSmaller ? '500px' : '300px'}
                  width={isMapSmaller ? '600px' : '360px'}
                >
                  <ListBox
                    data={{
                      content: restarauntsResult.length
                        ? 'Рестораны'
                        : 'Выберите параметры',
                    }}
                  >
                    {restarauntsResult.map((result, index) => (
                      <ListBoxItem
                        key={`lst_itm${index}`}
                        data={{ content: result.name }}
                        options={{ selectOnClick: false }}
                        onClick={() =>
                          setMapState({
                            center: [
                              +result.location_long,
                              +result.location_lat,
                            ],
                            zoom: 17,
                          })
                        }
                      />
                    ))}
                  </ListBox>
                  <Placemarks restarauntsResult={restarauntsResult} />
                </Map>
              </YMaps>
            </div>
          </div>
          <div className="choose-restaurant__box">
            <div className="choose-restaurant__form">
              <div className="form-group">
                <p className="form-group__text">Район</p>
                <DropdownList
                  value={state.area}
                  setValue={(value) =>
                    dispatch({
                      type: ChooseRestarauntActionType.Area,
                      payload: value,
                    })
                  }
                  options={['басманный', 'замоскворечье', 'Арбат']}
                />
              </div>
              <div className="form-group">
                <p className="form-group__text">Улица</p>
                <DropdownList
                  value={state.street}
                  setValue={(value) =>
                    dispatch({
                      type: ChooseRestarauntActionType.Street,
                      payload: value,
                    })
                  }
                  options={[
                    'ул. Маросейка',
                    'Новая',
                    'Покровский б-р',
                    'ул. Ильинка',
                  ]}
                />
              </div>
              <div className="form-group">
                <p className="form-group__text">Кухня</p>
                <DropdownList
                  value={state.cuisine}
                  setValue={(value) =>
                    dispatch({
                      type: ChooseRestarauntActionType.Cuisine,
                      payload: value,
                    })
                  }
                  options={[
                    'Японская',
                    'Итальянская',
                    'Средиземноморская',
                    'Французская',
                  ]}
                />
              </div>
            </div>
            <button
              className="btn-reset main-btn"
              onClick={() => {
                setMapState(initStateMap);
                handleClick();
              }}
            >
              Найти
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseRestaurant;
