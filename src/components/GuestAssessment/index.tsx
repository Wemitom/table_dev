const GuestAssessment = () => {
  return (
    <section className="assessment-guest">
      <div className="container">
        <div className="assessment-guest__inner">
          <div className="assessment-guest__box">
            <div className="assessment-guest__group">
              <label
                className="assessment-guest__label main-label"
                htmlFor="check"
              >
                Чек
              </label>
              <input
                className="assessment-guest__input input-reset main-input"
                type="text"
                id="check"
                name="check"
                placeholder="Введите сумму"
                required
              />
            </div>
            <div className="assessment-guest__group">
              <label
                className="assessment-guest__label main-label"
                htmlFor="tips"
              >
                Чаевые
              </label>
              <input
                className="assessment-guest__input input-reset main-input"
                type="text"
                id="tips"
                name="tips"
                placeholder="Введите сумму"
                required
              />
            </div>
          </div>
          <div className="assessment-guest__content">
            <p className="assessment-guest__grade">Оцените гостя</p>
            <div className="assessment-rate">
              <div className="assessment-rate__star assessment-rate__star--fill"></div>
              <div className="assessment-rate__star assessment-rate__star--fill"></div>
              <div className="assessment-rate__star assessment-rate__star--fill"></div>
              <div className="assessment-rate__star"></div>
              <div className="assessment-rate__star"></div>
            </div>
          </div>
        </div>
        <button
          className="assessment-guest__btn btn-reset main-btn"
          type="button"
        >
          Оценить гостя
        </button>
      </div>
    </section>
  );
};

export default GuestAssessment;
