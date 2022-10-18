import { useState } from 'react';

import { Pagination, Stack } from '@mui/material';

import Reservation from '../Reservation';

const Reservations = ({
  type,
}: {
  type: 'current' | 'history' | 'favorites';
}) => {
  const [page, setPage] = useState(1);
  const reservations = [
    {
      img: '/img/personal-private/img1.png',
      name: 'Table.1',
      date: new Date(),
      type: type,
      inFavorites: false,
    },
    {
      img: '/img/personal-private/img1.png',
      name: 'Table.2',
      date: new Date(),
      type: type,
      inFavorites: false,
    },
    {
      img: '/img/personal-private/img1.png',
      name: 'Table.3',
      date: new Date(),
      type: type,
      inFavorites: false,
    },
  ];

  return (
    <section className="status-reservations">
      <div className="container">
        <div className={`status-reservations__${type}`}>
          <p className="status-reservations__text">
            {type === 'current'
              ? 'Текущие бронирования'
              : type === 'history'
              ? 'История бронирования'
              : 'Избранное'}
          </p>
          <ul className="status-reservations__list list-reset">
            {reservations.map((reservation) => (
              <Reservation
                img={reservation.img}
                name={reservation.name}
                date={reservation.date}
                type={reservation.type}
                inFavorites={reservation.inFavorites}
              />
            ))}
          </ul>
          <Stack alignItems="center">
            <Pagination
              count={4}
              page={page}
              onChange={(e, value) => setPage(value)}
              size="large"
            />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
