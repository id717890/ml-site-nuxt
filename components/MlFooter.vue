<template>
  <footer class="footer">
    <!-- <div class="container ml-container pb-4">
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
    </div> -->
    <div class="ml-footer-first">
      <div class="ml-container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4">
            <img src="/img/logo.png" alt="Больше чем система лояльности!" />
            <p class="text1 mb-2 ms-4">Больше чем система лояльности</p>
            <p class="text14 mb-2 ms-4">
              <nuxt-link to="/rules">Обработка персональных данных</nuxt-link>
            </p>
            <p class="text14 mb-2 ms-4">
              <nuxt-link to="/security">Безопасность и надежность</nuxt-link>
            </p>
            <p class="text14 ms-4">
              © {{ new Date().getFullYear() }}год. Все права защищены.
            </p>
            <p class="text14 ms-4">ООО ЭМ ЛОЯЛТИ</p>
            <p></p>
          </div>
          <div class="col-12 col-sm-12 col-md-4 mb-4">
            <div class="second-block">
              <p class="text14 mb-1">Горячая линия</p>
              <p class="text1 mb-4">8 (499) 990-18-63</p>
              <p class="text14 mb-1">E-mail</p>
              <p class="text1 mb-4">info@mloyalty.ru</p>
              <p>141503, Московская область, город</p>
              <p>Солнечногорск, Набережная улица,</p>
              <p>дом 11 корпус а, помещение 100 офис 2</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="third-block">
              <div class="container-fluid px-0">
                <div class="row px-0">
                  <div class="col-12 col-md-6 ancors">
                    <a
                      href="https://dev.lctest.ru/Help"
                      target="_blank"
                      title="API документация"
                    >
                      API документация
                    </a>
                    <a
                      href="#clients"
                      title="Наши клиенты"
                      @click.prevent="scrollTo('partners-block')"
                      >Наши клиенты</a
                    >
                    <a
                      href="#integration"
                      title="Интеграции"
                      @click.prevent="scrollTo('technology')"
                    >
                      Интеграции
                    </a>
                    <a
                      href="#steps"
                      title="Этапы подключения"
                      @click.prevent="scrollTo('connections')"
                    >
                      Этапы подключения
                    </a>
                    <a
                      href="#pricing"
                      title="Ценообразование"
                      @click.prevent="scrollTo('pricing-block')"
                    >
                      Ценообразование
                    </a>
                  </div>
                  <div class="col-12 col-md-6 ancors">
                    <!-- <a href="#dop" title="Доп. услуги">Доп. услуги</a> -->
                    <a
                      href="#faq"
                      title="FAQ"
                      @click.prevent="scrollTo('faq-block')"
                    >
                      FAQ
                    </a>
                    <a href="#sert" title="Сертификаты">
                      <nuxt-link to="/certificate">Сертификаты</nuxt-link>
                    </a>
                    <a href="#widget" title="Виджет-ЛК">
                      <nuxt-link to="/widget">Виджет-ЛК</nuxt-link>
                    </a>
                    <a
                      href="#tech"
                      title="Технологии"
                      @click="scrollTo('out-tech-block', -50)"
                    >
                      Технологии
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid ps-0 pe-0">
              <div class="row">
                <div class="col-12">
                  <div class="btn-panel">
                    <a
                      href="#"
                      class="btn-footer"
                      @click.prevent="openCallModal"
                    >
                      Заказать звонок
                    </a>
                    <a href="#" class="btn-footer" @click.prevent="openQuiz">
                      Заказать КП
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-footer-second">
      <div class="ml-container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4">
            <div class="block1">
              <span class="stat">40%</span>
              <div class="d-flex flex-column">
                <span style="margin-top: 2px">клиентов пришли</span>
                <span>по рекомендации</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4">
            <div class="block2">
              <span class="stat">30</span>
              <div class="d-flex flex-column">
                <span style="margin-top: 2px">регионов</span>
                <span>присутствия</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4">
            <div class="block3">
              <span class="stat">100%</span>
              <div class="d-flex flex-column">
                <span style="margin-top: 2px">собственная</span>
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
    scrollTo(anchor, offset = null) {
      function scrolling() {
        const scrollEl = document.querySelector(`.${anchor}`)
        if (scrollEl && scrollEl?.offsetTop)
          window.scrollTo({
            top: offset ? scrollEl?.offsetTop + offset : scrollEl?.offsetTop,
            left: 0,
            behavior: 'smooth',
          })
      }
      const { path } = this.$route
      if (path !== '/') {
        this.$router.push({ name: 'index' })
        setTimeout(() => {
          scrolling()
        }, 500)
      } else {
        scrolling()
      }
    },
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
      Marquiz.showModal('5aa97f14ee90d20018523ad6')
    },
  },
}
</script>
