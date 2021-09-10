<template>
  <div>
    <Main />
    <NavBtns />
    <FunctionAndConnection />
  </div>
</template>

<script>
import Main from '~/components/IndexBlock/Mobile/components/Main.vue'
import NavBtns from '~/components/IndexBlock/Mobile/components/NavBtns.vue'
import FunctionAndConnection from '~/components/IndexBlock/Mobile/components/FunctionAndConnection.vue'
export default {
  name: 'IndexPageMobile',
  components: {
    Main,
    NavBtns,
    FunctionAndConnection,
  },
}
</script>
