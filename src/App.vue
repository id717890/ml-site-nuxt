<template>
  <div id="app">
    <Header/>
      <router-view />  <!-- параметр для передачи страниц в эту область -->
    <Footer />
  </div>
</template>











<script>

import '@/assets/css/main.css'
 
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>



<style>
/* #app {

} */
</style>
