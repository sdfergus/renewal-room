import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function DisplayBody( props ) {
  return (
    <div>
      <body>
        <section id='home-body' ref={props.ctaRef}>
          <div className="container">
            <h1>Services you'll love</h1>
            <p className="container w-75">Whether you're looking for a massage, facial, body treatment, or more, our skilled therapists are here to help you achieve the ultimate in relaxation. Book now and let us help you find your inner peace!</p>
            <div className="row">
              {/* <Link to='/Facials'> */}
              <div className="col-sm h-100">
                <img src="./services/facials.jpg" alt="Facials" className='w-100 p-3' />
                <h5>Facials</h5>
              </div>
              {/* </Link> */}
              <div className="col-sm">
                <img src="./services/massage.jpg" alt="Massages" className='w-100 p-3' />
                <h5>Massages</h5>
              </div>
              <div className="col-sm">
                <img src="./services/waxes.jpg" alt="Waxes" className='w-100 p-3' />
                <h5>Waxes</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm h-100">
                <img src="./services/yoga.jpg" alt="Yoga" className='w-100 p-3' />
                <h5>Yoga</h5>
              </div>
              <div className="col-sm">
                <img src="./services/mani-pedi.jpg" alt="Manicures & Pedicures" className='w-100 p-3' />
                <h5>Manicures & Pedicures</h5>
              </div>
              <div className="col-sm">
                <img src="./services/meditation.jpg" alt="Meditation" className='w-100 p-3' />
                <h5>Meditation</h5>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DisplayBody;