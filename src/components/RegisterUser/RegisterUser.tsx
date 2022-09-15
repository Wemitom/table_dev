import { Link } from 'react-router-dom';

const RegisterUser = () => {
  return (
    <section className="register-visitor">
      <div className="container">
        <div className="register-visitor__inner">
          <Link to="/" className="register-visitor__logo logo">
            <img
              src="../img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </Link>
          <form className="register-form" action="#">
            <div className="register-form__inner">
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="name">
                  Имя
                </label>
                <input
                  className="register-form__input input-reset"
                  id="name"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="surname">
                  Фамилия
                </label>
                <input
                  className="register-form__input input-reset"
                  id="surname"
                  type="text"
                  name="surname"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="tel">
                  Телефон
                </label>
                <input
                  className="register-form__input input-reset"
                  id="tel"
                  type="tel"
                  name="tel"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="email">
                  Электронная почта
                </label>
                <input
                  className="register-form__input input-reset"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <button className="register-form__btn main-btn btn-reset">
              Зарегистрироваться
            </button>
            <p className="register-form__text">
              Нажимая «Зарегистрироваться», вы соглашаетесь с 
              <Link to="#">Условиями использования</Link>
              и подтверждаете прочтение
              <Link to="#"> Политики конфиденциальности.</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterUser;
