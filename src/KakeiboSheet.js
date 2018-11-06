import React, { Component } from 'react';

export default function(props) {
  return (
    <div className="kakeibo-sheet">
      {
        props.payments.map(item => (
          <div className="kakeibo-payment-item" key={ item.id }>
            { item.product }
            <strong>
              { item.price }
            </strong>
            円
          </div>
        ))
      }
    </div>
  );
}
