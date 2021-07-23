<template>
  <footer class="footer">
    <div class="container ml-container">
      <div class="flex">
        <div class="box box_1">
          <router-link to="/"
            ><img
              src="/img/logo_white.png"
              alt="Больше чем система лояльности!"
          /></router-link>
          <div class="copi">
            © 2010-{{ new Date().getFullYear() }} Все права защищены
          </div>
        </div>
        <div class="box box_2">
          <div class="btn_block flex">
            <button
              type="button"
              class="btn bg_tr btn-consultation"
              @click="openCallModal"
            >
              Заказать звонок
            </button>
            <button
              type="button"
              class="btn btn-order"
              @click.prevent="openQuiz"
            >
              Узнать стоимость
            </button>
          </div>
          <nuxt-link to="/rules" title="Подробнее" class="pers">
            Обработка персональных данных
          </nuxt-link>
        </div>
        <div class="box box_3">
          <div class="title_footer">Контактная информация:</div>
          <a href="tel:+74999901863" class="tel" title="Позвонить"
            >+7 (499) 990-18-63</a
          >
          <a href="mailto:info@mloyalty.ru" class="mail" title="Написать письмо"
            >info@mloyalty.ru</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CallModal from '~/components/Modal/Call'
export default {
  name: 'MlFooter',
  methods: {
    openCallModal() {
      this.$modal.show(
        CallModal,
        {},
        {
          ...this.$const.MODAL_SETTINGS,
          width: 312,
        }
      )
    },
    openQuiz() {
      // TODO перенести в конфиг ID quiz
      // eslint-disable-next-line no-undef
      Marquiz.showModal('5fda3289c9b57700443842f2')
    },
  },
}
</script>
