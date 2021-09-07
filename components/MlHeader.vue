<template>
  <header class="header">
    <!-- <section class="d-block d-sm-block d-md-none w100">
      <div class="header-mobile">
        <nuxt-link to="/">
          <img
            src="/img/logo2.png"
            alt="Больше чем система лояльности!"
            class="img-logo"
          />
        </nuxt-link>
        <div class="info mb-3">
          <p>Больше, чем система лояльности</p>
        </div>
        <button
          type="button"
          class="btn bg_tr btn-order mb-3 my-0 ms-0"
          @click="openQuiz"
        >
          Заказать КП
        </button>
        <button
          type="button"
          class="btn btn-demo mb-1 my-0 ms-0"
          data-open_demo
          @click="open"
        >
          Демо
        </button>
      </div>
    </section> -->
    <section class="d-block w100">
      <div class="container-old flex header-container py-0 px-0">
        <fa class="ml-burger" icon="bars" @click.prevent="tooglePanel" />

        <div class="logo">
          <nuxt-link to="/">
            <img
              src="/img/logo2.png"
              alt="Больше чем система лояльности!"
              class="img-logo"
            />
          </nuxt-link>
        </div>
        <div class="info">
          <p style="white-space: nowrap">Больше, чем система лояльности</p>
        </div>
        <div class="btn_block flex flex-grow-0">
          <button
            type="button"
            class="btn bg_tr btn-order"
            style="white-space: nowrap"
            @click="openQuiz"
          >
            Заказать КП
          </button>
          <button
            type="button"
            class="btn btn-demo me-0"
            data-open_demo
            @click.prevent="openSidePanelDemo"
          >
            Демо
          </button>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import DemoModal from '~/components/Modal/Demo'
import { SIDE_PANEL_DEMO_PAGE, SIDE_PANEL_MENU_PAGE } from '~/helpers/constants'
import { SET_SIDE_PANEL_PAGE, SHOW_SIDE_PANEL } from '~/store/types'
export default {
  computed: {
    panelShow: (state) => state?.panel?.show,
  },
  methods: {
    ...mapMutations('panel', [SHOW_SIDE_PANEL, SET_SIDE_PANEL_PAGE]),
    tooglePanel() {
      this[SET_SIDE_PANEL_PAGE](SIDE_PANEL_MENU_PAGE)
      setTimeout(() => {
        this[SHOW_SIDE_PANEL](!this.panelShow)
      }, 100)
    },
    openQuiz() {
      // TODO перенести в конфиг ID quiz
      // eslint-disable-next-line no-undef
      Marquiz.showModal('5aa97f14ee90d20018523ad6')
    },
    openSidePanelDemo() {
      this[SET_SIDE_PANEL_PAGE](SIDE_PANEL_DEMO_PAGE)
      setTimeout(() => {
        this[SHOW_SIDE_PANEL](!this.panelShow)
      }, 100)
    },
    open() {
      this.$modal.show(
        DemoModal,
        {},
        {
          ...this.$const.MODAL_SETTINGS,
          width: 312,
        }
      )
    },
  },
}
</script>

<style lang="scss">
.header-mobile {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
}
</style>
