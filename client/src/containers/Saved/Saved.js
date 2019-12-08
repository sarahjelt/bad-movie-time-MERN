import React from 'react';
import { SavedMeal } from '../../components/SavedMeal';
import AuthService from '../../components/Modules/AuthService';
import API from '../../utils/api';

class Saved extends React.Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  };

  state = {
    searchValue: '',
    savedMeals: [],
    userEmail: '',
    userId: '',
    userName: ''
  };

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.setUserInfoInState();
    } else {
      window.location.assign("/");
    }
  };

  componentDidMount() {
    this.loadUserSaved()
  };

  setUserInfoInState = () => {
    let userInfo = this.Auth.getProfile();
    //console.log(userInfo);

    if (!userInfo) {
      window.location.assign("/")
      //console.log('no user logged in')
    } else {
      this.setState({
        userEmail: userInfo.email,
        userId: userInfo._id,
        userName: userInfo.name
      })
    }
  }

  loadUserSaved = (userId) => {

    API.getSavedMeals(this.state.userId)
      .then(res => {
        if (res.data === null) {
          return null
        } else {
          this.setState({
            savedMeals: res.data.planner
          })
        }
      })
  };

  render() {
    return (
      <main>
        <div className='container'>
          <div>
            <h1>Saved Movies</h1>
          </div>
          <div id='saved-recipes'>
            <SavedMeal
              saved={this.state.savedMeals}
            />
          </div>
        </div>
      </main>
    )
  }
}

export default Saved;