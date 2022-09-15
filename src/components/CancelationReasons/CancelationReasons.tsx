const CancelationReasons = () => {
  return (
    <>
      <p className="booking-status__question">
        Почему Вы отменили бронирование?
      </p>
      <div className="booking-status__box">
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Передумал (а)</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Не успеваю</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">
            Ресторан попросил отменить бронь
          </span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">
            Хочу прийти в другое время/день
          </span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" className="custom-checkbox__field" />
          <span className="custom-checkbox__content">Другая причина</span>
        </label>
      </div>
    </>
  );
};

export default CancelationReasons;
