import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import "./App.css";

function Login() {
  return (
    <div className="container z-depth-1 my-5 px-0">
      <section className="my-md-5 Login-section">
        <div className="rgba-black-strong rounded p-5">
          {/* <!-- Section heading --> */}
          <h1 className="text-center font-weight-bold text-white mt-3 mb-5">Login</h1>

          <form className="mx-md-5" action="">
            <div className="row">
              <div className="mb-4 rowChild">
                <div className="card w-50">
                  <div className="card-body px-4">
                    <label htmlFor="login" className="my-2">Please login to your account</label>
                    {/* <!-- Email --> */}
                    <div className="md-form md-outline my-3">
                      <input type="text" id="email" className="form-control" placeholder="Your email address" />
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
                          <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                          <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                      </div>

                      <div className="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <button type="submit" className="btn rounded-pill button-cta mb-4">Log In</button>
                  </div>
                  {/* <!-- Register buttons --> */}
                  <div className="text-center mb-4">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon icon={faFacebook} />
                    </button>

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
        </div>
      </section>
    </div>
  )
}

export default Login;