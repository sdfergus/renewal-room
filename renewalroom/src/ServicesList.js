import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class ServicesList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      services: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState( { isLoading: true } );

    fetch( 'api/services' )
      .then( response => response.json() )
      .then( data => this.setState( { services: data, isLoading: false } ) );

  }

  removeService = async ( id ) => {
    await fetch( `/api/service/${ id }`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    } )
    console.log( 'Remove done!' );
    //update inventory state minus removed item
    let updatedServices = [ ...this.state.services ].filter( i => i._id !== id );
    this.setState( { services: updatedServices } );
  }

  render() {
    const { services, isLoading } = this.state;

    if ( isLoading ) {
      return <p>Loading...</p>;
    }

    const servicesList = services.map( service => {
      return <tr key={service._id}>
        {/* <td style={{ whiteSpace: 'nowrap' }}>{service.id}</td> */}
        <td>{member.name}</td>
        <td>{member.services}</td>
        <td>{member.bookings}</td>
        <td>
          <ButtonGroup>
            <Button
              size='sm'
              color='info'
              tag={Link}
              to={'/services/' + service._id}
            >
              Edit
            </Button>
            <Button
              size='sm'
              color='warning'
              onClick={() => this.removeService( service._id )}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    } )
    return (
      <div>
        <Container fluid>
          <div className='float-right'>
            <Button
              color='primary'
              className='my-4'
              tag={Link}
              to='/services/new'
            >
              Add Service
            </Button>
            <h3>Service List</h3>
            <Table className='mt-4'>
              <thead>
                <tr style={{ borderBottom: '1.2pt solid black' }}>
                  <td>{member.name}</td>
                  <td>{member.services}</td>
                  <td>{member.bookings}</td>
                </tr>
              </thead>
              <tbody>
                {servicesList}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    )
  }
}

export default ServicesList;