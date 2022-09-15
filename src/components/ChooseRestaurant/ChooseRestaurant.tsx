import { useReducer } from 'react';
import DropdownList from '../DropdownList/DropdownList';
import {
  ChooseRestarauntAction,
  ChooseRestarauntActionType,
  ChooseRestaurantState,
} from './interfaces';

const ChooseRestaurant = () => {
  const initState = {
    area: 'ЦАО',
    street: 'ул. Маросейка',
    cousine: 'Японская',
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

  return (
    <section className="choose-restaurant">
      <div className="container">
        <h2 className="choose-restaurant__title title">Подобрать ресторан</h2>
        <div className="choose-restaurant__inner">
          <div className="choose-restaurant__map">
            <img src="img/map.jpg" alt="Карта" />
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
                    'Японская',
                    'Итальянская',
                    'Средиземноморская',
                    'Французская',
                    'Японская',
                    'Итальянская',
                    'Средиземноморская',
                    'Французская',
                  ]}
                />
              </div>
            </div>
            <button className="btn-reset main-btn" type="submit">
              найти
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseRestaurant;
