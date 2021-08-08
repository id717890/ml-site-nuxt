<template>
  <footer class="footer">
    <div class="container ml-container pb-4">
      <div class="flex">
        <div class="box box_1">
          <router-link to="/">
            <img src="/img/logo.png" alt="Больше чем система лояльности!" />
          </router-link>
          <div class="copi">
            © {{ new Date().getFullYear() }} Все права защищены
          </div>
        </div>
        <div class="box box_2">
          <div class="btn_block flex d-flex justify-content-center">
            <button
              type="button"
              class="btn bg_tr btn-order"
              @click="openCallModal"
            >
              Заказать звонок
            </button>
            <!-- <button
              type="button"
              class="btn btn-order"
              @click.prevent="openQuiz"
            >
              Узнать стоимость
            </button> -->
          </div>
          <a href="#" title="Подробнее" class="pers" @click.prevent="openLink">
            Обработка персональных данных
          </a>
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
    <div class="ml-footer-second">
      <div class="container ml-container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <div class="block1">
              <span class="stat">40%</span>
              <div class="d-flex flex-column">
                <span>клиентов пришли</span>
                <span>по рекомендации</span>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="block2">
              <span class="stat">20</span>
              <div class="d-flex flex-column">
                <span>регионов</span>
                <span>присутствия</span>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="block2">
              <span class="stat">100%</span>
              <div class="d-flex flex-column">
                <span>собственная</span>
                <span>разработка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CallModal from '~/components/Modal/Call'
import ModalRules from '~/components/Modal/Rules'

export default {
  name: 'MlFooter',
  methods: {
    openLink() {
      // this.$emit('close')
      // this.$router.push({ name: 'rules' })
      this.$modal.show(
        ModalRules,
        {},
        {
          ...this.$const.MODAL_SETTINGS,
          width: 700,
          maxWidth: 700,
          scrollable: true,
        }
      )
    },
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

<style scoped lang="scss">
.ml-footer-second {
  background-color: black;
  .block1,
  .block2 {
    color: white;
    display: flex;
    justify-content: center;
    .stat {
      font-size: 2.3rem;
      margin-right: 10px;
    }
  }
}
</style>
