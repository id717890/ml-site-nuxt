<template>
  <div
    v-if="settings"
    :style="{ backgroundColor: settings.bgColor }"
    class="our-tech-block-mobile px-4"
  >
    <div class="ml-text-28-700 mb-4" v-text="settings.title"></div>
    <div class="tech-wrapper-mobile pt-2">
      <div
        v-for="item in settings.items"
        :key="item.img"
        class="tech-block-mobile"
      >
        <img
          :src="item.img"
          :alt="item.title"
          class="img"
          :title="item.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechMobileBlockDefault',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.tech-block-mobile {
  cursor: pointer;
  border: 1px solid #e5e5e5;
  box-shadow: 0 0 20px rgb(0 0 0 / 3%);
  background-color: transparent;
  border-radius: 20px;
  padding: 26px;
  margin: 0 15px 15px 0;
  transition: 0.4s;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  min-height: 140px;

  .img {
    // height: 70px;
    border-radius: 6px;
    width: 100%;
    // margin-bottom: 15px;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    color: #383838;
  }
}

.tech-block:hover {
  box-shadow: 0 0 30px rgb(0 0 0 / 20%);
  background-color: #fff;
}

.tech-wrapper-mobile {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
}
</style>
