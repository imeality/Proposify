<template>
  <v-form column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <br>
        <h1>Admin Login </h1>
        <br>
        <v-text-field label="Email" v-model= "email"></v-text-field>
        <br>
        <v-text-field label="Password" type="password" v-model= "password"></v-text-field>
        <br>
        <div class="danger-alert" v-html= "error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click= "login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-form>
  
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>












<!--<template>
  <div>
    <h2>Login Page</h2>
    <form @submit= "login">
      <div>
          <label>Email :</label>
          <input placeholder="Your email" type="email" v-model= "email">
      </div><br>
      <div>
          <label>Password :</label>
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
      this.$store.dispatch('login', { email, password }).then(() => this.$router.push('/'))
      .catch(err => console.log(err))
    }
  }
}
</script>-->
