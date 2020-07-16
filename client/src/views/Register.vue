<template>
  <div class="container">
    <h1></h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>REGISTER</h4>
        </div>
        <div class="card-body">
          <form action="">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" placeholder="Username" class="form-control" name="username" v-model="username" id="username">
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" placeholder="Name" class="form-control" name="name" v-model="name" id="name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" placeholder="Email" class="form-control" name="email" v-model="email" id="email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
                <input type="password" placeholder="Password" class="form-control" name="password" v-model="password" id="password">
            </div>
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" class="form-control" name="confirm_password" v-model="confirm_password" id="confirm_password">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link">Already  have an account?</router-link>
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
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    }
  }
}
</script>