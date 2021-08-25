<template>
  <main>
    <section
      class="d-flex justify-content-center align-items-center flex-column"
      style="min-height: 400px"
    >
      <a class="btn-footer mb-3" style="width: 200px" @click.prevent="openBuy">
        Купить
      </a>
      <a
        class="btn-footer mb-3"
        style="width: 200px"
        @click.prevent="openCertificateOwnere"
      >
        Получить
      </a>
      <a
        class="btn-footer mb-3"
        style="width: 200px"
        @click.prevent="opendBalance"
      >
        Проверить баланс
      </a>
      <a
        href="#"
        class="btn-footer"
        style="width: 200px"
        @click.prevent="openQuiz"
      >
        Заказать КП
      </a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CertificatePage',
  head() {
    return {
      title:
        'Согласие на обработку персональных данных - Система лояльноси MLoyalty',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ``,
        },
      ],
    }
  },
  methods: {
    openBuy() {
      // eslint-disable-next-line no-undef
      MloyaltyWidget.open('Купить')
    },
    opendBalance() {
      // eslint-disable-next-line no-undef
      MloyaltyWidget.open('Баланс')
    },
    openQuiz() {
      // TODO перенести в конфиг ID quiz
      // eslint-disable-next-line no-undef
      Marquiz.showModal('5aa97f14ee90d20018523ad6')
    },
    openBasket() {
      // eslint-disable-next-line no-undef
      MloyaltyWidget.open('Готовая корзина')
    },
    openSubscription() {
      // eslint-disable-next-line no-undef
      MloyaltyWidget.open('Подписка')
    },
    openCertificateOwnere() {
      const url = process.env.VUE_APP_WIDGET_URL
      // const widgetUrl = `${url}/owner?code=Получить&id=1234567890`
      const widgetUrl = `${url}/получить`
      window.open(widgetUrl, '_blank')
    },
  },
}
</script>
