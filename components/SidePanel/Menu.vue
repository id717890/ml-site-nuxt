<template>
  <div
    class="cd-panel cd-panel--from-right js-cd-panel-main"
    :class="{ ' cd-panel--is-visible': showPanel }"
  >
    <i
      class="cd-panel__close fa fa-times close my-times"
      @click="togglePanel"
    ></i>

    <div class="cd-panel__header px-4 pt-1 pb-1" style="border: none">
      <!-- <img
        src="/img/logo2.png"
        alt="Больше чем система лояльности!"
        class="img-logo"
        height="45"
      />
      <p class="flex-grow-1 px-4">Больше чем система лояльности!</p> -->
      <p class="flex-grow-1 px-4"></p>
      <!-- <v-btn icon class="me-3" @click.prevent="togglePanel">
        <fa class="my-times" icon="times" />
      </v-btn> -->
      <!-- <i class="fa fa-times close my-times" @click="togglePanel"></i> -->
      <!-- <h1>Title Goes Here</h1>
      <a
        href="#0"
        class="cd-panel__close js-cd-close"
        @click.prevent="togglePanel"
        >Close</a
      > -->
    </div>

    <div class="cd-panel__container">
      <div class="cd-panel__content px-4 py-3">
        <div class="cd-panel__content__menu">
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
            @click.prevent="togglePanel(), scrollTo(anchors.PARTNER_BLOCK, 50)"
          >
            Наши клиенты
          </a>
          <a
            href="#integration"
            title="Интеграции"
            @click.prevent="togglePanel(), scrollTo(anchors.TECH_BLOCK, 50)"
          >
            Интеграции
          </a>
          <a
            href="#steps"
            title="Этапы подключения"
            @click.prevent="
              togglePanel(), scrollTo(anchors.CONNECTIONS_BLOCK, 50)
            "
          >
            Этапы подключения
          </a>
          <a
            href="#pricing"
            title="Ценообразование"
            @click.prevent="togglePanel(), scrollTo(anchors.PRICING_BLOCK, -40)"
          >
            Ценообразование
          </a>
          <a
            href="#faq"
            title="FAQ"
            @click.prevent="togglePanel(), scrollTo(anchors.FAQ_BLOCK, 50)"
          >
            FAQ
          </a>
          <a
            href="#sert"
            title="Сертификаты"
            @click.prevent="goTo('/certificate')"
          >
            Сертификаты
          </a>
          <a href="#widget" title="Виджет-ЛК" @click.prevent="goTo('/widget')">
            Виджет-ЛК
          </a>
          <a
            href="#tech"
            title="Технологии"
            @click="togglePanel(), scrollTo(anchors.OUR_TECH_BLOCK, -50)"
          >
            Технологии
          </a>
        </div>
      </div>
      <!-- cd-panel__content -->
    </div>
    <div class="cd-panel__footer px-4 py-3 d-none">
      <p>2021 год. Все права защищены ООО ЭМ ЛОЯЛТИ</p>
    </div>
    <!-- cd-panel__container -->
  </div>
  <!-- cd-panel -->
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SHOW_SIDE_PANEL } from '~/store/types'
import MixinScrolling from '~/helpers/mixins/scrolling'

export default {
  name: 'MlSidePanel',
  mixins: [MixinScrolling],
  computed: {
    ...mapState({
      showPanel: (state) => state?.panel?.show,
    }),
  },
  methods: {
    ...mapMutations('panel', [SHOW_SIDE_PANEL]),
    togglePanel() {
      this[SHOW_SIDE_PANEL](!this.showPanel)
    },
    goTo(url) {
      this.togglePanel()
      this.$router.push(url)
    },
  },
}
</script>
