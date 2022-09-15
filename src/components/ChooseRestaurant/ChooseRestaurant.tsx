import { useMemo, useReducer, useState } from 'react';
import DropdownList from '../DropdownList/DropdownList';
import {
  ChooseRestarauntAction,
  ChooseRestarauntActionType,
  ChooseRestaurantState,
  MapAction,
  MapState,
  RestarauntInfo,
} from './interfaces';
import { YMaps, Map, ListBox, ListBoxItem } from '@pbe/react-yandex-maps';
import Placemarks from '../Placemarks/Placemarks';
import axios, { AxiosResponse } from 'axios';

const ChooseRestaurant = () => {
  const initState = {
    area: 'ЦАО',
    street: 'ул. Маросейка',
    cousine: 'Японская',
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
          cousine: state.cousine,
        };
      case 'STREET':
        return {
          area: state.area,
          street: action.payload,
          cousine: state.cousine,
        };
      case 'COUSINE':
        return {
          area: state.area,
          street: state.street,
          cousine: action.payload,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const [mapState, setMapState] = useState(initStateMap);
  const [restarauntInfo, setRestarauntInfo] = useState<RestarauntInfo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = useMemo(
    () =>
      (
        request: ChooseRestaurantState,
        callback: (result?: AxiosResponse) => void
      ) => {
        axios
          .get(`https://065006f9-c741-4430-bf2b-657758fe0973.mock.pstmn.io`)
          .then(callback);
      },
    []
  );

  const handleClick = () => {
    setLoading(true);
    fetch(state, (results?: AxiosResponse) => {
      if (results) {
        setRestarauntInfo([...(results.data as RestarauntInfo[])]);
      }
      setLoading(false);
    });
  };

  return (
    <section className="choose-restaurant">
      <div className="container">
        <h2 className="choose-restaurant__title title">Подобрать ресторан</h2>
        <div className="choose-restaurant__inner">
          <div className="choose-restaurant__map">
            <span>
              <YMaps query={{ lang: 'ru_UA', mode: 'debug' }}>
                <Map
                  state={mapState}
                  height={window.innerWidth > 640 ? '500px' : '300px'}
                  width={window.innerWidth > 640 ? '600px' : '360px'}
                >
                  <ListBox
                    data={{
                      content: restarauntInfo.length
                        ? 'Рестораны'
                        : 'Выберите параметры',
                    }}
                  >
                    {restarauntInfo.map((info) => (
                      <ListBoxItem
                        data={{ content: info.name }}
                        options={{ selectOnClick: false }}
                        onClick={() =>
                          setMapState({ center: info.coords, zoom: 17 })
                        }
                      />
                    ))}
                  </ListBox>
                  <Placemarks restarauntInfo={restarauntInfo} />
                </Map>
              </YMaps>
            </span>
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
                  value={state.cousine}
                  setValue={(value) =>
                    dispatch({
                      type: ChooseRestarauntActionType.Cousine,
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
