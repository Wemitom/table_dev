const Favorite = () => {
  return (
    <li className="status-reservations__item">
      <article className="reservation-restaurant">
        <div className="reservation-restaurant__inner">
          <img
            className="reservation-restaurant__img"
            src="img/personal-private/img1.png"
            alt="Table."
            width="180"
            height="180"
          />
          <div className="reservation-restaurant__info">
            <h3 className="reservation-restaurant__name">
              <a href="#">TABLE.</a>
              <button className="reservation-restaurant__like btn-reset"></button>
            </h3>
            <div className="reservation-restaurant__time">
              12 апреля 2022 <span>19:00</span>
            </div>
            <a className="reservation-restaurant__page" href="#">
              На страницу ресторана
            </a>
          </div>
          <div className="reservation-restaurant__box">
            <a className="reservation-restaurant__link" href="#">
              забронировать
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Favorite;
