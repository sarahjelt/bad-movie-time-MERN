import React from 'react';

export const Input = (props) => (
  <div className='input-field'>
    <input
      id={props.inputName}
      type={props.inputType}
      className='validate'
      placeholder={props.placeholder}
      onChange={(e) => props.handleInputChange(e, props.inputName)}
    />
    {/*<label htmlFor={props.inputName}>{props.inputLabel}</label>*/}
  </div>
)

