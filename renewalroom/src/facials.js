import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

function Facials( props ) {
  console.log( 'IN FACIALS: ', props.handleFacialsFilter.map( member => console.log( Object.values( member[ 1 ].services )[ 0 ].schedule.forEach( day => ( console.log( day ) ) ) ) ) );

  // console.log( 'MAPPING: ', ...props.handleFacialsFilter.map( ( member ) => (
  //   member.forEach( m => console.log( 'Member:', m ) )
  // ) ) )
  const servicesList = props.servicesList[ 1 ];

  return (
    <div className="Team-list p-5 ">
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
                  <p>Schedule:
                    <br />
                    <ul>
                      {Object.values( member[ 1 ].services )[ 0 ].schedule.map( ( services ) => (
                        <li>{services}</li>
                      ) )}
                    </ul>
                  </p>
                  {/* {member[ 1 ].bio} */}
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Choose service</option>
                    <option value="basic">{servicesList.prices[ 0 ].basic}</option>
                    <option value="deepClean">{servicesList.prices[ 1 ].deepClean}</option>
                    <option value="antiAging">{servicesList.prices[ 2 ].antiAging}</option>
                    <option value="revitalizing">{servicesList.prices[ 3 ].revitalizing}</option>
                  </select>
                </div>
              </span>
            </div>
          </ListGroupItem>
        ) )}
      </ListGroup>
    </div>

  )
}

export default Facials;