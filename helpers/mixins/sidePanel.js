import { mapMutations } from 'vuex'
import { SET_SIDE_PANEL_PAGE, SHOW_SIDE_PANEL } from '~/store/types'
import { SIDE_PANEL_CALL_PAGE, SIDE_PANEL_MENU_PAGE } from '~/helpers/constants'

export default {
  methods: {
    ...mapMutations('panel', [SHOW_SIDE_PANEL, SET_SIDE_PANEL_PAGE]),
    openSidePanelCall() {
      this[SET_SIDE_PANEL_PAGE](SIDE_PANEL_CALL_PAGE)
      setTimeout(() => {
        this[SHOW_SIDE_PANEL](!this.panelShow)
      }, 100)
    },
    openSidePanelMenu() {
      this[SET_SIDE_PANEL_PAGE](SIDE_PANEL_MENU_PAGE)
      setTimeout(() => {
        this[SHOW_SIDE_PANEL](!this.panelShow)
      }, 100)
    },
  },
}
