<template>
  <div id="app">
    <MlHeader />
    <modals-container />
    <section class="ml-nuxt-router-container">
      <nuxt v-if="!loading" />
      <h1 v-else>Loading...</h1>
    </section>
    <MlFooter />
    <a
      v-show="showScrollTop"
      href="#"
      class="ml-scroll-top btn bg_tr btn-order"
      @click.prevent="scrollTop"
    >
      <Fa icon="chevron-up" />
    </a>
  </div>
  <!-- <div class="container b1">
    <div class="row b2">
      <div class="col-4 b3">4</div>
      <div class="col-8 b3">
        8
        <a href="#" class="btn btn-danger mx-5">123</a>
        <v-btn> <v-icon>mdi-check</v-icon> start </v-btn>
        <v-btn>
          <v-icon>fa-times</v-icon>
        </v-btn>
        <v-btn>
          <account size="28" />
        </v-btn>
      </div>
    </div>
  </div> -->
</template>

<script>
// import Account from 'vue-material-design-icons/Account.vue'
import { mapState } from 'vuex'
import { debounce } from 'lodash'
import MlHeader from '~/components/MlHeader'
import MlFooter from '~/components/MlFooter'
export default {
  name: 'LayoutDefault',
  components: {
    MlHeader,
    MlFooter,
  },
  middleware: ['cfg', 'client/redirect'],
  data: () => ({
    showScrollTop: false,
  }),
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `${process.env.VUE_APP_SITE_URL}${this.$route.path}`,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state?.app?.configLoading,
    }),
  },
  created() {
    this.debouncedScroll = debounce(this.handleScroll, 200)
  },
  mounted() {
    const el = document.querySelector('#app')
    el.addEventListener('wheel', this.debouncedScroll, true)
  },
  destroyed() {
    const el = document.querySelector('#app')
    el?.removeEventListener('wheel', this.debouncedScroll)
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 100, left: 100, behavior: 'smooth' })
      this.showScrollTop = false
    },
    handleScroll() {
      const y = window.scrollY
      if (y > 500) {
        this.showScrollTop = true
      } else {
        this.showScrollTop = false
      }
    },
  },
}
</script>
