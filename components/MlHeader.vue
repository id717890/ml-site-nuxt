<template>
  <header class="header">
    <section class="ml-header-mobile px-3 py-2">
      <nuxt-link to="/">
        <img
          src="/img/mobile/logo-mobile.png"
          alt="Больше чем система лояльности!"
        />
      </nuxt-link>
      <div class="flex-grow-1 ps-3 text-center">
        <p>Создаём и обслуживаем</p>
        <p>проограммы лояльности!</p>
      </div>
      <img
        src="/img/mobile/burger-mobile.svg"
        alt="Вызвать меню"
        @click.prevent="openSidePanelMenu"
      />
    </section>
    <section class="ml-header-desktop w100">
      <div class="container-old flex header-container py-0 px-0">
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
import MixinSidePanel from '~/helpers/mixins/sidePanel'

export default {
  name: 'MlHeader',
  mixins: [MixinSidePanel],
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
// Medium devices (tablets, 768px and up)
@media only screen and (min-width: 0) and (max-width: 767.98px) {
  .ml-header-mobile {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: 0.9rem;
  }

  .ml-header-desktop {
    display: none;
  }
}

// Medium devices (tablets, 768px and up)
@media only screen and (min-width: 768px) {
  .ml-header-mobile {
    display: none;
  }

  .ml-header-desktop {
    display: block;
  }
}
</style>
