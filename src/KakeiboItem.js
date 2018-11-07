import React, { Component } from 'react';

export default props => {
  return (
    <div className="kakeibo-payment-item">
      { props.product }
      <strong>
        { props.price }
      </strong>
      円
    </div>
  );
}
