import React, { Component } from 'react';
import { actions } from './data/store.js';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      price: ''
    }
  }

  handleSubmit(e) {
    this.props.onPaymentSubmit({
      product: this.state.product,
      price: this.state.price
    });
    /* *flux*
    actions.addPayment({
      product: this.state.product,
      price: this.state.price
    })
    */
  }

  render() {
    return (
      <div className="payment-form">
        <div>
          🍔
          <input type="text" placeholder="なにに"
           value={ this.state.product }
           onChange={ e => this.setState({ product: e.target.value }) }
          />
        </div>
        <div>
          💰
          <input type="text" placeholder="いくら"
           value={ this.state.price }
           onChange={ e => this.setState({ price: e.target.value }) }
          />
        </div>
        <div>
          <button onClick={ e => this.handleSubmit(e) }>
            💸 つかった！
          </button>
        </div>
      </div>
    );
  }
}
