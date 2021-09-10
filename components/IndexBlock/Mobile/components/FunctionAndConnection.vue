<template>
  <div class="px-5">
    <BorderedBlock class="pt-20 px-20 mb-4">
      <div class="d-flex flex-column">
        <p class="ml-text-18-700 mb-4">
          Функционал
          <br />
          платформы
        </p>
        <div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Бонусные программы любой <br />
              сложности формата и гибкости
            </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Подарочные сертификаты <br />
              пластиковые и электронные
            </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Прямые, автоматически и <br />
              триггерные рассылки по клиентам
            </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Аналитика, цепочки реактиваций <br />
              клиентов, товарные предложения
            </span>
          </div>
        </div>
        <img
          width="175"
          class="align-self-center"
          src="/img/mobile/frame1.png"
          alt=""
        />
      </div>
    </BorderedBlock>
    <BorderedBlock class="pt-20 px-20">
      <div class="d-flex flex-column">
        <p class="ml-text-18-700 mb-4">
          Легко подключайте
          <br />
          дополнительные опции
        </p>
        <div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300"> Мобильные приложения </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Интеграция с внешними системами
            </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Виджет личного кабинета <br />
              на свой сайта
            </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Виджет по продаже <br />
              электронных сертификатов
            </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Чат-боты, мессенджеры, соц. сети
            </span>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/img/mobile/dot-red.png" alt="" />
            <span class="ml-text-16-300">
              Интеграция с товарным каталогом и интернет-магазином
            </span>
          </div>
        </div>
        <img
          width="155"
          class="align-self-center"
          src="/img/mobile/frame2.png"
          alt=""
        />
      </div>
    </BorderedBlock>
  </div>
</template>

<script>
import BorderedBlock from '~/components/IndexBlock/Mobile/components/BorderedBlock.vue'
export default {
  name: 'FunctionsAndConnectionBlock',
  components: {
    BorderedBlock,
  },
}
</script>
