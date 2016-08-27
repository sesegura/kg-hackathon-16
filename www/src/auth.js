export default {
  user: {
    auth: false
  },
  // Send a request to the login URL and save the returned JWT
  login(id_user) {
    localStorage.removeItem('id_user')
    this.user.authenticated = true
  },
  logout() {
    localStorage.removeItem('id_user')
    this.user.authenticated = false
  }
}