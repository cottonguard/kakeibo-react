import React, { Component } from 'react';

import './TextboxWithIcon.css';

export default props => (
  <div className="textbox-with-icon-container">
    <span className="textbox-with-icon-icon">
      { props.icon }
    </span>
    <input type="text" value={ props.value } onChange={ props.onChange }
     placeholder={ props.placeholder }
     className="textbox-with-icon-input"/>
  </div>
);
