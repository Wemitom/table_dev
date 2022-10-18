import useMonth from '../../hooks/useMonth';
import { ReservationInfo } from './interface';

const Reservation = ({
  img,
  name,
  date,
  type,
  inFavorites,
}: ReservationInfo) => {
  const month = useMonth(date.getMonth());

  return (
    <li className="status-reservations__item">
      <article className="reservation-restaurant">
        <div className="reservation-restaurant__inner">
          <img
            className="reservation-restaurant__img"
            src={img}
            alt="restaurant_logo"
            width="180"
            height="180"
          />
          <div className="reservation-restaurant__info">
            <h3 className="reservation-restaurant__name">
              <a href="#">{name}</a>
              <button className="reservation-restaurant__like btn-reset"></button>
            </h3>
            <div className="reservation-restaurant__time">
              {`${date.getDate()} ${month} ${date.getFullYear()}`}
              <span>{`${date.getHours()}:${date.getMinutes()}`}</span>
            </div>
            <a className="reservation-restaurant__page" href="#">
              На страницу ресторана
            </a>
          </div>
          <div className="reservation-restaurant__box">
            <a className="reservation-restaurant__link" href="#">
              {type === 'current'
                ? ' отменить бронирование'
                : type === 'history'
                ? 'оценить ресторан'
                : 'забронировать'}
            </a>
            <a className="reservation-restaurant__link" href="#">
              {type !== 'favorites' && 'повторить бронирование'}
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Reservation;
