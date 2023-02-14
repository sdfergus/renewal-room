import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SortPrice from './sortPrice';

function DisplayServices( props ) {
  const [ show, setShow ] = useState( false );  //to show modal - initial variable state is false
  const [ showData, setShowData ] = useState( {} ); //initial product showing is an empty obj

  //handle calling from event clicks
  const handleClose = () => setShow( false );  //hides modal
  const handleShow = ( product ) => {   //shows product modal
    setShow( true );
    setShowData( product );
  }

  return (
    <div className="Product-items">
      <SortPrice
        handleSelect={props.handleSelect}
        selectOption={props.selectOption}
      />
      <ListGroup>
        {props.serviceItems.map( ( service ) => (
          <ListGroupItem
            className='List-items py-3'
            key={service.id}
          >
            <div className='Item-name mb-2'>
              {service.service}
              <span className="text-danger mx-3">${service.price}</span>
            </div>
            <span className='Item-contents'>
              <img
                src={service.image}
                alt={service.alt}
                className='Item-img'
                onClick={() => handleShow( service )} />
              <span className="Add-Rm-Btns">
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  className="fa-2x mx-3"
                  onClick={() => {
                    props.addItem( service );
                  }
                  }
                />
                <FontAwesomeIcon
                  icon={faSquareMinus}
                  className="fa-2x"
                  onClick={() => service.quantity === 0 ? service.quantity = 0 : props.removeItem( service )}
                />
              </span>
              <div className='Quantity-contents mx-4'>
                Quantity
                <span className='Quantity-box'>{service.quantity}</span>
              </div>
            </span>
          </ListGroupItem>
        ) )}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showData.img}
            width="350"
            alt={showData.alt}
            className="mx-5"
          />
          <p><span className="text-dark">Ratings: </span>{showData.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DisplayServices;