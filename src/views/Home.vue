<template>
  <div class="home">
    <landing />
  </div>

</template>

<script>

import landing from './landing.vue'

export default {
  name: 'Home',
  components: {
    landing
  }
}
</script>

<style scoped>
.home{
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/images/Background_pic.webp);
  background-size: cover;
  height: 100vh;
}
@media (max-width: 760px){
  .home{
    background-size:cover;
    height: 100vh;
  }
}


</style>

  