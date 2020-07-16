<template>
  <div class="container">
    <!-- <h1>Login page</h1> -->
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header my-5 text-white bg-primary">
          <h4>LOGIN</h4>
        </div>
        <div class="card-body">
          <form action="">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" placeholder="Username" class="form-control" name="username" v-model="username" id="username">
            </div>
            <div class="form-group">
              <label for="username">Username</label>
                <input type="password" placeholder="Password" class="form-control" name="password" v-model="password" id="password">
            </div>
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