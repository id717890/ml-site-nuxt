<template>
  <section class="platform">
    <!-- <section class="main-block-mobile">
      <MainMobile />
      <NavBtns />
      <FunctionAndConnection />
    </section> -->
    <div class="container-old ml-container">
      <!-- eslint-disable-next-line -->
      <h1 class="title_2" v-if="title1" v-html="title1">
        <!-- Единая платформа для управления<br /> -->
        <!-- программой лояльности -->
      </h1>
      <!-- eslint-disable-next-line -->
      <div v-if="title2" class="description" v-html="title2"></div>
      <div class="mokap_1">
        <img src="/img/mokap.png" alt="Мокап" class="mokap_bg" />

        <div class="info_blok info_blok_1">
          <img
            class="mokap_img"
            src="/img/img_1.png"
            alt="Популярные шаблоны и сценарии SMS и E-mail маркетинга"
          />
          <p class="text">
            Популярные шаблоны<br />
            и сценарии SMS и<br />E-mail маркетинга
          </p>
        </div>
        <div class="info_blok info_blok_2">
          <img
            class="mokap_img"
            src="/img/img_2.png"
            alt="Работа с социальными сетями"
          />
          <p class="text">
            Работа с<br />
            социальными<br />
            сетями
          </p>
        </div>
        <div class="info_blok info_blok_3">
          <img
            class="mokap_img"
            src="/img/img_3.png"
            alt="Интеграции с онлайн-сервисами и кассами"
          />
          <p class="text">Интеграции с онлайн-<br />сервисами и кассами</p>
        </div>
        <div class="info_blok info_blok_4">
          <img
            class="mokap_img"
            src="/img/img_4.png"
            alt="Готовые модели программ лояльности"
          />
          <p class="text">
            Готовые модели программ<br />
            лояльности
          </p>
        </div>
        <div class="info_blok info_blok_5">
          <img
            class="mokap_img"
            src="/img/img_5.png"
            alt="Рекламные и транзакционные коммуникации"
          />
          <p class="text">
            Рекламные и<br />
            транзакционные<br />
            коммуникации
          </p>
        </div>
        <div class="info_blok info_blok_6">
          <img
            class="mokap_img"
            src="/img/img_6.png"
            alt="Бизнес-процессы, чат боты, опросы"
          />
          <p class="text">
            Бизнес-процессы,<br />
            чат боты, опросы
          </p>
        </div>
        <div class="info_blok info_blok_7">
          <img
            class="mokap_img"
            src="/img/img_7.png"
            alt="Виджеты ЛК, Продажи и учёта эл. сертификатов"
          />
          <p class="text">
            Виджеты ЛК, <br />
            Продажи и учёта <br />
            эл. сертификатов
          </p>
        </div>
      </div>

      <p class="plus">+</p>

      <div class="title_3">Легко подключайте нужные опции</div>
      <div class="advantages flex">
        <div class="advantages_box advantages_box_1">
          <img
            class="img"
            src="/img/img_7.png"
            alt="Виджет продажи электронных сертификатов"
          />
          <!-- <fa icon="chevron-right" /> -->
          <p class="text">
            Виджет продажи<br />
            электронных сертификатов
          </p>
        </div>
        <div class="advantages_box advantages_box_2">
          <img
            class="img"
            src="/img/box_img_2.png"
            alt="Мобильные приложения"
          />
          <p class="text">
            Мобильные<br />
            приложения
          </p>
        </div>
        <div class="advantages_box advantages_box_3">
          <img
            class="img"
            src="/img/box_img_3.png"
            alt="Интеграция с внешними системами"
          />
          <p class="text">
            Интеграция с внешними<br />
            системами
          </p>
        </div>
        <div class="advantages_box advantages_box_4">
          <img
            class="img"
            src="/img/img_3.png"
            alt="Виджет личного кабинет клиента на свой сайт"
          />
          <p class="text">
            Виджет личного кабинет<br />
            клиента на свой сайт
          </p>
        </div>
      </div>
      <!-- <button v-if="orderBtn.show" type="button" class="btn btn-order">
        {{ orderBtn.text }}
      </button> -->
    </div>
  </section>
</template>

<script>
// import MainMobile from '~/components/IndexBlock/Mobile/components/Main.vue'
// import NavBtns from '~/components/IndexBlock/Mobile/components/NavBtns.vue'
// import FunctionAndConnection from '~/components/IndexBlock/Mobile/components/FunctionAndConnection.vue'

export default {
  name: 'MainBlockDefault',
  components: {
    // MainMobile,
    // NavBtns,
    // FunctionAndConnection,
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title1() {
      return this.settings?.title1
    },
    title2() {
      return this.settings?.title2
    },
    // orderBtn() {
    //   return this.settings?.orderBtn
    // },
  },
}
</script>

//
<style lang="scss">
// // Medium devices (tablets, 768px and up)
// @media only screen and (min-width: 0) and (max-width: 767.98px) {
//   .main-block-mobile {
//     display: block;
//   }

//   .main-block-desktop {
//     display: none;
//   }
// }

// // Medium devices (tablets, 768px and up)
// @media only screen and (min-width: 768px) {
//   .main-block-mobile {
//     display: none;
//   }

//   .main-block-desktop {
//     display: block;
//   }
// }
//
</style>
