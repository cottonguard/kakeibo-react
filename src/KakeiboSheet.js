import React, { Component } from 'react';

export default function(props) {
  return (
    <div className="kakeibo-sheet">
      { props.payments.map(item => (
        <div className="kakeibo-payment-item">
          { item.product } - { item.price }
        </div>
      )) }
    </div>
  );
}
