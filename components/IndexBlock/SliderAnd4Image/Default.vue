<template>
  <div v-if="settings" class="slider4img-wrapper">
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="1" class="b1"
          >1</v-col
        >
        <v-col cols="12" xs="12" sm="6" md="8" lg="9" xl="11" class="b2"
          >1</v-col
        >
      </v-row>
    </v-container> -->
    <!-- <div class="d-block d-sm-block d-md-none">sm</div> -->
    <!-- <div class="d-none d-md-block d-lg-none w100">md</div> -->
    <!-- <div class="d-none d-md-flex w100 justify-content-center"> -->
    <div class="slider4img">
      <div class="container-fluid">
        <div class="row pb-2 pt-5 mt-3">
          <div class="col-md-12 d-none d-sm-block d-lg-none pb-0">
            <Carousel :items="settings.slides" />
          </div>
          <div ref="col" class="col-12 col-sm-6 col-md-3">
            <div v-if="image1.url" class="item mb-3">
              <a
                class="item_link"
                :title="image1.title"
                @click.prevent="openUrl(image1.href)"
              ></a>
              <div class="item_text">
                <div v-if="image1.subtitle" class="item_text_subtitle">
                  {{ image1.subtitle }}
                </div>
                <div v-if="image1.title" class="item_text_title">
                  {{ image1.title }}
                </div>
              </div>
              <div
                ref="refimg1"
                class="item_image"
                :style="imageStyle(image1.url, 1)"
              ></div>
            </div>
            <div v-if="image2.url" class="item">
              <a
                class="item_link"
                :title="image2.title"
                @click.prevent="openUrl(image2.href)"
              ></a>
              <div class="item_text">
                <div v-if="image2.subtitle" class="item_text_subtitle">
                  {{ image2.subtitle }}
                </div>
                <div v-if="image2.title" class="item_text_title">
                  {{ image2.title }}
                </div>
              </div>
              <div
                ref="refimg2"
                class="item_image"
                :style="imageStyle(image2.url, 2)"
              ></div>
            </div>
          </div>
          <div class="d-none d-lg-block col-12 col-md-6 px-0">
            <Carousel :items="settings.slides" />
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div v-if="image3.url" class="item mb-3">
              <a
                class="item_link"
                :title="image3.title"
                @click.prevent="openUrl(image3.href)"
              ></a>
              <div class="item_text">
                <div v-if="image3.subtitle" class="item_text_subtitle">
                  {{ image3.subtitle }}
                </div>
                <div v-if="image3.title" class="item_text_title">
                  {{ image3.title }}
                </div>
              </div>
              <div class="item_image" :style="imageStyle(image3.url)"></div>
            </div>
            <div v-if="image4.url" class="item">
              <a
                class="item_link"
                :title="image4.title"
                @click.prevent="openUrl(image4.href)"
              ></a>
              <div class="item_text">
                <div v-if="image4.subtitle" class="item_text_subtitle">
                  {{ image4.subtitle }}
                </div>
                <div v-if="image4.title" class="item_text_title">
                  {{ image4.title }}
                </div>
              </div>
              <div class="item_image" :style="imageStyle(image4.url)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Carousel from './components/Carousel'

export default {
  name: 'SliderAnd4ImageBlockDefault',
  components: {
    Carousel,
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    itemHeight: 240,
  }),
  computed: {
    image1() {
      return this.settings?.image1
    },
    image2() {
      return this.settings?.image2
    },
    image3() {
      return this.settings?.image3
    },
    image4() {
      return this.settings?.image4
    },
    itemH() {
      return {
        // height: 'inherit',
      }
    },
  },
  mounted() {
    // console.log(window.screen.availWidth)
    // console.log(this.image1Style)
    // setTimeout(() => {
    //   // let h = 300
    //   const el = this.$refs.col
    //   if (el) {
    //     this.itemHeight = el.clientWidth - 50
    //     console.log(this.itemHeight)
    //   }
    // })
  },
  methods: {
    imageStyle(url, refNum = null) {
      // if (refNum) {
      //   this.
      //   setTimeout(()=>{
      //     // const el = this.$refs[`refimg${refNum}`]
      //     console.log(refNum, `refimg${refNum}`, this.$refs, this.$refs[`refimg${refNum}`], this.$refs.refimg1);
      //   })
      // }

      return {
        backgroundImage: `url("${url}")`,
      }
    },
    openUrl(url) {
      this.$helper.openUrl(url)
    },
  },
}
</script>
