import React from 'react';

const HostesProfile = () => {
  return (
    <section className="hostes-profile hostes-profile--guest">
      <div className="container">
        <div className="hostes-profile__wrapper">
          <div className="hostes-profile__content">
            <div className="hostes-profile__inner">
              <div className="hostes-profile__avatar">
                <img
                  className="hostes-profile__img"
                  src="/img/partners-office/icon1.svg"
                  alt="Аватар"
                  width="110"
                  height="133"
                />
              </div>
              <div className="hostes-profile__rating">
                <svg className="hostes-profile__star" width="30" height="30">
                  <use href="/img/sprite.svg#icon-star"></use>
                </svg>
                4.94
              </div>
            </div>
            <div className="hostes-profile__info">
              <p className="hostes-profile__name">Анна Николаева</p>
              <div className="hostes-profile__time">
                12 апреля 2022 <span>10:30</span>
              </div>
              <div className="hostes-profile__quantity">
                Стол № 2 <span>Кол-во гостей: 3</span>
              </div>
            </div>
          </div>
          <div className="hostes-profile__box">
            <div className="hostes-profile__group">
              <label className="hostes-profile__label main-label" htmlFor="tel">
                Телефон
              </label>
              <input
                className="hostes-profile__input input-reset main-input"
                type="tel"
                id="tel"
                name="tel"
                placeholder="+7 912 345 67 89"
                required
              />
            </div>
            <div className="hostes-profile__group">
              <label
                className="hostes-profile__label main-label"
                htmlFor="email"
              >
                Электронная почта
              </label>
              <input
                className="hostes-profile__input input-reset main-input"
                type="email"
                id="email"
                name="email"
                placeholder="abcd@gmail.com"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostesProfile;
