<template>
  <v-app class="ml-app">
    <v-carousel
      v-model="model"
      height="100%"
      hide-delimiters
      show-arrows-on-hover
      class="ml-carousel"
    >
      <template #prev="{ on, attrs }">
        <v-btn fab v-bind="attrs" small elevation="0" v-on="on">
          <Fa icon="chevron-left" />
        </v-btn>
      </template>
      <template #next="{ on, attrs }">
        <v-btn fab v-bind="attrs" small min-width="10" elevation="0" v-on="on">
          <Fa icon="chevron-right" />
        </v-btn>
      </template>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <!-- <v-sheet :color="color" height="100%" tile> -->
        <v-img :src="item.image" width="100%" height="100%" class="ml-radius3">
          <div>123</div>
        </v-img>
        <!-- <div class="d-flex justify-content-center h100 align-items-center"> -->
        <!-- <div class="text-h2">Slide {{ i + 1 }}</div> -->
        <!-- </div> -->
        <!-- </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  name: 'SliderAnd4ImageCarousel',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
}
</script>

<style lang="scss">
.ml-app.v-application {
  min-height: 0 !important;
  height: 100%;
  background-color: transparent;

  .v-application--wrap {
    min-height: 0;
  }
}
// .ml-carousel {
//   // margin: 10px;
//   // width: 100%;
//   // height: 100%;

//   .v-window__container {
//     cursor: pointer;

//     .v-window__next {
//       right: 0;
//     }
//   }
// }

.ml-radius3 {
  border-radius: 3px;

  .v-image {
    border-radius: 3px;
  }
}
</style>
