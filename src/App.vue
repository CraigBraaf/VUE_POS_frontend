<template>
  
  <div id="nav">
  <navbar/>
  </div>
  <router-view/>

</template>
<script>
import Navbar from "@/components/Navbar.vue"

export default {
  components: {
    Navbar,
  }
}

</script>
<style>

/* body {
  background-image: url('https://wallpaperaccess.com/full/7761092.jpg');
} */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;
  font-size: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f218b1;
}
</style>
