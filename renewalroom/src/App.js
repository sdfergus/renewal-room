import './App.css';
import React, { Component } from "react";
import { ServicesData } from './services';
import Nav from './navbar';
import { TeamData } from './team';

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

  render() {
    return (
      <div>
        <Nav
          teamInfo={this.state.TeamList}
          serviceItems={this.state.ServicesList}
          // addItem={this.handleAddedItem}
          // removeItem={this.handleRemovedItem}
          displayCartItems={this.handleCartDisplay()}
          cartTotal={this.handleCartTotal()}
          // handleSelect={this.handleSelect}
          selectOption={this.state.selectOption}
          scroll={this.scroll}
          ctaRef={this.ctaRef}
        />
      </div>
    );
  }
}

export default App;
