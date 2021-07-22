<template>
  <div>
    <template v-if="url">
      <a :href="url" target="_blank" :title="btnText" class="link_line">{{
        btnText
      }}</a>
      <div>
        <a :href="url" target="_blank" :title="btnText">
          <img :src="getImageUrl(image)" :alt="btnText" class="tel_img" />
        </a>
      </div>
    </template>
    <template v-else>
      <div>
        <img :src="getImageUrl(image)" :alt="btnText" class="tel_img" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MobileItem',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  computed: {
    url() {
      return this.settings?.url
    },
    btnText() {
      return this.settings?.btnText
    },
    image() {
      return this.settings?.image
    },
  },
  methods: {
    getImageUrl(image) {
      if (image?.includes('http')) {
        return image
      }
      return `/img/${image}`
    },
  },
}
</script>
