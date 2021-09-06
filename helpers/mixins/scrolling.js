import { mapMutations } from 'vuex'
import types from '~/store/types'
import { anchors } from '~/helpers/constants'

export default {
  created() {
    this.anchors = anchors
  },
  methods: {
    ...mapMutations('app', [types.SET_APP_GLOBAL_LOADING]),
    scrollTo(anchor, offset = null) {
      const isMobile = this.$helper.isMobile()
      function scrolling() {
        const scrollEl = document.querySelector(`.${anchor}`)
        if (scrollEl && scrollEl?.offsetTop) {
          let top
          if (isMobile) {
            top = scrollEl?.offsetTop - 50
          } else {
            top = offset ? scrollEl?.offsetTop + offset : scrollEl?.offsetTop
          }
          window.scrollTo({
            top,
            left: 0,
            behavior: 'instant',
          })
        }
      }
      const { path } = this.$route
      if (path !== '/') {
        this[types.SET_APP_GLOBAL_LOADING](true)
        this.$router.push({ name: 'index' })
        setTimeout(() => {
          scrolling()
          this[types.SET_APP_GLOBAL_LOADING](false)
        }, 500)
      } else {
        scrolling()
      }
    },
  },
}
