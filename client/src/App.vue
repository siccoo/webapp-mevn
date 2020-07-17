<template>
  <div id="app">
    <Navbar />
    
    <div class="container">
      <Errors v-if="error" :msg="error" />
      <router-view/>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";
export default {
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(["error"])
  }
}
</script>

<style>

</style>
