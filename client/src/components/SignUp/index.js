import React from 'react';
import { Input } from '../Atoms/Input'
import { FormButton } from '../Atoms/FormButton'
import API from '../../utils/api';

export class SignUp extends React.Component {

  state = {
    signUpName: '',
    signUpEmail: '',
    signUpPassword: ''
  };

  handleInputChange = (event, inputName) => {
      this.setState({
          [inputName]: event.target.value
      })
  };

  handleButtonPress = (value, buttonName) => {
    let userData = {
      name: this.state.signUpName,
      email: this.state.signUpEmail,
      password: this.state.signUpPassword
    }

    API.createNewUser(userData)
      .then(res => console.log(res))
      window.location.assign('/login#signin');
  };

  render() {
    return (
      <div>
        <form className='margin-top'>
          <Input
            inputType='text'
            inputName='signUpName'
            inputLabel='Name'
            placeholder='name'
            handleInputChange={this.handleInputChange}
          />
          <Input
            inputType='email'
            inputName='signUpEmail'
            inputLabel='Email'
            placeholder='email'
            handleInputChange={this.handleInputChange}
          />
          <Input
            inputType='password'
            inputName='signUpPassword'
            inputLabel='Password'
            placeholder='password'
            handleInputChange={this.handleInputChange}
          />
          <FormButton
            buttonName='signUpButton'
            buttonText='Sign Up'
            handleButtonPress={this.handleButtonPress}
          />
        </form>
      </div>
  )}
}