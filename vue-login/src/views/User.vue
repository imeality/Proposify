<template>
  <div>
    <h2>User Page</h2>
    <form>
      <div>
          <label>Name</label>
          <input  type="text" v-model= "name">
      </div><br>
      <div>
          <label>Email</label>
          <input  type="email" v-model= "email">
      </div><br>
      <div>
          <label>Password</label>
          <input  type="password" v-model= "password">
      </div><br>
      <div>
          <label>Mobile No.</label>
          <input  type="tel" v-model= "mob">
      </div><br>
      <div>
          <button type="submit" v-on:click= "saveUser">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import http from '../httpa'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      mob: ''
    }
  },
  methods: {
    /* eslint-disable no-console */
    saveUser () {
      var data = {
        name: this.name,
        email: this.email,
        password: this.password,
        mob: this.mob
      }
      http
        .post('/user', data)
        .then(response => {
          this.id = response.data.id
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
      this.submitted = true
    }
  }
}
</script>
