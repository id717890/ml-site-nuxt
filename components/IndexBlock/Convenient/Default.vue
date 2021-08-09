<template>
  <section v-if="settings" class="convenient">
    <div v-if="settings.section1" class="section_1">
      <div class="container-old">
        <!-- eslint-disable-next-line --><!-- prettier-ignore -->
        <div v-if="settings.section1.title1" class="title_2" v-html="settings.section1.title1"></div>
        <!-- eslint-disable-next-line --><!-- prettier-ignore -->
        <div v-if="settings.section1.title2" class="description" v-html="settings.section1.title2"></div>
        <img
          :src="settings.section1.image"
          alt="Удобно, когда всё в одном месте"
          class="img_1"
        />
        <div class="content_block_convenient">
          <ConvenientItem
            v-for="(block, index) in settings.section1.items"
            :key="index"
            :settings="block"
          />
        </div>
      </div>
    </div>
    <div v-if="settings.section2" class="section_2">
      <div class="container-old">
        <!-- eslint-disable-next-line --><!-- prettier-ignore -->
        <div v-if="settings.section2.title1" class="title_2" v-html="settings.section2.title1"></div>
        <!-- eslint-disable-next-line --><!-- prettier-ignore -->
        <div v-if="settings.section2.title2" class="description" v-html="settings.section2.title2"></div>
        <img
          :src="settings.section2.image"
          alt="Понятный конструктор условий поощрения"
          class="img_2"
        />
        <div class="content_block_convenient">
          <ConvenientItem
            v-for="(block, index) in settings.section2.items"
            :key="index"
            :settings="block"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ConvenientItem from './components/ConvenientItem'
export default {
  name: 'ConvenientBlockDefault',
  components: { ConvenientItem },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
}
</script>
