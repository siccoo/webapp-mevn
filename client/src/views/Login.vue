<template>
  <div class="container">
    <h1></h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>LOGIN</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="loginUser">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" placeholder="Username" class="form-control" name="username" v-model="username" id="username">
            </div>
            <div class="form-group">
              <label for="username">Password</label>
                <input type="password" placeholder="Password" class="form-control" name="password" v-model="password" id="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/register" class="card-link">Don't have an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(['login']),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.login(user)
        .then(res => {
          if(res.data.success) {
            this.$router.push("/profile");
          }
        })
          .catch(err => {
            console.log(err)
          });
      // console.log(this.username, this.password);
    }
  }
}
</script>

<style>
.card {
  width: 70%;
  border-radius: none;
}

.btn {
  border-radius: none;
}

.form-control {
  border-radius: none;
}

</style>