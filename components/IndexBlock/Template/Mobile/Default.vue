<template>
  <section
    v-if="settings"
    class="pop-templates pop-templates-mobile pt-0 px-4"
    :class="settings.anchor"
  >
    <!-- eslint-disable-next-line --><!-- prettier-ignore -->
    <p class="ml-text-28-700 mt-4" v-html="settings.title"></p>
    <div id="vue_acc" class="vue_acc_mobile">
      <div
        v-for="(template, index) in settings.items"
        :key="index"
        class="item"
      >
        <div class="pop_title" @click="clickTitle">
          <!-- <span class="flex-grow-1">{{ template.name }}</span> -->
          {{ template.name }}
          <!-- <img src="/img/mobile/arrow-down.svg" alt="" /> -->
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

<style lang="scss" scoped>
.vue_acc_mobile {
  margin: 0;
}

.pop-templates-mobile {
  .item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .pop_title {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    display: flex;
    flex-flow: row nowrap;
    padding-right: 15px;
  }

  .pop_title::after {
    // content: none;
    width: 10px;
    height: 10px;
    border-color: rgba(0, 0, 0, 0.4);
    top: 41%;
  }
}
</style>
