import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import './App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
// import Nav from './navbar';

function Register() {
  const [ register, setRegister ] = useState( false ); //set up register
  const [ data, setData ] = useState( {} ); //set up fb data
  const [ picture, setPicture ] = useState( '' ); //set up fb profile image

  const fbResponse = ( response ) => {
    console.log( response );
    setData( response );
    setPicture( response.picture.data.url );
    if ( response.accessToken ) {
      setRegister( true );
    } else {
      setRegister( false );
    }
  }

  return (
    <div className='container Login-section m-auto my-5 py-5'>
      <Card style={{ width: '800px' }} className='mx-auto mt-5 pb-5'>
        {!register &&
          <Card.Header className='mb-4'>
            <h1>Register</h1>
          </Card.Header>
        }

        {register &&
          <Card.Header className='mb-4'>
            <h1>Check Out</h1>
          </Card.Header>
        }
        <Card.Body>
          <Card.Text>
            {!register &&
              <React.Fragment>
                {/* Registration Form */}
                <RegistrationForm />
                {/* FB Login Button */}
                <FacebookLogin
                  appId='1401222237082306'
                  autoLoad={false}
                  fields='name,email,picture'
                  scope='public_profile,user_friends'
                  callback={fbResponse}
                  icon="fa-facebook"
                />
              </React.Fragment>
            }

            {register &&
              <CheckOut fbpic={picture} fbdata={data} />
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

function RegistrationForm() {
  return (
    <form className="" action="">
      <div className="row d-flex justify-content-center">
        <div className="">
          {/* <h1 className="text-center font-weight-bold mt-3 mb-5">Log In</h1> */}
          <div className="card w-75 m-auto">
            <div className="card-body px-4">
              <label htmlFor="register" className="my-2">Create an account with us today</label>
              {/* <!-- Email --> */}
              <div className="md-form md-outline my-3">
                <input type="text" id="name" className="form-control" placeholder="Name" />
              </div>
              <div className="md-form md-outline my-3">
                <input type="text" id="username" className="form-control" placeholder="Username" />
              </div>
              {/* <!-- Email --> */}
              <div className="md-form md-outline my-3">
                <input type="text" id="email" className="form-control" placeholder="Email" />
              </div>
              {/* <!-- Password --> */}
              <div className="md-form md-outline my-3">
                <input type="text" id="password" className="form-control" placeholder="Password" />
              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                  </div>
                </div>

                <div className="col">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="btn rounded-pill button-cta mb-4">Create Account</button>
            </div>
            {/* <!-- Register buttons --> */}
            <div className="text-center mb-4">
              <p>Already a member? <a href='/login'>Login</a></p>
              <p>or sign up with:</p>
              {/* <button type="button" className="btn btn-link btn-floating mx-1">
                <FontAwesomeIcon icon={faFacebook} />
              </button> */}

              <button type="button" className="btn btn-link btn-floating mx-1 fa-disabled">
                <FontAwesomeIcon icon={faGoogle} />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1 fa-disabled">
                <FontAwesomeIcon icon={faTwitter} />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1 fa-disabled">
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </form>
  )
}

function CheckOut( { fbpic, fbdata } ) {
  return (
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className='d-inline text-success mx-2'>
        Welcome back {fbdata.name}!
      </h3>
      <h4 className='my-5'>Ready to check out?</h4>
      <div className="">
        <Link
          to="/"
          className="btn btn-success px-3 mx-4"
        >
          Continue booking
        </Link>
        <Link
          to="/cart"
          className="btn btn-outline-success disabled"
        >
          Check out
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Register;