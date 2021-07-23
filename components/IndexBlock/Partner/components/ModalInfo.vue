<template>
  <div class="ml-partner-modal-info">
    <i class="fa fa-times close" @click="$emit('close')"></i>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section v-html="content"></section>
  </div>
</template>

<script>
export default {
  name: 'PartnerInfoModal',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
