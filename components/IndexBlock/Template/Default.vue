<template>
  <section v-if="settings" class="pop-templates" :class="settings.anchor">
    <div class="container-old">
      <!-- eslint-disable-next-line --><!-- prettier-ignore -->
      <div class="title_2" v-html="settings.title"></div>
      <div id="vue_acc" class="content-box">
        <div
          v-for="(template, index) in settings.items"
          :key="index"
          class="item"
        >
          <div class="pop_title" @click="clickTitle">
            {{ template.name }}
          </div>
          <!-- eslint-disable-next-line --><!-- prettier-ignore -->
          <div class="pop_desc" v-html="template.text"></div>
        </div>
      </div>
      <div v-if="settings.image" class="img">
        <img
          :src="settings.image"
          class="w100"
          alt="Популярные шаблоны sакций и рассылок"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TemplateBlockDefault',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    clickTitle(event) {
      const el = event?.target
      if (el) {
        el?.classList?.toggle('active')
        const nextEl = el?.nextElementSibling
        if (nextEl) {
          if (nextEl?.style?.maxHeight) {
            nextEl.style.maxHeight = null
          } else {
            nextEl.style.maxHeight = nextEl.scrollHeight + 'px'
          }
        }
      }
    },
  },
}
</script>
