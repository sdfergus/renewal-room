import React from "react";
import "./App.css";

function Contact() {
  return (
    <div className="container z-depth-1 my-5 px-0">
      <section className="my-md-5 Contact-section">
        <div className="rgba-black-strong rounded p-5">
          {/* <!-- Section heading --> */}
          <h1 className="text-center font-weight-bold text-white mt-3 mb-5">Contact Us</h1>

          <form className="mx-md-5" action="">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body px-4">
                    {/* <!-- Name --> */}
                    <div className="md-form md-outline my-3">
                      <input type="text" id="name" className="form-control" placeholder="Your name" />
                      {/* <label htmlFor="name">Your name</label> */}
                    </div>
                    {/* <!-- Email --> */}
                    <div className="md-form md-outline my-3">
                      <input type="text" id="email" className="form-control" placeholder="Your email address" />
                      {/* <label htmlFor="email">Your email address</label> */}
                    </div>
                    {/* <!-- Message --> */}
                    <div className="md-form md-outline my-3">
                      <textarea id="message" className="md-textarea form-control" name="" cols="30" rows="10" placeholder="Your message"></textarea>
                      {/* <label htmlFor="message">Your message </label> */}
                    </div>

                    <button type="submit" className="btn rounded-pill button-cta">Submit</button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 offset-md-1 mt-md-4 mb-4 text-white">
                <h5 className="font-weight-bold">Address</h5>
                <p className="mb-0">2311 Main Street</p>
                <p className="mb-0">San Francisco, CA 94200, US</p>
                <p className="mb-4 pb-2">United States</p>

                <h5 className="font-weight-bold">Phone</h5>
                <p className="mb-4 pb-2">+ 1 (415) 230 2311</p>

                <h5 className="font-weight-bold">Email</h5>
                <p>renewalroom@gmail.com</p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact;