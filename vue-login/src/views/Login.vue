<template>
  <div class="Login">
    <form  @submit= "checkForm" action="/something">
      
    

    <label>Username</label><br><br>
    <input type="text" name="username" id="name" v-model= "username">{{ username }}<br><br>
    <label>Password</label><br><br>
    <input type="password" name="password" id="pass" v-model= "password">{{ password }}<br><br>
    <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    username='',
    password=''
  },
    methods:{
checkForm: function (e) {
      if (this.username && this.password  ) {
        return true;
      }

      this.errors = [];

      if (!this.username) {
        this.errors.push('Name required.');
      }

      e.preventDefault();
    }
  } 
}
/*methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }*/
  
</script>