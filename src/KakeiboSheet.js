import React, { Component } from 'react';
import KakeiboItem from './KakeiboItem';

export default props => {
  return (
    <div className="kakeibo-sheet">
      {
        props.payments.map(item => (
          <KakeiboItem key={ item.id } { ...item } />
        ))
      }
    </div>
  );
}
