import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";

function DisplayFooter() {
  return (
    <section className="">
      {/* <!-- Footer --> */}
      <footer className="text-white info-content">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row text-left">
            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <form action="">
                {/* <!--Grid row--> */}
                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-auto mb-4 mb-md-0">
                    <p className="">
                      <strong>Enter your email for special promotions!</strong>
                    </p>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-md-6 col-12 mb-4 mb-md-0">
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form5Example25" className="form-control" placeholder='Email address' />
                      {/* <label className="form-label" htmlFor="form5Example25">Email address</label> */}
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-auto mb-4 mb-md-0">
                    {/* <!-- Submit button --> */}
                    <button type="submit" id="footer-btn" className="btn btn-primary mb-4">
                      Subscribe
                    </button>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </form>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="mb-3">Contact</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p>
                    <FontAwesomeIcon
                      icon={faHome}
                      className='me-3' />
                    San Francisco, CA 94200, US
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='me-3' />
                    renewalroom@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className='me-3' />
                    + 1 (415) 230 2311</p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon
                      icon={faPrint}
                      className='me-3' />
                    + 1 (415) 231 1231</p>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="mb-3">Hours</h5>
              <div className="row mb-1">
                <div className="col-sm">
                  Mon to Fri
                </div>
                <div className="col-sm">
                  7:30 am - 9 pm
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-sm">
                  Sat
                </div>
                <div className="col-sm">
                  9 am - 9 pm
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-sm">
                  Sun
                </div>
                <div className="col-sm">
                  Closed
                </div>
              </div>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center text-light p-3 copyright">
          Made with &#x2661; by Shandira © Copyright 2023
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </section>
  );
}

export default DisplayFooter;