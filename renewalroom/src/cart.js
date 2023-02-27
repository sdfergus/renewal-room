import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Cart( props ) {
  // console.log( 'Cart Bookings in CART: ', props.cartBookings.map( ( arr ) => ( console.log( arr[ 1 ].bookings.map( ( booking ) => ( console.log( booking ) ) ) ) ) ) );

  console.log( 'Cart Bookings in CART: ', props.cartBookings.map( ( arr ) => ( console.log( arr[ 1 ] ) ) ) );

  return (
    <div className="Cart-items p-5 mx-5 my-2">
      <h2>Your Bookings</h2>
      <ListGroup className="w-75">

        {props.cartBookings && props.cartBookings.map( ( arr ) => (
          arr[ 1 ].bookings && arr[ 1 ].bookings.map( ( booking, index ) => (
            <ListGroupItem
              className='List-items py-3'
              key={index}
            >
              <div className='Item-contents'>
                <span>
                  <img
                    src={arr[ 1 ].img}
                    alt={arr[ 1 ].alt}
                    className='Item-img'
                  />
                  <div className='Item-name'>
                    {arr[ 1 ].name}
                  </div>
                </span>
                <span>
                  <span className='fw-bold'>Service:</span> {booking.service}
                  <br />
                  <br />
                  <span className='fw-bold'>When:</span> {booking.availability}
                </span>
              </div>
            </ListGroupItem>
          ) )
        )
        )}

        {/* {props.cartBookings.map( ( booking ) => (
          <ListGroupItem
            className='List-items py-3'
            key={booking[ 1 ].id}
          >
            <div className='Item-contents'>
              <span>
                <img
                  src={booking[ 1 ].img}
                  alt={booking[ 1 ].alt}
                  className='Item-img'
                />
                <div className='Item-name'>
                  {booking[ 1 ].name}
                </div>
              </span>
              <span>
                <span className='fw-bold'>When:</span> {booking[ 1 ].bookings[ 0 ].availability}
                <br />
                <br />
                <span className='fw-bold'>Service:</span> {booking[ 1 ].bookings[ 0 ].service}
              </span>
            </div>
          </ListGroupItem>
        )
        )} */}


      </ListGroup>

      {
        ( !props.cartBookings.length )
          ? <React.Fragment>
            <p>You have {props.cartBookings.length} bookings so far.</p>
            <Link
              to="/"
              className="btn mt-2"
            >
              Continue booking
            </Link>
          </React.Fragment>
          :
          [
            <Link
              to="/"
              className="btn mt-4 px-3"
            >
              Continue Booking
            </Link>
            ,
            <Link
              to='/fbLogin'
              className="btn mt-4 mx-3 checkout-CTA"
            >
              Check Out
            </Link>
          ]
      }
    </div>

  )
}

export default Cart;





/*
      <ListGroup className="w-75">
        {props.cartBookings.map( ( booking ) => (
          ( booking[ 1 ].bookings.length > 1 ) ?
            props.cartBookings.map( ( booking ) => (
              <ListGroupItem
                className='List-items py-3'
                key={booking[ 1 ].id}
              >
                <div className='Item-contents'>
                  <span>
                    <img
                      src={booking[ 1 ].img}
                      alt={booking[ 1 ].alt}
                      className='Item-img'
                    />
                    <div className='Item-name'>
                      {booking[ 1 ].name}
                    </div>
                  </span>
                  <span>
                    <span className='fw-bold'>When:</span> {booking[ 1 ].bookings[ 0 ].availability}
                    <br />
                    <br />
                    <span className='fw-bold'>Service:</span> {booking[ 1 ].bookings[ 0 ].service}
                  </span>
                </div>
              </ListGroupItem>
            ) )
            :
            <ListGroupItem
              className='List-items py-3'
              key={booking[ 1 ].id}
            >
              <div className='Item-contents'>
                <span>
                  <img
                    src={booking[ 1 ].img}
                    alt={booking[ 1 ].alt}
                    className='Item-img'
                  />
                  <div className='Item-name'>
                    {booking[ 1 ].name}
                  </div>
                </span>
                <span>
                  <span className='fw-bold'>When:</span> {booking[ 1 ].bookings[ 0 ].availability}
                  <br />
                  <br />
                  <span className='fw-bold'>Service:</span> {booking[ 1 ].bookings[ 0 ].service}
                </span>
              </div>
            </ListGroupItem>
        ) )}
      </ListGroup>
*/