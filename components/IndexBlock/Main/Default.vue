<template>
  <section class="platform">
    <div class="container ml-container">
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
            alt="Полноценная CRM-система"
          />
          <p class="text">
            Полноценная<br />
            CRM-система
          </p>
        </div>
        <div class="info_blok info_blok_7">
          <img
            class="mokap_img"
            src="/img/img_7.png"
            alt="Сайты, лэндинги и личные кабинеты"
          />
          <p class="text">
            Сайты, лэндинги и<br />
            личные кабинеты
          </p>
        </div>
      </div>

      <p class="plus">+</p>

      <div class="title_3">Легко заказывайте нужные опции</div>
      <div class="advantages flex">
        <div class="advantages_box advantages_box_1">
          <img
            class="img"
            src="/img/box_img_1.png"
            alt="Привлечение клиентов в Интернете"
          />
          <p class="text">
            Привлечение клиентов<br />
            в Интернете
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
            src="/img/box_img_4.png"
            alt="Дизайн, сувениры, фирменный стиль"
          />
          <p class="text">
            Дизайн, сувениры, <br />
            фирменный стиль
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
export default {
  name: 'MainBlockDefault',
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
