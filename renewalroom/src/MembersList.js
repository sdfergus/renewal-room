import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class MembersList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      members: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState( { isLoading: true } );

    fetch( 'api/members' )
      .then( response => response.json() )
      .then( data => this.setState( { members: data, isLoading: false } ) );

  }

  removeMember = async ( id ) => {
    await fetch( `/api/member/${ id }`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    } )
    console.log( 'Remove done!' );
    //update inventory state minus removed item
    let updatedMembers = [ ...this.state.members ].filter( i => i._id !== id );
    this.setState( { members: updatedMembers } );
  }

  render() {
    const { members, isLoading } = this.state;

    if ( isLoading ) {
      return <p>Loading...</p>;
    }

    const memberList = members.map( member => {
      return <tr key={member._id}>
        {/* <td style={{ whiteSpace: 'nowrap' }}>{member.id}</td> */}
        <td>{member.name}</td>
        <td>{member.services}</td>
        <td>{member.bookings}</td>
        <td>
          <ButtonGroup>
            <Button
              size='sm'
              color='info'
              tag={Link}
              to={'/members/' + member._id}
            >
              Edit
            </Button>
            <Button
              size='sm'
              color='warning'
              onClick={() => this.removeMember( member._id )}
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
              to='/members/new'
            >
              Add Member
            </Button>
            <h3>Member List</h3>
            <Table className='mt-4'>
              <thead>
                <tr style={{ borderBottom: '1.2pt solid black' }}>
                  <th width='20%'>Member Name</th>
                  <th width='15%'>Services</th>
                  <th width='15%'>Bookings</th>
                </tr>
              </thead>
              <tbody>
                {memberList}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    )
  }
}

export default MembersList;