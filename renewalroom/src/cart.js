import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";
import { Link } from "react-router-dom";

function Cart( props ) {
  return (
    <div className="Cart-items p-5 mx-5 my-2">
      <h2>Your Cart Items</h2>
      <ListGroup className="w-75">
        {props.cartItems.map( ( item ) => (
          <ListGroupItem
            className='List-items py-3'
            key={item.id}
          >
            <div className='Item-contents'>
              <span>
                <img
                  src={item.img}
                  alt={item.alt}
                  className='Item-img'
                />
                <div className='Item-name'>
                  {item.name}
                </div>
              </span>
              <span className='fw-bold'>
                Quantity: {item.quantity}
              </span>
            </div>
          </ListGroupItem>
        ) )}
      </ListGroup>

      {
        ( !props.cartItems.length )
          ? <React.Fragment>
            <p>There are {props.cartItems.length} items in your cart.</p>
            <Link
              to="/"
              className="btn btn-success mt-2"
            >
              Continue Shopping
            </Link>
          </React.Fragment>
          : <Link
            to='/fbLogin'
            className="btn btn-primary mt-4"
          >
            Check Out
          </Link>
      }
    </div>

  )
}

export default Cart;