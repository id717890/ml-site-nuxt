<template>
  <div
    class="cd-panel cd-panel--from-right js-cd-panel-main"
    :class="{ ' cd-panel--is-visible': showPanel }"
  >
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
      <i class="fa fa-times close my-times" @click="togglePanel"></i>
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
        <!-- <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magnam
          accusamus obcaecati nisi eveniet quo veniam quibusdam veritatis autem
          accusantium doloribus nam mollitia maxime explicabo nemo quae
          aspernatur impedit cupiditate dicta molestias consectetur, sint
          reprehenderit maiores. Tempora, exercitationem, voluptate. Sapiente
          modi officiis nulla sed ullam, amet placeat, illum necessitatibus,
          eveniet dolorum et maiores earum tempora, quas iste perspiciatis
          quibusdam vero accusamus veritatis. Recusandae sunt, repellat incidunt
          impedit tempore iusto, nostrum eaque necessitatibus sint eos omnis!
          Beatae, itaque, in. Vel reiciendis consequatur saepe soluta itaque
          aliquam praesentium, neque tempora. Voluptatibus sit, totam rerum quo
          ex nemo pariatur tempora voluptatem est repudiandae iusto, architecto
          perferendis sequi, asperiores dolores doloremque odit. Libero, ipsum
          fuga repellat quae numquam cumque nobis ipsa voluptates pariatur, a
          rerum aspernatur aliquid maxime magnam vero dolorum omnis neque fugit
          laboriosam eveniet veniam explicabo, similique reprehenderit at. Iusto
          totam vitae blanditiis. Culpa, earum modi rerum velit voluptatum
          voluptatibus debitis, architecto aperiam vero tempora ratione sint
          ullam voluptas non! Odit sequi ipsa, voluptatem ratione illo ullam
          quaerat qui, vel dolorum eligendi similique inventore quisquam
          perferendis reprehenderit quos officia! Maxime aliquam, soluta
          reiciendis beatae quisquam. Alias porro facilis obcaecati et id,
          corporis accusamus? Ab porro fuga consequatur quisquam illo quae quas
          tenetur.
        </p> -->
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
