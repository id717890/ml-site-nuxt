<template>
  <div id="app">
    <Header/>
      <router-view />  <!-- параметр для передачи страниц в эту область -->

    <ModalForm />
    <Footer />
  </div>
</template>











<script>

import '@/assets/css/main.css'
 
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ModalForm from '@/components/ModalForm.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ModalForm
  }
}


document.addEventListener("DOMContentLoaded", function(event) { 

  let  parentAll = document.querySelector('#app');
  let tabsContent = document.querySelectorAll('.tab'),
      tabs = document.querySelectorAll('.nav');

      //  tabsParent = document.querySelector('.nav_tabs');

  // accordion

	parentAll.addEventListener('click', function(event) {    
		const target = event.target;

		if(target && target.classList.contains('pop_title')) {
      target.classList.toggle("active");

      let panel = target.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
		}
	});
  



  // tab in main

  function hideTabContent(tabsContent, tabs) {
      
      tabsContent.forEach(item => {
          item.classList.add('hide');
          item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
          item.classList.remove('active');
      });
  }

  function showTabContent(tabsContent, tabs, i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('active');
  }
  
  if (tabsContent.length > 0) {
      hideTabContent(tabsContent, tabs);
      showTabContent(tabsContent, tabs);
  }

  parentAll.addEventListener('click', function(event) {
        const target = event.target;

        if(target && target.classList.contains('nav')) {

        let tabs = document.querySelectorAll('.nav'),
            tabsContent = document.querySelectorAll('.tab');
          
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent(tabsContent, tabs);
                    showTabContent(tabsContent, tabs, i);
                }
            });
        }
    });






  // ModalForm

    let isInitDemo = false,
    isInitCall = false;

  function openModalDemo(){
    let elModal  = document.querySelector('.modal-demo');

    if(isInitDemo==false) {
    isInitDemo = true;
    document.querySelector('.modal-demo .fa-times.close').addEventListener('click',
          function(event) {
            event.preventDefault();
            elModal.classList.toggle('active');
          }
      );
    }
    elModal.classList.toggle('active');
  }

  function openModalCall(){
    let elModal  = document.querySelector('.modal-call');

    if(isInitCall==false) {
    isInitCall = true;
    document.querySelector('.modal-call .fa-times.close').addEventListener('click',
          function(event) {
            event.preventDefault();
            elModal.classList.toggle('active');
          }
      );
    }
    elModal.classList.toggle('active');
  }

	parentAll.addEventListener('click', function(event) {    
		const target = event.target;

		if(target && target.hasAttribute('data-open_demo')) {
      openModalDemo();
		}

    if(target && target.hasAttribute('data-open_call')) {
        openModalCall();
    }
	});





});

</script>



<style>
/* #app {

} */
</style>
