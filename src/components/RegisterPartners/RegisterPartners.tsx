const RegisterPartners = () => {
  return (
    <section className="register-visitor">
      <div className="container">
        <div className="register-visitor__inner">
          <a className="register-visitor__logo logo" href="#">
            <img
              src="img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </a>
          <form className="register-form" action="#">
            <div className="register-form__inner">
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="restaurant">
                  Ресторан
                </label>
                <input
                  className="register-form__input input-reset"
                  id="restaurant"
                  type="text"
                  name="restaurant"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="user-login">
                  Логин
                </label>
                <input
                  className="register-form__input input-reset"
                  id="user-login"
                  type="text"
                  name="user-login"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="password">
                  Пароль
                </label>
                <input
                  className="register-form__input input-reset"
                  id="password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="register-form__group">
                <label
                  className="register-form__label"
                  htmlFor="password-again"
                >
                  Пароль повторно
                </label>
                <input
                  className="register-form__input input-reset"
                  id="password-again"
                  type="password"
                  name="password-again"
                  required
                />
              </div>
            </div>
            <button className="register-form__btn main-btn btn-reset">
              Зарегистрироваться
            </button>
            <p className="register-form__text">
              Нажимая «Зарегистрироваться», вы соглашаетесь с 
              <a href="#">Условиями использования</a> и подтверждаете прочтение
              <a href="#"> Политики конфиденциальности.</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPartners;
