import React from 'react';

export const FormButton = (props) => (
  <a
    href='#'
    id={props.buttonName}
    onClick={(e) => props.handleButtonPress(e, props.buttonName)}
    className='waves-effect waves-light btn'
  >
    {props.buttonText}
  </a>
)