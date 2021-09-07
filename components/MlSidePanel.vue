<template>
  <component :is="component"></component>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SHOW_SIDE_PANEL } from '~/store/types'
import MixinScrolling from '~/helpers/mixins/scrolling'
import CallPage from '~/components/SidePanel/Call.vue'
import DemoPage from '~/components/SidePanel/Demo.vue'
import MenuPage from '~/components/SidePanel/Menu.vue'
import {
  SIDE_PANEL_CALL_PAGE,
  SIDE_PANEL_DEMO_PAGE,
  SIDE_PANEL_MENU_PAGE,
} from '~/helpers/constants'
export default {
  name: 'MlSidePanel',
  components: {
    CallPage,
    DemoPage,
    MenuPage,
  },
  mixins: [MixinScrolling],
  computed: {
    ...mapState({
      showPanel: (state) => state?.panel?.show,
      page: (state) => state?.panel?.page,
    }),
    component() {
      switch (this.page) {
        case SIDE_PANEL_MENU_PAGE:
          return 'MenuPage'
        case SIDE_PANEL_DEMO_PAGE:
          return 'DemoPage'
        case SIDE_PANEL_CALL_PAGE:
          return 'CallPage'
        default:
          return null
      }
    },
  },
  methods: {
    ...mapMutations('panel', [SHOW_SIDE_PANEL]),
    togglePanel() {
      this[SHOW_SIDE_PANEL](!this.showPanel)
    },
    goTo(url) {
      this.togglePanel()
      this.$router.push(url)
    },
  },
}
</script>
