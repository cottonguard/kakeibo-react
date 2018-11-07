import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',

      product: '',
      price: ''
    }
  }

  handleSubmit(e) {
    this.props.onPaymentSubmit({
      password: this.state.password,

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
          <input type="text" placeholder="パスワード(仮)"
           value={ this.state.password }
           onChange={ e => this.setState({ password: e.target.value }) }
          />
        </div>

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
