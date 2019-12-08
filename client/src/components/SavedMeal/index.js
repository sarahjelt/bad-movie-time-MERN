import React from 'react';

export const SavedMeal = props => {
  if (props.saved.length === 0) {
    return <h5>No saved movies!</h5>
  } else {
  return props.saved.map((result, index) => (
      <div className='recipe-that-is-saved' key={index} id={result.id}>
        <img src={result.poster_path} className='saved-photo' dataid={result.item.id} alt={result.title} />
        <p><a href={result.url} target='_blank' rel='noopener noreferrer'>{result.name}</a></p>
      </div>
    ))
  }
};