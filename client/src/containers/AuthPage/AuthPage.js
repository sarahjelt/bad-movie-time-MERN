import React from 'react';
import { SignUp } from '../../components/SignUp';
import { SignIn } from '../../components/SignIn';
import API from '../../utils/api'

class AuthPage extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  state = {
    loginEmail: '',
    loginPassword: '',
  }

  handleInputChange = (event, inputName) => {
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleButtonPress = (value, buttonName) => {
    console.log(['you logged in as', this.state.loginEmail, this.state.loginPassword])

    let userData = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    API.authenticateUser(userData)
      .then(res => console.log(res))
  }

  render() {
    return (
      <main>
      <div className='container'>
        <a href="#" id="signup" name="signup"></a>
        <h1>Sign Up</h1>
        <SignUp
          handleInputChange={this.handleInputChange}
          handleButtonPress={this.handleButtonPress}
        />
        <a href="#" id="signin" name="signin"></a>
        <h1>Sign In</h1>
        <SignIn
          handleInputChange={this.handleInputChange}
          handleButtonPress={this.handleButtonPress}
        />
      </div>
      </main>
    )
  }
}


export default AuthPage;