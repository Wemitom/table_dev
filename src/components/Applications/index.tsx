import React from 'react';
import Application from '../Application';

const Applications = () => {
  return (
    <section className="incoming-applications">
      <div className="container">
        <p className="incoming-applications__text">Входящие заявки</p>
        <ul className="incoming-applications__list list-reset">
          <Application />
          <Application />
          <Application />
          <Application />
        </ul>
      </div>
    </section>
  );
};

export default Applications;
