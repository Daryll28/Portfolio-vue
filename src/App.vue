<template>
<Nav />

  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/jobs">Jobs</router-link>

  </div> -->

  

  <router-view/>
</template>

<script>
import Nav from './views/nav.vue'

export default {
  name: 'App',
  components: { Nav }
}
</script>


<style>
#app {

  overflow:none;
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
::-webkit-scrollbar {
  width: 14px;
}



 
 
::-webkit-scrollbar-thumb {
  background: blue; 
  color: red;
  border-radius: 10px;
  border: 2px solid red;

}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00ff8c;
}

</style>
