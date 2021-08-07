<template>
  <section class="foryou">
    <div class="container">
      <div class="title_2">Ценообразование</div>
      <div class="box-shadow pricing-second mb-5">
        <div class="p-config">
          <div class="title">Настройка/внедрение</div>
          <div class="mt-4 mb-5" style="text-align: right">
            Настройка сервиса по ТЗ от 20000 рублей, зависит от требований
          </div>
          <div class="pt-2 mb-5">
            Провайдеры рассылок
            <br />
            Наши провайдеры - 0 руб.
            <br />
            Ваши провайдеры - от 5000 руб.
          </div>
          <div class="pt-2">Настройка и запуск от 30000 руб.</div>
        </div>
        <div class="p-icons">
          <div class="mb-2">
            <img
              src="/img/icon_1.png"
              alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
            />
            <p>Сервисы</p>
          </div>
          <div class="mb-2">
            <img
              class="mt-3"
              src="/img/icon_2.png"
              alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
            />
            Коммуникация
          </div>
          <div class="pt-3">
            <img
              src="/img/icon_3.png"
              alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
            />
            <p>Мобильные приложения</p>
          </div>
        </div>
        <div class="p-month">
          <div class="title">Ежемесячные платежи</div>
          <div class="mt-4">
            Подписка на сервис от 1,5 т.р. <br />за каждую точку продаж
          </div>
          <div class="mt-4 pt-2">
            <!-- Коммуникации -->
            <br />
            Sms - 2,90 руб.
            <br />
            В МТС - 2000 руб. <br />
            Email, Push - 0 руб.
          </div>
          <div class="mt-5 pt-2">От 2500 руб. за каждое приложение</div>
        </div>
      </div>

      <button type="button" class="btn btn-order mb-4" @click="openQuiz">
        Заказать КП
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingBlockSecond',
  methods: {
    openQuiz() {
      // TODO перенести в конфиг ID quiz
      // eslint-disable-next-line no-undef
      Marquiz.showModal('5aa97f14ee90d20018523ad6')
    },
  },
}
</script>

<style lang="scss" scoped>
.pricing-second {
  display: flex;
  flex-flow: row nowrap;
  margin-left: 0;
  margin-right: 0;
  padding: 30px 60px;
  margin-bottom: 30px;

  .p-config {
    position: relative;
    flex: 0 0 45%;
    padding-right: 20px;

    div {
      text-align: right;
    }
  }

  .p-icons {
    position: relative;
    display: flex;
    flex-flow: column;
    padding-top: 70px;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      flex-flow: column;

      p {
        text-align: center;
      }
    }

    img {
      width: 77px;
      height: auto;
    }
  }

  .p-month {
    padding-left: 20px;
    position: relative;
    flex: 0 0 45%;
  }

  .p-config .title,
  .p-month .title {
    font-size: 28px;
    letter-spacing: 4px;
    line-height: 59px;
    color: #7f7f7f;
    font-family: 'AF', sans-serif;
  }
}
</style>
