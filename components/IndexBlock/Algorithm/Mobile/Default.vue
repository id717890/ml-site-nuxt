<template>
  <section class="algorithms w100 algorithm-mobile">
    <div class="d-flex flex-column align-items-center px-4">
      <p class="ml-text-28-700 mb-4 align-self-start">
        Основной алгоритм работы <br />
        с вашей клиентской базой
      </p>
      <div class="item item_1">
        <div class="num">1</div>
        <div class="text">
          Подключаем необходимые<br />
          источники регистрации клиентов
        </div>
        <div class="img">
          <img
            src="/img/circle.png"
            alt="Подключаем необходимые источники регистрации клиентов"
          />
        </div>
      </div>
      <div class="item item_2 mt-4 mb-4">
        <div class="num">2</div>
        <div class="text">
          Автоматически собираем<br />
          данные в CRM-лояльности
        </div>
      </div>
      <div class="item item_5 mb-5">
        <div class="num"><img src="/img/config.png" alt="Loyalty" /></div>
        <div class="img"><img src="/img/logo_dia.png" alt="Loyalty" /></div>
      </div>
      <div class="item item_3">
        <div class="num">3</div>
        <div class="text">
          Проводим работу с клиентами по<br />
          единому общему сценарию механик
        </div>
        <div class="img">
          <img
            src="/img/funnel3.png"
            alt="Проводим работу с клиентами по единому общему сценарию механик"
          />
        </div>
      </div>
      <div class="item item_4 mb-3">
        <div class="num">4</div>
        <div class="text">
          Получаем покупательские и<br />
          клиентские метрики по<br />
          каждому клиенту
        </div>
      </div>
      <div class="item item_6">
        <div class="num">5</div>
        <div class="text">
          Автоматически формируем сегменты клиентов и назначаем<br />
          каждому персональный план развития в рамках механик
        </div>
        <div class="img">
          <img
            width="100%"
            src="/img/chart.png"
            alt="Автоматически формируем сегменты клиентов и назначаем каждому персональный план развития в рамках механик"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AlgorithmBlockDefaultMobile',
}
</script>

<style lang="scss">
.algorithm-mobile {
  margin-top: -80px;
  .item_1 {
    margin-left: 0;
    max-width: none;
    order: 1;
  }

  .item_2 {
    margin-top: 0;
    margin-left: 0;
    order: 2;
  }

  .item_2::after {
    // width: calc(100% + 0px);
    // height: calc(100% + 21px);
    // position: absolute;
    // bottom: -35px;
    // left: -35px;
    // border-radius: 0;
    // border-left: 1px dotted #ccc;
    // border-bottom: none;
    // z-index: 0;
    content: none;
  }

  .item_3 {
    margin: 0;
    order: 4;
  }

  .item_5 {
    order: 3;
    margin: 0;
    max-width: 372px !important;
    width: 372px !important;
  }

  .item_4 {
    margin: 0;
    order: 5;
  }

  .item_4::after {
    content: none;
  }

  .item_6 {
    order: 6;
    margin: 0;
    max-width: 372px !important;
  }

  .item_6::before,
  .item_6::after {
    content: none;
  }

  .item {
    max-width: none;
  }
}
</style>
