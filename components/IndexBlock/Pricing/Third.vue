<template>
  <section class="foryou pricing-block">
    <div class="container-old">
      <div class="title_2">Ценообразование</div>
      <div class="box-shadow pricing-second">
        <table class="pricing-table">
          <colgroup>
            <col style="width: 100px" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th class="p-config">
                <div class="title text-start ps-4">Настройка/внедрение</div>
              </th>
              <th class="p-month">
                <div class="title text-start">Абонентская плата</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-icons">
                <div class="">
                  <img
                    class=""
                    src="/img/img_6.png"
                    alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
                  />
                  Система
                </div>
              </td>
              <td>
                <div class="text-start">
                  Настройка сервиса по ТЗ от 20000 рублей
                  <br />
                  Зависит от требований
                </div>
              </td>
              <td>
                <div class="text-start">
                  Подписка на сервис от 1,5 т.р. <br />за каждую точку продаж
                </div>
              </td>
            </tr>
            <tr>
              <td class="p-icons">
                <div class="">
                  <img
                    src="/img/img_2.png"
                    alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
                  />
                  <p>Рассылки</p>
                </div>
              </td>
              <td>
                <div class="text-start">
                  Провайдеры рассылок
                  <br />
                  Наши провайдеры - 0 руб.
                  <br />
                  Ваши провайдеры - от 5000 руб.
                </div>
              </td>
              <td>
                <div class="text-start">
                  Sms - 2,90 руб.
                  <br />
                  В МТС - 2000 руб. <br />
                  Email, Push - 0 руб.
                </div>
              </td>
            </tr>
            <tr>
              <td class="p-icons">
                <div class="">
                  <img
                    src="/img/img_5.png"
                    alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
                  />
                  <p>
                    Мобильные <br />
                    приложения
                  </p>
                </div>
              </td>
              <td>
                <div class="text-start">
                  От 30000 рублей <br />
                  За каждое приложение
                </div>
              </td>
              <td>
                <div class="text-start">
                  От 2500 рублей
                  <br />
                  За каждое приложение
                </div>
              </td>
            </tr>
            <tr>
              <td class="p-icons">
                <div class="">
                  <img
                    src="/img/img_7.png"
                    alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
                  />
                  <p>
                    Виджет <br />
                    сертификатов
                  </p>
                </div>
              </td>
              <td>
                <div class="text-start">
                  От 10 000 рублей <br />Зависит от требований
                </div>
              </td>
              <td>
                <div class="text-start">
                  От 3000 рублей <br />
                  За каждый виджет
                </div>
              </td>
            </tr>
            <tr>
              <td class="p-icons">
                <div>
                  <img
                    src="/img/box_img_3.png"
                    alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
                  />
                  <p>
                    Модули <br />
                    касс и cms
                  </p>
                </div>
              </td>
              <td>
                <div class="text-start">
                  От 20 000 рублей <br />Зависит от требований
                </div>
              </td>
              <td>
                <div class="text-start">Отсутствует</div>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <div class="noty">
                  <!-- <fa
                    style="font-size: 20px; color: green"
                    class="me-3"
                    icon="circle"
                  /> -->
                  <!-- <span style="font-size: 100px">.</span> -->
                  <div>
                    В ежемесячную стоимость включена тех.поддержка 09:00 - 20:00
                    <!-- <br /> -->
                    и уполномоченый менеджер с руками и мозгами
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <button type="button" class="btn btn-order mb-4" @click="openQuiz">
        Заказать КП
      </button> -->
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
.pricing-table {
  table-layout: fixed;
  width: 100%;

  tr td,
  tr th {
    // border: 1px solid red;
    vertical-align: middle;
    padding: 10px;
  }

  tr td:nth-child(even) {
    padding-left: 2.3rem !important;
  }

  .noty {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  // tr {
  //   // border: 3px solid silver;
  // }
}
.pricing-second {
  display: flex;
  flex-flow: row nowrap;
  margin-left: 0;
  margin-right: 0;
  padding: 30px 0 30px 115px;
  margin-bottom: 70px;

  .p-config {
    position: relative;
    flex: 0 0 45%;
    // padding-right: 20px;

    div {
      text-align: right;
    }
  }

  .p-icons {
    position: relative;
    // display: flex;
    flex-flow: column;
    // padding-top: 70px;
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
      width: 53px;
      height: auto;
    }
  }

  .p-month {
    // padding-left: 20px;
    position: relative;
    flex: 0 0 45%;
  }

  .p-config .title,
  .p-month .title {
    font-size: 22px;
    letter-spacing: 4px;
    line-height: 59px;
    color: #7f7f7f;
    font-family: 'AF', sans-serif;
  }
}
</style>
