
<template>
  <v-form column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <br>
        <h1>Admin Login </h1>
        <br>
        <v-text-field label="Name" type="text" v-model= "name"></v-text-field>
        <br>
        <v-text-field label="Email" type="text" v-model= "email"></v-text-field>
        <br>
        <v-text-field label="Password" type="password" v-model= "password"></v-text-field>
        <br>
        <v-text-field label="Mobile No." type="text" v-model= "mob"></v-text-field>
        <br>
        <div class="danger-alert" v-html= "error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click= "saveUser">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-form>
  
</template>

<script>
import http from '@/api'
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
          console.log("done")
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>