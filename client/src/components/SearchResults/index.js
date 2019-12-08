import React from 'react';

export const SearchResults = props => {
  return (
    <div className='recipe'>
      <img src={props.picture} alt={props.name} />
      <p><a href={props.url}>{props.name}</a></p>
      <i
        onClick={() => props.handleAdd(props.name, props.id, props.url, props.picture)}
        className='add-recipe medium material-icons waves-effect waves-light'
        dataid={props.id}>
          add_circle
      </i>
    </div>
  )
};