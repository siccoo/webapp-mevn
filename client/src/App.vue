<template>
  <div id="app">
    <Navbar />
    <!-- <div class="container">
      <router-view/>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>
