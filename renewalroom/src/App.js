import './App.css';
import React, { Component } from "react";
import { ServicesData } from './services';
import Nav from './navbar';
import { TeamData } from './teamData';

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
    const currList = this.state.ServicesList;
    const cartItems = currList.filter( ( items ) => {
      return items.quantity > 0
    } )
    return cartItems;
  }

  handleCartTotal = () => {
    const currList = this.state.ServicesList;
    const cartTotal = currList.reduce( ( prevVal, currVal ) => {
      return prevVal + currVal.quantity;
    }, 0 )
    return cartTotal;
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

    // console.log( 'Filter function: ', this.handleFacialsFilter() );

    // console.log( 'LIST IN APP.js: ', Object.entries( this.state.TeamList ).forEach( ( member ) => {
    //   // console.log( Object.keys( member[ 1 ].services ) )
    //   if ( Object.keys( member[ 1 ].services ).includes( 'massages' ) ) {
    //     console.log( member );
    //   }
    // } ) );

    return (
      <div>
        <Nav
          teamList={this.state.TeamList}
          servicesList={this.state.ServicesList}
          // addItem={this.handleAddedItem}
          // removeItem={this.handleRemovedItem}
          displayCartItems={this.handleCartDisplay()}
          cartTotal={this.handleCartTotal()}
          // handleSelect={this.handleSelect}
          selectOption={this.state.selectOption}
          scroll={this.scroll}
          ctaRef={this.ctaRef}
          handleFacialsFilter={this.handleFacialsFilter()}
        />
      </div>
    );
  }
}

export default App;
