<template>
  <main>
    <section
      class="d-flex justify-content-center align-items-center flex-column"
      style="min-height: 400px"
    >
      <a
        href="#"
        class="btn-footer mb-3"
        style="width: 200px"
        @click.prevent=""
      >
        Купить
      </a>
      <a
        href="#"
        class="btn-footer mb-3"
        style="width: 200px"
        @click.prevent=""
      >
        Получить
      </a>
      <a
        href="#"
        class="btn-footer mb-3"
        style="width: 200px"
        @click.prevent=""
      >
        Проверить баланс
      </a>
      <a href="#" class="btn-footer" style="width: 200px" @click.prevent="">
        Заказать КП
      </a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CertificatePage',
  scrollToTop: true,
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
}
</script>
