import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import './App.css';

function FbLogin() {
  const [ login, setLogin ] = useState( false ); //set up login
  const [ data, setData ] = useState( {} ); //set up fb data
  const [ picture, setPicture ] = useState( '' ); //set up fb profile image

  const fbResponse = ( response ) => {
    console.log( response );
    setData( response );
    setPicture( response.picture.data.url );
    if ( response.accessToken ) {
      setLogin( true );
    } else {
      setLogin( false );
    }
  }

  return (
    <div className='container'>
      <Card style={{ width: '800px' }} className='mx-auto mt-5'>
        {!login &&
          <Card.Header className='pb-4'>
            <h1>Sign In</h1>
          </Card.Header>
        }

        {login &&
          <Card.Header className='pb-4'>
            <h1>Check Out</h1>
          </Card.Header>
        }
        <Card.Body>
          <Card.Text>
            {!login &&
              <React.Fragment>
                <h3>Please login using one of the following:</h3>
                {/* Login Form */}
                <LoginForm />
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

            {login &&
              <CheckOut fbpic={picture} fbdata={data} />
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

function LoginForm() {
  return (
    <form action="" className='border mt-3 mb-5 p-3 bg-white'>
      <label className='m-2'>Name:</label>
      <input type="text" name='name' placeholder='Your Name' />
      <label className='m-2'>Email:</label>
      <input type="text" name='email' placeholder='Your Email' />
      <input type="submit" value='Login' className='btn bg-success text-white my-3' />
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
      <p className='my-5'>Time to check out?</p>
    </React.Fragment>
  )
}

export default FbLogin;