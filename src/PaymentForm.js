import React, { Component } from 'react';

import TextboxWithIcon from './TextboxWithIcon'

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
  }

  render() {
    const { password, product, price } = this.state;

    return (
      <div className="payment-form">
        <div>
          <input type="text" placeholder="パスワード(仮)"
           value={ password }
           onChange={ e => this.setState({ password: e.target.value }) }
          />
        </div>

        <div>
          <TextboxWithIcon placeholder="なにに" className="asdf"
           icon="🍔"
           value={ product }
           onChange={ e => this.setState({ product: e.target.value }) }
          />
        </div>

        <div>
          <TextboxWithIcon type="text" placeholder="いくら"
           icon="💰"
           value={ price }
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
