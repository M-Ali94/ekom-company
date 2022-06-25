<template>
  <div>
  <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style>
h1 {
  margin: 40px 0 !important;
  text-align: center;
}
</style>
