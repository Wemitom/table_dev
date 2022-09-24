import { useState } from 'react';

import SimpleBar from 'simplebar-react';

const Notifications = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      className="header__icon header__icon--active btn-reset"
      type="button"
      aria-label="уведомления"
    >
      <svg
        className="header__bell"
        width="30"
        height="30"
        onClick={() => setExpanded(!expanded)}
      >
        <use href="/img/sprite.svg#icon-bell"></use>
      </svg>
      {expanded && (
        <div
          className={`notification${expanded ? ' notification--active' : ''}`}
        >
          <ul className="notification__list list-reset" data-simplebar>
            <SimpleBar style={{ height: '100%' }}>
              <li className="notification__item">
                Оцените последнее посещение ресторана: Tottori 13 апреля
                в 19:30.
              </li>
              <li className="notification__item">
                Ваша заявка на бронь стола: Tottori 13 апреля в 19:30 одобрена.
              </li>
              <li className="notification__item">
                Ваша заявка на бронь стола: Tottori 13 апреля в 19:30 отклонена.
              </li>
              <li className="notification__item">
                Ваша заявка на бронь стола: Tottori 13 апреля в 19:30
                отправлена.
              </li>
              <li className="notification__item">
                Ваша заявка на бронь стола: Tottori 13 апреля в 19:30
                отправлена.
              </li>
            </SimpleBar>
          </ul>
        </div>
      )}
    </button>
  );
};

export default Notifications;
