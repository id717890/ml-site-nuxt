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


 document.addEventListener("DOMContentLoaded", function(event) { 

  var acc = document.getElementsByClassName("pop_title");

  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
});

</script>



<style>
/* #app {

} */
</style>
