<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">ADMIN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link class="home" tag="span" :to="{ name: 'login' }">
      <v-btn flat>
        Login
      </v-btn>
      </router-link>

      <router-link class="home" tag="span" :to="{ name: 'user' }">
      <v-btn flat>
        User
      </v-btn>
      </router-link>

      <router-link class="home" tag="span" :to="{ name: 'about' }">
      <v-btn flat>
        About
      </v-btn>
      </router-link>
      
    </v-toolbar>


    <v-content>
       <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import login from './views/Login'
import user from './views/User'
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    HelloWorld,
    login,
    user
  },
   methods: {
    ...mapActions([
      'fetchAccessToken'
    ]),
  },
  created() {
    this.fetchAccessToken();
  }
}
</script>
