import React from 'react';
import Slider from 'react-slick';

export const Slides = props => {
  if (!props.bool) {
    return (
      <div>
      <h4 className='slide-header'>Try one of these!</h4>
      <Slider {...props}>
        {stockImages.map((result, index) => (
          <div className='slides' key={index}>
            {/* <a href={result.url} target='_blank'> */}
              <img src={result.picture} />
            {/* </a> */}
          </div>
          )
        )}
      </Slider>
      </div>
    )
  }

  return (
    <div>
    <h4 className='slide-header'>Remember these?</h4>
    <Slider {...props}>
      {props.saved.map((result, index) => (
        <div className='slides' key={index} id={result._id}>
          <a href={result.item.url} target='_blank'>
            <img src={result.item.picture} />
          </a>
        </div>
      ))}
    </Slider>
    </div>
  )
}

const stockImages = [
  {
    // 'url': '',
    'picture': 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/was0SVsr1a42jCb9Ln4M3UphZhs.jpg'},
  {
    // 'url': '',
    'picture': 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/aUC39cFC2KO8CJ0EV0ijIJRr3PT.jpg'
  },
  {
    // 'url': '',
    'picture': 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/rSCoGxDIN1zTcjJe5IUik1ckdBC.jpg'
  },
  {
    // 'url': '',
    'picture': 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/Z7lFXxUyQws1nkNDQQAb3B2BQF.jpg'
  },
  {
    // 'url': '',
    'picture': 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gZsIgK2W9K6e1ebNro3WT7u5yGX.jpg'
  },
  {
    // 'url': '',
    'picture': 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/nTuoRF1nDINOIWotNUmdKmIBPEF.jpg'
  }
];