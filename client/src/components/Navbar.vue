<template>
  <section class="nav-section">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container ">
      <router-link class="navbar-brand" to="/">EasyBank</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <!-- <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> -->
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home
            <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile
            </router-link>
          </li>
          <li class="nav-item">
            <a to="/logout" class="nav-link">Logout
            </a>
          </li>
              
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
    </section>  
</template>

<script>
export default {
    
}
</script>

<style>

</style>