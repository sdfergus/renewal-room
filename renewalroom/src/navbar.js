import "./App.css";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DisplayServices from './displayServices';
import Cart from './cart';
import FbLogin from "./fbLogin";
// import DisplayHero from "./DisplayHero";
// import DisplayBody from "./DisplayBody";

function Nav( props ) {
  console.log( 'CartTotal: ', props.cartTotal );
  return (
    <Router>
      <nav className='Spa-nav'>
        <ul>
          <li>
            <Link to="/" className="Nav-links">
              <img className="Spa-logo" src="./logos/logo3.png" alt="Spa Logo" />
            </Link>
          </li>
          <div className="Nav-center">
            <li>
              <Link to="/" className="Nav-links">
                <h6>Home</h6>
              </Link>
            </li>
            <li>
              <Link to="/" className="Nav-links">
                <h6>About Us</h6>
              </Link>
            </li>
            <li>
              <Link to="/" className="Nav-links">
                <h6>Meet our team</h6>
              </Link>
            </li>
            <li>
              <Link to="/" className="Nav-links">
                <h6>Contact Us</h6>
              </Link>
            </li>
          </div>
          <div className="Nav-right">
            <li>
              <Link to="/" className="Nav-links">
                <span className='Cart-section'>
                  <FontAwesomeIcon
                    icon={faUser}
                    className='mx-3' />
                  <span className="Cart-text"><h6>Register/Login</h6></span>
                </span>
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
          </div>
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
        {/* <Route
          path="/"
          element={
            <DisplayHero />
          } />

        <Route
          path="/"
          element={
            <DisplayBody />
          } /> */}

        {/* <Route
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
        /> */}
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