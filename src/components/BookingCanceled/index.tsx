import CancelationReasons from '../CancelationReasons';

const BookingCanceled = () => {
  return (
    <section className="booking-status">
      <div className="container">
        <div className="booking-status__wrapper">
          <div className="booking-status__inner">
            <div className="booking-status__content">
              <p className="booking-status__successful booking-status__successful--cancel">
                Вы успешно отменили бронирование стола в ресторане Tottori
              </p>
              <div className="booking-status__info">
                <p>Стол № 2</p>
                <p>14 апреля 2022</p>
                <p>19:00 — 21:00</p>
              </div>
            </div>
            <img
              className="booking-status__logo"
              src="img/tottori-logo.png"
              alt="tottori"
              width="180"
              height="180"
            />
          </div>
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
        </div>
        <CancelationReasons />
      </div>
    </section>
  );
};

export default BookingCanceled;
