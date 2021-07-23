<template>
  <header class="header">
    <div class="ml-container container flex header-container">
      <div class="logo">
        <nuxt-link to="/">
          <img
            src="/img/logo.png"
            alt="Больше чем система лояльности!"
            class="img-logo"
          />
        </nuxt-link>
      </div>
      <div class="info">
        <p>Больше, чем система лояльности</p>
      </div>
      <div class="btn_block flex">
        <button type="button" class="btn bg_tr btn-order" @click="openQuiz">
          Заказать КП
        </button>
        <button type="button" class="btn btn-demo" data-open_demo @click="open">
          Демо
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import DemoModal from '~/components/Modal/Demo'
export default {
  components: {},
  methods: {
    openQuiz() {
      // TODO перенести в конфиг ID quiz
      // eslint-disable-next-line no-undef
      Marquiz.showModal('5fda3289c9b57700443842f2')
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
