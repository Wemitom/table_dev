const Application = () => {
  return (
    <li className="incoming-applications__item">
      <article className="application">
        <div className="application__inner">
          <div className="application__avatar">
            <img
              className="application__img"
              src="img/partners-office/icon1.svg"
              alt="Аватарка"
            />
          </div>
          <p className="application__name">Анна Николаева</p>
          <div className="application__rating">
            <svg className="application__star" width="30" height="30">
              <use href="img/sprite.svg#icon-star"></use>
            </svg>
            4.94
          </div>
          <div className="application__time">
            12 апреля 2022 <span>10:30</span>
          </div>
          <div className="application__info">
            Стол № 2 <span>Кол-во гостей: 3</span>
          </div>
          <div className="application__box">
            <a className="application__link" href="#">
              оценить
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Application;
