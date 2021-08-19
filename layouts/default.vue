<template>
  <client-only>
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
        class="ml-scroll-top"
        @click.prevent="scrollTop"
      >
        <!-- <i class="fa chevron-up"></i> -->
        <!-- <v-icon>mdi-home</v-icon> -->
        <fa icon="chevron-up" />
      </a>
    </div>
  </client-only>
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
  middleware: ['cfg', 'jwt', 'client/redirect'],
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
    setTimeout(() => {
      this.setInitialize()
    }, 250)
  },
  destroyed() {
    const el = document.querySelector('#app')
    el?.removeEventListener('wheel', this.debouncedScroll)
  },
  methods: {
    setInitialize() {
      const el = document.querySelector('#app')
      el?.addEventListener('wheel', this.debouncedScroll, true)
      this.marquizScript(window, document, 'script', {
        host: '//quiz.marquiz.ru',
        id: '5aa97f14ee90d20018523ad6',
        autoOpen: false,
        autoOpenFreq: 'once',
        openOnExit: false,
        disableOnMobile: false,
      })
    },
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
    marquizScript(w, d, s, o) {
      if (!window.__marquiz) window.__marquiz = []
      window.marquiz = function () {
        window.Marquiz
          ? // eslint-disable-next-line no-undef
            Marquiz.add(arguments)
          : window.__marquiz.push(arguments)
      }
      const j = d.createElement(s)
      j.async = true
      j.src = '//script.marquiz.ru/v2.js'
      j.onload = function () {
        // eslint-disable-next-line no-undef
        if (document.readyState !== 'loading') Marquiz.init(o)
        else
          document.addEventListener('DOMContentLoaded', function () {
            // eslint-disable-next-line no-undef
            Marquiz.init(o)
          })
      }
      d.head.insertBefore(j, d.head.firstElementChild)
    },
  },
}
</script>
