import React from 'react';

function DisplayHero() {
  return (
    <header className='Hero-img'>
      <div className='hero-text'>
        <h1>The Renewal Room</h1>
        <p>Indulge in the ultimate relaxation experience today! Browse our range of services and book now to discover the many ways we can help you unwind, rejuvenate, and renew</p>
        <button type="button" className='btn btn-rounded hero-cta'>View Services</button>
      </div>
    </header>
  );
}

export default DisplayHero;