<template>
  <div v-if="settings" class="content_box">
    <div class="content_box_title">{{ settings.name }}</div>
    <ul>
      <li v-for="(item, index) in settings.items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConvenientItem',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
}
</script>
