<template>
  <header class="header">
    <section class="d-block d-sm-block d-md-none w100">
      <div class="header-mobile">
        <nuxt-link to="/">
          <img
            src="/img/logo.png"
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
    </section>
    <section class="d-none d-md-block w100">
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
          <button
            type="button"
            class="btn btn-demo"
            data-open_demo
            @click="open"
          >
            Демо
          </button>
        </div>
      </div>
    </section>
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

<style lang="scss">
.header-mobile {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
}
</style>
