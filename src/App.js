import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import KakeiboSheet from './KakeiboSheet.js';
import PaymentForm from './PaymentForm.js';
import AccountContext from './AccountContext.js';
import LoginForm from './LoginForm.js';

const url = 'https://script.google.com/macros/s/AKfycbxhKsDyuxQkE6ihqU-2QJAeyo1Zt0AU1dSHl8qfg4o8-2yFQVzn/exec'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        isLogin: true,
        id: 'dummy_account'
      },
      loaded: false,
      payments: [],
    }
  }

  init() {
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

  componentDidMount() {
    this.init();
  }

  addPayment(params) {
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
    .then(res => res.json())
    .then(res => {
      if (res.ok) {
        this.init();
      }
    });
  }

  render() {
    return (
      <Router>
        <AccountContext.Provider className="App" value={ this.state.account }> {/* unused */}
          <nav>
            <Link to="/">Home</Link>
            |
            <Link to="/settings/">Settings</Link>
          </nav>

          <Route path="/" exact component={() => this.renderHome()} />
          <Route path="/settings/" component={() => (<p>Settings</p>)} />
        </AccountContext.Provider>
      </Router>
    );
  }

  renderHome() {
    const { loaded, payments } = this.state;
    return loaded ? (
      <div>
          <PaymentForm onPaymentSubmit={ e => this.addPayment(e) } />
          <KakeiboSheet payments={ payments } />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default App;
