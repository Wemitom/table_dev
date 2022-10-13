import { useEffect, useReducer, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import {
  YMaps,
  Map,
  ListBox,
  ListBoxItem,
  ZoomControl,
} from '@pbe/react-yandex-maps';
import axios, { AxiosResponse } from 'axios';

import useLocalization from '../../hooks/useLocalization';
import { Languages } from '../../store/interfaces';
import DropdownList from '../DropdownList/DropdownList';
import DropdownListSelect from '../DropdownListSelect/DropdownListSelect';
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
    cuisine: [],
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
          area: action.payload as string,
          street: state.street,
          cuisine: state.cuisine,
        };
      case 'STREET':
        return {
          area: state.area,
          street: action.payload as string,
          cuisine: state.cuisine,
        };
      case 'CUISINE':
        return {
          area: state.area,
          street: state.street,
          cuisine: action.payload as string[],
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
  const { t, lang } = useLocalization();

  /* 
     На вход - значения, которые пойдут в http запрос; колбек функция.
  */
  const fetch = (
    request: ChooseRestaurantState,
    callback: (result?: AxiosResponse) => void
  ) => {
    axios
      .post(`/api/v1/search/search_location`, {
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
        <h2 className="choose-restaurant__title title">{t.findRestaurant}</h2>
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

              <YMaps
                key={lang}
                query={{
                  lang: lang === Languages.ru ? 'ru_RU' : 'en_US',
                  mode: 'debug',
                }}
              >
                <Map
                  state={mapState}
                  height={isMapSmaller ? '500px' : '300px'}
                  width={isMapSmaller ? '600px' : '360px'}
                >
                  <ZoomControl />
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
                <p className="form-group__text">{t.district}</p>
                <DropdownList
                  value={state.area}
                  setValue={(value) =>
                    dispatch({
                      type: ChooseRestarauntActionType.Area,
                      payload: value,
                    })
                  }
                  options={[
                    'басманный',
                    'замоскворечье',
                    'Арбат',
                    'khamov',
                    'taganka',
                    'tver',
                  ]}
                />
              </div>
              <div className="form-group">
                <p className="form-group__text">{t.street}</p>
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
                <p className="form-group__text">{t.cuisine}</p>
                <DropdownListSelect
                  values={state.cuisine}
                  placeholder={t.chooseCuisine}
                  setValues={(values) =>
                    dispatch({
                      type: ChooseRestarauntActionType.Cuisine,
                      payload: values,
                    })
                  }
                  options={[
                    'Японская',
                    'Итальянская',
                    'Средиземноморская',
                    'Французская',
                    'mix',
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
              {t.find}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseRestaurant;
