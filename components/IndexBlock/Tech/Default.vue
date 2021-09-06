<template>
  <div
    v-if="settings"
    :style="{ backgroundColor: settings.bgColor }"
    class="our-tech-block"
  >
    <div class="container-old">
      <div class="title_2 mt-5 mb-4" v-text="settings.title"></div>
      <div class="description mb-5" v-text="settings.title2"></div>
      <div class="tech-wrapper">
        <div v-for="item in settings.items" :key="item.img" class="tech-block">
          <img
            :src="item.img"
            :alt="item.title"
            class="img"
            :title="item.title"
          />
          <!-- <div class="title">{{ item.title }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechDefaultBlock',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
}
</script>
