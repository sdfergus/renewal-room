import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

function About() {

  return (
    <div className="p-5 About-section">
      <h1 className="text-center mb-2 text-white">About us</h1>
      <ListGroup className="container">
        <ListGroupItem
          className='List-items py-3 shadow-sm p-3 mb-5 bg-white rounded'
        >
          <div className='text-left'>
            <p className="p-5 text-align-left lh-lg">
              Welcome to Renewal Room Spa, where we believe that relaxation and rejuvenation of mind and body are essential to a happy and healthy life. Our team of highly trained professionals is committed to providing you with the best spa experience possible.

              At Renewal Room Spa, we offer a wide variety of services to meet your individual needs. Whether you are looking for a massage to release tension, a facial to brighten your complexion, or a yoga class to improve your flexibility and strength, we have something for you. Our menu of services includes Swedish, deep tissue, hot stone, aromatherapy, and sports massages, as well as basic, deep cleaning, anti-aging, and revitalizing facials. We also offer a range of body treatments, including scrubs, wraps, and hydrotherapy, as well as nail services such as basic, spa, and gel manicures and pedicures. Additionally, we provide waxing services for legs, arms, bikini, and facial areas.

              Our team is made up of professionals who are passionate about what they do. Each member of our staff has undergone extensive training and is committed to providing you with exceptional service. From Allison, who specializes in manicures, pedicures, and meditation, to Brian, who provides deep tissue massages, to Kristen, who offers facials and waxes, and John, who specializes in softer tissue massages and meditation, our team is dedicated to helping you achieve your wellness goals.

              We believe that relaxation and rejuvenation should be accessible to everyone. That's why we strive to keep our prices affordable and our services accessible. We also offer special packages and promotions to help you save even more.

              At Renewal Room Spa, we are committed to creating a warm and welcoming environment where you can relax and unwind. Whether you're here for a quick treatment or a full day of pampering, we are here to help you feel renewed and refreshed. Thank you for choosing Renewal Room Spa, and we look forward to seeing you soon!
            </p>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>

  )
}

export default About;