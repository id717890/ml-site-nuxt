<template>
  <div>
    <div class="d-flex flex-column mt-5 pt-3 mb-4 px-4">
      <h1 class="ml-text-28-700 text-center mb-3">
        Единая платформа
        <br />
        для управления <br />
        программами лояльности!
      </h1>
      <img src="/img/mobile/laptop.png" class="mb-5" alt="" />
      <div
        v-for="(item, index) in main"
        :key="index + item.icon"
        class="ml-text-icon-block mb-3"
      >
        <img
          class="ml-text-icon-block_icon"
          :src="item.icon"
          :alt="item.titile"
        />
        <span class="ml-text-icon-block_text ps-4">{{ item.text }}</span>
      </div>

      <img
        src="/img/plus.png"
        width="40"
        height="40"
        class="align-self-center mt-2 mb-4"
        alt="ЛЕГКО ПОДКЛЮЧАЙТЕ НУЖНЫЕ ОПЦИИ"
      />

      <h1 class="align-self-center mb-4 ml-text-18-700">
        ЛЕГКО ПОДКЛЮЧАЙТЕ НУЖНЫЕ ОПЦИИ
      </h1>
      <div
        v-for="(item, index) in options"
        :key="index + item.icon"
        class="ml-text-icon-block mb-3"
      >
        <img
          class="ml-text-icon-block_icon"
          :src="item.icon"
          :alt="item.titile"
        />
        <span class="ml-text-icon-block_text ps-4">{{ item.text }}</span>
      </div>
      <h1 class="ml-text-18-700 mt-4 mb-4">
        НАСТРАИВАЕМЫЙ ПЕРСОНАЛЬНЫЙ ФУНКЦИОНАЛ
      </h1>
      <div
        v-for="(item, index) in configs"
        :key="index + item.icon"
        class="ml-text-icon-block mb-3"
      >
        <img
          class="ml-text-icon-block_icon"
          :src="item.icon"
          :alt="item.titile"
        />
        <span class="ml-text-icon-block_text ps-4">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
  data: () => ({
    configs: [
      {
        text: 'Автоматическая реактивация клиентской базы',
        icon: '/img/rules_icon_1.png',
      },
      {
        text: 'Функционал переезда всех механих и данных из других систем лояльности',
        icon: '/img/rules_icon_2.png',
      },
      {
        text: 'Функционал бонусирования сотрудников в зависимости от выполненных планов',
        icon: '/img/rules_icon_3.png',
      },
      {
        text: 'Самый функциональный блок "У меня несколько бизнесов"',
        icon: '/img/rules_icon_4.png',
      },
      { text: 'Противодействие мошеничеству', icon: '/img/rules_icon_5.png' },
      {
        text: 'Готовые маркетинговые механики для сегментов',
        icon: '/img/rules_icon_6.png',
      },
    ],
    options: [
      {
        text: 'Виджет продажи электронных сертификатов',
        icon: '/img/img_7.png',
      },
      { text: 'Мобильные приложения', icon: '/img/box_img_2.png', width: '40' },
      { text: 'Интеграция с внешними системами', icon: '/img/box_img_3.png' },
      {
        text: 'Виджет личного кабинет клиента на свой сайт',
        icon: '/img/img_3.png',
      },
    ],
    main: [
      {
        text: 'Популярные шаблоны и сценарии SMS и E-mail маркетинга',
        icon: '/img/img_1.png',
      },
      { text: 'Работа с социальными сетями', icon: '/img/img_2.png' },
      {
        text: 'Интеграции с онлайн-сервисами и кассами',
        icon: '/img/img_3.png',
      },
      { text: 'Готовые модели программ лояльности', icon: '/img/img_4.png' },
      {
        text: 'Рекламные и транзакционные коммуникации',
        icon: '/img/img_5.png',
      },
      { text: 'Бизнес-процессы, чат боты, опросы', icon: '/img/img_6.png' },
      {
        text: 'Виджеты ЛК, Продажи и учёта эл. сертификатов',
        icon: '/img/img_7.png',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.ml-text-icon-block {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  .ml-text-icon-block_icon {
    padding: 5px;
    width: 55px;
  }
}
</style>
