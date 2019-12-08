import React from 'react';
import { Input } from '../Atoms/Input'
import { FormButton } from '../Atoms/FormButton'
import API from '../../utils/api';
import AuthService from '../Modules/AuthService';
import Materialize from 'materialize-css';

export class SignIn extends React.Component {
  
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  }

  state = {
    signInEmail: '',
    signInPassword: ''
  }

  handleInputChange = (event, inputName) => {
      this.setState({
          [inputName]: event.target.value
      })
  }

  handleButtonPress = (value, buttonName) => {

    let userData = {
      email: this.state.signInEmail,
      password: this.state.signInPassword
    };

    API.authenticateUser(userData)
      .then(res => {
        this.Auth.setToken(res.data.token);
        window.location.assign('/');
      }).catch(function(err) {
        console.log(userData.email, userData.password);
        Materialize.toast('Wrong email/password combination!', 4000, 'red', 'right')
      });
  }

  render() {
    return (
      <form className='margin-top'>
        <Input
          inputType='email'
          inputName='signInEmail'
          inputLabel='email'
          placeholder='email'
          handleInputChange={this.handleInputChange}
        />
        <Input
          inputType='password'
          inputName='signInPassword'
          inputLabel='password'
          placeholder='password'
          handleInputChange={this.handleInputChange}
        />
        <FormButton
          buttonName='SignInButton'
          buttonText='Sign In'
          handleButtonPress={this.handleButtonPress}
        />
      </form>
  )}
}