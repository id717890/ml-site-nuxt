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
