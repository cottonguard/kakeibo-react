import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <form onSubmit={ e => {
          e.preventDefault();
          console.log(e);
        }
      }>
        <button>
          Sign in
        </button>
      </form>
    );
  }
}
