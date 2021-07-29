<template>
  <div class="modal-call">
    <i class="fa fa-times close" @click="$emit('close')"></i>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="mb-0" style="margin: 0 !important" v-html="message"></p>
  </div>
</template>

<script>
export default {
  name: 'ModalMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: () =>
        `Дорогой друг! <br /> Спасибо за обращение! Мы ответим Вам в самое ближайшее время!`,
    },
  },
}
</script>
