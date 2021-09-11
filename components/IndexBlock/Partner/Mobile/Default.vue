<template>
  <div class="w100 px-4">
    <p class="ml-text-18-700 mb-2 mt-4">Нам доверяют и получают результат</p>
    <div v-if="tags" class="v-application partner-filter-tag-mobile">
      <a
        v-for="tag in tags"
        :key="tag.id"
        href="#"
        class="btn-tag mr-2 mb-2"
        :title="tag.name"
        :class="{ active: tag.selected }"
        @click.prevent="selectTag(tag)"
      >
        {{ tag.name }}
      </a>
      <!-- <v-btn title="Сбросить фильтры" icon @click="clearFilter">
        <fa icon="redo" />
      </v-btn> -->
    </div>
    <div>
      <swiper
        ref="swiper-partners"
        class="swiper w100 swiper-partners"
        :options="swiperOptions"
      >
        <swiper-slide v-for="partner in slidesOfPartners" :key="partner.id">
          <BorderedBlock
            class="pt-20 pb-20 px-20 position-relative d-flex flex-column"
            style="height: 360px"
          >
            <div class="partner-slide-block">
              <div class="image">
                <div v-if="partner.special" class="special-tags v-application">
                  <v-btn
                    v-for="tag in partner.special"
                    :key="tag.color"
                    height="22"
                    class="mr-1 white--text text-lowercase py-0"
                    elevation="0"
                    :color="tag.color"
                    small
                    >{{ tag.text }}</v-btn
                  >
                </div>
                <a
                  href="#"
                  class="img_link"
                  title="Подробнее"
                  rel="nofollow"
                  @click.prevent="openInfo(partner)"
                >
                  <img :src="partner.image" :alt="partner.title" class="img" />
                </a>
              </div>
              <div class="name">
                <a
                  href="#"
                  class="item_title"
                  title="Подробнее"
                  @click.prevent="openInfo(partner)"
                >
                  {{ partner.title }}
                </a>
                <!-- <router-link :to="item.link" class="item_title" title="Подробнее">{{item.titile}}</router-link> -->
              </div>
              <div class="desc mb-3">
                {{ partner.description }}
              </div>
              <a
                href="#"
                class="link btn bg_tr"
                title="Подробнее"
                rel="nofollow"
                @click.prevent="openInfo(partner)"
                >Подробнее</a
              >
              <!-- <router-link :to="item.link" class="link btn bg_tr" title="Подробнее" rel="nofollow">Подробнее</router-link> -->
            </div>
          </BorderedBlock>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper as SwiperClass, Pagination } from 'swiper/swiper.esm'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import PartnerInfoModal from '~/components/IndexBlock/Partner/components/ModalInfo.vue'
import BorderedBlock from '~/components/IndexBlock/Mobile/components/BorderedBlock.vue'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'
import 'swiper/swiper.scss'

// import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination])
// Vue.use(getAwesomeSwiper(SwiperClass))
export default {
  name: 'PartnerBlockMobileDefault',
  components: {
    Swiper,
    SwiperSlide,
    BorderedBlock,
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    tags: [
      { name: 'Конфигурация 1С', id: 1, selected: false },
      { name: 'Штрих М Кассир 5', id: 2, selected: false },
      { name: '1С Битрикс', id: 3, selected: false },
      { name: 'Моб. приложения', id: 4, selected: false },
      { name: 'Сертификаты', id: 5, selected: false },
    ],
    swiperOptions: {
      // touchStartPreventDefault: false,
      // grabCursor: true,
      // touchReleaseOnEdges: true,
      followFinger: false,
      allowTouchMove: true,
      updateOnWindowResize: false,
      // slidesOffsetBefore: 35,
      // autoHeight: true,
      slidesPerView: 'auto',
      // slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      // centeredSlides: true,
      // spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),
  computed: {
    partners() {
      return this.settings?.partners
    },
    selectedTags() {
      return this.tags
        ?.filter((tag) => tag.selected)
        ?.map((tag) => tag?.name?.toLowerCase())
    },
    partnersByTags() {
      if (!this.selectedTags?.length) return this.partners
      return this.partners?.filter((partner) =>
        partner?.tags?.some((x) =>
          this.selectedTags?.includes(x?.toLowerCase())
        )
      )
    },
    slidesOfPartners() {
      return this.partnersByTags
    },
  },
  mounted() {
    this.setInitialize()
  },
  methods: {
    clearFilter() {
      const result = []
      this.tags.forEach((tag) => {
        tag.selected = false
        result.push(tag)
      })
      this.$set(this, 'tags', result)
    },
    openInfo(partner) {
      this.$modal.show(
        PartnerInfoModal,
        {
          content: partner?.content,
        },
        {
          ...this.$const.MODAL_SETTINGS,
          maxWidth: 760,
          width: 760,
          clickToClose: false,
        }
      )
    },
    selectTag(tag) {
      const find = this.tags?.find((x) => x?.id === tag?.id)
      if (find) {
        const indexOf = this.tags.indexOf(find)
        if (indexOf >= 0) {
          this.tags?.splice(indexOf, 1, {
            id: tag?.id,
            name: tag?.name,
            selected: !tag?.selected,
          })
        }
      }
    },
    setInitialize() {},
    initTags() {
      const tags = this.settings?.defaults?.tags

      if (!tags) {
        this.$set(this, 'tags', [
          'Конфигурация 1С',
          'Штрих М Кассир 5',
          '1С Битрикс',
          'Моб. приложения',
          'Сертификаты',
        ])
      } else {
        this.$set(
          this,
          'tags',
          tags.map((tag, index) => ({
            name: tag,
            id: index,
            selected: false,
          }))
        )
      }
    },
  },
}
</script>

<style lang="scss">
.swiper-pagination {
  // position: relative;
  // bottom: 20px;
}
.swiper-partners {
  // overflow-y: visible !important;
  // overflow-y: visible !important;
  // margin-bottom: 30px;
  height: 400px;
}

.partner-filter-tag-mobile {
  display: flex;
  flex-flow: row wrap;

  .btn-tag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3px 8px;
    background: #ebebeb;
    border-radius: 20px;
    color: #808080;
    font-size: 12px;
  }

  .btn-tag.active {
    border-bottom: none !important;
    background: #e0e0e0 !important;
  }
}

.partner-slide-block {
  display: flex;
  flex-flow: column;
  position: relative;
  // justify-content: center;
  align-items: center;
  flex-grow: 1;

  .image {
    display: flex;
    flex-grow: 1;
    position: relative;
    align-items: center;
    // justify-content: center;

    img {
      width: 100%;
    }
  }
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #ff856f;
}
</style>
