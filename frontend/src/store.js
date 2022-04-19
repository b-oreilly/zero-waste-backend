import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    SET_STATUS(state, loggedIn) {
      state.loggedIn = loggedIn
    }
  },
  actions: {
    login(context, credentials) {
      axios
        /* This is posting the login information to the server. */
        .post(`/login`, {
          email: credentials.email,
          password: credentials.password
        })
        /* This is setting the token, userID, and user in localStorage 
        and triggering a mutation of the loggedIn state. */
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userID', response.data.userID)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          this.user = console.log(response.data.user)
          context.commit('SET_STATUS', true)
          router.push('/account');
        })
        /* This is catching any errors that occur when posting the login information to the server. */
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          if (error.response.status == 401) {
            this.passwordError = 'Incorrect email/password.'
            alert('Incorrect email/password.')
          }
        })
    },
    /* This is clearing the local storage upon logout and redirecting to the home page. */
    logout(context) {
      localStorage.removeItem('token')
      localStorage.removeItem('userID')
      localStorage.removeItem('user')
      context.commit('SET_STATUS', false)
      router.push('/').catch(() => {});
    },
    register(context, credentials) {
      axios
        /* This is posting the registration information to the server. */
        .post(`/register`, {
          first_name: credentials.first_name,
          last_name: credentials.last_name,
          email: credentials.email,
          username: credentials.username,
          locationID: credentials.locationID,
          password: credentials.password
        })
        /* This is setting the token, userID, and user in localStorage 
        and triggering a mutation of the loggedIn state. */
        .then(response => {
          console.log(response.token)
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userID', response.data.userID)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          context.commit('SET_STATUS', true)
        })
        /* This is catching any errors that occur when posting the register information to the server. */
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message)
          router.push('/register').catch(() => {});
        })
    }
  },
  getters: {}
})