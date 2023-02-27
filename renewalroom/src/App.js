import './App.css';
import React, { Component } from "react";
import { ServicesData } from './services';
import Nav from './navbar';
import { TeamData } from './teamData2';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      selectOption: 'Normal',
      ServicesList: ServicesData,
      TeamList: TeamData,
      members: [],
      isLoading: true
    }

    this.ctaRef = React.createRef();
  }

  scroll = ( ref ) => {
    ref.current.scrollIntoView( { behavior: 'smooth' } )
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

  handleCartDisplay = () => {

    const currTeamList = this.state.TeamList;
    const filteredBookings = Object.entries( currTeamList ).filter( ( team ) => {
      if ( team[ 1 ].bookings.length > 0 ) {
        return ( Object.entries( team[ 1 ] ) );
      }
      return false;
    } );
    return filteredBookings;
  }

  handleCartTotal = () => {
    const currList = this.state.TeamList;

    const cartTotal = currList.reduce( ( prevVal, currVal ) => {
      return prevVal + currVal.bookings.length;
    }, 0 )
    return cartTotal;
  }

  handleBookedItem = ( booking ) => {
    const currTeamList = this.state.TeamList;
    const teamMember = booking.name;
    const bookingsArr = currTeamList[ teamMember ].bookings;
    bookingsArr.push( booking );
    this.setState( bookingsArr );
    // return bookingsArr;
  }

  handleFacialsFilter = () => {
    const currList = this.state.TeamList;

    const facialsTeam = Object.entries( currList ).reduce( ( filtered, member ) => {
      if ( Object.keys( member[ 1 ].services ).includes( 'facials' ) ) {
        filtered.push( member );
      }
      return filtered;
    }, [] );
    return facialsTeam
  }

  render() {
    return (

      <Nav
        teamList={this.state.TeamList}
        members={this.state.members}
        servicesList={this.state.ServicesList}
        // addItem={this.handleAddedItem}
        // removeItem={this.handleRemovedItem}
        displayCartBookings={this.handleCartDisplay()}
        cartTotal={this.handleCartTotal()}
        // handleSelect={this.handleSelect}
        selectOption={this.state.selectOption}
        scroll={this.scroll}
        ctaRef={this.ctaRef}
        handleFacialsFilter={this.handleFacialsFilter()}
        handleBookedItem={this.handleBookedItem}
      />

    );
  }
}

export default App;
