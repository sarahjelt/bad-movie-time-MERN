import decode from 'jwt-decode';

export default class AuthService {
  // initializing important variables
  constructor(domain) {
    this.domain = 'https://secure-shore-00548.herokuapp.com/' || 'http://localhost:3001' // API server domain -- HEROKU ONE WILL NEED TO CHANG TO WHATEVER DEPLOYED URL IS
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(email, password) {
    // get token from API using fetch
    return this.fetch(`${this.domain}/login`, {
      method: 'POST',
      body: JSON.stringify({
          email,
          password
      })
    }).then(res => {
      this.setToken(res.token) // Setting the token in localStorage
      return Promise.resolve(res);
    })
  }

  loggedIn() {
    // checks if there's a valid saved token
    const token = this.getToken()
    return !!token
  }

  setToken(idToken) {
    // saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // retrieves user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout() {
    // clear user token and profile data from localStorage
    localStorage.removeItem('id_token'); 
    window.location.assign("/");
  }

  getProfile() {
    // use jwt-decode to decode token
    return decode(this.getToken());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) { // success status lies between 200 to 300
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
};