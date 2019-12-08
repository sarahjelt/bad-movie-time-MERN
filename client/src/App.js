import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './containers/Home/Home';
import NoMatch from './containers/NoMatch/NoMatch';
import Calendar from './containers/Calendar/Calendar';
import Saved from './containers/Saved/Saved';
import AuthPage from './containers/AuthPage/AuthPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='main-container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/saved' component={Saved} />
            <Route exact path='/login' component={AuthPage} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
