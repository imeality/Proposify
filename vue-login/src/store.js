import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    accessToken: localStorage.getItem('access_token') || '',
    currentUser: {}
  },
  mutations: {

  },
  actions: {
    retrieveToken (context, credentials) {
      axios.get('/login', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
