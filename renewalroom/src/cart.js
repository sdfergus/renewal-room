import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
// import FacebookLogin from 'react-facebook-login';
import "./App.css";

function Cart( props ) {
  // console.log( 'Cart Bookings in Cart.js: ', props.cartBookings.map( ( booking ) => (
  //   console.log( 'Bookings length: ', booking[ 1 ].bookings )
  // ) ) );

  // console.log( 'BOOKINGS in Cart.js: ', props.cartBookings[ 0 ][ 1 ].bookings );

  // const [ login, setLogin ] = useState( false ); //set up login
  // const [ data, setData ] = useState( {} ); //set up fb data
  // const [ picture, setPicture ] = useState( '' ); //set up fb profile img

  // const fbResponse = ( response ) => {
  //   console.log( response );
  //   setData( response );
  //   setPicture( response.picture.data.url );
  //   if ( response.accessToken ) {
  //     setLogin( true );
  //   } else {
  //     setLogin( false );
  //   }
  // }

  return (
    <div className="Cart-items p-5 mx-5 my-2">
      <h2>Your Bookings</h2>
      <ListGroup className="w-75">

        {props.cartBookings.map( ( booking ) => (
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
        )}


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