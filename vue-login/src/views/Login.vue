<template>
  <v-form column>
    <v-flex xs6 offset-xs3>
        <br>
        <h1>Admin Login </h1>
        <br>
        <v-text-field label="Email" type="email" v-model= "admin_email"></v-text-field>
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

export default {
  data () {
    return {
      admin_email: '',
      password: '',
    }
  },
  methods:{
    login() {
       var data = {
        admin_email: this.admin_email,
        password: this.password,
      };
      console.log(data);
      http
        .get('/login', data)
        .then(response => {
          console.log("done");
          console.log(response);
        })
        .catch(err => {
          console.log(err)
        })
        this.$store
        .dispatch('login', data)
        .then(() => this.$router.push("/"))
        
    }  
  }
}
</script>

<style scoped>
</style>
