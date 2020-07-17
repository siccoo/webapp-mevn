<template>
  <div class="container">
    <h1></h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>LOGIN</h4>
        </div>
        <div class="card-body">
          <form @click.prevent="loginUser">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" placeholder="Username" class="form-control" name="username" v-model="username" id="username">
            </div>
            <div class="form-group">
              <label for="username">Password</label>
                <input type="password" placeholder="Password" class="form-control" name="password" v-model="password" id="password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/register" class="card-link">Don't have an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
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