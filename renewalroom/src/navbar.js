import "./App.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayServices from './displayServices';
import Cart from './cart';
import FbLogin from "./fbLogin";

function Nav( props ) {
  console.log( 'CartTotal: ', props.cartTotal );
  return (
    <Router>
      <nav className='Spa-nav'>
        <ul>
          <li>
            <Link to="/" className="Nav-links">
              <h4>Renewal Room</h4>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="Nav-links">
              <span className='Cart-section'>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className='mx-3' />
                <span className="Cart-text">{props.cartTotal === 1 ? props.cartTotal + ' item' : props.cartTotal + ' items'}</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={props.displayCartItems}
            />
          } />
        <Route
          path="/"
          element={
            <DisplayServices
              serviceItems={props.serviceItems}
              addItem={props.addItem}
              removeItem={props.removeItem}
              handleSelect={props.handleSelect}
              selectOption={props.selectOption}
            />
          }
        />
        <Route
          path="/fbLogin"
          element={
            <FbLogin />
          } />
      </Routes>
    </Router>
  )
}

export default Nav;