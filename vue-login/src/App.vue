<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">ADMIN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="isLoggedIn">  <v-btn flat><a @click="logout">Logout</a></v-btn></span>
      <span v-else> 
        <router-link class="home" tag="span" :to="{ name: 'login' }">
      <v-btn flat>
        Login
      </v-btn>
      </router-link>
        </span>
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

export default {
  name: 'App',
  components: {
    HelloWorld,
    login,
    user
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
}

</script>
