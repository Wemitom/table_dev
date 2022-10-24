import { useLocation, useParams } from 'react-router-dom';

import CancelationReasons from '../CancelationReasons';

const ReservationStatus = () => {
  const { name } = useParams();
  const { state } = useLocation();

  return (
    <section className="booking-status">
      <div className="container">
        <div className="booking-status__wrapper">
          <div className="booking-status__inner">
            <div className="booking-status__content">
              <p className="booking-status__successful booking-status__successful--cancel">
                {state.status === 'success'
                  ? `Вы успешно забронировали стол в ресторане ${name || ''}`
                  : `Вы успешно отменили бронирование стола в ресторане ${
                      name || ''
                    }`}
              </p>
              <div className="booking-status__info">
                <p>Стол № {state.numTable}</p>
                <p>
                  {state.date} {new Date().getFullYear()}
                </p>
                <p>{state.time}</p>
              </div>
            </div>
            <img
              className="booking-status__logo"
              src="/img/tottori-logo.png"
              alt="tottori"
              width="180"
              height="180"
            />
          </div>
          {state.status === 'canceled' ? (
            <div className="booking-status__btns">
              <button
                className="booking-status__btn btn-reset main-btn"
                type="button"
              >
                Забронировать
              </button>
              <button
                className="booking-status__btn btn-reset main-btn"
                type="button"
              >
                К списку ресторанов
              </button>
            </div>
          ) : (
            <button
              className="booking-status__btn btn-reset main-btn"
              type="button"
            >
              Отменить бронь
            </button>
          )}
        </div>
        {state.status === 'canceled' && <CancelationReasons />}
      </div>
    </section>
  );
};

export default ReservationStatus;
