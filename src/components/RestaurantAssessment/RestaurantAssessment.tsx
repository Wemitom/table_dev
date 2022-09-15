const RestaurantAssessment = () => {
  return (
    <>
      <p className="status-reservations__grade">Оцените ресторан</p>
      <div className="assessment-rate">
        <div className="assessment-rate__star assessment-rate__star--fill"></div>
        <div className="assessment-rate__star assessment-rate__star--fill"></div>
        <div className="assessment-rate__star assessment-rate__star--fill"></div>
        <div className="assessment-rate__star"></div>
        <div className="assessment-rate__star"></div>
      </div>
      <div className="status-reservations__box">
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">
            Несоответствие цена-качество
          </span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Официант грубил</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">
            Еда не оправдала ожиданий
          </span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Неприятная атмосфера</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">
            Неквалифицированный персонал
          </span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Завышенная оценка</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Грязный санузел</span>
        </label>
      </div>
      <div className="status-reservations__box">
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Выбор блюд</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Ценовая политика</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">
            Гастрономический экстаз
          </span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Радушный приём</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">
            Квалифицированный персонал
          </span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Стильный интерьер</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Чистота</span>
        </label>
      </div>
      <button
        className="status-reservations__btn btn-reset main-btn"
        type="button"
      >
        Оценить ресторан
      </button>
    </>
  );
};

export default RestaurantAssessment;
