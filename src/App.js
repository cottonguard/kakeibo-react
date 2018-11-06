import React, { Component } from 'react';
import './App.css';

import KakeiboSheet from './KakeiboSheet.js';
import PaymentForm from './PaymentForm.js';

const url = 'DUMMY URL !!!!'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      payments: [],
    }
  }

  componentDidMount() {
    fetch(url + '?action=get-payments', {
      method: 'GET',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        loaded: true,
        payments: res.payments
      });
    },
    err => {
      this.setState({
        loaded: true,
        payments: []
      })
    });
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

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        action: 'add-payment',
        ...params,
      })
    })
    .then(res => res.json());
  }

  render() {
    const { loaded, payments } = this.state;
    return loaded ? (
      <div className="App">
        <PaymentForm onPaymentSubmit={ e => this.addPayment(e) }/>
        <KakeiboSheet payments={ payments }/>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default App;
