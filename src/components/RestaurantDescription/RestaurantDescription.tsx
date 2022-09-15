const RestaurantDescription = () => {
  return (
    <section className="local-restaurant">
      <div className="container">
        <div className="local-restaurant__info">
          <a className="local-restaurant__address" href="#">
            Москва, Новая пл., 14
            <br />
            метро Китай-город
          </a>
          <div className="local-restaurant__time">
            <p className="local-restaurant__text">Время работы:</p>
            <time dateTime="05.05.2022">пн-вс 11.00-23.00</time>
          </div>
          <div className="local-restaurant__tel">
            <p className="local-restaurant__text">Телефон:</p>
            <a className="local-restaurant__link" href="tel:74996780866">
              +7 499 678-08-66
            </a>
          </div>
        </div>
        <div className="local-restaurant__map">
          <img src="img/map-local.jpg" alt="карта" width="1200" height="400" />
        </div>
        <button className="local-restaurant__like btn-reset"></button>
        <div className="local-restaurant__box">
          <div className="local-restaurant__kitchen">
            <h3 className="local-restaurant__heading">Кухня</h3>
            <div className="local-restaurant__name">Японская</div>
          </div>
          <div className="local-restaurant__check">
            <h3 className="local-restaurant__heading">Средний чек</h3>
            <p className="local-restaurant__price">1700-3000 руб.</p>
          </div>
          <div className="local-restaurant__rating">
            <h3 className="local-restaurant__heading">Рейтинг</h3>
            <svg width="28" height="26">
              <use href="img/sprite.svg#icon-star"></use>
            </svg>
            4.94
          </div>
          <button
            className="local-restaurant__menu btn-reset main-btn"
            type="button"
          >
            Меню
          </button>
        </div>
        <button
          className="local-restaurant__btn btn-reset main-btn"
          type="button"
        >
          Забронировать
        </button>
      </div>
    </section>
  );
};

export default RestaurantDescription;
