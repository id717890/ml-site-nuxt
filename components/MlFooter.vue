<template>
  <section>
    <footer class="footer ml-footer-mobile">
      <div class="ml-footer-first px-4 pb-4">
        <p class="text14 mb-1">Горячая линия</p>
        <p class="text1 mb-4">8 (499) 990-18-63</p>
        <p class="text14 mb-1">E-mail</p>
        <p class="text1 mb-4">info@mloyalty.ru</p>
        <p class="text14 mb-2">
          <nuxt-link to="/rules">Обработка персональных данных</nuxt-link>
        </p>
        <p class="text14 mb-2">
          <nuxt-link to="/security">Безопасность и надежность</nuxt-link>
        </p>
        <p class="text14">
          © {{ new Date().getFullYear() }}год. Все права защищены.
        </p>
        <p class="text14">ООО ЭМ ЛОЯЛТИ</p>
      </div>
      <!-- <div class="ml-footer-second">
        <div class="d-flex flex-column">
          <div class="py-2">
            <div class="block1 ms-0">
              <span class="stat">40%</span>
              <div class="txt">
                <span style="margin-top: 2px">клиентов пришли</span>
                <span>по рекомендации</span>
              </div>
            </div>
          </div>
          <div class="py-2">
            <div class="block2 px-0">
              <span class="stat">30</span>
              <div class="txt">
                <span style="margin-top: 2px">регионов</span>
                <span>присутствия</span>
              </div>
            </div>
          </div>
          <div class="py-2">
            <div class="block3">
              <span class="stat">100%</span>
              <div class="txt">
                <span style="margin-top: 2px">собственная</span>
                <span>разработка</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </footer>
    <footer class="footer ml-footer-desktop">
      <div class="ml-footer-first">
        <div class="container-old">
          <div class="row">
            <div class="col-4">
              <!-- <img
              style="margin-left: -25px"
              src="/img/logo.png"
              alt="Больше чем система лояльности!"
            /> -->
              <!-- <p class="text1 mb-2">Больше чем система лояльности</p> -->
              <p class="text14 mb-2">
                <nuxt-link to="/rules">Обработка персональных данных</nuxt-link>
              </p>
              <p class="text14 mb-2">
                <nuxt-link to="/security">Безопасность и надежность</nuxt-link>
              </p>
              <p class="text14">
                © {{ new Date().getFullYear() }}год. Все права защищены.
              </p>
              <p class="text14">ООО ЭМ ЛОЯЛТИ</p>
              <p></p>
            </div>
            <div class="col-4">
              <div class="second-block">
                <p class="text14 mb-1">Горячая линия</p>
                <p class="text1 mb-4">8 (499) 990-18-63</p>
                <p class="text14 mb-1">E-mail</p>
                <p class="text1 mb-4">info@mloyalty.ru</p>
                <!-- <p>141503, Московская область, город</p>
              <p>Солнечногорск, Набережная улица,</p>
              <p>дом 11 корпус а, помещение 100 офис 2</p> -->
              </div>
            </div>
            <div class="col-4">
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
                        @click.prevent="scrollTo(anchors.PARTNER_BLOCK, 50)"
                      >
                        Наши клиенты
                      </a>
                      <a
                        href="#integration"
                        title="Интеграции"
                        @click.prevent="scrollTo(anchors.TECH_BLOCK, 50)"
                      >
                        Интеграции
                      </a>
                      <a
                        href="#steps"
                        title="Этапы подключения"
                        @click.prevent="scrollTo(anchors.CONNECTIONS_BLOCK, 50)"
                      >
                        Этапы подключения
                      </a>
                    </div>
                    <div class="col-12 col-md-6 ancors">
                      <!-- <a href="#dop" title="Доп. услуги">Доп. услуги</a> -->
                      <a
                        href="#faq"
                        title="FAQ"
                        @click.prevent="scrollTo(anchors.FAQ_BLOCK, 50)"
                      >
                        Вопросы и ответы
                        <!-- FAQ -->
                      </a>
                      <a href="#sert" title="Сертификаты">
                        <nuxt-link to="/certificate">Сертификаты</nuxt-link>
                      </a>
                      <a href="#widget" title="Виджет-ЛК">
                        <nuxt-link to="/widget">ЛК покупателя</nuxt-link>
                      </a>
                      <a
                        href="#pricing"
                        title="Ценообразование"
                        @click.prevent="scrollTo(anchors.PRICING_BLOCK, -40)"
                      >
                        Ценообразование
                      </a>
                      <!-- <a
                      href="#tech"
                      title="Технологии"
                      @click="scrollTo(anchors.OUR_TECH_BLOCK, -50)"
                    >
                      Технологии
                    </a> -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="container-fluid ps-0 pe-0">
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
            </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="ml-footer-second">
        <div class="container-old">
          <div class="row">
            <div class="col-4">
              <div class="block1 ms-0">
                <span class="stat">40%</span>
                <div class="d-flex flex-column">
                  <span style="margin-top: 2px">клиентов пришли</span>
                  <span>по рекомендации</span>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="block2">
                <span class="stat">30</span>
                <div class="d-flex flex-column">
                  <span style="margin-top: 2px">регионов</span>
                  <span>присутствия</span>
                </div>
              </div>
            </div>
            <div class="col-4">
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
  </section>
</template>

<script>
import CallModal from '~/components/Modal/Call'
import ModalRules from '~/components/Modal/Rules'
import MixinScrolling from '~/helpers/mixins/scrolling'
// eslint-disable-next-line no-unused-vars
export default {
  name: 'MlFooter',
  mixins: [MixinScrolling],

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
      Marquiz.showModal('5aa97f14ee90d20018523ad6')
    },
  },
}
</script>

<style lang="scss">
// Medium devices (tablets, 768px and up)
@media only screen and (min-width: 0) and (max-width: 767.98px) {
  .ml-footer-mobile {
    display: block;

    .ml-footer-second {
      .block1,
      .block2,
      .block3 {
        justify-content: center;
        .stat {
          flex-basis: 90px;
          text-align: right;
        }

        .txt {
          display: flex;
          flex-flow: column;
          flex-basis: 140px;
        }
      }
    }
  }

  .ml-footer-desktop {
    display: none;
  }
}

// Medium devices (tablets, 768px and up)
@media only screen and (min-width: 768px) {
  .ml-footer-mobile {
    display: none;
  }

  .ml-footer-desktop {
    display: block;
  }
}
</style>
