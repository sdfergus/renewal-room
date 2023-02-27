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
      TeamList: TeamData
    }

    this.ctaRef = React.createRef();
  }
  scroll = ( ref ) => {
    ref.current.scrollIntoView( { behavior: 'smooth' } )
  }

  handleCartDisplay = () => {

    const currTeamList = this.state.TeamList;
    const filteredBookings = Object.entries( currTeamList ).filter( ( team ) => {
      if ( team[ 1 ].bookings.length > 0 ) {
        return ( Object.entries( team[ 1 ] ) );
      }
      return false;
    } );

    // console.log( 'handleCartDisplay filtering: ', filteredBookings[ 0 ] );
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

    // console.log( 'NEW LIST in handleBookedItem: ', currTeamList );
    // console.log( 'New Bookings Array: ', bookingsArr );

    // this.handleCartDisplay();
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
    // console.log( 'TEAM LIST in App.js render:', this.state.TeamList );

    // console.log( 'FILTERED BOOKINGS IN App.js', this.handleCartDisplay() );

    return (

      <Nav
        teamList={this.state.TeamList}
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
