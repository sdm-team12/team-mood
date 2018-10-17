class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token, user, userName) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('userName', userName);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    // destroy session on server
    const axios = require('axios');
    axios.get('/auth/logout')
        .then((response) => {
          console.log(response.data);
    });
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

  static getUser() {
    return localStorage.getItem('user');
  }

  static getUserName() {
    return localStorage.getItem('userName');
  }

}

export default Auth;