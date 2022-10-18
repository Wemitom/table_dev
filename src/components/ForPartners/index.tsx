import React from 'react';

const ForPartners = () => {
  return (
    <>
      <section className="partners-hero">
        <div className="container">
          <div className="partners-hero__inner">
            <h3 className="partners-hero__title">
              Бронируй без
              <br />
              звонков
            </h3>
            <div className="partners-hero__text">
              <p>
                Table — это эффективное решение для ресторанов и современное
                приложение для посетителей.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="restaurant-problems">
        <div className="container">
          <div className="restaurant-problems__inner">
            <ul className="restaurant-problems__list list-reset">
              <li className="restaurant-problems__item">
                <span className="restaurant-problems__percent">21%</span>
                <div className="restaurant-problems__text">
                  <p>
                    Доля молодого поколения от 
                    <br />
                    общей численности населения
                    <br />
                    г. Москвы
                  </p>
                </div>
              </li>
              <li className="restaurant-problems__item">
                <span className="restaurant-problems__percent">30%</span>
                <div className="restaurant-problems__text">
                  <p>
                    Не отменяют бронирование
                    <br />
                    при отказе от посещения
                  </p>
                </div>
              </li>
              <li className="restaurant-problems__item">
                <span className="restaurant-problems__percent">~40</span>
                <div className="restaurant-problems__text">
                  <p>Столов простаивает еженедельно</p>
                </div>
              </li>
            </ul>
            <div className="restaurant-problems__content">
              <h2 className="restaurant-problems__title">
                Ресторанный бизнес сталкивается со 
                <br />
                множеством проблем
              </h2>
              <div className="restaurant-problems__description">
                <p>
                  Молодое поколение затрудняется осуществлять бронирование
                  столиков при помощи телефонного разговора или системы
                  депозита.
                </p>
                <p>
                  Более того рестораны терпят колоссальные убытки в связи
                  с «фантомными» бронированиями.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="restaurant-services">
        <div className="container">
          <ul className="restaurant-services__list list-reset">
            <li className="restaurant-services__item">
              <div
                className="restaurant-services__img"
                style={{ backgroundImage: "url('img/for-partners/img1.jpg')" }}
              ></div>
              <h3 className="restaurant-services__heading">Оптимизация</h3>
              <div className="restaurant-services__text">
                <p>
                  Ресторан больше не тратит время на телефонные звонки.
                  Благодаря Table. утверждение и отмена брони происходят в один
                  клик.
                </p>
              </div>
            </li>
            <li className="restaurant-services__item">
              <div
                className="restaurant-services__img"
                style={{ backgroundImage: "url('img/for-partners/img2.jpg')" }}
              ></div>
              <h3 className="restaurant-services__heading">Гарантия</h3>
              <div className="restaurant-services__text">
                <p>
                  Table. замораживает у клиента сумму, которая не будет
                  подлежать возврату, если человек решит не приходить
                  и не отменять бронь.
                </p>
              </div>
            </li>
            <li className="restaurant-services__item">
              <div
                className="restaurant-services__img"
                style={{ backgroundImage: "url('img/for-partners/img3.jpg')" }}
              ></div>
              <h3 className="restaurant-services__heading">Оценка</h3>
              <div className="restaurant-services__text">
                <p>
                  Система рейтинга позволяет оценивать и получать независимые
                  оценки только при посещении заведения.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="restaurant-advantages">
        <div className="container">
          <h2 className="restaurant-advantages__title title">Преимущества</h2>
          <ol className="restaurant-advantages__list list-reset">
            <li className="restaurant-advantages__item">
              <div className="restaurant-advantages__text">
                Онлайн бронирование и отмена напрямую
                <br />
                Книга резервов и схема зала
                <br />
                СМС-уведомления
                <br />
              </div>
            </li>
            <li className="restaurant-advantages__item">
              <div className="restaurant-advantages__text">
                Карточка ресторана на платформе
                <br />
                Рейтинг по городу/округу/району
                <br />
                Аналитика загруженности столов онлайн
                <br />
                CRM — система
                <br />
                База гостей
                <br />
                Портрет гостя
                <br />
              </div>
            </li>
            <li className="restaurant-advantages__item">
              <div className="restaurant-advantages__text">
                Планшет со встроенной системой
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default ForPartners;
