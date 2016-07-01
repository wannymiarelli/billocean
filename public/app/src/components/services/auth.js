export default {
  user: {
    profile: null,
    authenticated: true
  },

  setUser(user) {
    this.user.profile = user;
    this.user.authenticated = true;
    localStorage.setItem('token', user.token);
    localStorage.setItem('profile', JSON.stringify(user.user));
  },

  unsetUser() {
    this.user.profile = null;
    this.user.authenticated = false
  },

  getUser() {
    return JSON.parse(localStorage.getItem('profile'));
  },

  getToken() {
    return 'Bearer ' + localStorage.getItem('token');
  }
}
