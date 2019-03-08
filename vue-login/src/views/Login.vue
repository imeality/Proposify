<template>
  <v-form column>
    <v-flex xs6 offset-xs3>
        <br>
        <h1>Admin Login </h1>
        <br>
        <v-text-field label="Email" type="email" v-model= "email"></v-text-field>
        <br>
        <v-text-field label="Password" type="password" v-model= "password"></v-text-field>
        <br>
        <div class="danger-alert"  />
        <br>
        <v-btn dark class="cyan" @click= "login">
          Login
        </v-btn>
    </v-flex>
  </v-form>
  
</template>

<script>
import http from '@/api'
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
      ...mapState([
        'loggingIn',
        'loginError',
        'accessToken'
      ])
    },
  methods: {
    ...mapActions([
        'doLogin'
      ]),
    login() {
          this.doLogin({
          email: this.email,
          password: this.password
        })
       var data = {
        email: this.email,
        password: this.password,
      }
      console.log(data);
      http
        .get('/login', data)
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

<style scoped>
</style>
