import React, { Component } from 'react';
import './App.css';

import KakeiboSheet from './KakeiboSheet.js';
import PaymentForm from './PaymentForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
    }
  }

  addPayment(params) {
    this.setState(state => {
      state.payments.push({
        product: params.product,
        price: params.price
      })
      return {
        payments: state.payments
      }
    });
  }

  render() {
    return (
      <div className="App">
        <PaymentForm onPaymentSubmit={ e => this.addPayment(e) }/>
        <KakeiboSheet payments={ this.state.payments }/>
      </div>
    );
  }
}

export default App;
