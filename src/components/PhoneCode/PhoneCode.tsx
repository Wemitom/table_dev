import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCode = () => {
  return (
    <section className="register-visitor">
      <div className="container">
        <div className="register-visitor__inner">
          <Link
            to="/"
            className="register-visitor__logo register-visitor__logo--login logo"
          >
            <img
              src="img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </Link>
          <form className="register-form" action="#">
            <div className="register-form__inner">
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="code">
                  Введите код
                </label>
                <input
                  className="register-form__input input-reset"
                  id="code"
                  type="text"
                  name="code"
                  required
                />
              </div>
              <button className="register-form__send btn-reset">
                Отправить заново
              </button>
            </div>
            <button className="register-form__btn main-btn btn-reset">
              Далее
            </button>
            <div className="register-form__links">
              <Link to="/auth/signup" className="register-form__link">
                Нет аккаунта?{' '}
              </Link>
              <Link
                to="/auth/signup"
                className="register-form__link register-form__link--register"
              >
                Зарегистрироваться
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PhoneCode;
