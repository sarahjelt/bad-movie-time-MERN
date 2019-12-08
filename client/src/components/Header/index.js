import React from 'react';
import AuthService from '../Modules/AuthService';

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  }

  render() {
    return (
    <header>
      <nav className='transparent nav-wrapper'>
        <a href='/' className='brand-logo center'>Bad Movie Time</a>
        <a href='#' data-activates='mobile' className='button-collapse'><i className='material-icons black-text'>menu</i></a>
        <ul id='nav-mobile' className='hide-on-med-and-down'>
          <li>
            <a href='/' title='Home'>Home</a>
          </li>
          {
            (this.Auth.loggedIn() ) ? (
              <div>
                {/*<li>
                  <a href='/calendar'>Calendar</a>
                </li>*/}
                <li>
                  <a href='/saved' title='Saved'>Saved</a>
                </li>
                <li
                  onClick={() => this.Auth.logout()}
                >
                  <a href='#'>Log Out</a>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <a href='/login#signin'>Sign In</a>
                </li>
                <li>
                  <a href='/login#signup'>Sign Up</a>
                </li>
              </div>
            )
          }
        </ul>
        <ul className='side-nav' id='mobile'>
          <li><a href='/'>Home</a></li>
          {
            (this.Auth.loggedIn() ) ? (
              <div>
                {/*<li><a href='/calendar'>Calendar</a></li>*/}
                <li><a href='/saved'>Saved</a></li>
                <li
                  onClick={() => this.Auth.logout()}
                >
                  <a href='#'>Log Out</a>
                </li>
              </div>
            ) : (
              <div>
                <li><a href='/login#signin'>Sign In</a></li>
                <li><a href='/login#signup'>Sign Up</a></li>
              </div>
            )
          }
        </ul>
        {/* <ul className='right'><i className='doodad material-icons'>notifications</i></ul> */}
      </nav>
    </header>
  )}
};