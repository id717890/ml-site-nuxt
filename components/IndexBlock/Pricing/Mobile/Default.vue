<template>
  <div class="px-4 pt-4 pricing-block-mobile">
    <div class="ml-text-28-700 mb-2">Ценообразование</div>
    <div class="d-flex flex-row flex-wrap">
      <a
        href="#"
        class="pricing-btn me-2 mb-3"
        :class="{ active: isFirst }"
        @click.prevent="isFirst = true"
      >
        Настройка/внедрение
      </a>
      <a
        href="#"
        class="pricing-btn mb-3"
        :class="{ active: !isFirst }"
        @click.prevent="isFirst = false"
      >
        Абоненстская плата
      </a>
    </div>
    <div>
      <table class="pricing-table-mobile" :class="{ 'is-first': isFirst }">
        <colgroup>
          <col style="width: 100px" />
          <col />
          <col />
        </colgroup>
        <!-- <thead>
          <tr>
            <th></th>
            <th>Настройка/внедрение</th>
            <th class="p-month">Абонентская плата</th>
          </tr>
        </thead> -->
        <tbody>
          <tr>
            <td>
              <div>
                <img
                  src="/img/img_6.png"
                  alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
                />
                Система
              </div>
            </td>
            <td>
              <div>
                От 20 000 рублей
                <br />
                Зависит от требований
              </div>
            </td>
            <td>
              <div>
                Подписка на сервис от 1500 рублей <br />за каждую точку продаж
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="/img/img_2.png"
                  alt="Аналитические модули, cценарии увеличения продаж, импорт данных из других систем."
                />
                <p>Рассылки</p>
              </div>
            </td>
            <td>
              <div>
                Провайдеры рассылок
                <br />
                Наши провайдеры - 0 руб.
                <br />
                Ваши провайдеры - от 5000 руб.
              </div>
            </td>
            <td>
              <div>
                Sms - 2,90 руб.
                <br />
                В МТС - 2000 руб. <br />
                Email, Push - 0 руб.
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
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
              <div>
                От 30 000 рублей <br />
                За каждое приложение
              </div>
            </td>
            <td>
              <div>
                От 2500 рублей
                <br />
                За каждое приложение
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
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
              <div>От 10 000 рублей <br />Зависит от требований</div>
            </td>
            <td>
              <div>
                От 3000 рублей <br />
                За каждый виджет
              </div>
            </td>
          </tr>
          <tr>
            <td>
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
              <div>От 20 000 рублей <br />Зависит от требований</div>
            </td>
            <td>
              <div>От 2000 рублей <br />Зависит от нагрузки</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingMobileBlockDefault',
  data: () => ({
    isFirst: true,
  }),
  methods: {},
}
</script>

<style lang="scss" scoped>
.pricing-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3px 12px;
  background: #ebebeb;
  border-radius: 20px;
  color: #808080;
}

.pricing-btn.active {
  background: linear-gradient(270deg, #ff5766 0%, #ff856f 100%, #ff856f 100%);
  color: white;
}

.pricing-table-mobile {
  // table-layout: fixed;
  width: 100%;

  tbody {
    td {
      vertical-align: middle;

      p {
        text-align: center;
      }
    }

    td:nth-child(1) {
      div {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 10px 0;

        img {
          width: 58px;
        }
      }
    }

    td:nth-child(2),
    td:nth-child(3) {
      padding-left: 30px;
    }

    td:nth-child(2) {
      display: none;
    }

    td:nth-child(3) {
      display: table-cell;
    }
  }
}

.pricing-table-mobile.is-first {
  tbody {
    td:nth-child(2) {
      display: table-cell;
    }
    td:nth-child(3) {
      display: none;
    }
  }
}
</style>
