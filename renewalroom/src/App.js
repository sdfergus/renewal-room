import './App.css';
import React, { Component } from "react";
import { ServicesData } from './services';
import Nav from './navbar';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      selectOption: 'Normal',
      ServicesList: ServicesData
    }
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
          serviceItems={this.state.ServicesList}
          // addItem={this.handleAddedItem}
          // removeItem={this.handleRemovedItem}
          displayCartItems={this.handleCartDisplay()}
          cartTotal={this.handleCartTotal()}
          // handleSelect={this.handleSelect}
          selectOption={this.state.selectOption}
        />
      </div>
    );
  }
}

export default App;
