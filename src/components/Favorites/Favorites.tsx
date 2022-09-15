import React from 'react';
import Favorite from '../Favorite/Favorite';

const Favorites = () => {
  return (
    <section className="status-reservations">
      <div className="container">
        <div className="status-reservations__current">
          <p className="status-reservations__text">Избранное</p>
          <ul className="status-reservations__list list-reset">
            <Favorite />
            <Favorite />
            <Favorite />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
