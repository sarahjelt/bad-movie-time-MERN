import React from 'react';

class Calendar extends React.Component {

  state = {
    searchValue: ''
  }

  handleInputChange = event => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <main>
        <div className='container'>
          <div>
            <h1>Calendar</h1>
          </div>
          <div id='calendar-goes-here'></div>
          
        </div>
      </main>
    )
  }
}

// const formActionDeterminer = searchValue => {
//   return `/search/${searchValue}`
// };

export default Calendar;