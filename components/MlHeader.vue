<template>
  <header class="header">
    <div class="container-old flex header-container py-0 px-0">
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
      <div class="btn_block flex flex-grow-0">
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
      Marquiz.showModal('5aa97f14ee90d20018523ad6')
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
