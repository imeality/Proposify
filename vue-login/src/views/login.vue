<template>
  <div>
    <h2>Login Page</h2>
    <form @submit= "login">
      <div>
          <label>Email</label>
          <input placeholder="Your email" type="email" v-model= "email">
      </div><br>
      <div>
          <label>Password</label>
          <input placeholder="Password" type="password" v-model= "password">
      </div><br>
      <div>
          <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const email = this.email
      const password = this.password
      this.$store.dispatch('retrieveToken', { email, password }).then(() => this.$router.push('/user'))
    }
  }
}
</script>
