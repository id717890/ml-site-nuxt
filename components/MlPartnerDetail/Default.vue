<template>
  <main v-if="showDetails">
    <section class="page_2 container">
      <br />
      <br />
      <!-- eslint-disable-next-line -->
      <h1 class="title_4" v-html="title1"></h1>
      <div class="container_2">
        <div class="table-block">
          <div class="flex">
            <div class="left-coll">Бизнес-заказчик:</div>
            <div class="right-coll">{{ details.businessName }}</div>
          </div>
          <div class="flex">
            <div class="left-coll">Задача:</div>
            <div class="right-coll">
              {{ details.task }}
            </div>
          </div>
          <div class="flex">
            <div class="left-coll">Срок:</div>
            <div class="right-coll">{{ details.timing }}</div>
          </div>
        </div>

        <h2 class="title_5">Функции M.loyalty:</h2>

        <div class="function_block pop-templates">
          <div v-if="descriptivePart" class="function_box">
            <div class="function-title flex">
              <span>1</span> Описательная часть:
            </div>
            <div id="vue_acc" class="content-box">
              <div
                v-for="descriptivePartItem in descriptivePart"
                :key="descriptivePartItem.name"
                class="item"
              >
                <div class="pop_title" @click="clickTitle">
                  {{ descriptivePartItem.name }}
                </div>
                <div class="pop_desc">
                  <div v-if="descriptivePartItem.items">
                    <ul>
                      <li
                        v-for="(item, index) in descriptivePartItem.items"
                        :key="index"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="mlRelease" class="function_box">
            <div class="function-title flex">
              <span>2</span> Реализация на базе технологии M.Loyalty:
            </div>
            <div id="vue_acc" class="content-box">
              <div
                v-for="mlReleaseItem in mlRelease"
                :key="mlReleaseItem.name"
                class="item"
              >
                <div class="pop_title" @click="clickTitle">
                  {{ mlReleaseItem.name }}
                </div>
                <div v-if="mlReleaseItem.items" class="pop_desc">
                  <div>
                    <ul>
                      <li
                        v-for="(item, index) in mlReleaseItem.items"
                        :key="index"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="title_5">Результат:</h2>

        <div class="desc_2">
          <!-- eslint-disable-next-line -->
          <p v-html="details.results">
            <!-- Проект реализован за 3,5 месяца.<br />Программа продолжает развитие
            по плану -->
          </p>
        </div>

        <template v-if="desktopImages">
          <div
            v-for="(image, index) in desktopImages"
            :key="index"
            class="big_img"
          >
            <img :src="getImageUrl(image)" alt="Результат" />
          </div>
        </template>

        <div v-if="details.siteUrl" class="midle_btn">
          <a
            :href="details.siteUrl"
            class="btn bg_tr bnt_go-away"
            target="_blank"
            title="Перейти на сайт"
          >
            Смотреть сайт
          </a>
        </div>
        <div v-if="mobileImages" class="flex download">
          <MlMobileItem
            v-for="(item, index) in mobileImages"
            :key="index"
            :settings="item"
          />
        </div>
        <div class="midle_btn back_link">
          <nuxt-link to="/" title="На главную" class="link_line">
            Вернуться на главную
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import MlMobileItem from './components/MlMobileItem.vue'
export default {
  name: 'PartnerDetailDefault',
  components: {
    MlMobileItem,
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  computed: {
    showDetails() {
      return !!this.settings && !!this.details
    },
    details() {
      return this.settings?.details
    },
    title1() {
      return this.details?.title1
    },
    descriptivePart() {
      return this.details?.descriptivePart
    },
    mlRelease() {
      return this.details?.mlRelease
    },
    desktopImages() {
      return this.details?.images?.desktop
    },
    mobileImages() {
      return this.details?.images?.mobile
    },
  },
  mounted() {
    // console.log(this.showDetails)
    // console.log('PartnerDetailDefault', this.settings)
  },
  methods: {
    getImageUrl(image) {
      if (image?.includes('http')) {
        return image
      }
      return `/img/${image}`
    },
    clickTitle(event) {
      const el = event?.target
      if (el) {
        el?.classList?.toggle('active')
        const nextEl = el?.nextElementSibling
        if (nextEl) {
          if (nextEl?.style?.maxHeight) {
            nextEl.style.maxHeight = null
          } else {
            nextEl.style.maxHeight = nextEl.scrollHeight + 'px'
          }
        }
      }
    },
  },
}
</script>
