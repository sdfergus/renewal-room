import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

function Team( props ) {

  return (
    <div className="Team-list p-5 ">
      <h1 className="text-center mb-2 text-white">We're happy to serve you!</h1>
      <p className="container mb-2 text-white">At The Renewal Room, we pride ourselves on having a team of highly trained and experienced professionals who are dedicated to providing you with the best possible spa experience. Our team consists of skilled therapists who are passionate about what they do and committed to helping you achieve the ultimate in relaxation and rejuvenation.
        <br />
        <br />
        Each member of our team has undergone extensive training and has years of experience in their field, ensuring that you receive the highest level of service and attention. From our expert massage therapists to our skilled estheticians, we have assembled a team of professionals who are dedicated to helping you find your inner peace and achieve a renewed sense of well-being.
        <br />
        <br />
        We believe that a great spa experience begins with a great team, and we are proud to have assembled such a talented group of individuals. Book an appointment with us today and experience the expertise of our team for yourself. We can't wait to help you unwind, relax, and renew!</p>
      <ListGroup className="container">
        {Object.keys( props.teamList ).map( ( member ) => (
          <ListGroupItem
            className='List-items py-3 shadow-sm p-3 mb-5 bg-white rounded'
            key={props.teamList[ member ].id}
          >
            <div className='Item-contents'>
              <img
                src={props.teamList[ member ].img}
                alt={props.teamList[ member ].alt}
                className='Member-img'
              />
              <span className='m-5 align-self-start'>
                <div className='Member-name'>
                  <h2>{props.teamList[ member ].name} </h2><em>
                    <span className="specialty">Specialty &#8212;
                      {Object.values( props.teamList[ member ].services ).length > 1
                        ?
                        ` ${ Object.values( props.teamList[ member ].services )[ 0 ].name } and ${ Object.values( props.teamList[ member ].services )[ 1 ].name } `
                        :
                        Object.values( props.teamList[ member ].services )[ 0 ].name}
                    </span>
                  </em>
                  <br />
                  {props.teamList[ member ].bio}
                  <br />
                  <br />
                  Rating: {props.teamList[ member ].ratings}
                  <br />
                  <br />
                  <em className="reviews">
                    {props.teamList[ member ].reviews[ 0 ]}
                  </em>
                  <br />
                </div>
              </span>
            </div>
          </ListGroupItem>
        ) )}
      </ListGroup>
    </div>

  )
}

export default Team;