const Login = () => {
  return (
    <section className="register-visitor">
      <div className="container">
        <div className="register-visitor__inner">
          <a
            className="register-visitor__logo register-visitor__logo--login logo"
            href="#"
          >
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
            </div>
            <button className="register-form__btn main-btn btn-reset">
              Далее
            </button>
            <div className="register-form__links">
              <a className="register-form__link" href="#">
                Нет аккаунта?{' '}
              </a>
              <a
                className="register-form__link register-form__link--register"
                href="#"
              >
                Зарегистрироваться
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
