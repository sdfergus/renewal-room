import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

function Facials( props ) {

  // console.log( 'IN FACIALS: ', props.handleFacialsFilter.map( member => console.log( Object.values( member[ 1 ].services )[ 0 ].schedule.forEach( day => ( console.log( day ) ) ) ) ) );

  // console.log( 'IN FACIALS: ', props.handleFacialsFilter.map( member => console.log( member[ 1 ].bookings ) ) );

  // console.log( 'MAPPING: ', ...props.handleFacialsFilter.map( ( member ) => (
  //   member.forEach( m => console.log( 'Member:', m ) )
  // ) ) )

  const servicesList = props.servicesList[ 1 ];

  const [ availSel, setAvailSel ] = useState( '' );
  const [ serviceSel, setServiceSel ] = useState( '' );

  return (
    <div className="Team-list Facials-list p-5 ">
      <h1 className="text-center text-white">Facials</h1>
      <p className="container text-white">{servicesList.info}</p>
      <h5 className="container text-white"><em>Specialty &#8212; {servicesList.offerings}</em></h5>
      <ListGroup className="container">
        {props.handleFacialsFilter.map( ( member ) => (
          <ListGroupItem
            className='List-items py-3 shadow-sm p-3 mb-5 bg-white rounded'
            key={member[ 1 ].id}
          >
            <div className='Item-contents'>
              <img
                src={member[ 1 ].img}
                alt={member[ 1 ].alt}
                className='Member-img'
              />
              <span className='m-5 align-self-start'>
                <div className='Member-name'>
                  <h2>{member[ 1 ].name} </h2>
                  <p>Schedule:</p>
                  <ul>
                    {Object.values( member[ 1 ].services )[ 0 ].schedule.map( ( services, idx ) => (
                      <li key={idx}>{services}</li>
                    ) )}
                  </ul>
                  <br />

                  {/* Services */}
                  <select className="form-select mb-3" value={serviceSel} onChange={( e ) => setServiceSel( e.target.value )} aria-label="Choose service" id="facial-service-sel">
                    <option>Choose service</option>
                    {servicesList.prices.map( ( service, idx ) => (
                      <option key={idx} value={service.type}>{service.type}</option>
                    ) )}
                  </select>

                  {/* Availabilities */}
                  <select className="form-select" value={availSel} onChange={( e ) => setAvailSel( e.target.value )} id="facial-avail-sel">
                    <option>Availabilities</option>
                    {Object.values( member[ 1 ].services )[ 0 ].availability.map( ( avail, index ) => (
                      <option key={index} value={avail}>{avail}</option>
                    ) )}
                  </select>
                </div>
                <button type="button" className="btn rounded-pill book-cta mt-4" onClick={() => {
                  // console.log( 'Clicked!', member[ 0 ], serviceSel, availSel )
                  // member[ 1 ].bookings.push(
                  //   {
                  //     name: member[ 0 ],
                  //     service: serviceSel,
                  //     availability: availSel
                  //   }
                  // )
                  const booking = {
                    name: member[ 0 ],
                    service: serviceSel,
                    availability: availSel
                  }
                  props.handleBookedItem( booking );
                }}>Book</button>
              </span>
            </div>
          </ListGroupItem>
        ) )}
      </ListGroup>
    </div>

  )
}

export default Facials;