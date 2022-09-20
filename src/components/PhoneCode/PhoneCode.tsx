const PhoneCode = () => {
  return (
    <>
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
        <button className="register-form__btn main-btn btn-reset">Далее</button>
      </form>
    </>
  );
};

export default PhoneCode;
