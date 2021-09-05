<template>
  <main>
    <section
      class="d-flex justify-content-center align-items-center flex-column"
      style="min-height: 800px"
    >
      <a
        href="#"
        class="btn-footer mb-3"
        style="width: 200px"
        @click.prevent="openWidgetLk"
      >
        Виджет ЛК
      </a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'WidgetPage',
  head() {
    return {
      title: 'Виджет ЛК',
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
    openWidgetLk() {
      // eslint-disable-next-line no-undef
      MloyaltyWidget.open('Личный кабинет')
    },
  },
}
</script>
